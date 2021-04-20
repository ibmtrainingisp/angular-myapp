import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserformComponent } from './userform/userform.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
const appRoutes: Routes = [
  { path: '', component: UserformComponent }, //default, Home page
  { path: 'search', component: SearchComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserformComponent,SearchComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent] //first component
})
export class AppModule { }
