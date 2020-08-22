import { routing } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, UsuarioComponent, NovedadesComponent, AgregarUsuarioComponent],
  imports: [BrowserModule, 
             ReactiveFormsModule,
             MatMenuModule,
             MatToolbarModule,
             MatInputModule,
             MatIconModule,
             MatCardModule,
            routing,
            FormsModule,
            HttpClientModule,
            NgbModule,
            MatTableModule,
            BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}