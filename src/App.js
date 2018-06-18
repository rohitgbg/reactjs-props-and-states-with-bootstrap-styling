import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Rohit",
        age: 23
      },
      {
        id: 2,
        name: "Kathik",
        age: 24
      },
      {
        id: 3,
        name: "Vivek",
        age: 25
      }
    ],
    showPerson: false,
  };

  clickHandler = () => {
    this.setState({
      persons: [
        {
          id: 1,
          name: "Rohit GB",
          age: 23
        },
        {
          id: 2,
          name: "Kathik BN",
          age: 24
        },
        {
          id: 3,
          name: "Vivek GG",
          age: 25
        }
      ],
      showPerson: !this.state.showPerson,
    })
  };

  deletePersonsHandler = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({persons:persons})
  };

  changedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    })

  };


  render() {
    let person = null;
    if(this.state.showPerson){
    person = ( 
       <div >
        {this.state.persons.map((person, index)=>{
          return <Person name={person.name} age={person.age}
          click={() => this.deletePersonsHandler(index)}
          personLength={this.state.personLength}
          changed={(event) => this.changedHandler(event, person.id)}
          key={index}
          />
          })}
        </div>
      )
    }

    let assignedClasses = [];
    //initial color
    assignedClasses.push("alert alert-dismissible alert-success");
   
    //change color based on person length
    if(this.state.persons.length <=2){
      assignedClasses.push("alert alert-dismissible alert-info");
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push("alert alert-dismissible alert-danger");
    }

    return (
          <div className="container">
          <Navbar/>
          <br/>
          <div className="jumbotron">
          <div className="row">
            <div className="col-md-12">
              <div className={assignedClasses}>
                <h4 className="alert-heading">Dynamically Assigning CSS Classes.</h4>
                <p className="mb-0">Whenever you delete following person boxes, color of this box get changes. Delete each person to see color change.</p>
                <p className="mb-0"> To delete click on person name </p>
                <p className="mb-0"> To change the name, just type on input fields </p>
                <br/> <button className="btn btn-primary btn-lg"   role="button" onClick={ (e) => this.clickHandler()}>Click me</button>
             </div>
                  
            </div>
           </div>
           <br/>
            <div className="row"> 
              <div className="col-md 4"> 
                  {person}
              </div>
            </div>
          </div>
          <div class="alert alert-dismissible alert-light">
            <p class="text-center">Developed by <a target="_blank" href="https://github.com/rohitgbg"> Rohith GB </a> </p>
          </div>
      </div>
    );
  }
}
export default App;
