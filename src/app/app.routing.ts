import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListaProductosComponent } from './components/lista.productos.component/lista.productos.component';

const appRoutes: Routes = [
  { path: '', component: ListaProductosComponent },
  { path: 'listaproductos', component: ListaProductosComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
