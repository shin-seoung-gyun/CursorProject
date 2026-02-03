import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/">
        <Button variant="primary">홈으로 돌아가기</Button>
      </Link>
    </div>
  );
};
