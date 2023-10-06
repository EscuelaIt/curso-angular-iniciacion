import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BotonBaratoComponent } from './boton-barato/boton-barato.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { DisplayBlockComponent } from './display-block/display-block.component';
import { EnlineaComponent } from './enlinea/enlinea.component';
import { ConprefijoComponent } from './conprefijo/conprefijo.component';
import { SoyManualComponent } from './soy-manual/soy-manual.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TopBarComponent,
    BotonBaratoComponent,
    BookDetailComponent,
    BottomBarComponent,
    DisplayBlockComponent,
    EnlineaComponent,
    ConprefijoComponent,
    SoyManualComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
