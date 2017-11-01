import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Button,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";
import Navbar from './Navbar'

class App extends Component {
  render() {
    const menu = (
      <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
      </Menu>
    );
    return (
      <div className="App">
        <Navbar />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
          <Popover content={menu} position={Position.BOTTOM_RIGHT}>
              <Button text="Actions" />
          </Popover>
          
        </p>
      </div>
    );
  }
}

export default App;
