import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: 'certificados', component: CertificadosComponent },
{ path: 'perfil', component: AboutComponent },// direciona al perfil 
{ path: 'item/:id', component: ItemComponent },
{ path: 'inicio', component: HomeComponent },
{ path: 'search/:palabra', component: SearchComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'inicio' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
