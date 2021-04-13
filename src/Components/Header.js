import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Title = styled.div`
  background-color: #c23616;
  margin-right: 20px;
  padding: 10px 20px 10px 10px;
  font-size: 30px;
  font-weight: 500;
  color: #f5f6fa;
  border-radius: 0 0 20px 0;
  /* opacity: 0.5; */
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#c23616" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title>Funflix</Title>
    <List>
      <Item current={pathname === "/" || pathname.startsWith("/movie")}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv" || pathname.startsWith("/show")}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
