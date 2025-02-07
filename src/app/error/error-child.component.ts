import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-error-child',
  imports: [],
  template: `<p>hola</p>`,
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponentChild{
  constructor(){
    throw new Error('Simulated Load Error');
  }
}
