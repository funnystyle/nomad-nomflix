import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 10px;
  margin-right: 1%;
  margin-bottom: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 320px;
`;

const CountryName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Country = ({ companies }) => (
  <Container>
    {companies && companies.length > 0 ? (
      companies.map((country, index) => (
        <Box key={country.id}>
          <CountryName>{country.name}</CountryName>
        </Box>
      ))
    ) : (
      <Box>
        <CountryName>No Countries Data</CountryName>
      </Box>
    )}
  </Container>
);
export default Country;
