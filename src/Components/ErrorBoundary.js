import React, { Component } from 'react';
import { notify } from '../lib/Zendesk';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, errorInfo) {
    notify(
        `Error in Sync Toolbox app: ${error.message}`,
        'error',
        true
    );

  }

  render() {
    if (this.state.hasError) {
      location.reload();
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;