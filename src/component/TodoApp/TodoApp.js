import React, { Component } from 'react'
import './TodoApp.css'

 class TodoApp extends Component {

    state={

        todoinput:"",
        items:[]
    }

    storeItems=(event)=>{
        event.preventDefault();
            const{todoinput}=this.state;
          //  const allitems=this.state.items;

           // allitems.push(todoinput);

            this.setState({

                    items:[...this.state.items,todoinput],
                    todoinput:""
            });


    }

    readInput=(event)=>{
        this.setState({
            todoinput: event.target.value
        });
     //  console.log(this.todoinput);
    }

    deleteItem = key =>{
        //console.log(key);
        const allitems=this.state.items;
        allitems.splice(key,1);

        this.setState(
        {
            items:allitems
        });

    }

    render() {
        const{ todoinput,items }=this.state;
      // console.log(items);
        return (
            <div className="todo-container">
                
                <form className="input-section" onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                    <input type="text" 
                    value={todoinput}
                    onChange={this.readInput}
                    placeholder="Enter Item...."/>
                    
                </form>
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>
                            {data}<i class="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}
export default TodoApp;