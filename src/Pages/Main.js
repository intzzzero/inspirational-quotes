import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Main() {
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <MainWrapper>
      <h1>hello</h1>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export default Main;
