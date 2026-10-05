import { useId, type InputHTMLAttributes, type ReactNode } from 'react';

type FieldProps = { id?: string; label: ReactNode; help?: string; error?: string; className?: string } & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

/** Design-system text field: label, 1px-bordered input, optional help or error line. */
export function Field({ id, label, help, error, className, ...rest }: FieldProps) {
  const auto = 'ss-field-' + useId().replace(/[^A-Za-z0-9_-]/g, '');
  const fid = id || auto;
  const noteId = error ? fid + '-error' : help ? fid + '-help' : undefined;
  return (
    <div className={['ss-field', className].filter(Boolean).join(' ')} data-invalid={error ? 'true' : undefined}>
      <label className="ss-field-label" htmlFor={fid}>{label}</label>
      <input type="text" aria-invalid={error ? 'true' : undefined} {...rest} id={fid} className="ss-field-input" aria-describedby={noteId} />
      {error ? <span id={noteId} className="ss-field-error">{error}</span> : help ? <span id={noteId} className="ss-field-help">{help}</span> : null}
    </div>
  );
}
