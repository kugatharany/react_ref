import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.textInput = React.createRef();
    
    this.state={
      firstName:"",
      lastName:"",
      age:"",
      value:""
    }
    
  }
  onHandleClick = () => {
    this.setState({
      value: this.textInput.current.value,  
    })
  }
  onSubmit = () => {
let fname = 
    this.setState({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value }) 
  }
  render() {
    return (
      <div className="App">
        <h1>React Ref - textInput</h1>
        <h3>{this.state.firstName + ' ' + this.state.lastName + ' ' + this.state.age}</h3>
          <div>
          <span>First Name: <input type="text" ref={(input) => { this.firstName = input;}}/></span> <br/>
          <span>Last Name: <input type="text" ref={(input) => { this.lastName = input;}} /></span><br />
          <span>Age: <input type="text" ref={(input) => { this.age = input; }} /></span><br />
              <input type="submit" value="Submit" onClick={this.onSubmit}  />
         </div>
        <br /><br /><br />
        <div>
          <h3>{this.state.value}</h3>
          
          <span>Value: <input type="text" ref={this.textInput} /></span><br />
          <input type="submit" value="Submit" onClick={this.onHandleClick} />
        </div>
      </div>
    );
  }
}


export default App;
