import React from "react";

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: "",
      errorInfo: "",
    };
  }
  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
  };
  render() {
    if (this.state.hasError) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}
export default BuggyCounter;
