import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Card } from 'antd';
import { fetchArticles, setUserInterests, fetchAllInterests, fetchUserInterests, saveUserInterests, closeInterestsModal, fetchCurrentUser  } from "./../../actions";
import LoadingPage from "./LoadingPage"
import styled from "styled-components";


const InterestContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 20px;
`;

const InterestCard = styled(Card)`
  overflow: hidden;
  text-align: center;

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

// Edit interests popup
class InterestsModal extends Component {
  // Get all available user interests, and the interests that users have selected
  componentDidMount = () => {
    this.props.fetchAllInterests();
    this.props.fetchUserInterests();
  }
  // Method for adding and removing selected interests from an array on click, and setting them to be the users interests
  onInterestClick = (interest) => {
    const { userInterests, setUserInterests } = this.props; 
    if (userInterests !== null && userInterests.includes(interest)) {
      let i = userInterests.indexOf(interest);
      let interestsCopy = [...userInterests];
      interestsCopy.splice(i, 1);
      return setUserInterests(interestsCopy);
    }

    return setUserInterests([...userInterests, interest]);
  }
  // Render selected interests differently so the user knows they have selected it
  selected = (interest) => {
    const { userInterests } = this.props;

    if (userInterests !== null && userInterests.includes(interest)) {
      return {
        backgroundColor: "#DDD",
        borderRadius: "7px",
      }
    }

    return {
      backgroundColor: "#FFF",
      borderRadius: "7px",
      boxShadow: "1px 1px 2px #EEE"
    }
  }
  // Save selected interests to database, and do a re-fetch of articles so that they can be curated
  handleSaveUserInterests = async () => {
    const { userInterests } = this.props;
    await this.props.saveUserInterests(userInterests);
    this.props.fetchArticles();
    this.props.fetchCurrentUser();
  }

  render() {
    const { visible, interests, userInterests } = this.props;

    if (interests) {
      return (
        <Modal
          visible={visible}
          width="700px"
          centered
          title="Customise Your Feed"
          onOk={() => {
            this.props.saveUserInterests(userInterests);
          }}
          onCancel={this.props.closeInterestsModal}
          footer={[
            <Button key="back" onClick={this.props.closeInterestsModal}>
              Skip
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleSaveUserInterests}>
              Save Interests
            </Button>,
          ]}
        >
          <InterestContainer>
            {interests.map((interest) => {
              return (
                <InterestCard
                  size="small"
                  key={interest}
                  hoverable
                  style={this.selected(interest)}
                  onClick={() => this.onInterestClick(interest)}
                  // cover={<img style={{maxHeight: "60px", objectFit: "cover" }} src={DigitalHealth} />}
                >
                  {interest}
                </InterestCard>
              );
            })}
          </InterestContainer>
        </Modal>
      );
    }

    return (
      <LoadingPage />
    );
  }
}

const mapStateToProps = (state) => {
  return {
      visible: state.interestsModal.visible,
      interests: state.interests,
      userInterests: state.userInterests
  };
}

export default connect(mapStateToProps, { fetchArticles, setUserInterests, fetchAllInterests, fetchUserInterests, saveUserInterests, closeInterestsModal, fetchCurrentUser })(InterestsModal);