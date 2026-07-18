import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-transparent text-primary border border-border/60 hover:bg-surface-2',
  ghost: 'bg-transparent text-body hover:text-primary',
};

const SIZES = {
  md: 'px-6 py-3 text-sm',
  sm: 'px-4 py-2 text-sm',
};

/**
 * Shared button/link primitive. Renders as a <Link> if `to` is given,
 * an <a> if `href` is given, otherwise a native <button>.
 */
const Button = forwardRef(function Button(
  { to, href, variant = 'primary', size = 'md', icon: Icon, iconPosition = 'right', className = '', children, ...props },
  ref
) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium',
    'transition-colors duration-200 focus-visible:outline focus-visible:outline-2',
    'focus-visible:outline-offset-2 focus-visible:outline-primary',
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2} />}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  );
});

export default Button;
