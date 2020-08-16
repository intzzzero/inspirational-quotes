import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Quotes({ randomQuote }) {
  return (
    <QuotesWrapper>
      <section className='textWrapper'>
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
    margin: 20px 0;
    text-align: center;
    position: relative;

    .leftQuote {
      font-size: 30px;
      position: absolute;
      top: -50px;
      left: 0;
    }

    .rightQuote {
      font-size: 30px;
      position: absolute;
      bottom: -50px;
      right: 0;
    }

    h1 {
      font-size: 30px;
      line-height: 45px;
      font-weight: 600;
    }
  }

  h3 {
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 15%;
  }
`;

export default Quotes;
