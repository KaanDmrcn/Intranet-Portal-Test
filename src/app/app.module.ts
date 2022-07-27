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
import { T1headerComponent } from './test/testpage1/components/t1header/t1header.component';
import { T1menuComponent } from './test/testpage1/components/t1menu/t1menu.component';
import { T1middleareaComponent } from './test/testpage1/components/t1middlearea/t1middlearea.component';
import { T1footerComponent } from './test/testpage1/components/t1footer/t1footer.component';
import { MainComponent } from './mainapp/main/main.component';
import { T1Component } from './mainapp/t1/t1.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddleareaComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DirectoryComponent,
    T1headerComponent,
    T1menuComponent,
    T1middleareaComponent,
    T1footerComponent,
    MainComponent,
    T1Component,
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
