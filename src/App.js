import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Create from './component/Create';
import Lists from './component/Lists'
import {useState} from 'react';

function App() {

  const [lists, setLists] = useState([])
 
  

  return (
    <div className="App">
      <Header></Header>
      <Create onCreate={(_list)=>{
        const newLists = [...lists];
        newLists.push(_list);
        setLists(newLists);
      }}></Create>
      <Lists lists={lists} onDelete={(deleteList, i)=>{
        const newLists=[...lists];
        newLists.splice(i, 1);
        setLists(newLists);
      }} onUpdate={(updateList, i)=>{
        const newLists=[...lists];
        newLists[i] = <Create onCreate={(_list)=>{
          const newLists = [...lists];
          newLists[i]=_list;
          setLists(newLists);
        }}></Create>
        setLists(newLists);
      }} ></Lists>
    </div>
  );
}

export default App;

/*

1. 제목
2. 입력창, 추가 버튼
3. list목록, 수정 버튼, 삭제 버튼 
https://react.vlpt.us/basic/14-array-remove.html

*/