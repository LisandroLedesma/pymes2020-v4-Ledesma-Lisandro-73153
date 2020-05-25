import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";


import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ArticulosFamiliasComponent } from "./components/articulos-familias/articulos-familias.component";
import { MockArticulosFamiliasService } from "./services/mock-articulos-familias.service";
import { MenuComponent } from "./components/menu/menu.component";
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MockArticulosService } from './services/mock-articulos.service';
import { ArticulosFamiliasService } from './services/articulos-familias.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/inicio", pathMatch: "full" },
      { path: "inicio", component: InicioComponent },
      { path: "articulosfamilias", component: ArticulosFamiliasComponent },
      { path: "articulos", component: ArticulosComponent }
    ]),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent
  ],
  bootstrap: [AppComponent],
  providers: [
  {provide: APP_BASE_HREF, useValue : '/' },
  ]
})
export class AppModule {}
