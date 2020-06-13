import React, {Component} from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {
  state = ({
    name: "stock",
    age: 3,
    showPerson: true,
    fruits: [
        {id: '1', fruitName: 'Fruitname11', fruitColor: 'Red1'},
        {id: '2', fruitName: 'Fruitname22', fruitColor: 'Red2'},
        {id: '3', fruitName: 'Fruitname33', fruitColor: 'Red3'}
    ]
  });
  clickHandler = () => {
    this.setState({
      name: "clicked",
      age: 33,
      showPerson: !this.state.showPerson
    });
  };
  changeHandler = event => {
    this.setState({
      name: event.target.value,
      age: 3333,
    });
  };
  btnStyle = {
    backgroundColor: "#eee",
    border: "1px gold solid",
    color: "brown",
    padding: "5px"
  };
  render () {
    let box = null;
    if (this.state.showPerson) {
        box = (<Person 
            name={this.state.name} 
            onChange={this.changeHandler}>
        </Person> )
    } 
    return (
      <div>
        <ol>
            {
                this.state.fruits.map((fruit, index) => {
                    return (<li>{fruit.fruitName}</li>);
                })
            }
        </ol>
        <button 
          style={this.btnStyle} 
          onClick={this.clickHandler}>
          click me
        </button>
         {box}
      </div>
    );
  }
};

export default App;
