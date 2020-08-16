import React from 'react';
import styled from 'styled-components';

function Quotes({ randomQuote }) {
  return (
    <QuotesWrapper>
      <h1>{randomQuote.text}</h1>
      <h3>{randomQuote.author !== null ? randomQuote.author : 'unknown'}</h3>
    </QuotesWrapper>
  );
}

const QuotesWrapper = styled.article`
  width: 100%;
  height: 100%;
`;

export default Quotes;
