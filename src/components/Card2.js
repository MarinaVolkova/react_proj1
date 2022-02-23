import React, { Component } from 'react';


class Card2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      count: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this', this.state);
  }

  handleCount = () => {
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // });

    this.setState({ count: 1000 });
  }

  componentDidMount() {
    this.setState({ width: 600 });
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //    if (this.state.count > 2) {
  //      alert('MARINA!')
  //    }
  // }

  render() {
    return (
      <div>
        width: { this.state.width }
        count CLASS: { this.state.count }
        <button onClick={this.handleCount}>BUTTON</button>
      </div>
    );
  }
}

export default Card2;
