import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { CreatedNPCComponent } from './created-npc/created-npc.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    CreatedNPCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
