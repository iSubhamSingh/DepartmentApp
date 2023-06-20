import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  
  {
    path: 'gallerys',
    loadChildren: () => import('../gallerys/gallerys.module').then( m => m.GallerysPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('../event/event.module').then( m => m.EventPageModule)
  },
  
  {
    path: 'contact',
    loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
