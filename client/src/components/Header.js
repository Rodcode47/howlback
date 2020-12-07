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
        return (
          <li>
            <span className="h5">Login With:</span>
            <a className='dropdwon-button btn fab fa-google' href="/auth/google" title="Login With Google"> Google</a>
            <a className='dropdwon-button btn fab fa-linkedin' href="/auth/linkedin" title="Login With Linkedin"> LinkedIn</a>
          </li>
        )
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
        <img src="assets/icons/home.png" alt="Home" className="mb-2" /> Home
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="mt-4">
            {this.renderOtherLinks()}
            {this.props.auth ?
              <div>

                <li key="3" title="Credit Count" className="ml-3 mt-1">
                   <span className="h4">Credits: {this.props.auth.credits}</span>
                </li>
                <li key="1" className="ml-3"><Payments /></li>
              </div>
              :
              null
            }
          </ul>

          <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo ml-3"
          >
            <button type="button" className="waves-effect waves-light btn mb-1 ml-2" title="All Feedback Surveys">
              <img src="assets/icons/script.png" alt="Feeds" /> Feeds
            </button>
          </Link>

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
