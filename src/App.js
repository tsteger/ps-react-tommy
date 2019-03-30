import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";

import { VitecFetch } from "./components/VitecFetch";

import { Rubrik } from "./components/Rubrik";
import { CheckboxContainer } from "./components/chkbox/CheckboxContainer";
import { OtherInformation } from "./components/OtherInformation";

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
          <OtherInformation />
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
