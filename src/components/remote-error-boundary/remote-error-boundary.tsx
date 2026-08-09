import { Component, type PropsWithChildren } from 'react';

type RemoteErrorBoundaryState = {
  hasError: boolean;
};

export class RemoteErrorBoundary extends Component<PropsWithChildren, RemoteErrorBoundaryState> {
  state: RemoteErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): RemoteErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Remote app is unavailable.</p>;
    }

    return this.props.children;
  }
}
