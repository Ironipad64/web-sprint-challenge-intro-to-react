// Write your Character component here
import React, { useState, useEffect } from 'react';
// import axios from "axios";
import styled, { keyframes } from "styled-components";


export default function Character({ info, action, bold }) {
    return (
        <StyledPeople bold={bold} >
            {info.name}
        </StyledPeople>
    );



}

const kf = keyframes`
 100% {
   opacity: 1;
   transform: scale(1)
 }
`;

const StyledPeople = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`