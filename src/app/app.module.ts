import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { PaisModule } from './Pais/pais.module';
import { AppRouting } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    SharedModule,
    PaisModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
