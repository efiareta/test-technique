import { Component } from '@angular/core';
import { Modele3dApiService } from './modele3d-api.service';
import { MasterComponent } from './viewModele/master/master.component';
import { Observable, of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetailComponent } from './viewModele/detail/detail.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddModele3dComponent } from './add-modele3d/add-modele3d.component';

@Component({
  imports: [
    MasterComponent,
    DetailComponent,
    MatGridListModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modeles$: Observable<any> = of([]);
  modelebyId$: Observable<any> = of(undefined);
  dialogRef: any;
  title = 'modele3dApp';
  constructor(
    public dialog: MatDialog,
    private modele3DHttpService: Modele3dApiService
  ) {
    this.loadAllModeles();
  }

  loadAllModeles() {
    this.modeles$ = this.modele3DHttpService.getAllModele3D();
    this.modeles$.subscribe((data) => {
      this.modelebyId$ = of(data[0]);
    });
  }

  getDetailModeleById(id: string) {
    this.modelebyId$ = this.modele3DHttpService.getModele3dById(id);
  }

  addNewModel(modele: any) {
    this.modele3DHttpService.addModele3d(modele).subscribe((data: any) => {
      if (data !== null) this.loadAllModeles();
    });
  }

  openDialogAddModele() {
    this.dialogRef = this.dialog.open(AddModele3dComponent, {
      width: '500px',
      height: '500px',
    });

    this.dialogRef.componentInstance.submitClicked.subscribe((result: any) => {
      console.log('Got the data!', result);
      this.addNewModel(result);
      this.dialogRef.close();
    });
  }
}
