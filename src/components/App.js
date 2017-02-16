import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Parsed</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="http://blog.parsed.io">Blog</NavItem>
        </Nav>
      </Navbar>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
