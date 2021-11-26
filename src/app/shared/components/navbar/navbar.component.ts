import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {

  }

  formularioDeIngreso = new FormGroup({
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
  });

  loginModal(contenido: any) {
    this.modal.dismissAll();

    this.modal.open(contenido, {
      windowClass: 'modal-login'
    })

    this.formularioDeIngreso.get('username')?.touched
  }

  RegisterModal(contenido: any) {
    this.modal.dismissAll();

    this.modal.open(contenido, {
      windowClass: 'modal-register'
    })
  }

  formularioDeRegistro = new FormGroup({
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required),
    useremail: new FormControl('', Validators.required),
    usernews: new FormControl('', Validators.required),
    useractioncategory: new FormControl('', Validators.required)
  });

  activarCategorias() {
    if ($('.newsprincipal').is(':checked')) {
      $('#categories').show(1000);
    } else {
      $('#categories').hide(1000);
    }
  }

  login() {

    if ($("#usernameLogin").val() != "" && $("#passwordLogin").val() != "") {
      var username = $('#usernameLogin').val();
      var password = $('#passwordLogin').val();

      alert(username + "\n" + password);
    } else {
      alert("Acompleta");
    }
  }

  registrar() {
    var categories: Object[] = [];
    var contador = 0;
    var i = 1;
    if ($('.newsprincipal').is(':checked')) {
      if ($('.checkcategories').is(':checked')) {
        $('.alertcategories').hide();
        if ($("#usernameRegister").val() != "" && $("#passwordRegister").val() != "" && $("#emailRegister").val() != "") {
          var username = $('#usernameRegister').val();
          var password = $('#passwordRegister').val();
          var email = $('#emailRegister').val();
          $("input[type=checkbox]:checked").each(function () {
            if (i != 1) {
              categories.push(this.id);
              contador++;
            } else {
              i++;
            }
          });
          alert(username + "\n" + password + "\n" + email + "\n" +
            categories.map((categoria) => "name: " + categoria));
          /*alert(username + "\n" + password + "\n" + email + "\n" + 
          categories.map( categoria =>  ({name: categoria})));
          /*for (i = 0; i < contador; i++){
            alert(categories[i]);
          }*/
        } else {
          alert("Acompleta");
        }

      } else {
        $('.alertcategories').css('color', '#FC1342');
        $('.alertcategories').show();
      }
    } else {
      if ($("#usernameRegister").val() != "" && $("#passwordRegister").val() != "" && $("#emailRegister").val() != "") {
        var username = $('#usernameRegister').val();
        var password = $('#passwordRegister').val();
        var email = $('#emailRegister').val();
        alert(username + "\n" + password + "\n" + email );
      } else {
        alert("Acompleta");
      }
    }
  }
}
