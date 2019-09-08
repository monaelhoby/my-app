import { observable, action } from "mobx";


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
      name: "Mona",
      age: "20"
    },
  ];
  newAge = "";
  newName= "";

//updateAge
@action
  updateAge = e => {
    this.newAge = e.target.value;
     console.log(e.target.value);
 }

 //updateRow
 @action
   updateName = (e) => {
     this.newName = e.target.value;
       console.log(e.target.value);
   }

  // @action
  //   removeItem(cartItem) {
  //    this.Items = this.Items.filter(item => {
  //     if(item.id !== cartItem.id){
  //       return true ;
  //     }else{
  //       return false
  //     }
  //   })
  //   }
  //
  //   @action
  //   addItem(cartItem) {
  //     this.Items.map(item => {
  //       if (item.id === cartItem.id) {
  //         console.log("item click",item);
  //         // Items.push({id: item.id, productName: item.name, productPrice: item.price, productQuantity: 1})
  //       }
  //     });
  //   }

  //addRow
//
//     addRow = (e) => {
//       e.preventDefault();
//       // let current = this.state.current;
//       // let age = this.state.age;
//       let lists = this.state.lists ;
//       lists.push({name : this.newName , age: this.newAge});
//       this.setState({
//         lists : lists ,
//         current: '',
//         age : ''
//       })
//     }
//
//   //Delete Row
//
//   deleteRow = (index) => {
//     let lists = this.state.lists;
//     lists.splice(index,1);
//     this.setState({
//       lists
//     })
//   }
//
//
//   //Edit Row
//
//   editRow = (index , value , age ) => {
//   let lists = this.state.lists ;
//   let list = lists[index];
//   list['name'] = value ;
//   list['age'] = age ;
//   this.setState({
//     lists
//   })
//
//   }
//
// }
}

const studentsStore = new AllStudents();

export default studentsStore;
