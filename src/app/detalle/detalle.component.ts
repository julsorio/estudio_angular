import { Component, OnInit } from '@angular/core';
import { Contacto } from '../model/contacto.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  index: number = 0;

  contacto!: Contacto;

  constructor(private route: ActivatedRoute) {

  }
  
  ngOnInit(): void {
    //indice del registro seleccionado en la lista de contactos
    this.index = this.route.snapshot.params['id'];
    console.log(`indice ${this.index}`);

    this.contacto = this.emptyContacto();
  }

  emptyContacto(): Contacto {
    return {
      nombre: 'abc',
      apellido: 'def',
      telefonos: ['4839483'],
      email: 'ajksf@mail.com'
    }
  }
  
}
