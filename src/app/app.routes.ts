import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { App } from './app';
import { Counter } from './counter/counter';

export const routes: Routes = [
    // {path:'',  redirectTo:'/app-root',component:App},
    {path:'', component:Counter},
    {path:'login', loadComponent:()=>import('./login/login').then((mob)=>mob.Login)},
    {path:'signup', loadComponent:()=>import('./signup/signup').then((com)=>com.Signup)}
];
