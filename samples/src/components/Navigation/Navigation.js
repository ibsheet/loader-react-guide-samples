import React from 'react';
import Home from 'samples/Home';
import Type from 'samples/Type/index';
import Merge from 'samples/Merge/index';
import Tree from 'samples/Tree/index';
import SubSum from 'samples/SubSum/index';
import DataLoad from 'samples/DataLoad/index';
import Formula from 'samples/Formula/index';
import MultiRecord from 'samples/MultiRecord/index';
import Form from 'samples/Form/index';
import Multi from 'samples/Multi/index';
import Dialog from 'samples/Dialog/index';
import MasterDetail from 'samples/MasterDetail/index';

const route = ['type', 'merge', 'subsum', 'tree', 'dataload', 'formula', 'multirecord', 'form', 'multiple', 'dialog', 'masterDetail'];
const matchRoute = (idx) => {
  switch (route[idx]) {
    case 'type':
      return <Type></Type>;
    case 'merge':
      return <Merge></Merge>;
    case 'subsum':
      return <SubSum></SubSum>;
    case 'tree':
      return <Tree></Tree>;
    case 'dataload':
      return <DataLoad></DataLoad>;
    case 'formula':
      return <Formula></Formula>;
    case 'multirecord':
      return <MultiRecord></MultiRecord>;
    case 'form':
      return <Form></Form>;
    case 'multiple':
      return <Multi></Multi>;
    case 'dialog':
      return <Dialog></Dialog>;
    case 'masterDetail':
      return <MasterDetail></MasterDetail>;
    default:
      return <Home></Home>;
  }
}

const Navigation = (props) => {
  const index = route.indexOf(props.match.params.name);

  return (
    <>
      { matchRoute(index) }
    </>
  )
}

export default Navigation;
