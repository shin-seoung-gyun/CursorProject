import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, title, className = '', onClick }: CardProps) => {
  const cardClass = `card ${onClick ? 'card-clickable' : ''} ${className}`.trim();

  return (
    <div className={cardClass} onClick={onClick}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};
