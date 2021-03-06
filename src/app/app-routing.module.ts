
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/page-one/page-one.module').then( m => m.PageOnePageModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./dashboard/page-two/page-two.module').then( m => m.PageTwoPageModule)
  },
  {
    path: 'page-three',
    loadChildren: () => import('./dashboard/page-three/page-three.module').then( m => m.PageThreePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboard/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./dashboard/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'settings-add',
    loadChildren: () => import('./dashboard/settings-add/settings-add.module').then( m => m.SettingsAddPageModule)
  },
  {
    path: 'contents/:direktori',
    loadChildren: () => import('./dashboard/contents/contents.module').then( m => m.ContentsPageModule)
  },
  {
    path: 'content/:contentId',
    loadChildren: () => import('./dashboard/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./dashboard/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
