import React from 'react';

class Signup extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      email: ''
    };
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  emailChange (e){
    this.setState({email: e.target.value});
  }
  handleSubmit (e){
    e.preventDefault();
    // eslint-disable-next-line no-undef
    _dcq.push(["subscribe", { campaign_id: "26869852", fields: { email: "7@parsed.io" }, success: this.onSuccess, failure: this.onSuccess}]);
  }
  onSuccess(e) {
    console.log('success',e);
  }

  render(){
    return (
      <div className="col-xs-12">
        <form onSubmit={this.handleSubmit} data-drip-embedded-form="93208936">
          <h3 data-drip-attribute="headline">Top 5 Front-End Tips for CTO</h3>
          <div data-drip-attribute="description">
            Is your front-end development lagging behind your backend, devops, and data? Do you have a rockstar designer but need help tightening up your front-end development?&amp;nbsp;Subscribe and get my top 5&amp;nbsp;front-end tips for CTOs.
          </div>
          <div>
            <label htmlFor="fields[email]">Email Address</label><br />
            <input type="email" name="fields[email]" value={this.state.email} onChange={this.emailChange} />
          </div>
          <div>
            <input type="submit" name="submit" value="SEND ME THE FREE GUIDE" data-drip-attribute="sign-up-button" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
