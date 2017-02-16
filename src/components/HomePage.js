
import React from 'react';
import {Link} from 'react-router';
import CTA from './CTA';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Button>foo</Button>
      <h1>Hi, I'm Casey</h1>
      <h4>I help software companies ship front-end web and mobile apps.</h4>
      <h3>Want to ship faster and save money?</h3>
      <h4>Schedule a FREE 30 minute consult. We will chat about your product and
        uncover a few ways to speed up development.</h4>
      <CTA text="Schedule Now!" action=""/>
    </div>
  );
};

export default HomePage;
