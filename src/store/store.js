import { observable } from "mobx";


class AllStudents {


  @observable
  students = [
    {
      name: "Ahmed",
      age: "12",
    },
    {
      name: "Ali",
      age: "20"
    },
    {
      name: "Lila",
      age: "20"
    },
  ];

  @observable
  age = '' ;

  @observable
  current = '' ;

  //update age
  @observable
   updateAge = e => {
    this.age = e.target.value ;
      // console.log(e.target.value);
  }

  //updateRow
  @observable
    updateName = (e) => {
      this.current = e.target.value ;
        // console.log(e.target.value);
    }


//addRow
@observable
  addRow = (e) => {
    e.preventDefault();
   console.log(this.current);
    if(this.current === "" || this.age === ""){
     alert('Please complete all feilds');
    }else{
      let lists = this.students;
      lists.push({name : this.current , age: this.age});
    }
  }

  //Delete Row
  @observable
  deleteRow = (index) => {
    let lists = this.students;
    lists.splice(index,1);
  }

  //Edit Row
  @observable
  editRow = (index , value , age ) => {
  let lists = this.students ;
  let list = lists[index];
  list['name'] = value ;
  list['age'] = age ;
  }
}

const studentsStore = new AllStudents();

export default studentsStore;
