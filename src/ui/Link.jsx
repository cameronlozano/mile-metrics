import { Link as ReactRouterLink } from 'react-router';
import cn from '../utils/cn';

export default function Link({ to, children, className = '' }) {
  const styling = cn(
    'text-text-brand-muted text-[10px] font-medium tracking-tight',
  );

  return (
    <ReactRouterLink to={to} className={cn(styling, className)}>
      {children}
    </ReactRouterLink>
  );
}
