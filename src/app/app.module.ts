import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';

//ESTOS DE ARRIBA ES LO QUE SE FUE CREANDO, LAS CARPETAS A LAS QUE HACE REFERENCIA

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    PageWrapperComponent

//ESTE ARRAY DE ARRIBA TIENE TODOS LOS COMPIOENENTES.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
