import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  padding: 2px;
  margin-right: 1%;
  margin-bottom: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 154px;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 3px;
`;

const SeasonName = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: #222;
`;

const Season = ({ seasons }) => (
  <Container>
    {seasons && seasons.length > 0 ? (
      seasons.map((season, index) => (
        <Box key={season.id}>
          {season.poster_path ? (
            <Img
              src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
              width="100%"
              alt={`${season.name} poster`}
            />
          ) : (
            <SeasonName>{season.name}</SeasonName>
          )}
        </Box>
      ))
    ) : (
      <Box>
        <SeasonName>No Seasons Data</SeasonName>
      </Box>
    )}
  </Container>
);
export default Season;
