import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import './Home.css';

export const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>물리학을 쉽고 재미있게 배워보세요</h1>
        <p className="hero-subtitle">
          인터랙티브한 시뮬레이션과 명확한 설명으로 물리학 개념을 이해하세요
        </p>
        <div className="hero-actions">
          <Link to="/topics">
            <Button size="large" variant="primary">
              주제 탐색하기
            </Button>
          </Link>
          <Link to="/simulations">
            <Button size="large" variant="outline">
              시뮬레이션 보기
            </Button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>주요 기능</h2>
        <div className="features-grid">
          <Card title="인터랙티브 시뮬레이션">
            <p>실시간으로 파라미터를 조절하며 물리 현상을 관찰할 수 있습니다.</p>
          </Card>
          <Card title="명확한 설명">
            <p>수식과 그래프를 통해 물리학 개념을 쉽게 이해할 수 있습니다.</p>
          </Card>
          <Card title="실습 문제">
            <p>다양한 문제를 풀며 학습한 내용을 확인할 수 있습니다.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};
