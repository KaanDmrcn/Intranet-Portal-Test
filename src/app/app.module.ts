import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleareaComponent } from './components/middlearea/middlearea.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectoryComponent } from './components/directory/directory.component';

import { DevExtremeModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    MiddleareaComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
