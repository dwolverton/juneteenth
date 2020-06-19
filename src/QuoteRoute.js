import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import './QuoteRoute.css';

export default ({quotes}) => {
  let { quoteId } = useParams();
  quoteId = parseInt(quoteId);
  const quote = quotes[parseInt(quoteId)];
  const prevLink = quoteId > 0 ? ("/" + (quoteId - 1)) : null;
  const nextLink = quoteId < quotes.length ? ("/" + (quoteId + 1)) : null;

  return <div className="QuoteRoute">
    {prevLink && <Link to={prevLink} className="nav nav-prev">&lt;</Link> }
    {nextLink && <Link to={nextLink} className="nav nav-next">&gt;</Link> }
    {quote && <Quote quote={quote} />}
  </div>
}