import React from 'react';
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

export const route = [{name: 'type', title: '컬럼 별 타입', category: '기본기능'}, {name: 'merge', title: '자동 머지 기능', category: '기본기능'}, {name: 'subsum', title: '소계 기능', category: '기본기능'}, {name: 'tree', title: '트리 예제', category: '기본기능'}, {name: 'dataload', title: '대용량 조회', category: '고급기능'}, {name: 'formula', title: '포뮬러 기능', category: '고급기능'}, {name: 'multirecord', title: '멀티레코드', category: '고급기능'}, {name: 'serverscrollpaging', title: '서버 스크롤 페이징', category: '고급기능'}, {name: 'form', title: 'Form 형태를 이용한 상세보기', category: '실무예제'}, {name: 'multiple', title: '여러 개의 시트', category: '실무예제'}, {name: 'dialog', title: '시트 + 다이얼로그', category: '실무예제'}, {name: 'masterDetail', title: '마스터/디테일', category: '실무예제'}];

const matchRoute = idx => {
  switch (route[idx] && route[idx].name) {
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
    case 'serverscrollpaging':
      return <ServerScrollPaging></ServerScrollPaging>;
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

const Navigation = props => {
  const index = route.findIndex((element) => element.name === props.match.params.name);

  return (
    <>
      { matchRoute(index) }
    </>
  )
}

export default Navigation;
