import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";

import { Rubrik } from "./components/Rubrik";
import { CheckboxContainer } from "./components/chkbox/CheckboxContainer";
import { OtherInformation } from "./components/OtherInformation";
import Example10Persent from "./examples/ProgressBar/Example10Percent";
import Example70Persent from "./examples/ProgressBar/Example70Percent";
import Example100Persent from "./examples/ProgressBar/Example100Percent";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Label from "./components/Label/Label";
import EyeIcon from "./components/EyeIcon/Eyeicon";
import ExampleOptional from "./examples/TextInput/ExampleOptional";
import ExampleError from "./examples/TextInput/ExampleError";
import ExampleAllFeatures from "./examples/PasswordInput/ExampleAllFeatures";
import ExampleRegistrationForm from "./examples/RegristrationForm/ExampleRegistrationForm";

import { VitecFetch } from "./components/VitecFetch";
import FetchHooks from "./components/hooks/FetchHooks";
import Hooks from "./components/ReactHooks/myHooks";
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
          <Hooks />
        </div>
        {/* <div>
          <Rubrik rubrik="Best&auml;llningsinformation" />
      
          <CheckboxContainer />
          <Example10Persent />
          <Example70Persent />
          <Example100Persent />
          <ExampleOptional />
          <ExampleError />
          <ExampleAllFeatures />
          <ExampleRegistrationForm />
         
          <ProgressBar percent={100} width={500} height={6} />
          <Label
            htmlFor="test"
            label="Label test av red star and block style "
            required
          />
          <Label htmlFor="test" label="Label test av block style " />
          <EyeIcon />
        </div> */}
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
