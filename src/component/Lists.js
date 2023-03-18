import { useState } from 'react';


function Lists(props){

    const printList = [];
    const [mode, setMode] = useState();
    const [targetList, setTarget] = useState("");
    const [index, setIndex] = useState(-1);

    if (mode==="DELETE"){
      props.onDelete(targetList, index);
            //const deleteList = event.target.
      setMode("default")
    } else if(mode==="UPDATE"){
      props.onUpdate(targetList, index);
      setMode("default")
    }

    for(let i=0;i<props.lists.length;i++){
      let l = props.lists[i];
      printList.push(
        //const targetList = event.target;
       
        //props.onUpdate(targetList, index);
        <div>
          <li name="l">{l}</li>
          <input type="button" value="-" onClick={event=>{
            setMode("DELETE");
            setTarget(l);
            setIndex(i);
          }}></input>
          <input type="button" value="change" onClick={event=>{
            setMode("UPDATE");
            setTarget(l);
            setIndex(i);
          }}></input>
        </div>
      );
    }
        
    return<nav>
      <ol>
        {printList}
      </ol>
    </nav>
}

export default Lists;