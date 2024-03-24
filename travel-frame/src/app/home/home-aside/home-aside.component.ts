import { Component } from '@angular/core';
import { SearchHomeModalComponent } from '../search-home-modal/search-home-modal.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-aside',
  standalone: true,
  imports: [SearchHomeModalComponent,CommonModule,RouterLink],
  templateUrl: './home-aside.component.html',
  styleUrl: './home-aside.component.css'
})
export class HomeAsideComponent {

}
