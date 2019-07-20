import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Card } from 'antd';
import { setUserInterests, fetchAllInterests, fetchUserInterests, saveUserInterests, closeInterestsModal } from "./../../actions";
import LoadingPage from "./LoadingPage"
import styled from "styled-components";

const { Meta } = Card;


const PlaceHolder = styled.div`
  width: 100%;
  height: 50px;
  background-color: #EEE;
  padding: 0;
  margin: 0;
`;

const InterestContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
`;

const InterestCard = styled(Card)`
  border-radius: 5px;
  overflow: hidden;
`;

class InterestsModal extends Component {
  componentDidMount = () => {
    this.props.fetchAllInterests();
    this.props.fetchUserInterests();
  }

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

  selected = (interest) => {
    const { userInterests } = this.props;

    if (userInterests !== null && userInterests.includes(interest)) {
      return {
        backgroundColor: "#DDD",
      }
    }

    return {
      backgroundColor: "white"
    }
  }

  render() {
    const { visible, interests, userInterests } = this.props;

    if (interests) {
      return (
        <Modal
          visible={visible}
          width="600px"
          title="Customise Your Feed"
          onOk={() => this.props.saveUserInterests(userInterests)}
          onCancel={this.props.closeInterestsModal}
          footer={[
            <Button key="back" onClick={this.props.closeInterestsModal}>
              Skip
            </Button>,
            <Button key="submit" type="primary" onClick={() => this.props.saveUserInterests(userInterests)}>
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
                  cover={<PlaceHolder />}
                >
                  <Meta title={interest} />
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

export default connect(mapStateToProps, { setUserInterests, fetchAllInterests, fetchUserInterests, saveUserInterests, closeInterestsModal })(InterestsModal);