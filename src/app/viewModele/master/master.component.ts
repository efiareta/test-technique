import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-master',
  standalone: true,

  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    CustomDatePipe,
  ],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent {
  urlImage: string = 'assets/png/children.png';
  @Input() modeles: any;
  @Output() showDetailModele: EventEmitter<string> = new EventEmitter<string>();

  emitEventClick(id: string) {
    this.showDetailModele.emit(id);
  }
}
