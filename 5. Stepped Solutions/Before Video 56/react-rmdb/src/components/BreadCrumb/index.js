import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
};

export default BreadCrumb;
