import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(`constructor called in ${this.props.name}`);
  }
  componentDidMount() {
    console.log(`component did mount called in ${this.props.name}`);
  }
  render() {
    console.log(`render called in ${this.props.name}`);
    return (
      <div>
        <h1>Hii all </h1>
      </div>
    );
  }
}

export default ChildComponent;
