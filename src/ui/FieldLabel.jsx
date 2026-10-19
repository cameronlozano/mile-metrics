import { Label } from 'react-aria-components';
import cn from '../utils/cn';

export default function sectionTitle({ children, htmlFor, className = '' }) {
  return (
    <Label
      htmlFor={htmlFor}
      className={cn(
        `text-text-heading text-[10px] font-medium tracking-tight capitalize`,
        className,
      )}
    >
      {children}
    </Label>
  );
}
