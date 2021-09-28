import React, { Component } from 'react';
import Home from 'samples/Home';
import Type from 'samples/Type';
import Merge from 'samples/Merge';
import SubSum from 'samples/SubSum';
import Tree from 'samples/Tree';
import DataLoad from 'samples/DataLoad';
import Formula from 'samples/Formula';
import Form from 'samples/Form';
import Multi from 'samples/Multi';
import Dialog from 'samples/Dialog';

class Navigation extends Component {

  render() {
    const route = ['type', 'merge', 'subsum', 'tree', 'dataload', 'formula', 'form', 'multiple', 'dialog'];
    const index = route.indexOf(this.props.match.params.name);

    switch (route[index]) {
      case 'type':
        return <Type></Type>;
      case 'merge':
        return <Merge></Merge>;
      case 'subsum':
        return <SubSum></SubSum>;
      case 'tree':
        return <Tree></Tree>;
      case 'dataload':
        return <DataLoad></DataLoad>
      case 'formula':
        return <Formula></Formula>
      case 'form':
        return <Form></Form>
      case 'multiple':
        return <Multi></Multi>
      case 'dialog':
        return <Dialog></Dialog>

      default:
        return <Home></Home>;
    }
  }
}

export default Navigation;
