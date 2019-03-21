import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'inicio',component:CertificadosComponent},
  {path:'perfil',component:AboutComponent},// direciona al perfil 
  {path:'item/:id',component:ItemComponent},
  {path:'search/:palabra',component:SearchComponent},
  {path:'**',pathMatch:'full',redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
