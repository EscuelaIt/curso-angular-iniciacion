import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saludos',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Adjunto a standalone component</p> `,
  styles: [],
})
export class SaludosComponent {}
