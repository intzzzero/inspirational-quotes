import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Quotes from '../Components/Quotes';

function Main() {
  const [randomQuote, setRandomQuote] = useState({});
  useEffect(() => {
    getQuotes(quotesRandomIdx());
  }, []);

  const quotesRandomIdx = () => {
    return Math.floor(Math.random() * 1500);
  };

  const getQuotes = async (idx) => {
    await axios
      .get('https://type.fit/api/quotes')
      .then((res) => setRandomQuote(res.data[idx]));
  };

  return (
    <MainWrapper>
      <Quotes randomQuote={randomQuote} />
      <GlobalStyles />
    </MainWrapper>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;

    ol, ul {
      list-style: none;
    }
  }
`;

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ivory;
`;

export default Main;
