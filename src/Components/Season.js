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

const seasonName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #222;
`;

const Season = ({ seasons }) => (
  <Container>
    {seasons && seasons.length > 0 ? (
      seasons.map((season, index) => (
        <Box key={season.id}>
          {season.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
              width="100%"
              alt={`${season.name} poster`}
            />
          ) : (
            <seasonName>{season.name}</seasonName>
          )}
        </Box>
      ))
    ) : (
      <Box>
        <seasonName>No Seasons Data</seasonName>
      </Box>
    )}
  </Container>
);
export default Season;
