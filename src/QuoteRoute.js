import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import './QuoteRoute.css';

export default ({quotes}) => {
  let { quoteId } = useParams();
  const quoteIndex = quotes.findIndex(quote => quote.key === quoteId) || 0;
  const quote = quotes[quoteIndex];
  const prevLink = quoteIndex > 0 ? ("/" + (quotes[quoteIndex - 1].key)) : null;
  const nextLink = quoteIndex < quotes.length - 1 ? ("/" + (quotes[quoteIndex + 1].key)) : null;

  return <div className="QuoteRoute">
    {quote && <Quote quote={quote} navButtons={<>
      {prevLink && <Link to={prevLink} className="nav nav-prev">&lt;</Link> }
      {nextLink && <Link to={nextLink} className="nav nav-next">&gt;</Link> }
    </>} />}
  </div>
}