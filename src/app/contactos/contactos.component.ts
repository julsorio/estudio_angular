import { Component, OnInit } from '@angular/core';
import { Contacto } from '../model/contacto.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements OnInit {
  contactos: Contacto[] = [];
  
  ngOnInit(): void {
    this.contactos = [ {
      nombre: 'nombre1',
      apellido: 'apellido1',
      telefonos: ['123456', '123456'],
      email: 'mail@mail.com'
    }, {
      nombre: 'nombre2',
      apellido: 'apellido2',
      telefonos: ['123456', '123456'],
      email: 'mail@mail.com'
    }
    ]
  }
}
