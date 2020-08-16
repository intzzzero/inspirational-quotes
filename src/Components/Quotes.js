import React from 'react';
import styled from 'styled-components';

function Quotes({ randomQuote }) {
  return (
    <>
      <h1>{randomQuote.text}</h1>
      <h2>{randomQuote.author !== null ? randomQuote.author : 'unknown'}</h2>
    </>
  );
}

export default Quotes;
