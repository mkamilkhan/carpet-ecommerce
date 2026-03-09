import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', backgroundColor: '#ffdcd1', position: 'fixed', zIndex: 9999, top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}>
          <h2>React Error Boundary Caught An Error!</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error && this.state.error.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error && this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
