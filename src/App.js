import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  // 데이터는 변한다. 화면에 보이는 데이터 중에서 바꾸고 싶은 데이터를 state에 넣어준다.
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    // fetch data from API
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    // ES6 JS - ES6 JS코스 강의 보기
    const { isLoading } = this.state;
    // fetch the data from API in componentDidMount method, then map the movie list in here!

    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
