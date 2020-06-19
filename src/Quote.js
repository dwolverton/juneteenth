import React from 'react';
import './Quote.css';

export default ({quote}) => {

  const date = quote.date.exact ? new Date(quote.date.exact).toLocaleDateString() : quote.date.year;

  return <main className="Quote">
    <figure className="Quote__image">
      { quote.photo && <img src={quote.photo} alt={quote.source}/> }
      <figcaption>
        <span className="Quote__image__source">{quote.source}</span>
        { quote.sourceTagline && <span className="Quote__image__sourceTagline">{quote.sourceTagline}</span>}
        { date && <span className="Quote__image__date">{date}</span> }
      </figcaption>
    </figure>
    <div className="Quote__text">
      {quote.text.map((text, i) => <p key={i}>{text}</p>)}
    </div>
    { quote.details && <p className="Quote__details">{quote.details}</p>}
    { quote.photoAttribution && <p className="Quote__photoAttribution">Photo attribution: {quote.photoAttribution}</p> }
  </main>
}