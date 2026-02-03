import { Card } from '../../components/Card';
import './Topics.css';

export const Topics = () => {
  const topics = [
    {
      id: 'mechanics',
      title: '역학',
      description: '운동, 힘, 에너지에 대해 배워보세요',
      topics: ['운동학', '동역학', '에너지'],
    },
    {
      id: 'waves',
      title: '파동',
      description: '파동의 성질과 간섭 현상을 이해하세요',
      topics: ['단순조화운동', '파동의 간섭', '도플러 효과'],
    },
    {
      id: 'electricity',
      title: '전기',
      description: '전기장과 전류에 대해 학습하세요',
      topics: ['전기장', '회로', '옴의 법칙'],
    },
  ];

  return (
    <div className="topics">
      <h1>물리학 주제</h1>
      <p className="topics-intro">
        다양한 물리학 주제를 선택하여 학습하세요
      </p>
      <div className="topics-grid">
        {topics.map((topic) => (
          <Card key={topic.id} title={topic.title} className="topic-card">
            <p className="topic-description">{topic.description}</p>
            <ul className="topic-list">
              {topic.topics.map((subTopic, index) => (
                <li key={index}>{subTopic}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};
