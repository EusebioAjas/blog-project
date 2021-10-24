import { Directive, ElementRef, Input, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  constructor(public el:ElementRef, public renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'color', "white")
    this.isButton = false
  }

  @HostListener('mouseenter')onMouseEnter () {
    this.hover(true)
  }

  @HostListener('mouseleave')onMouseLeave () {
    this.hover(false)
  }

  @Input() isButton: boolean

  hover(color:boolean): void {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'color', "red")
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', "none")
      if(this.isButton == true){
        this.renderer.setStyle(this.el.nativeElement, 'border', "1px solid #FC1342")
      }
    }else{
      this.renderer.setStyle(this.el.nativeElement, 'color', "white")
      if(this.isButton == true){
        this.renderer.setStyle(this.el.nativeElement, 'border', "1px solid #FFFFFF")
      }
    }
  }

}
