import { LoadingComponent } from './../loading/loading.component';
import { config } from './../app.config.server';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ErrorComponentChild } from './error-child.component';
@Component({
  selector: 'app-error',
  imports: [ErrorComponentChild],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit{
  isContentReady =false;

  ngOnInit() {
     setTimeout(() =>{
      this.isContentReady =true;
     },50000);
  }
 apretarme(){
   alert("Hay Dios");
 }
  }

