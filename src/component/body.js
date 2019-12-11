import React, {  Component , Fragment} from "react";
import List from "./list.js";
import Form from "./form.js";
import {inject,observer} from 'mobx-react';
import { toJS } from 'mobx';


@inject('studentsStore')
@observer
class Body extends Component {


  render () {

    const studentsStore = toJS(this.props.studentsStore) ;
    // console.log(studentsStore.students);

    const allList = studentsStore.students.map ((list , index) => {
      return <List details={list}  key={index} index={index} deleteRow={studentsStore.deleteRow} editRow={studentsStore.editRow}/>
    }) ;

    return (
      <Fragment>
        <Form updateName={studentsStore.updateName} updateAge={studentsStore.updateAge} addRow={studentsStore.addRow}
        current={studentsStore.current} age={studentsStore.age} />
        <div>{allList}</div>
      </Fragment>
    )
};

}

export default Body ;
