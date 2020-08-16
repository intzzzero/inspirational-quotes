import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Quotes({ randomQuote, getNewQuotes }) {
  return (
    <QuotesWrapper>
      <section className='textWrapper' onClick={getNewQuotes}>
        <FaQuoteLeft className='leftQuote' />
        <h1>{randomQuote.text}</h1>
        <FaQuoteRight className='rightQuote' />
      </section>
      <h3>
        - {randomQuote.author !== null ? randomQuote.author : 'unknown'} -
      </h3>
    </QuotesWrapper>
  );
}

const QuotesWrapper = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .textWrapper {
    max-width: 80%;
    padding: 20px 15px;
    margin: 20px 0;
    position: relative;
    border-radius: 15px;
    text-align: center;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    .leftQuote {
      font-size: 40px;
      position: absolute;
      top: -60px;
      left: 0;
    }

    .rightQuote {
      font-size: 40px;
      position: absolute;
      bottom: -60px;
      right: 0;
    }

    h1 {
      font-size: 28px;
      line-height: 45px;
      transition: 0.5s ease-in-out;
    }
  }

  h3 {
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 15%;
    transition: 0.5s ease-in-out;
  }
`;

export default Quotes;
