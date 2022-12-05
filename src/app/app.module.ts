import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiGifsComponent } from './components/api-gifs/api-gifs/api-gifs.component';
import { UserGifsComponent } from './components/user-gifs/user-gifs/user-gifs.component';
import { GifsGridComponent } from './components/gifs-grid/gifs-grid.component';
import { SearchGifsComponent } from './components/search-gifs/search-gifs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserGifsComponent,
    ApiGifsComponent,
    GifsGridComponent,
    SearchGifsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
