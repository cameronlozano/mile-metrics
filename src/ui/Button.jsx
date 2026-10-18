import { Button as reactAriaButton } from 'react-aria-components';
import cn from '../utils/cn';

export default function Button({
  type = 'button',
  to,
  renderAs,

  onClick,
  disabled = false,

  className = '',
  variant,

  children,
}) {
  const stylingLookup = {
    submit: cn(
      'border-border-brand text-text-on-color bg-bg-filled rounded-sm border',
    ),
  };

  // If caller provided a button variant, use variant styling
  let variantStyling;
  if (variant != null) variantStyling = stylingLookup[variant];

  // Polymorphic rendering
  const Element = renderAs ?? reactAriaButton;

  return (
    <Element
      type={type}
      disabled={disabled}
      to={to}
      className={cn('cursor-pointer', variant && variantStyling, className)}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}
