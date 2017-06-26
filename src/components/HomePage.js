
import React from 'react';
import djc from '../images/djc.png';
import bbt from '../images/bbt.png';
import piclif from '../images/piclif.png';
import hero from '../images/hero_image.jpg';
import logo from '../images/logo.png';
import parsedFooter from '../images/logo_footer.png';
import iconArchitect from '../images/icon_architect.png';
import iconChat from '../images/icon_chat.png';
import iconMobile from '../images/icon_mobile.png';
import slantGreenTop from '../images/slant_green_top.png';
import slantGreenBottom from '../images/slant_green_white_bottom.png';
import slantLightBlueBottom from '../images/slant_lightblue_bottom.png';
import slantLightBlueTop from '../images/slant_light_blue_top.png';
import slantBlueTop from '../images/slant_blue_top.png';
import build from '../images/build.png';
import djcApp from '../images/phone_DJ.png';
import tobyApp from '../images/phone_Toby.png';
import appStore from '../images/app_store.png';
import { Image } from 'react-bootstrap';

const width = window.innerWidth;

const styles = {
  hero: {
    minHeight: `${window.innerHeight}px`,
    backgroundImage: `url(${hero})`
  },
  home: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDescription: {
    marginBottom: '20px'
  },
  blockquote: {
    minHeight: '120px'
  },
  content: {
    width: width < 800 ? '100%' : '800px',
    display: 'flex',
    flexDirection: 'column',
  },
  lightFont: {
    fontFamily: 'Titillium Web',
    fontWeight: 300,
  },
  semiBoldFont: {
    fontFamily: 'Titillium Web',
    fontWeight: 600,
  },
  serviceLabel: {
    marginTop: '45px',
    color: '#464849',
    fontSize: '20px',
    lineHeight: '26px',
    textAlign: 'center',
    fontFamily: 'Titillium Web',
    fontWeight: 600,
  },
  serviceDescription: {
    marginBottom: '60px',
    color: '#787878',
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    fontFamily: 'Titillium Web',
    fontWeight: 300,
  },
  serviceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '190px',
    display: 'flex',
  }
};

class HomePage extends React.Component {
  render() {
    const small = width < 800;
    const screenHeight = `${window.innerHeight}px`;
    const isPittsburgh = window.location.href.toLowerCase().includes('pittsburgh');
    console.log(isPittsburgh)
    return (
      <div style={styles.home}>
        <div style={{
          minWidth: width < 800 ? '100%' : '800px',
          height: screenHeight,
          minHeight: '768px',
          flexDirection: 'column',
          backgroundImage: `url(${hero})`,
          backgroundPosition: '100% 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{...styles.content}}>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
              <div style={{ marginTop: '25px'}}>
                <Image src={logo} />
              </div>
              <div style={{flexDirection: small ? 'column' : 'row', display: 'flex', marginTop: small ? '25px' : '75px'}}>
                <div style={{display: 'flex', flexDirection: small ? 'column' : 'row', fontSize: '22px', ...styles.lightFont}}>
                  <a style={{marginRight: '50px', color: 'white', textDecoration: 'none'}} href="#do">What we do</a>
                  <a style={{marginRight: '50px', color: 'white', textDecoration: 'none'}} href="#done">What we've done</a>
                  <a style={{color: 'white', textDecoration: 'none'}} href="#with">Work with us</a>
                </div>
              </div>
            </div>
            <div style={{marginTop: '30%', fontSize: '40px', color: 'white', padding: small && '20px', alignSelf: 'flex-end', ...styles.lightFont}}>
              A boutique mobile development agency.
            </div>
          </div>
        </div>
        <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '60px', display: 'flex'}}>
          <div style={{...styles.content, justifyContent: 'center', alignItems: 'center'}}>
            <div id="do" style={{fontSize: '30px', color: '#3298EB', lineHeight: '26px', textAlign: 'center', ...styles.lightFont}}>
              We build native mobile apps with React Native.
            </div>
            <div style={{fontSize: '20px', color: '#787878', lineHeight: '26px', textAlign: 'center', marginTop: '20px', ...styles.lightFont}}>
              Building a good mobile app is hard. Building good mobile apps for iOS and Anroid is harder. <br />
              Let us make it easy while you focus on your business.
            </div>
            <div style={{marginTop: '60px', display: 'flex', alignItems: small && 'center', justifyContent: 'space-between', width: small ? '100%' : '800px',
              flexDirection: width < 800 ? 'column' : 'row'}}>
              <div style={styles.serviceContainer}>
                <img src={iconArchitect} />
                <div style={styles.serviceLabel}>New App</div>
                <div style={styles.serviceDescription}>
                  We take your concept to market fast! On iOS and or Android.
                </div>
              </div>
              <div style={styles.serviceContainer}>
                <img src={iconMobile} />
                <div style={styles.serviceLabel}>Feature Add</div>
                <div style={styles.serviceDescription}>
                  Add a feature to an existing app.
                </div>
              </div>
              <div style={styles.serviceContainer}>
                <img src={iconChat} />
                <div style={styles.serviceLabel}>App Rewrite</div>
                <div style={styles.serviceDescription}>
                  Rewrite exiting app in React Native.
                  We fix existing bugs along the way and produce iOS and Androids apps.
                </div>
              </div>
            </div>
        </div>
        </div>
        <img src={slantGreenTop} style={{width: '100%'}} />
        <div style={{
          marginTop: '-5px',
          marginBottom: '-5px',
          width: '100%',
          height: '500px',
          backgroundColor: '#26D6A2',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <div style={{...styles.content, flexDirection: small ? 'column' : 'row'}}>
          <div>
            <img src={build} style={{width: small ? '100%' : '500px'}}/>
          </div>
          <div style={{marginTop: '150px', marginLeft: '50px', fontSize: '30px', color: 'white', lineHeight: '26px', textAlign: 'center', ...styles.lightFont}}>
            Check out our work
          </div>
        </div>
      </div>
      <img src={slantGreenBottom} style={{width: '100%'}} />
      <div id="done" style={{
        marginTop: '-5px',
        height: !small && '500px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: small && '5px',
      }}>
        <div style={{...styles.content, flexDirection: small ? 'column' : 'row', justifyContent: 'space-between'}}>
          <div style={{width: small ? '100%' : '400px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginTop: '50px', fontSize: '30px', color: '#3298EB', lineHeight: '26px', textAlign: 'center', ...styles.lightFont}}>
              DJCity Mobile
            </div>
            <div style={{fontSize: '20px', color: '#787878', lineHeight: '26px', textAlign: 'justify', marginTop: '20px', ...styles.lightFont}}>
              DJCity has streaming music players in the App Store and Googe Play.
              We rewrote their existing iOS app in React Native for release in the App store and Google Play.
              DJCity now has a stable, modern app platform to build from.
              <br /><br />
              Streaming Audio <br />
              iOS and Android <br />
              App rewrite
            </div>
            <div style={{ width: '100%', marginTop: small ? '30px' : '10px', display: 'flex', justifyContent: 'center', marginBottom: small && '20px'}}>
              <a href="https://itunes.apple.com/us/app/djcity/id485534275?mt=8">
                <img src={appStore} style={{justifyContent: 'center', alignSelf: 'center'}}/>
              </a>
            </div>
          </div>
          <div style={{justifyContent: 'center', display: 'flex'}}>
            <img style={{marginTop: '-10px'}} src={djcApp} />
          </div>
        </div>
      </div>
      <div style={{marginLeft: '-50px', overflow: 'hidden'}}>
        <img src={slantLightBlueTop} style={{minWidth: '500px', width: '110%', marginLeft: '-50px', overflow: 'hidden'}} />
      </div>
      <div style={{
        marginTop: '-5px',
        height: !small && '500px',
        backgroundColor: '#E7F5FF',
        display: 'flex',
        justifyContent: 'center',
        padding: small && '5px',
      }}>
        <div style={{...styles.content, flexDirection: small ? 'column' : 'row', justifyContent: 'space-between'}}>
          <div style={{justifyContent: 'center', display: 'flex'}}>
            <img style={{marginTop: '-10px'}} src={tobyApp} />
          </div>
          <div style={{width: small ? '100%' : '400px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginTop: '50px', fontSize: '30px', color: '#3298EB', lineHeight: '26px', textAlign: 'center', ...styles.lightFont}}>
              Toby Peed
            </div>
            <div style={{fontSize: '20px', color: '#787878', lineHeight: '26px', textAlign: 'justify', marginTop: '20px', ...styles.lightFont}}>
              Toby Peed is a product built for helping dog owners potty train their pups.
              It lets users share data and send notifications cross platform.
              <br /><br />
              Notifications <br />
              Camera <br />
              iOS and Android <br />
              New App
            </div>
            <div style={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <a href="https://itunes.apple.com/us/app/toby-peed/id1246554661?mt=8">
                <img src={appStore} style={{justifyContent: 'center', alignSelf: 'center'}}/>
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.tobypeed&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img style={{width: '152px'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: '-50px', overflow: 'hidden'}}>
        <img src={slantLightBlueBottom} style={{minWidth: '500px', width: '110%', marginLeft: '-50px', overflow: 'hidden'}} />
      </div>
      <div style={{
        marginTop: '-5px',
        height: '300px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{...styles.content, flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{width: '400px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginTop: '50px', fontSize: '30px', color: '#3298EB', lineHeight: '26px', textAlign: 'center', ...styles.lightFont}}>
              We want to partner with you.
            </div>
            <div style={{fontSize: '20px', color: '#787878', lineHeight: '26px', textAlign: 'center', marginTop: '20px', ...styles.lightFont}}>
              Here are just a few of our happy clients:
            </div>
            <div style={{ flexDirection: small ? 'column' : 'row', width: '100%', marginTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={piclif} style={{marginBottom: small && '10px', justifyContent: 'center', alignSelf: 'center', width: '150px', marginRight: !small && '25px'}}/>
                <img src={bbt} style={{marginBottom: small && '10px', justifyContent: 'center', alignSelf: 'center', height: '25px', marginRight: !small && '25px'}}/>
                <img src={djc} style={{justifyContent: 'center', alignSelf: 'center'}}/>
            </div>
          </div>
        </div>
      </div>
      <img src={slantBlueTop} style={{width: '100%'}} />
      <div
        style={{
          marginTop: '-5px',
          height: !small && '300px',
          backgroundColor: '#3298EB',
          display: 'flex',
          justifyContent: 'center',
          padding: small && '5px',
        }}
        id="with"
      >
        <div style={{...styles.content, flexDirection: 'column', alignItems: 'center'}}>
          <div style={{width: small ? '100%' : '600px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginTop: '50px', fontSize: '30px', color: 'white', lineHeight: '26px', textAlign: 'center', ...styles.lightFont}}>
              We want to partner with you.
            </div>
            <div style={{fontSize: '20px', color: '#CCE8FF', lineHeight: '26px', textAlign: 'center', marginTop: '20px', ...styles.lightFont}}>
              <a style={{color: '#CCE8FF'}} href="https://calendly.com/caseygarland">Schedule</a> a free 30 minute consultation to see if we're the right fit. <br />
              Not ready for a call? Shoot us an email <a style={{textDecoration: 'none', color: '#CCE8FF'}} href="mailTo:hi@parsed.ioq">hi@parsed.io</a>.
            </div>
          </div>
          <div style={{flexDirection: 'column', justifyContent: 'center', display: 'flex', marginTop: '40px', paddingBottom: '30px', fontSize: '16px', ...styles.lightFont, color: '#CCE8FF'}}>
            <div style={{justifyContent: 'center', display: 'flex', marginBottom: '20px'}}>
              <img style={{height: '60px'}} src={parsedFooter} />
            </div>
            Copyright 2017 Parsed, LLC &#9679; A Mobile App Design and Development Company &#9679; All Rights Reserved &#9679; Built in PGH
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default HomePage;
