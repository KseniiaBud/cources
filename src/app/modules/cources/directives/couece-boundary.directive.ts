import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCoueceBoundary]'
})
export class CoueceBoundaryDirective implements AfterViewInit {
  @Input('appCoueceBoundary') creationDate: Date = new Date();
  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  public ngAfterViewInit(): void {
    let cur = new Date();
    if (this.creationDate > cur) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '1px solid blue')
    }
    if (this.creationDate < new Date() && this.creationDate >= new Date (cur.getFullYear(), cur.getMonth(), cur.getDate()-14) ) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '1px solid green')
    }
  }

}
