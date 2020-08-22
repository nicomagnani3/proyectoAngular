import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthorizacionGuard } from './authorizacion.guard';
/* login */
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
 /* Home */
 import { HomeComponent } from "./components/home/home.component";
 import { NovedadesComponent } from "./components/novedades/novedades.component";
 /* Usuario */
 import { UsuarioComponent } from "./components/usuario/usuario.component";
 import { AgregarUsuarioComponent } from "./components/agregar-usuario/agregar-usuario.component";

 const appRoutes = [  
    {
      path : '' ,
      component: HomeComponent,
      canActivate: [AuthorizacionGuard] ,
         children: [     
                    { path: "usuario",
                     component: UsuarioComponent,                 
                     },   
                     { path: "novedades",
                     component: NovedadesComponent,                 
                     },    
                     {
                      path: "agregarUsuario", 
                      component: AgregarUsuarioComponent, 
                                            
                    },
        
                  ]
    },
    { 
       path: "login", 
       component: LoginComponent, 
      
     },
    {
      path: "register", 
      component: RegisterComponent, 
      
    },
    

  { path: '**', redirectTo: "novedades" },

];
export const routing = RouterModule.forRoot(appRoutes);