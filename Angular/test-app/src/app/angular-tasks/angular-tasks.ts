import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angular-tasks',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './angular-tasks.html',
  styleUrl: './angular-tasks.scss',
  standalone: true,
})
export class AngularTasks {

}
