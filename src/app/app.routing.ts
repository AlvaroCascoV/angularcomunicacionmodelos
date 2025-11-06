import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListaProductosComponent } from './components/lista.productos.component/lista.productos.component';
import { HijoCocheComponent } from './components/hijo.coche.component/hijo.coche.component';
import { PadreCochesComponent } from './components/padre.coches.component/padre.coches.component';
import { PadreDeportesComponent } from './components/padre.deportes.component/padre.deportes.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';

const appRoutes: Routes = [
  { path: '', component: ListaProductosComponent },
  { path: 'padrecoches', component: PadreCochesComponent },
  { path: 'padredeportes', component: PadreDeportesComponent },
  { path: 'libreria', component: LibreriaComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
