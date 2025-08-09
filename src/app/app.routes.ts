import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';


export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[ //TUdo que renderizar /admin, ele vai renderizar o conteudo do principalCOmponent + o que estive rm CHildren
        {path: "carros", component: CarroslistComponent},
        {path: "carros/new", component: CarrosdetailsComponent},
        {path: "carros/edit/:id", component: CarrosdetailsComponent}
    ]}
];
