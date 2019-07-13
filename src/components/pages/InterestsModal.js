import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Card } from 'antd';
import { handleOk, handleCancel } from "./../../actions";
import styled from "styled-components";

const { Meta } = Card;

const interests = [
  "Devices",
  "Pharmaceuticals",
  "Wellness",
  "Aged Care",
  "Palliative Care", 
  "R & D",
  "Genetics",
  "Interest 8",
  "Interest 9",
]

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
  grid-gap: 10px;
`;

const InterestCard = styled(Card)`
`;

class InterestsModal extends Component {
  state = {
    interests: [],
  }

  onInterestClick = (interest) => {
    const { interests } = this.state; 

    if (interests.includes(interest)) {
      let i = interests.indexOf(interest);
      let interestsCopy = [...interests];
      interestsCopy.splice(i, 1);
      return this.setState({ interests: interestsCopy });
    }

    return this.setState({ interests: [...interests, interest] });
  }

  selected = (interest) => {
    const { interests } = this.state;
    if (interests.includes(interest)) {
      return {
        backgroundColor: "#DDD"
      }
    }

    return {
      backgroundColor: "white"
    }
  }

  render() {
    const { visible, loading } = this.props;
    // console.log(this.state);
    return (
      <Modal
        visible={visible}
        width="600px"
        title="Customise Your Feed"
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
        footer={[
          <Button key="back" onClick={this.props.handleCancel}>
            Skip
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={this.props.handleOk}>
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
}

const mapStateToProps = (state) => {
  return {
      loading: state.modal.loading,
      visible: state.modal.visible
  };
}

export default connect(mapStateToProps, { handleOk, handleCancel })(InterestsModal);