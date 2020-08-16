import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
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

  console.log(randomQuote);

  return (
    <MainWrapper>
      <Quotes randomQuote={randomQuote} />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export default Main;
