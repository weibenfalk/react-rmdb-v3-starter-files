import React from 'react';
// Styles
import { Wrapper, Image } from './Actor.styles';
// Types
type Props = {
  name: string;
  character: string;
  imageUrl: string;
}

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
