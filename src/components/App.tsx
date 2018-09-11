import * as React from "react";
import { Link } from "react-router-dom";

import Map from "./Map.connect";
import Weather from "./Weather.connect";

export interface AppProps {
  loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="app">
        {this.props.loading && <div className="loading" />}
        <div className="header">
          <h1>Weather Map</h1>
          <small>(This sample application = React + redux-observable + TypeScript)</small>
          <Link to="/PageA">Test1</Link>
          <Link to="/pageB">Test2</Link>
        </div>
        <div className="main">
          <Weather />
          <Map />
        </div>
        <div className="footer">(c) 2018 mitsuru ogawa</div>
      </div>
    );
  }
}
