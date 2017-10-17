import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagComponent } from './tag/tag.component';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    TagListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
