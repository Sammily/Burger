import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const portion = [
  { id: 0, label: 'small', cal: 45, price: 50 },
  { id: 1, label: 'large', cal: 90, price: 100 },
  { id: 2, label: 'cheese', cal: 30, price: 20 },
  { id: 3, label: 'salad', cal: 2, price: 30 },
  { id: 4, label: 'potato', cal: 10, price: 15 },
  { id: 5, label: 'flavour', cal: 1, price: 5 },
  { id: 6, label: 'mayo', cal: 10, price: 10 },
];

class Burger extends React.Component {
  constructor() {
    super();
    this.state = { cal: 0, sum: 0 };
    this.getChecked = this.getChecked.bind(this);
  }

  getChecked() {
    var values = document.getElementsByClassName('values');
    var arrOfValues = [];

    for (var i = 0; i < values.length; i++) {
      if (values[i].checked) {
        arrOfValues.push(i);
      }
    }

    let cal = 0;
    let sum = 0;
    for (let j = 0; j < values.length; j++) {
      for (let k = 0; k < values.length; k++) {
        if (arrOfValues[j] === portion[k].id) {
          sum = sum + portion[k].price;
          cal = cal + portion[k].cal;
        }
      }
    }

    this.setState({
      cal: cal,
      sum: sum,
    });
  }
  render() {
    return (
      <div id='result'>
        {' '}
        <h1>
          Сумма: <div id='sum'>{this.state.sum}</div>
        </h1>
        <h1>
          Калорийность: <div id='total'>{this.state.cal}</div>
        </h1>
        <button onClick={this.getChecked}>Посчитать</button>
      </div>
    );
  }
}

ReactDOM.render(<Burger />, document.getElementById('root'));
