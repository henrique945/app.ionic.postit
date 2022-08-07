import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

export const authenticatedRouteParams = {
  canActivate: [AuthenticationGuard],
  data: {
    protectedRoute: true,
    routeToRedirect: '/login'
  }
}
export const unAuthenticatedRouteParams = {
  canActivate: [AuthenticationGuard],
  data: {
    unprotectedRoute: true,
    routeToRedirect: '/home'
  }
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    ...unAuthenticatedRouteParams,
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/main/home/home.module').then(m => m.HomePageModule),
    ...authenticatedRouteParams
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/main/feed/feed.module').then(m => m.FeedPageModule),
    ...authenticatedRouteParams
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/main/profile/profile.module').then(m => m.ProfilePageModule),
    ...authenticatedRouteParams
  },
  {
    path: 'feed/:id',
    loadChildren: () => import('./pages/main/feed-detail/feed-detail.module').then(m => m.FeedDetailPageModule),
    ...authenticatedRouteParams
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
