import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const text = this.el.nativeElement.textContent;
    if (this.appHighlight) {
      const regex = new RegExp(`(${this.appHighlight})`, 'gi');
      this.el.nativeElement.innerHTML = text.replace(
        regex,
        `<mark>$1</mark>`
      );
    } else {
      this.el.nativeElement.textContent = text;
    }
  }
}
