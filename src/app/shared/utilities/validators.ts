import { AbstractControl } from '@angular/forms';

export const validateNotWhitespace = (control: AbstractControl) => {
  const isWhitespace = (control.value || '').trim().length === 0;

  return !isWhitespace ? null : { trimmed: true };
};
