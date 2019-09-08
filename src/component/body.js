import React, {  Component , Fragment} from "react";
import List from "./list.js";
import Form from "./form.js";
import {inject,observer} from 'mobx-react';
import { toJS } from 'mobx';




@inject('studentsStore')
@observer
class Body extends Component {


// constructor (){
//   super();
//   console.log(studentsStore.students);
// }
state = {
       lists : [
         {name : "ali" ,age: 12},
         {name : "ahmed" , age : "17"},
         {name : "mohamed" , age : "15"},
       ],
       current : "" ,
       age : ""
}
//update age

 updateAge = e => {
  this.setState({age:e.target.value});
    // console.log(e.target.value);
}

//updateRow

  updateName = (e) => {
    this.setState({current:e.target.value});
      // console.log(e.target.value);
  }

//addRow

  addRow = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let age = this.state.age;
    let lists = this.state.lists ;
    lists.push({name : current , age: age});
    this.setState({
      lists : lists ,
      current: '',
      age : ''
    })
  }

//Delete Row

deleteRow = (index) => {
  let lists = this.state.lists;
  lists.splice(index,1);
  this.setState({
    lists
  })
}


//Edit Row

editRow = (index , value , age ) => {
let lists = this.state.lists ;
let list = lists[index];
list['name'] = value ;
list['age'] = age ;
this.setState({
  lists
})

}


  render () {

    const lists = toJS(this.props.studentsStore.students) ;
      console.log(lists);
    const allList = lists.map ((list , index) => {
      return <List details={list}  key={index} index={index} changeAge={this.changeAge} deleteRow={this.deleteRow} editRow={this.editRow}/>
    }) ;

  return (
    <Fragment>
      <Form updateName={this.updateName} updateAge={this.updateAge} addRow={this.addRow} current={this.state.current} age={this.state.age} />
      <div>{allList}</div>
    </Fragment>
  )
};

}

export default Body ;
