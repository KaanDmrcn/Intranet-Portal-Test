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
import { T2Component } from './mainapp/t2/t2.component';
import { T3Component } from './mainapp/t3/t3.component';
import { T2footerComponent } from './test/testpage2/components/t2footer/t2footer.component';
import { T3footerComponent } from './test/testpage3/components/t3footer/t3footer.component';
import { T3menuComponent } from './test/testpage3/components/t3menu/t3menu.component';
import { T3middleareaComponent } from './test/testpage3/components/t3middlearea/t3middlearea.component';
import { T3headerComponent } from './test/testpage3/components/t3header/t3header.component';
import { T2headerComponent } from './test/testpage2/components/t2header/t2header.component';
import { T2menuComponent } from './test/testpage2/components/t2menu/t2menu.component';
import { T2middleareaComponent } from './test/testpage2/components/t2middlearea/t2middlearea.component';
import { T4Component } from './mainapp/t4/t4.component';
import { T4middleareaComponent } from './test/testpage4/components/t4middlearea/t4middlearea.component';
import { T4menuComponent } from './test/testpage4/components/t4menu/t4menu.component';
import { T4footerComponent } from './test/testpage4/components/t4footer/t4footer.component';
import { T4headerComponent } from './test/testpage4/components/t4header/t4header.component';
import { PricesService } from './services/prices.service';
import { HttpClientModule } from '@angular/common/http';

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
    T2Component,
    T3Component,
    T2footerComponent,
    T3footerComponent,
    T3menuComponent,
    T3middleareaComponent,
    T3headerComponent,
    T2headerComponent,
    T2menuComponent,
    T2middleareaComponent,
    T4Component,
    T4middleareaComponent,
    T4menuComponent,
    T4footerComponent,
    T4headerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [PricesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
