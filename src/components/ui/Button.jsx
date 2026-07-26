import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import './Button.css';

export default function Button({
  children, variant = 'primary', size = 'md', href, to,
  icon: Icon, iconRight: IconRight, loading = false,
  disabled = false, className = '', ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${loading ? 'btn--loading' : ''} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="btn__spinner" size={16} />}
      {Icon && !loading && <Icon className="btn__icon" size={size === 'sm' ? 14 : 16} />}
      <span>{children}</span>
      {IconRight && <IconRight className="btn__icon-right" size={size === 'sm' ? 14 : 16} />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>;
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
