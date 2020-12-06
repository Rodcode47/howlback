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
                  <a className='dropdwon-button btn fab fa-google' href="/auth/google" title="Login With Google"> Google</a>Or
                  <a className='dropdwon-button btn fab fa-linkedin' href="/auth/linkedin" title="Login With Linkedin"> Linkedin</a>
                </li>;
      default:
        return [
          <li key="2"><a className='dropdwon-button btn fas fa-sign-out-alt' href="/api/logout" title="Logout"> Logout</a></li>
        ];
    }
  }

  renderOtherLinks() {
    return (
      <li>
        <a className='dropdwon-button btn' href="/" title="Home">
        <img src="assets/icons/home.png" alt="Home" /> Home
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
            <button type="button" className="btn btn-outline-success ml-3 mb-2" title="All Feedback Surveys">
              <img src="assets/icons/script.png" alt="Feeds" /> Feeds
            </button>
          </Link>
          
          <ul className=" mt-2" style={{ margin: '0 0 0 145px' }}>
            {this.renderOtherLinks()}
            {this.props.auth ? 
              <div>
                <li key="1"><Payments /></li>
                <li key="3" title="Credit Count" style={{ margin: '0 10px' }}>
                   <span className="h4">Credits: {this.props.auth.credits}</span>
                </li>
              </div>
              :
              null
            }
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
