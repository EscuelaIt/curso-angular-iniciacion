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
import { FormsModule } from '@angular/forms';
import { BookDetailRangeComponent } from './book-detail-range/book-detail-range.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FechaFormateadaComponent } from './fecha-formateada/fecha-formateada.component';
import { TemplateVarsComponent } from './template-vars/template-vars.component';
import { TemplateVarsChildComponent } from './template-vars/template-vars-child/template-vars-child.component';
import { ComponentProjectionsComponent } from './component-projections/component-projections.component';
import { SingleSlotComponent } from './component-projections/single-slot/single-slot.component';
import { ExampleDirAtributoComponent } from './componentes-directivas/example-dir-atributo/example-dir-atributo.component';
import { OtherDirAtributoComponent } from './componentes-directivas/example-dir-atributo/other-dir-atributo/other-dir-atributo.component';
import { ExampleNgmodelComponent } from './componentes-directivas/example-ngmodel/example-ngmodel.component';
import { ExampleDirStructComponent } from './componentes-directivas/example-dir-struct/example-dir-struct.component';
import { SwitchCaseCaroComponent } from './componentes-directivas/example-dir-struct/switch-case-caro/switch-case-caro.component';
import { SwitchCaseBaratoComponent } from './componentes-directivas/example-dir-struct/switch-case-barato/switch-case-barato.component';
import { DirPersonalizadasComponent } from './componentes-directivas/dir-personalizadas/dir-personalizadas.component';
import { HoverHighlightDirective } from './componentes-directivas/dir-personalizadas/directivas/hover-highlight.directive';
import { TextColorHowComponentDirective } from './componentes-directivas/dir-personalizadas/directivas/text-color-how-component.directive';
import { DblClickDirective } from './componentes-directivas/dir-personalizadas/directivas/dbl-click.directive';
import { DateTimeModule } from './date-time/date-time.module';
import { HttpClientModule } from '@angular/common/http';

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
    BookDetailRangeComponent,
    NavigationComponent,
    FechaFormateadaComponent,
    TemplateVarsComponent,
    TemplateVarsChildComponent,
    ComponentProjectionsComponent,
    SingleSlotComponent,
    ExampleDirAtributoComponent,
    OtherDirAtributoComponent,
    ExampleNgmodelComponent,
    ExampleDirStructComponent,
    SwitchCaseCaroComponent,
    SwitchCaseBaratoComponent,
    DirPersonalizadasComponent,
    HoverHighlightDirective,
    TextColorHowComponentDirective,
    DblClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    DateTimeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
