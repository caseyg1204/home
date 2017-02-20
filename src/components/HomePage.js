
import React from 'react';
import djc from '../images/djc.png';
import vba from '../images/vba.png';
import bbt from '../images/bbt.png';
import profile from '../images/profile.jpg';
import kevin from '../images/kevin.jpg';
import helios from '../images/helios.png';
import { Button, Image } from 'react-bootstrap';

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
    ctaButton: {
      maxWidth: '300px',
      minWidth: window.innerWidth > 700 && '200px',
      margin: '0 auto',
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
    },
    profile: {
      width: '200px',
      margin: window.innerWidth < 700 && 'auto',
      display: 'block',
      float: window.innerWidth > 700 && 'right',
      marginLeft: '10px',
    },
    quoteProfilePhoto: {
      width: '100px',
      float: 'left',
      marginRight: '10px',
    },
    products: {
      display: 'flex',
      flexDirection: window.innerWidth < 992 ? 'column' : 'row',
    },
    productButton: {
      bottom: '0px',
      position: 'absolute',
      width: '216px',
      left: 0,
      right: 0,
      marginTop: '10px'
    },
    productDescription: {
      marginBottom: '20px'
    },
  };
  return (
    <div className="col-xs-12" style={styles.home}>
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <div className="text-center">
          <h1 style={styles.h1}>Hi, I'm Casey</h1>
          <hr style={styles.hr}/>
          <h2>I build front-end apps.</h2>
          <h3>React, Angular and React Native.</h3>
        </div>
        <br/>
        <p>Building maintainable, quality front-end applications is hard. Finding a senior front-end developer or architect can be harder.
          Let me take away that complexity while you focus on your business. I only build React, Angular and React Native applications.</p>
          <p>All work is fixed price. You will make a business decision knowing exactly what you will pay.</p>
        <h3>Brands I've worked with</h3>
        <div style={styles.brands}>
          <Image src={djc} style={styles.image}/>
          <Image src={vba} style={styles.image}/>
          <Image src={bbt} style={styles.image}/>
        </div>
        <div className="panel panel-default text-center" style={styles.cta}>
          <p style={styles.home}>Schedule a free 15 minute consultation to see if I'm the right fit to help your business. </p>
          <p style={styles.home}>Too shy for a call? Shoot me an email casey@parsed.io </p>
          <Button block bsStyle="primary" style={styles.ctaButton} href="https://calendly.com/caseygarland/intro/">Schedule Free Chat</Button>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h3>I want to partner with you.</h3>
            <Image src={profile} style={styles.profile}/>
            <p>My name is Casey Garland, and I'm a front-end engineer.
              When we work together I will focus on delivering the value your business needs, not the latest in vogue framework. </p>
          </div>
        </div>
        <div className="panel panel-default" style={styles.cta}>
          <h3>How can I help you?</h3>
          <div className="row" style={styles.products}>
            <div className="col-xs-12 col-md-4">
              <h4>Consultation</h4>
              <p style={styles.productDescription}>A free 30 minute chat to uncover a few things that will improve your product's front-end development.</p>
              <Button block bsStyle="primary" style={{...styles.ctaButton, ...styles.productButton}} href="https://calendly.com/caseygarland/intro/">Schedule Free Chat</Button>
              <br/>
            </div>
            <div className="col-xs-12 col-md-4" style={styles.product}>
              <h4>Front-end Roadmap</h4>
              <p style={styles.productDescription}>Get a custom plan for your front-end develoment.</p>
              <Button block bsStyle="primary" style={{...styles.ctaButton, ...styles.productButton}}>Learn More</Button>
              <br/>
            </div>
            <div className="col-xs-12 col-md-4" style={styles.product}>
              <h4>Build</h4>
              <p style={styles.productDescription}>I will build your front-end client for you, for a fixed price.</p>
              <Button block bsStyle="primary" style={{...styles.ctaButton, ...styles.productButton}} href="https://calendly.com/caseygarland/intro/">Let's Talk</Button>
              <br/>
            </div>
          </div>
        </div>
        <div className="row col-xs-12">
          <h3>What others say.</h3>
          <blockquote style={styles.blockquote}>
            <Image src={kevin} style={styles.quoteProfilePhoto}/>
            <div>
              <p>"Casey is a solid engineer and leader. He truly gets web and mobile."</p>
              <footer>Kevin <cite title="Source Title">Distinguished Technologist</cite></footer>
            </div>
          </blockquote>
          <blockquote style={styles.blockquote}>
            <Image src={helios} style={styles.quoteProfilePhoto}/>
            <p>"Casey asks the right questions and just gets things done."</p>
            <footer>Danielle Verba <cite title="Source Title">Owner - Helios Solutions Group</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
