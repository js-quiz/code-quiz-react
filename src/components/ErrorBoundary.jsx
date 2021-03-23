import React, { Component } from 'react';
// @ts-ignore
import AirbrakeClient from 'airbrake-js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.airbrake = new AirbrakeClient({
      projectId: 214923,
      projectKey: 'ecb56343de55022bf8811d6097d63937',
    });
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Send error to Airbrake
    this.airbrake.notify({
      error,
      params: { info },
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
