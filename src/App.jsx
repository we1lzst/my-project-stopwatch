import React, { Component } from 'react';
import './index.css';


class App extends Component {
    state = {
      count: 0,
      key: false,
    }
  timer = () => {
    this.setState({key: this.state.key = true})
    this.a = setInterval(() => {
      localStorage.setItem('count', this.state.count)
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  stopTimeRes = () => {
    this.setState({count: +localStorage.getItem('count')})
    this.setState({key: this.state.key = false})
    clearInterval(this.a);
  }

  stopTime = () => {
    this.setState({count: this.state.count = 0})
    this.setState({key: this.state.key = false})
    localStorage.clear();
  }
  
  componentDidMount() {
    if (this.state.count == 0) {
      console.log('mount')
      this.state.count = +localStorage.getItem('count')
    } else {
      this.state.count = +localStorage.getItem('count')
    }
  }
  componentDidUpdate() {
    console.log('update')
    if (this.state.key == false) {
        clearInterval(this.a);
    }
  }

  componentWillUnmount() {
    clearInterval(this.a);
  }


  render() {
      return (
      <div className="App">
          <div className='container'>
            <h1>Секундомер</h1>
            <h1 className='App_count'>{+localStorage.getItem('count')}</h1>
            <div className="App-start-restart">
              {!this.state.key ? (<button onClick={this.timer} >Начать</button>) : <button onClick={this.stopTimeRes}>Остановить</button>}
              <button onClick={this.stopTime}>Перезапустить</button>
            </div>
          </div>
      </div>
    );
  }

}

export default App;
