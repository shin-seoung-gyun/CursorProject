import { Card } from '../../components/Card';
import './Simulations.css';

export const Simulations = () => {
  const simulations = [
    {
      id: 'free-fall',
      title: '자유낙하',
      description: '중력에 의한 자유낙하 운동을 시뮬레이션합니다',
      status: '준비중',
    },
    {
      id: 'projectile',
      title: '포물선 운동',
      description: '포물선 운동의 궤적을 관찰합니다',
      status: '준비중',
    },
    {
      id: 'shm',
      title: '단순조화운동',
      description: '스프링과 진자의 단순조화운동을 시뮬레이션합니다',
      status: '준비중',
    },
  ];

  return (
    <div className="simulations">
      <h1>시뮬레이션</h1>
      <p className="simulations-intro">
        인터랙티브한 물리 시뮬레이션을 통해 개념을 이해하세요
      </p>
      <div className="simulations-grid">
        {simulations.map((sim) => (
          <Card key={sim.id} title={sim.title} className="simulation-card">
            <p className="simulation-description">{sim.description}</p>
            <span className="simulation-status">{sim.status}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};
