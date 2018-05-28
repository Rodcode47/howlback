import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li>Login With &raquo;
                  <a className='dropdwon-button btn fa fa-google' href="/auth/google">oogle</a>Or
                  <a className='dropdwon-button btn fa fa-github' href="/auth/github"> Github</a>Or
                  <a className='dropdwon-button btn fa fa-twitter' href="/auth/twitter"> Twitter</a>Or
                  <a className='dropdwon-button btn fa fa-linkedin-square' href="/auth/linkedin"> Linkedin</a>
              </li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a className='dropdwon-button btn fa fa-sign-out' href="/api/logout"> Logout</a></li>
        ];
    }
  }

  renderOtherLinks() {
    return (
      <li>
        <a className='dropdwon-button btn' href="/">
        <img src="assets/icons/home.png" alt="" /> Home
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
          <button type="button" className="btn btn-outline-success ml-3">
            <img src="assets/icons/script.png" alt="" /> Feeds
          </button>
          </Link>
          
          <ul className=" mt-2" style={{ margin: '0 0 0 145px' }}>
            {this.renderOtherLinks()}
          </ul>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
