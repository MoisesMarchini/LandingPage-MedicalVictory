import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[sectionAnim]'
})
export class SectionAnimDirective implements OnInit{
  private isAboveHalf = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + scrollPosition;

    this.isAboveHalf = elementTop < (scrollPosition + 100 + viewportHeight / 4 * 3);
  }

  @HostBinding('class.hide-section')
  get hideClass() {
    return !this.isAboveHalf;
  }
}
