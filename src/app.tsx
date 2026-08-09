import { lazy, Suspense } from 'react';
import { Header } from './components/header';
import { Container } from './components/container';
import { RemoteErrorBoundary } from './components/remote-error-boundary';

const RemoteApp = lazy(() => import('remoteApp/App'));

function App() {
  return (
    <>
      <Header />
      <Container>
        <RemoteErrorBoundary>
          <Suspense fallback={<p>Loading remote app…</p>}>
            <RemoteApp />
          </Suspense>
        </RemoteErrorBoundary>
      </Container>
    </>
  )
}

export default App
