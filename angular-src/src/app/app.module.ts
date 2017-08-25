import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemGalleryComponent } from './components/item-gallery/item-gallery.component';

import { ItemService } from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
