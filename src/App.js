import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state; //ES6의 적용
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
    // isLoading 라면? "Loading"을 출력, 아니면 "We are ready" 출력하라.
  }
}

export default App;
