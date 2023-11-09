import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TupleLabelValue } from '../../types/form';
import { AddModeleService } from '../../services/add-modele3d.service';
/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-add-modele3d',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
  ],
  templateUrl: './add-modele3d.component.html',
  styleUrls: ['./add-modele3d.component.scss'],
})
export class AddModele3dComponent {
  @Output() submitClicked = new EventEmitter<any>();

  filenameList: Array<TupleLabelValue> | undefined;
  modeleForm: FormGroup;

  constructor(private serviceAddModele: AddModeleService) {
    this.filenameList = this.serviceAddModele.getListTupleForSelectFiles();
    this.modeleForm = this.serviceAddModele.getForm();
  }

  onSubmit() {
    const newModele = {
      name: this.modeleForm?.get('name')?.value,
      modelName: this.modeleForm?.get('modelName')?.value,
      author: this.modeleForm?.get('author')?.value,
      polygons: Number(this.modeleForm?.get('polygonNumber')?.value),
      description: this.modeleForm?.get('description')?.value,
    };
    this.submitClicked.emit(newModele);
  }
}
