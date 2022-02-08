import { FormControl } from '@angular/forms';

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const userValidator = (control: FormControl) => {
    const value = control.value?.trim().toLowerCase();
    
    if(value === 'eduardorg') {
      return {
        noEduardo: true
      }
    }
    return null;
}