import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';
// Types
type Props = {
  image: string;
  movieId: number;
  clickable: boolean;
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

export default Thumb;
