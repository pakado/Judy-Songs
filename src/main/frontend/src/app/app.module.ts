import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsAddComponent } from './songs/songs-add/songs-add.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongsComponent } from './songs/songs.component';
import { SongsService} from './songs/songsService';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SongsAddComponent,
    SongsListComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
