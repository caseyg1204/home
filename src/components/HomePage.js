
import React from 'react';
import djc from '../images/djc.png';
import vba from '../images/vba.png';
import bbt from '../images/bbt.png';
import { Navbar, Nav, NavItem, Button, Image } from 'react-bootstrap';

const HomePage = () => {
  const styles = {
    home: {
      fontSize: '18px',
      fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    },
    h1: {
      fontSize: window.innerWidth > 700 && '80px',
    },
    cta: {
      marginTop: '30px',
      padding: '30px',
      backgroundColor: '#F5F5F5',
    },
    brands: {
      verticalAlign: 'middle',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    image: {
      maxHeight: '100%',
      maxWidth: '150px',
    }
  };
  return (
    <div className="col-xs-12" style={styles.home}>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Parsed</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="http://blog.parsed.io">Blog</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="col-xs-12 col-md-7 col-md-offset-3">
        <div className="text-center">
          <h1 style={styles.h1}>Hi, I'm Casey</h1>
          <hr style={styles.hr}/>
          <h2>I build front-end apps.</h2>
          <h3>React, Angular and React Native.</h3>
        </div>
        <br/>
        <p>Building maintainable, quality front-end applications is hard. Let me take away that complexity while you
          focus on your business. I only build React, Angular and React Native applications. You will make a business
          decision knowing exactly what you will pay, all work is fixed price.</p>
        <h3>Brands I've worked with</h3>
        <div style={styles.brands}>
          <Image src={djc} style={styles.image}/>
          <Image src={vba} style={styles.image}/>
          <Image src={bbt} style={styles.image}/>
        </div>
        <div className="panel panel-default text-center" style={styles.cta}>
          <p style={styles.home}>Schedule a free 15 minute consultation to see if I'm the right fit to help your business. </p>
          <p style={styles.home}>Too shy for a call? Shoot me an email casey@parsed.io </p>
          <Button block bsStyle="primary" href="https://calendly.com/caseygarland/intro/">Schedule Free Chat</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
