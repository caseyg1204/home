
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
    blockquote: {
      minHeight: '120px'
    }
  };
  const isPittsburgh = window.location.href.toLowerCase().includes('pittsburgh');
  return (
    <div className="col-xs-12" style={styles.home}>
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <div className="text-center">
          <h1 style={styles.h1}>Parsed</h1>
          <hr style={styles.hr}/>
          <h2>A boutique mobile development agency{isPittsburgh && ' in Pittsburgh'}.</h2>
          <h3>We build native mobile apps with React Native.</h3>
        </div>
        <br/>
        <p>Building a good mobile app is hard. Building good mobile apps for iOS and Android is harder.
          Let us make it easy while you focus on your business.</p>
        <h3>Brands we've worked with</h3>
        <div style={styles.brands}>
          <Image src={djc} style={styles.image}/>
          <Image src={vba} style={styles.image}/>
          <Image src={bbt} style={styles.image}/>
        </div>
        <div className="panel panel-default text-center" style={styles.cta}>
          <p style={styles.home}>Schedule a free 15 minute consultation to see if we're the right fit to help your business. </p>
          <p style={styles.home}>Too shy for a call? Shoot Casey an email casey@parsed.io </p>
          <Button block bsStyle="primary" style={styles.ctaButton} href="https://calendly.com/caseygarland/intro/">Schedule Free Chat</Button>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h3>I want to partner with you.</h3>
            <Image src={profile} style={styles.profile}/>
            <p>My name is Casey Garland, and I love building things.
              When we work together I will focus on delivering the value your business needs. </p>
          </div>
        </div>
        <div className="row col-xs-12">
          <h3>What others say.</h3>
          <blockquote style={styles.blockquote}>
            <Image src={kevin} style={styles.quoteProfilePhoto}/>
            <div>
              <p>"Casey is a solid engineer and leader. He truly gets mobile."</p>
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
