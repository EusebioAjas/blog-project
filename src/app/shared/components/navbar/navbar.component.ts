import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    
  }

  formularioDeIngreso = new FormGroup({
    username: new FormControl('',Validators.required),
    userpassword: new FormControl('',Validators.required)
  });

  loginModal(contenido:any){
    this.modal.open(contenido,{
      windowClass:'modal-login'
    })

    this.formularioDeIngreso.get('username')?.touched
  }

  RegisterModal(contenido:any){
    this.modal.dismissAll();

    this.modal.open(contenido,{
      windowClass:'modal-register'
    })

    this.formularioDeIngreso.get('username')?.touched
  }


}
