import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

export default function Accordion({ items, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (index) => {
    setOpenItems(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion__item ${openItems.has(i) ? 'accordion__item--open' : ''}`}>
          <button
            className="accordion__trigger"
            onClick={() => toggle(i)}
            aria-expanded={openItems.has(i)}
          >
            <span className="accordion__question">{item.question}</span>
            <ChevronDown className={`accordion__chevron ${openItems.has(i) ? 'accordion__chevron--open' : ''}`} size={20} />
          </button>
          <AnimatePresence>
            {openItems.has(i) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="accordion__content-wrapper"
              >
                <div className="accordion__content">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
