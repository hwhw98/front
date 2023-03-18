function Create(props){

    return <form onSubmit={event=>{
        event.preventDefault();
        const list = event.target.todo.value;
        props.onCreate(list);
    }}>
        <input type="text" name="todo" placeholder="type in" onChange={()=>{
        }}></input>
        <input type="submit" value="+"></input>
    </form>

}

export default Create;