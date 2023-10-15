import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard.service';
import { authGuard } from './guards/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full',
  },
  {
    path: 'ingreso',
    loadComponent: () => import('./pages/ingreso/ingreso.page').then( m => m.IngresoPage),
    canActivate: [loginGuard]
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
    canActivate: [authGuard]
  },
  {
    path: 'recuperar1',
    loadComponent: () => import('./pages/recuperar1/recuperar1.page').then( m => m.Recuperar1Page)
  },
  {
    path: 'recuperar2',
    loadComponent: () => import('./pages/recuperar2/recuperar2.page').then( m => m.Recuperar2Page)
  },
  {
    path: 'denegado',
    loadComponent: () => import('./pages/denegado/denegado.page').then( m => m.DenegadoPage)
  },
  {
    path: 'accedido',
    loadComponent: () => import('./pages/accedido/accedido.page').then( m => m.AccedidoPage)
  },
];
