import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const Loading = styled(Icon)`
  font-size: 3em;
`;

const LoadingContainer = styled.div`
  text-align: center;
`;
// Rendered within other components if data isn't available yet
const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Loading type="loading" />
    </LoadingContainer>
  );
}

export default LoadingPage;