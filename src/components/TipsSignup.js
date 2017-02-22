import React from 'react';

class Signup extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      email: '',
      submitted: false,
    };
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }
  emailChange (e){
    this.setState({email: e.target.value});
  }
  handleSubmit (e){
    e.preventDefault();
    // eslint-disable-next-line no-undef
    _dcq.push(["subscribe", { campaign_id: "26869852", fields: { email: this.state.email }, success: this.onSuccess, failure: this.onSuccess}]);
  }
  onSuccess() {
    this.setState({submitted: true});
    // TODO: add track.js to handle errors
  }

  renderForm(){
    return(
      <span>
        <div data-drip-attribute="description">
          Is your front-end development lagging behind your backend, devops, and data?
          Do you have a rockstar designer but need help tightening up your front-end development?
          Subscribe and get my top 5 front-end tips for non front-end developers.
        </div>
        <br/>
        <form onSubmit={this.handleSubmit} data-drip-embedded-form="93208936">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label htmlFor="fields[email]">Email Address</label><br />
                <input
                  type="email"
                  name="fields[email]"
                  value={this.state.email}
                  onChange={this.emailChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            name="submit"
            data-drip-attribute="sign-up-button"
            className="btn btn-default"
            >SEND ME THE TIPS</button>
        </form>
      </span>
    );
  }

  renderThanks(){
    // eslint-disable-next-line no-undef
    fbq('track', 'Lead');
    return(
      <div>
        <p>Thanks for signing up!</p>
        <p>Do you need help with a front-end application? I specialize in Angular, React, and React Native. Here are three ways we can get started:</p>
        <ul>
          <li>Shoot me an email casey@parsed.io</li>
          <li>Schedule a <a href="https://calendly.com/caseygarland/intro/">free consultation</a></li>
          <li>Check out my <a href="http://www.parsed.io/front-end-roadmap">roadmap service</a></li>
        </ul>
      </div>
    );
  }

  render(){
    return (
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <div className="row">
          <h3 data-drip-attribute="headline">Top 5 Front-End Tips</h3>
            {this.state.submitted ? this.renderThanks() : this.renderForm()}
        </div>
      </div>
    );
  }
}

export default Signup;
