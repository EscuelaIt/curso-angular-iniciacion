import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SaludosComponent } from '../saludos/saludos.component';

@Component({
  selector: 'app-copyrigth',
  standalone: true,
  imports: [CommonModule, MatButtonModule, SaludosComponent],
  template: `
    <p>
      <button mat-button>My copyrigth</button>
    </p>
    <app-saludos />
  `,
  styles: [],
})
export class CopyrigthComponent {}
