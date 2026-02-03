import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Formula.css';

interface FormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export const Formula = ({ formula, display = false, className = '' }: FormulaProps) => {
  const Component = display ? BlockMath : InlineMath;
  return (
    <span className={`formula ${display ? 'formula-block' : ''} ${className}`.trim()}>
      <Component math={formula} />
    </span>
  );
};
