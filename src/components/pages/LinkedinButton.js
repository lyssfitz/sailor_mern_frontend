import React, { Component } from "react";
import styled from "styled-components";
import { Button, Icon } from "antd";

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

  render() {

    return ( 
      <OAuthButton size="large" type="primary" href={`${process.env.REACT_APP_API_URL}/auth/linkedin`}>
        <LinkedinIcon type="linkedin" theme="filled" />Continue with LinkedIn</OAuthButton>
    );
    }
}


export default LinkedinButton;