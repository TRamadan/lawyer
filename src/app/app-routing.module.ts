import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [ 

//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
// ]; 

const routes: Routes = [
  { path: '', redirectTo: 'loign', pathMatch: 'full' },
  { path: 'loign', loadChildren: () => import('./loign/loign.module').then(m => m.LoignPageModule) },
  // {
  //   path: 'loign',
  //   loadChildren: () => import('./loign/loign.module').then(m => m.LoignPageModule)
  // },

  {
    path: 'registeration',
    loadChildren: () => import('./registeration/registeration.module').then(m => m.RegisterationPageModule)
  },
  {
    path: 'confirmation-code',
    loadChildren: () => import('./confirmation-code/confirmation-code.module').then(m => m.ConfirmationCodePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'files',
    loadChildren: () => import('./files/files.module').then(m => m.FilesPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'aksam',
    loadChildren: () => import('./aksam/aksam.module').then(m => m.AksamPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsPageModule)
  },
  {
    path: 'mostshareen',
    loadChildren: () => import('./mostshareen/mostshareen.module').then(m => m.MostshareenPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'aksamdetails',
    loadChildren: () => import('./aksamdetails/aksamdetails.module').then(m => m.AksamdetailsPageModule)
  },
  {
    path: 'filescode',
    loadChildren: () => import('./filescode/filescode.module').then(m => m.FilescodePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
