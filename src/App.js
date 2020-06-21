import React, {Component} from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {

  constructor(props) {
    console.log('constructor-app');
    super(props);
    this.state = ({
      name: "stock",
      age: 3,
      showPerson: true,
      fruits: [
          {id: '1', fruitName: 'Fruitname11', fruitColor: 'Red1'},
          {id: '2', fruitName: 'Fruitname22', fruitColor: 'Red2'},
          {id: '3', fruitName: 'Fruitname33', fruitColor: 'Red3'}
      ]
    });
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getderived state from props', props);
    return state;
  }
  clickHandler = () => {
    this.setState({
      name: "clicked",
      age: 33,
      showPerson: !this.state.showPerson
    });
  };
  componentDidMount = () => {
    console.log('component did mount');
  }
  // componentWillMount () {
  //   console.log('component will mount');
  // }
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
    console.log('render');
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
                  return (<li key={index}>{fruit.fruitName}</li>);
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

















