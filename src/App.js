import React from "react";

import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* 두가지 매우 중요한 Props가 들어가는데, 그 중 한 개가 Rendering할 스크린이 들어가고,
      어떤 URL이 들어가게 될지 요소가 들어가게 될거야  */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/movie-detail" component={Detail} /> */}
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
