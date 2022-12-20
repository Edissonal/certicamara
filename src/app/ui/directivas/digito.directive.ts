import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigito]'
})
export class DigitoDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    const input = ev.target as HTMLInputElement;
    input.value = String(input.value.replace(/\D+/g, ''));
  }

}
