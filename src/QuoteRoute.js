import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import './QuoteRoute.css';
import { getPhotoUrl } from './fetchQuotes';

export default ({quotes}) => {
  let { quoteId } = useParams();
  const quoteIndex = quotes.findIndex(quote => quote.key === quoteId) || 0;
  const quote = quotes[quoteIndex];
  const prev = quotes[quoteIndex - 1];
  const next = quotes[quoteIndex + 1];
  const prevLink = prev && prev.key;
  const nextLink = next && next.key;

  const preloaders = useRef([ new Image(), new Image() ]);
  preloaders.current[0].src = getPreloadImageSource(prev);
  preloaders.current[1].src = getPreloadImageSource(next);

  return <div className="QuoteRoute">
    {quote && <Quote quote={quote} navButtons={<>
      {prevLink && <Link to={prevLink} className="nav nav-prev">&lt;</Link> }
      {nextLink && <Link to={nextLink} className="nav nav-next">&gt;</Link> }
    </>} />}
  </div>
}

function getPreloadImageSource(quote) {
  const NO_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  return quote && quote.photo ? getPhotoUrl(quote.photo) : NO_IMAGE;
}