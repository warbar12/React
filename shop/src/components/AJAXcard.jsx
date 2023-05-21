import { useState, useEffect } from 'react';
import {default as AddCard } from './AddCard';

import './scss/card.scss'

function MainCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./shop.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='container'>
      <div className="main">
        {data.map(item => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            article={item.article}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const { id, name, price, image, article, color } = props;
 
  return (
    <div className="card" key={id}>
      <div className='card-img'>
      <img src={image} alt={name} />
      </div>
      <div className='card-info'>
       <h2 className='card-info-title'>{name}</h2>
       <p className='card-info-price'>{price}грн</p>
        <div className='card-info-text'>
          <p className='article'>Article - {article}</p>
          <p className='color'>Color - {color}</p>
        </div>
      </div>
      <div className='card-btn'>
        <AddCard></AddCard>
      </div>
    </div>
  );

}

export default MainCard;