import React from 'react'
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import Originals from "./Originals";
import Recommends from "./Recommends";
import { useEffect } from "react";
import movies from './data';
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
    const dispatch = useDispatch();
   
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
  
    useEffect(() => {
      console.log("hello");
      
        movies.map((doc) => {
          console.log(recommends);
          switch (doc.type) {
            case "recommend":

              recommends = [...recommends, { id: doc.id, ...doc }];
              break;
  
            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...doc }];
              break;
  
            case "trending":
              trending = [...trending, { id: doc.id, ...doc }];
              break;
          }
        });
       
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
        recommends = [];
        newDisneys = [];
        originals = [];
        trending = [];
      });
  
  return (
    <Container>
       <ImgSlider />
       <Viewers />
       <Recommends />
       <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

export default Home
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;