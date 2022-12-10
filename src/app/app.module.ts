import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiGifsComponent } from './components/api-gifs/api-gifs/api-gifs.component';
import { UserGifsComponent } from './components/user-gifs/user-gifs/user-gifs.component';
import { GifsGridComponent } from './components/gifs-grid/gifs-grid.component';
import { SearchGifsComponent } from './components/search-gifs/search-gifs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { GifActionsComponent } from './components/gif-actions/gif-actions.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    UserGifsComponent,
    ApiGifsComponent,
    GifsGridComponent,
    SearchGifsComponent,
    GifActionsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    DragDropModule,
    MatTooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
