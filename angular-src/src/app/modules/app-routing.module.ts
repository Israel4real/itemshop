import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemGalleryComponent } from '../components/item-gallery/item-gallery.component';
import { ItemFormComponent } from '../components/item-form/item-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/item-shop', pathMatch: 'full' },
  { path: 'item-shop', component: ItemGalleryComponent },
  { path: 'add-item', component: ItemFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
