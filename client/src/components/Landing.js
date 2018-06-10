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
      <div className="alert alert-success alert-dismissible fade show" role="alert">
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
            <h5 className="alert-heading" title="Visit Our Blog"><a href="https://kodeflash.herokuapp.com/blogs" target="_new"><b>[#1 Full-Stack] React and Redux</b></a></h5>
            <p>
              Master React and Redux! by building a massive and awesome web application. We will use advanced features of React, 
              Redux, Express, and MongoDB. By putting each concept into a full-stack web application. Other technologies feature like 
              SendGrid (For Handling Email), and Stripe (For Billing/Payments) are used in this application.
            </p>
            <ul>
              <li>&#x2713; Develop modern, complex, responsive and scalable Javascript front ends.</li>
              <li>&#x2713; Fully understand the advanced features behind a powerful React and Redux web application.</li>
            </ul>
            <a href="https://github.com/Rodcode47/Crowdfid-App" target="_new" className="btn btn-outline-danger btn-sm" title="Get Project Source Code">Download the Code! <i className="fas fa-download"></i></a>
          </div>
        </div>
      </div>
      <main role="main" className="blue-grey" style={{ textAlign: 'center' }}>
        <div className="jumbotron">
          <h1>Welcome To Feedback</h1>
          <p className="lead">
            Do you want to <b>send a survey to your clients and get feedback</b>, easy and fast great your in 
            the right place. Howlback you will create surveys that measures your clients opinions or 
            experiences through your question. <b>One click send to thousands of your Clients</b>. <i className="text-info">YES 1 Click</i>
          </p>
          <p className="text-danger">Our goal is to create great medium that communication flawlessly with you and your clients.</p>
          <a className="btn btn-lg btn-primary" href="/surveys" role="button" title="View All Your Surveys">View Your Surveys &raquo;</a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
