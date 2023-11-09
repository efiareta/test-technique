import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [CommonModule, MatCardModule, MatGridListModule, CustomDatePipe],
})
export class DetailComponent {
  @Input() modele: any;
}
