import { Routes } from '@angular/router';
import { GuiaComponent } from './guia/guia.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
    { path: '', component: GuiaComponent },
    { path: 'contacto/editar/:id', component: DetalleComponent}
];
