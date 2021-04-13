import React, { useState, useEffect } from "react";
import { moviesApi, tvApi } from "api";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import noPoster from "assets/noPosterSmall.png";
import IMDBLink from "Components/IMDBLink";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Video from "Components/Video";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const InsideMenuList = styled("ul")`
  display: flex;
`;

const InsideMenuItem = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "#1abc9c" : "transparent")};
  color: ${(props) => (props.active ? "white" : "white")};
`;

export default function Detail({
  match: {
    params: { id },
  },
  history: { push },
  location: { pathname },
}) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMovie] = useState(pathname.includes("/movie"));

  useEffect(() => {
    async function getDeatil() {
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }

      try {
        const { data: result } = isMovie
          ? await moviesApi.movieDetail(parsedId)
          : await tvApi.showDetail(parsedId);
        setResult(result);
      } catch {
        setError("Can't find anything.");
      } finally {
        setLoading(false);
      }
    }

    getDeatil();
  }, [id, isMovie, push]);

  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {isMovie ? result.original_title : result.original_name} | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : noPoster
          }
        />
        <Data>
          <Title>
            {isMovie ? result.original_title : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {isMovie
                ? result.release_date
                  ? result.release_date.substring(0, 4)
                  : "-"
                : result.first_air_date
                ? result.first_air_date.substring(0, 4)
                : "-"}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres && result.genres.length > 0
                ? result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )
                : "-"}
            </Item>
          </ItemContainer>
          {isMovie ? <IMDBLink imdb_id={result.imdb_id} /> : ""}
          <Overview>{result.overview}</Overview>
          {isMovie ? (
            <>
              <InsideMenu>
                <InsideMenuList>
                  <InsideMenuItem active={pathname === `/movie/${id}/videos`}>
                    <Link to={`/movie/${id}/videos`}>Videos</Link>
                  </InsideMenuItem>
                </InsideMenuList>
              </InsideMenu>

              <Route
                path={`/movie/:id/videos`}
                render={() => <Video videos={result.videos} />}
              />
            </>
          ) : (
            <>
              <InsideMenu>
                <InsideMenuList>
                  <InsideMenuItem active={pathname === `/show/${id}/videos`}>
                    <Link to={`/show/${id}/videos`}>Videos</Link>
                  </InsideMenuItem>
                </InsideMenuList>
              </InsideMenu>

              <Route
                path={`/show/:id/videos`}
                render={() => <Video videos={result.videos} />}
              />
            </>
          )}
        </Data>
      </Content>
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );
}