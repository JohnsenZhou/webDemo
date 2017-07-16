import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Nav from '../../common/Nav';
import Content0 from '../../components/Content0';
import Content1 from '../../components/Content1';
import Content2 from '../../components/Content2';
import Content3 from '../../components/Content3';
import Content4 from '../../components/Content4';
import Content5 from '../../components/Content5';
import GetInfo from '../../components/GetInfo';
import Footer from '../../common/Footer';

import './less/index.less';

export default function Home({ location }) {

    return (
      <div className="templates-wrapper">
        <Nav id="nav_0_0" key="nav_0_0" location={location} />
        <Content0 id="content_10_0" key="content_10_0" />
        <Content1 id="content_9_0" key="content_9_0" />
        <Content2 id="content_5_0" key="content_5_0" />
        <Content3 id="content_2_0" key="content_2_0" />
        <Content4 id="content_3_0" key="content_3_0" />
        <Content5 id="content_6_0" key="content_6_0" />
        <GetInfo key="content_7_0"/>
        <Footer id="footer_0_0" key="footer_0_0" />
      </div>
    );
}
