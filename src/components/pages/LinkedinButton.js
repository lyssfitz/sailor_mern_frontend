import React from "react";
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

const LinkedinButton = () => {
  return (
    <OAuthButton size="large" type="primary"><LinkedinIcon type="linkedin" theme="filled" />Continue with LinkedIn</OAuthButton>
  );
}

export default LinkedinButton;