import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CounterComponent,  RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'Hola Mundo Angular desde componente!';
  
  subTitle = 'Contador con estado de sesión';
  
  
  users: string[] = ['pepe', 'Maria', 'Juan','Andres'];
  
  visible: boolean = false;
  
  counter: number =0;
  
  ngOnInit(): void {
   this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }
  setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('hemos hecho click en setVisible');
  }

  setCounter(counter: number): void{
  this.counter = counter;
  }
 
}
