import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  modele3dform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    modelName: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    polygonNumber: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  filenameList: Array<any> = [
    {
      label: 'children',
      value: 'children',
    },
    {
      label: 'hobbies',
      value: 'hobbies',
    },
    {
      label: 'house',
      value: 'house',
    },
    {
      label: 'picnic',
      value: 'picnic',
    },
    {
      label: 'piggy',
      value: 'piggy',
    },
    {
      label: 'retirement',
      value: 'retirement',
    },
    {
      label: 'shopping',
      value: 'shopping',
    },
    {
      label: 'stairlift',
      value: 'stairlift',
    },
    {
      label: 'target',
      value: 'target',
    },
    {
      label: 'travel',
      value: 'travel',
    },
    {
      label: 'work',
      value: 'work',
    },
    {
      label: 'write',
      value: 'write',
    },
  ];
  constructor() {}

  onSubmit() {
    const newModele = {
      name: this.modele3dform.get('name')?.value,
      modelName: this.modele3dform.get('modelName')?.value,
      author: this.modele3dform.get('author')?.value,
      polygons: Number(this.modele3dform.get('polygonNumber')?.value),
      description: this.modele3dform.get('description')?.value,
    };
    this.submitClicked.emit(newModele);
  }
}
