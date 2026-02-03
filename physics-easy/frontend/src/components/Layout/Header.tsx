import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1>Physics Easy</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">홈</Link>
          <Link to="/topics" className="nav-link">주제</Link>
          <Link to="/simulations" className="nav-link">시뮬레이션</Link>
        </nav>
      </div>
    </header>
  );
};
