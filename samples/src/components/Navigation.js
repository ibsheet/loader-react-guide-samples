import React, { Component } from 'react';
import Home from 'samples/Home';
import Type from 'samples/Type';
import Merge from 'samples/Merge';
import SubSum from 'samples/SubSum';
import Tree from 'samples/Tree';
import ServerPaging from 'samples/ServerPaging';
import Formula from 'samples/Formula';

class Navigation extends Component {

  render() {
    let route = ['type', 'merge', 'subsum', 'tree', 'serverpaging', 'formula', 'form', 'multiple', 'dialog'];
    let index = route.indexOf(this.props.match.params.name);

    switch (route[index]) {
      case 'type':
        return <Type></Type>;
      case 'merge':
        return <Merge></Merge>;
      case 'subsum':
        return <SubSum></SubSum>;
      case 'tree':
        return <Tree></Tree>;
      case 'serverpaging':
        return <ServerPaging></ServerPaging>
      case 'formula':
        return <Formula></Formula>

      default:
        return <Home></Home>;
    }
  }
}

export default Navigation;
