import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaProductosComponent } from './components/lista.productos.component/lista.productos.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { appRoutingProvider, routing } from './app.routing';

@NgModule({
  declarations: [App, ListaProductosComponent, MenuComponent],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
