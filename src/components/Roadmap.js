
import React from 'react';
import djc from '../images/djc.png';
import vba from '../images/vba.png';
import bbt from '../images/bbt.png';
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
    h2: {
      marginBottom: '20px',
      marginTop: '20px',
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
      height: '120px'
    }
  };
  return (
    <div className="col-xs-12" style={styles.home}>
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <h1 className="text-center" style={styles.h1}>Front-End Roadmap</h1>

        <h2 style={styles.h2}>Your front-end is slowing you down</h2>
        <p>Is your web or mobile app hard to maintain?
        Does it take way too long to add features?
        Does it seem impossible to keep up with the JavaScript ecosystem?
        Do you wonder if you could be doing things a better way?
        Does your app need to be cleaned up, you are just not sure how?</p>

        <h2 style={styles.h2}>Imagine your front-end development being smooth and streamlined</h2>
        <p>Imagine app maintenance being a breeze.
        Imagine adding features in half the time.
        Imagine knowing you are doing the right thing.
        Imagine your app being cleaned up and polished.</p>

        <h2 style={styles.h2}>Get a custom roadmap</h2>
        <p>Have a detailed plan for acheiving your app goals. You will get specific advice tailored for you, your applciation, and your goals. This is not generic advice suitable for anyone.</p>

        <h3>My Process</h3>
        <ol>
          <li>We review your project/product goals, issues and frustrations</li>
          <li>I perform an analysis of your code</li>
          <li>I put together a detailed roadmap addressing your goals, issues and frustrations</li>
          <li>We review roadmap and I answer any questions you might have</li>
          <li>I'll followup in a few weeks to see how things are going and if you have any questions</li>
        </ol>

        <h2 style={styles.h2}>Ready to get started?</h2>
        <p>Are you ready opitmize your front-end development? If so, I am ready to help you. The intro call or email is completely complimentary. If we decide to move forward, the cost is just $499.</p>
        <p>If you follow through with the roadmap you will meet your goals and reduce or even elimiante your frustrations. If you are not satisfied with the roadmap I will refund you money in full</p>

        <div className="panel panel-default text-center" style={styles.cta}>
          <p style={styles.home}>Schedule a free 15 minute consultation to see if I'm the right fit to help your business. </p>
          <p style={styles.home}>Too shy for a call? Shoot me an email casey@parsed.io </p>
          <Button block bsStyle="primary" style={styles.ctaButton} href="https://calendly.com/caseygarland/intro/">Schedule Free Chat</Button>
        </div>

        <div className="row col-xs-12">
          <h2 style={styles.h2}>Wait! Don't take my word for it...</h2>
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
          <h4>Brands I've worked with</h4>
          <div style={styles.brands}>
            <Image src={djc} style={styles.image}/>
            <Image src={vba} style={styles.image}/>
            <Image src={bbt} style={styles.image}/>
          </div>
        </div>

        <h2 style={styles.h2}>Still have questions?</h2>
        <h4>Can't you just fix our app?</h4>
        <p>Maybe. But, first we need to figure out what to fix.</p>
        <h4>What is your hourly rate?</h4>
        <p>I don't have one. The roadmap is a fixed price of $499</p>
        <h4>Will you sign our NDA?</h4>
        <p>Probaly, as long as it isn't too crazy.</p>

        <h2 style={styles.h2}>Why me?</h2>

        <p>I focus exclusively on React, Angular and React Native applications. While every project comes with a unique set of challenges, complex front-end applications are not new to me.</p>
        <p>My goal is to use my expertise to move your business forward by accelerating the pace of front-end develoment</p>

        <div className="panel panel-default text-center" style={{...styles.cta, paddingTop: '0'}}>
          <h2>Last Chance</h2>
          <p style={styles.home}>Schedule a free 15 minute consultation to see if I'm the right fit to help your business. </p>
          <p style={styles.home}>Too shy for a call? Shoot me an email casey@parsed.io </p>
          <Button block bsStyle="primary" style={styles.ctaButton} href="https://calendly.com/caseygarland/intro/">Schedule Free Chat</Button>
        </div>

        <h2 style={styles.h2}>Availability is limited</h2>

        <p>I’m only available for 1-2 evaluations per month. Scheduling is first come, first served.</p>
        <hr />
      </div>
    </div>
  );
};

export default HomePage;
