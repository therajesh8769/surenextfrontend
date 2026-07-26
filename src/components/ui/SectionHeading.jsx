import './SectionHeading.css';

export default function SectionHeading({ overline, title, description, align = 'left', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {overline && <span className="section-heading__overline">{overline}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
