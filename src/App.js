import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";

import { VitecFetch } from "./components/VitecFetch";

import { Rubrik } from "./components/Rubrik";
import { CheckboxContainer } from "./components/chkbox/CheckboxContainer";
import { OtherInformation } from "./components/OtherInformation";
import Example10Persent from "./examples/ProgressBar/Example10Percent";
import Example70Persent from "./examples/ProgressBar/Example70Percent";
import Example100Persent from "./examples/ProgressBar/Example100Percent";
import "./css/css.css";

// Back to basic

export default class App extends Component {
  static displayName = App.name;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <div>
          <Rubrik rubrik="Best&auml;llningsinformation" />
          <CheckboxContainer />
          <Example10Persent />
          <div>next</div>
          <Example70Persent />
          <div>next</div>
          <Example100Persent />
        </div>
        <Route path="/VitecFetch" component={VitecFetch} />
      </Layout>
    );
  }
}
{
  /*
 * � � � codes if neaded
� & aring;  &#229;
� & auml;   &#228;
� & ouml;   &#246;
� & Aring;  &#197;
� & Auml;   &#196;
� & Ouml;   &#214;
*/
}
