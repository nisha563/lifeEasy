import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { App } from './app';
import { Counter } from './counter/counter';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    
    {path:'', loadComponent:()=>import('./login/login').then((mob)=>mob.Login)},
    {path:'login', loadComponent:()=>import('./login/login').then((mob)=>mob.Login)},
    {path:'signup', loadComponent:()=>import('./signup/signup').then((com)=>com.Signup)},
    {path:'dashboard', loadComponent:()=>import('./dashboard/dashboard').then((com)=>com.Dashboard),canActivate: [AuthGuard],
        children:[
           { path:'gallery', loadComponent:()=>import('./gallery/gallery').then((com)=>com.Gallery)},
           {path:'chats', loadComponent:()=>import('./chats/chats').then((com)=>com.Chats)},
        ]
    },
];
