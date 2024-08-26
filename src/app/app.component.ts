import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola Mundo Angular desde componente!';

  users: string[] = ['pepe', 'Maria', 'Juan','Andres'];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('hemos hecho click en setVisible');
  }
 
}
