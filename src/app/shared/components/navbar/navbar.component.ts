import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

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
    this.modal.dismissAll();

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
  }

  formularioDeRegistro = new FormGroup({
    username: new FormControl('',Validators.required),
    userpassword: new FormControl('',Validators.required),
    useremail: new FormControl('',Validators.required),
    usernews: new FormControl('',Validators.required),
    useractioncategory: new FormControl('',Validators.required)
  });

  activarCategorias() {
    if($('.newsprincipal').is(':checked')){
      $('#categories').show(1000);
    }else{
      $('#categories').hide(1000);
    }
  }

  registrar() {
    if($('.newsprincipal').is(':checked')){
      if($('.checkcategories').is(':checked')){
        $('.alertcategories').hide();
        alert("Seleccionaste al menos una categoria, ciudadano.");
      }else{
        $('.alertcategories').css('color', '#FC1342');
        $('.alertcategories').show();
      }
    }else{
      alert("No seleccionaste que quieres recibir novedades, entendido ciudadano.");
    }
  }
}
