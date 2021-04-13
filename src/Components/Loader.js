import React from "react";
import styled from "styled-components";

import loader from "assets/loader.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 20px;
  background-image: url(${loader});
  background-repeat: no-repeat;
  background-position: center center;
`;

const Loader = () => <Container></Container>;

export default Loader;
