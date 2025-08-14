import React from 'react';
import { useParams } from 'react-router-dom';
import { route } from './Routes';
import Home from '../../samples/Home';
import Type from '../../samples/Type/index';
import Merge from '../../samples/Merge/index';
import Tree from '../../samples/Tree/index';
import SubSum from '../../samples/SubSum/index';
import DataLoad from '../../samples/DataLoad/index';
import Formula from '../../samples/Formula/index';
import MultiRecord from '../../samples/MultiRecord/index';
import ServerScrollPaging from '../../samples/ServerScrollPaging/index';
import Form from '../../samples/Form/index';
import Multi from '../../samples/Multi/index';
import Dialog from '../../samples/Dialog/index';
import MasterDetail from '../../samples/MasterDetail/index';

const matchRoute = idx => {
  switch (route[idx] && route[idx].name) {
    case 'type':
      return <Type />;
    case 'merge':
      return <Merge />;
    case 'subsum':
      return <SubSum />;
    case 'tree':
      return <Tree />;
    case 'dataload':
      return <DataLoad />;
    case 'formula':
      return <Formula />;
    case 'multirecord':
      return <MultiRecord />;
    case 'serverscrollpaging':
      return <ServerScrollPaging />;
    case 'form':
      return <Form />;
    case 'multiple':
      return <Multi />;
    case 'dialog':
      return <Dialog />;
    case 'masterDetail':
      return <MasterDetail />;
    default:
      return <Home />;
  }
}

const Navigation = () => {
  const { name } = useParams(); // useParams로 name 받기
  const index = route.findIndex(element => element.name === name);

  return (
    <>
      { matchRoute(index) }
    </>
  )
}

export default Navigation;
