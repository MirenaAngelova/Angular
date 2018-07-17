import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { SearchComponent } from './components/search/search.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { TableComponent } from './components/table/table.component';

import { AuthService } from './services/auth.service';
import { PokemonDetailService } from './services/pokemon-detail.service';
import { SearchService } from './services/search.service';

import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SearchComponent,
    PokemonDetailComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    SearchService,
    PokemonDetailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
