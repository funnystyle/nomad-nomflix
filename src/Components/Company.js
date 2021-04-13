import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  padding: 10px;
  margin-right: 1%;
  margin-bottom: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 320px;
`;

const CompanyName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Company = ({ companies }) => (
  <Container>
    {companies.map((company, index) => (
      <Box key={company.id}>
        {company.logo_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
            width="300px"
          />
        ) : (
          <CompanyName>{company.name}</CompanyName>
        )}
      </Box>
    ))}
  </Container>
);
export default Company;
