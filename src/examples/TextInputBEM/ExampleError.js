import React from "react";
import TextInput from "../../components/TextInput/TextInput";

/** Optional TextBox */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name required"
      />
    );
  }
}
