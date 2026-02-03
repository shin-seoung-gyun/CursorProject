import { Component, ReactNode, ErrorInfo } from 'react';
import { Button } from '../Button';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h2>오류가 발생했습니다</h2>
            <p className="error-message">
              {this.state.error?.message || '알 수 없는 오류가 발생했습니다.'}
            </p>
            <Button onClick={this.handleReset} variant="primary">
              다시 시도
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
