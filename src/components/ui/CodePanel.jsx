import { GitBranch, CheckCircle2 } from 'lucide-react';
import './CodePanel.css';

const LINES = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'plain', v: ' { build } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@surenext/core'" }] },
  { indent: 0, tokens: [{ t: 'plain', v: '' }] },
  { indent: 0, tokens: [{ t: 'keyword', v: 'export function' }, { t: 'fn', v: ' launch' }, { t: 'plain', v: '(idea) {' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'const' }, { t: 'plain', v: ' product = build(idea)' }] },
  { indent: 2, tokens: [{ t: 'plain', v: '.' }, { t: 'fn', v: 'withDesign' }, { t: 'plain', v: '()' }] },
  { indent: 2, tokens: [{ t: 'plain', v: '.' }, { t: 'fn', v: 'withEngineering' }, { t: 'plain', v: '()' }] },
  { indent: 2, tokens: [{ t: 'plain', v: '.' }, { t: 'fn', v: 'ship' }, { t: 'plain', v: '()' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'return' }, { t: 'plain', v: ' product' }, { t: 'comment', v: ' // on time, every time' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '}' }] },
];

export default function CodePanel() {
  return (
    <div className="code-panel">
      <div className="code-panel__decoration" aria-hidden="true" />
      <div className="code-panel__window">
        <div className="code-panel__bar">
          <div className="code-panel__dots">
            <span /><span /><span />
          </div>
          <span className="code-panel__filename">launch.ts</span>
        </div>
        <div className="code-panel__body">
          {LINES.map((line, i) => (
            <div className="code-panel__line" key={i}>
              <span className="code-panel__line-number">{i + 1}</span>
              <span className="code-panel__line-content" style={{ paddingLeft: `${line.indent * 1.25}em` }}>
                {line.tokens.map((tok, j) => (
                  <span key={j} className={`code-panel__tok code-panel__tok--${tok.t}`}>{tok.v}</span>
                ))}
                {i === LINES.length - 2 && <span className="code-panel__cursor" />}
              </span>
            </div>
          ))}
        </div>
        <div className="code-panel__footer">
          <span className="code-panel__status">
            <GitBranch size={12} /> main
          </span>
          <span className="code-panel__status code-panel__status--ok">
            <CheckCircle2 size={12} /> build passing
          </span>
        </div>
      </div>
    </div>
  );
}
