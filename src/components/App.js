import React, { PropTypes } from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
// const styles = {
//   // paddingTop: '40px',
//   width: '100%',
//   display: 'flex',
//   alignItems: 'center',
//   fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
// };

class App extends React.Component {
  render(){
    return (
      <div>
        {/* <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Parsed</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem href="http://blog.parsed.io">Blog</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        {this.props.children}
        <span>
        </span>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
