import React from 'react';
import moment from 'moment';
import Linkify from 'react-linkify';
import './Quote.css';

export default ({quote}) => {

  const date = quote.date.exact ? moment(quote.date.exact).format('LL') : quote.date.year;

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
    { quote.details && <p className="Quote__details"><Linkify>{quote.details}</Linkify></p>}
    { quote.photoAttribution && <p className="Quote__photoAttribution">
        Photo attribution: <Linkify>{quote.photoAttribution}</Linkify>
      </p> }
  </main>
}