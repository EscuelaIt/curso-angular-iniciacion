import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { FechaFormateadaComponent } from './fecha-formateada/fecha-formateada.component';
import { TemplateVarsComponent } from './template-vars/template-vars.component';
import { ComponentProjectionsComponent } from './component-projections/component-projections.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
