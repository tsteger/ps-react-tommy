import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

export class SuperFetch2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/orgs/lexiconna18/repos")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const { hits } = this.state.data;
    return (
      <div>
        <ul>
          {hits.map(hit => (
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
