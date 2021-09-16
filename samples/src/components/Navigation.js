import React, { Component } from "react";
import Home from '../samples/Home';
import Type from '../samples/Type';
import Merge from '../samples/Merge';
import SubSum from '../samples/SubSum';
import Tree from '../samples/Tree';
import ServerPaging from '../samples/ServerPaging';
class Navigation extends Component {

  render() {
    if (this.props.match.params.name === "type") {
      return <Type></Type>;
    }
    if (this.props.match.params.name === "merge") {
      return <Merge></Merge>;
    }
    if (this.props.match.params.name === "subsum") {
      return <SubSum></SubSum>;
    }
    if (this.props.match.params.name === "tree") {
      return <Tree></Tree>;
    }
    if (this.props.match.params.name === "serverpaging") {
      return <ServerPaging></ServerPaging>;
    }
    
    return <Home></Home>;
  }
}

export default Navigation;