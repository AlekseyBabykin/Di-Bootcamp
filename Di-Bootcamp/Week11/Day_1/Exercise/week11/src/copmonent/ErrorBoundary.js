import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, error: error });
  };
  render() {
    if (this.state.hasError) {
      return <h3>{this.state.error.toString()}</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
