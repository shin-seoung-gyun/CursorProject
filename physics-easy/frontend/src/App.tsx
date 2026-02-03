import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Topics } from './pages/Topics';
import { Simulations } from './pages/Simulations';
import { NotFound } from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
