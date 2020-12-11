import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { keyframes } from "styled-components";


import axios from "axios";
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  // const [currentPeopleId, setCurrentPeopleId] = useState("1");



  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledHeaders>
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <h2> Here goes...</h2>

        {/* {people.map((fr) => {
          return <Character bold />;
        })} */}

      </div>
    </StyledHeaders>
  );
}

export default App;

const kf = keyframes`
 100% {
   opacity: 1;
   transform: scale(1)
 }
`;

const StyledHeaders = styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`
