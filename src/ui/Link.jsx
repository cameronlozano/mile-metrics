import { Link as ReactRouterLink } from 'react-router';
import cn from '../utils/cn';

export default function Link({ to, children, className = '' }) {
  const styling = cn(
    'pt-1.5 pr-1 text-sm font-medium tracking-tight text-emerald-700 transition-all duration-100 hover:-translate-y-0.5 active:scale-95 active:text-green-700/65',
  );

  return (
    <ReactRouterLink to={to} className={cn(styling, className)}>
      {children}
    </ReactRouterLink>
  );
}
