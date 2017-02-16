
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import djc from '../images/djc.png';
import vba from '../images/vba.png';
import bbt from '../images/bbt.png';

const HomePage = () => {
  const styles = {
    home: {
      fontSize: '18px',
      fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    },
    h1: {
      fontSize: '80px',
    },
    h3: {
      fontSize: '27px',
      lineHeight: '1.1',
      display: 'block',
      fontWeight: '300',
      margin: '10px 0 0',
    },
    hr: {
      maxWidth: '100px',
      margin: '15px auto',
      bordeWidth: '4px',
      borderColor: 'inherit',
      borderRadius: '3px',
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
    },
    image: {
      maxHeight: '100%',
      maxWidth: '200px',
    }
  };
  return (
    <div>

    <div className="container" style={styles.home}>
      <div className="col-xs-8 col-xs-offset-2">
        <div className="text-center">
          <h1 style={styles.h1}>Hi, I'm Casey</h1>
          <hr style={styles.hr}/>
          <h2>I build mobile apps with React Native.</h2>
        </div>
        <br/>
        <p>Building maintainable, quality mobile applications is hard. Let me take away that complexity while you focus on your business.</p>
        <p>I only build React Native applications. You don't have to worry about a 'generalist' developer learning React Native on your dollar.</p>
        <p>You will make a business decision knowing exactly what you will pay, all work is fixed price.</p>
        <h2>Brands I've worked with</h2>
        <div style={styles.brands} className="col-xs-12">
          <Image src={djc} style={styles.image}/>
          <Image src={vba} style={styles.image}/>
          <Image src={bbt} style={styles.image}/>
        </div>
      </div>

      <div className="panel panel-default col-xs-8 col-xs-offset-2 text-center" style={styles.cta}>
        <p style={styles.home}>Schedule a free 15 minute consultation to see if I'm the right fit to help your business. </p>
        <Button bsSize="large" bsStyle="primary" href="https://calendly.com/caseygarland/intro/">Schedule Free Consultation</Button>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
