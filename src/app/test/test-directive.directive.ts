import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {
  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  // tslint:disable-next-line:no-input-rename
  @Input('appTestDirective') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
