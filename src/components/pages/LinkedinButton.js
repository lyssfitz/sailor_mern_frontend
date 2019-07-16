import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button, Icon } from "antd";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/local";

const OAuthButton = styled(Button)`
  padding: 0px 20px 0 15px;
  height:50px;
  display: flex;
  align-items: center;
  margin: auto;
  font-weight: bold;
`;

const LinkedinIcon = styled(Icon)`
  font-size: 1.5em;
`;

class LinkedinButton extends Component {
  // onLinkedinButtonSubmit = async () => {
  //   LocalAPI.get("http://localhost:3000/auth/linkedin")
  //   .then(
  //     response => {
  //       this.props.setAuthToken(response.data.token);
  //       this.props.history.push("/feed");
  //     })
  //     .catch(error => console.log(error));
      
  // };

  render() {

  return ( 
    <OAuthButton size="large" type="primary" href={`${process.env.REACT_APP_API_URL}/auth/linkedin`}><LinkedinIcon type="linkedin" theme="filled" />Continue with LinkedIn</OAuthButton>
  );
  }
}

// export default connect(
//   null, 
//   { setAuthToken }
// )(LinkedinButton);

export default LinkedinButton;