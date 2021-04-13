import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  padding: 10px;
  margin-right: 1%;
  margin-bottom: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 170px;
  text-align: center;
`;

const CompanyName = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: #222;
`;

const Company = ({ companies }) => (
  <Container>
    {companies && companies.length > 0 ? (
      companies.map((company, index) => (
        <Box key={company.id}>
          {company.logo_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
              width="100%"
              alt={`${company.name} logo`}
            />
          ) : (
            <CompanyName>{company.name}</CompanyName>
          )}
        </Box>
      ))
    ) : (
      <Box>
        <CompanyName>No Companies Data</CompanyName>
      </Box>
    )}
  </Container>
);
export default Company;
