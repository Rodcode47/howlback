import React from 'react';

import styles from './Landing.css';

const Landing = () => {
  return (
    <div>
      <hr/>
        <h2 className="headertext">Howlback!</h2><br/>
          <h5 className="subheadertext">Collect feedback form your clients Only at <small className="fa fa-money"> €1 </small> per 5 Email!</h5>
      <hr/>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="d-flex flex-wrap flex-xl-nowrap flex-lg-nowrap flex-md-nowrap">
          <div className="p-2">
            <a href="https://reactjs.org/docs/higher-order-components.html" target="_new">
              <img src="assets/images/Mandark.png" alt="React and Redux" className="rounded" width="193" height="193" />
            </a>
          </div>
          <div className="p-2">
            <h5 className="alert-heading"><a href="https://kodeflash.herokuapp.com/blogs" target="_new">[#1 Full-Stack] React and Redux</a></h5>
            <p>
              Master React and Redux! by building a massive and awesome web application. We will use advanced features of React, 
              Redux, Express, and Mongo. By putting each concept into a fullstack web application. Other technologies feature like 
              SendGrid (For Handling Email), and Stripe (For Billing/Payments) are used in this application.
            </p>
            <ul>
              <li>&#x2713; Develop modern, complex, responsive and scalable Javascript front ends.</li>
              <li>&#x2713; Fully understand the advanced features behind a powerful React and Redux web application.</li>
            </ul>
            <a href="https://github.com/Rodcode47/Crowdfid-App" target="_new" className="btn btn-outline-danger btn-sm">Download the Code!</a>
          </div>
        </div>
      </div>
      <main role="main" className="blue-grey" style={{ textAlign: 'center' }}>
        <div className="jumbotron">
          <h1>Welcome To Feedback</h1>
          <p className="lead">
            Do you want to send one survey to thousand of your clients and get feedback, great your in 
            the right place. Howlback lets you create surveys that measures your clients opinions or 
            experiences through your question.
          </p>
          <p>Our goal is to creat great communication between our clients and there clients with easy</p>
          <a className="btn btn-lg btn-primary" href="/surveys" role="button">View Your Surveys &raquo;</a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
