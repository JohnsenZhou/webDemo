import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
    console.log(this.props.location)
    
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const { isMode, location } = props;
    delete props.isMode;
    const navData = { menu1: '首页', menu2: '教学模式', menu3: '课程体系', menu4: '关于我们' };
    // const navChildren = Object.keys(navData)
    //   .map((key, i) => (<Item key={i}><Link to='/about'>{navData[key]}</Link></Item>));
    const navChildren = [
      <Item key='home'><Link to='/home'>首页</Link></Item>,
      <Item key='teach'><Link to='/teach'>教学模式</Link></Item>,
      <Item key='class'><Link to='/class'>课程体系</Link></Item>,
      <Item key='about'><Link to='/about'>关于我们</Link></Item>
    ]
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" />
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={[location ? location.pathname.split('/')[1] : '']}
            mode="inline"
            theme="dark"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[location ? location.pathname.split('/')[1] : '']}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
