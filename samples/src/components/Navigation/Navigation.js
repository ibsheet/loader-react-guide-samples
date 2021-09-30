import React, { Component } from 'react';
import Home from 'samples/Home';
import Type from 'samples/Type/index';
import Merge from 'samples/Merge/index';
import Tree from 'samples/Tree/index';
import SubSum from 'samples/SubSum/index';
import DataLoad from 'samples/DataLoad/index';
import Formula from 'samples/Formula/index';
import Form from 'samples/Form/index';
import Multi from 'samples/Multi/index';
import Dialog from 'samples/Dialog/index';

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
