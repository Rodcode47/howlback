import React from 'react';
import styles from './Landing.css';

const Landing = () => {
  return (
    <div>
      <hr/>
        <h2 className="headertext text-monospace"><u>Howlback!</u></h2><br/>
          <h5 className="subheadertext text-info">Collect feedback from your clients, 
            <i className="text-secondary"> easy</i> and <i className="text-secondary">fast</i> Only at <i className="text-danger">$5</i> for <b>8</b> Credits!</h5>
      <hr/>
      <div className="alert alert-success alert-dismissible fade show shadow p-3 mb-5 rounded" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" title="Close This Ad">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="d-flex flex-wrap flex-xl-nowrap flex-lg-nowrap flex-md-nowrap">
          <div className="p-2">
            <a href="https://reactjs.org/docs/higher-order-components.html" target="_new">
              <img src="assets/images/Mandark.png" alt="React and Redux" className="rounded" width="193" height="193" />
            </a>
          </div>
          <div className="p-2">
            <h5 className="alert-heading" title="Visit Our Blog"><a href="https://kodeflash.com/posts" target="_new"><b>Powered by JavaScript (Node.js & React.js)</b></a></h5>
            <p>
              HowlBack is a Full-Stack application built with <b>React, Redux, Node, Express,</b> and <b>MongoDB</b>. Putting each concept into a the application from basic to advanced. Other advanced technology features implemented are
              <b>SendGrid</b> (For Handling Email), and <b>Stripe</b> (For Billing/Payments).
            </p>
            <ul>
              <li>&#x2713; Develop modern, complex, and scalable Javascript front-ends.</li>
              <li>&#x2713; Used advanced features behind the powerful React and Redux.</li>
            </ul>
            <a href="https://github.com/Rodcode47/howlback" target="_new" className="btn btn-outline-danger btn-sm" title="Get Project Source Code">Download the Code! <i className="fas fa-download"></i></a>
          </div>
        </div>
      </div>
      <main role="main" className="" style={{ textAlign: 'center' }}>
        <div className="jumbotron shadow p-3 mb-5 rounded">
          <p className="alert alert-success alert-dismissible fade show" role="alert">
            Our goal is to create great medium that communication flawlessly with you and your clients.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
          <h1>Welcome To Feedback</h1>
          <p className="lead">
            Do you want to <b>send a survey to your clients and get feedback</b>, easy and fast great your in 
            the right place. Howlback you will create surveys that measures your clients opinions or 
            experiences through your question. <b>One click send to thousands of your Clients</b>. <i className="text-info">YES 1 Click</i>
          </p>
          <a className="btn btn-lg btn-primary" href="https://kodeflash.com/posts" role="button" title="Visit our blog for more samples">Visit our blog &raquo;</a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
