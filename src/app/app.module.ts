import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatsService } from './Shared/cats-service.service';
import { CatsItemComponent } from './cats-list/cats-item/cats-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
