import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';
import logo from '../../../../assets/logo.png';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <img src={logo} alt="logo" height="75" />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
