import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // BaseComponent'i buraya eklemeniz gerekebilir
    // BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule, 
    UiModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'baseUrl', useValue: 'https://localhost:7126/api', multi: true },
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
