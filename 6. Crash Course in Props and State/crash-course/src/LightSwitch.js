import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  left: ${props => (props.position === 'left' ? '20px' : '380px')};
  bottom: 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const LightSwitch = ({ callback, position, switchOn }) => (
  <Button onClick={callback} position={position}>
    {switchOn ? 'On' : 'Off'}
  </Button>
);

export default LightSwitch;
