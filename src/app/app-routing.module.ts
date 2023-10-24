import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { FechaFormateadaComponent } from './fecha-formateada/fecha-formateada.component';
import { TemplateVarsComponent } from './template-vars/template-vars.component';
import { ComponentProjectionsComponent } from './component-projections/component-projections.component';
import { ExampleDirAtributoComponent } from './componentes-directivas/example-dir-atributo/example-dir-atributo.component';
import { ExampleNgmodelComponent } from './componentes-directivas/example-ngmodel/example-ngmodel.component';
import { ExampleDirStructComponent } from './componentes-directivas/example-dir-struct/example-dir-struct.component';
import { DirPersonalizadasComponent } from './componentes-directivas/dir-personalizadas/dir-personalizadas.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'books/:bookId',
    component: BookDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'fecha-formateada',
    component: FechaFormateadaComponent,
  },
  {
    path: 'template-vars',
    component: TemplateVarsComponent,
  },
  {
    path: 'projection',
    component: ComponentProjectionsComponent,
  },
  {
    path: 'dir-atributo',
    component: ExampleDirAtributoComponent,
  },
  {
    path: 'example-ng-model',
    component: ExampleNgmodelComponent,
  },
  {
    path: 'app-example-dir-struct',
    component: ExampleDirStructComponent,
  },
  {
    path: 'app-dir-personalizadas',
    component: DirPersonalizadasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
