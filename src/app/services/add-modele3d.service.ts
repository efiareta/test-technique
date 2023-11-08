import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddModeleService {
  constructor() {}

  getForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      modelName: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      polygonNumber: new FormControl<number>(0, [Validators.required]),
      description: new FormControl(''),
    });
  }

  getListTupleForSelectFiles(): Array<{ label: string; value: string }> {
    return [
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
  }
}
