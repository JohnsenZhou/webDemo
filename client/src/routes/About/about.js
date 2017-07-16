import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Nav from '../../common/Nav';
import GetInfo from '../../components/GetInfo';
import Footer from '../../common/Footer';


export default function About ({ location }) {
  const children = [
    <Nav id="nav_0_0" key="nav_0_0" location={location} />,
    <GetInfo key="content_7_0"/>,
    <Footer id="footer_1_0" key="footer_1_0" />,
  ];
  return (
    <div className="templates-wrapper">
      {children}
    </div>
  );
}
