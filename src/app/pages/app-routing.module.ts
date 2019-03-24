import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadosComponent } from './certificados/certificados.component';
import {AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';


const app_routes:Routes=[ 
    {path:'',component:CertificadosComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},
    {path:'home',component:HomeComponent},
    {path:'**',pathMatch:'full',redirectTo:''}
];


@NgModule({
    imports:[RouterModule.forRoot(app_routes)]
})
export class AppRoutingModule{

}