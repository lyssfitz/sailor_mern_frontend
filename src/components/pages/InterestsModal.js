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
  // min-width: max-content;
`;

class InterestsModal extends Component {

  render() {
    const { visible, loading } = this.props;

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