import { useState, useEffect } from 'react';

function FavoriteButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(props.itemId));
  }, [props.itemId]);

  function handleClick() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      const index = favorites.indexOf(props.itemId);
      favorites.splice(index, 1);
    } else {
      favorites.push(props.itemId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  }

  return (
    <button onClick={handleClick}>
      {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      <span className={isFavorite ? 'star active' : 'star'}>&#9734;</span>
    </button>
  );
}

export default FavoriteButton;