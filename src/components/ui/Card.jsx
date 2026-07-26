import './Card.css';

export default function Card({
  children, variant = 'default', hover = true,
  icon: Icon, className = '', onClick, ...props
}) {
  return (
    <div
      className={`card card--${variant} ${hover ? 'card--hover' : ''} ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {Icon && (
        <div className="card__icon">
          <Icon size={24} />
        </div>
      )}
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return <h3 className={`card__title ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }) {
  return <p className={`card__description ${className}`}>{children}</p>;
}
