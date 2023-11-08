import { Component } from '@angular/core';
import { Modele3dApiService } from './services/modele3d-api.service';
import { MasterComponent } from './viewModele/master/master.component';
import { Observable, of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetailComponent } from './viewModele/detail/detail.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddModele3dComponent } from './add-modele3d/add-modele3d.component';
import { Modele } from './types/modele';

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
  modeles$: Observable<Modele[]> = of([]);
  modelebyId$: Observable<Modele> | undefined;
  dialogRef: MatDialogRef<any, any> | undefined;

  title = 'modele3dApp';

  constructor(
    public dialog: MatDialog,
    private modele3DHttpService: Modele3dApiService
  ) {
    this.loadAllModeles();
  }

  loadAllModeles() {
    this.modeles$ = this.modele3DHttpService.getAllModele3D();
    this.modeles$.subscribe((modeles: Modele[]) => {
      this.modelebyId$ = of(modeles[0]);
    });
  }

  getDetailModeleById(id: string) {
    this.modelebyId$ = this.modele3DHttpService.getModele3dById(id);
  }

  addNewModel(modele: Modele) {
    this.modele3DHttpService.addModele3d(modele).subscribe((modele: Modele) => {
      if (modele !== null) this.loadAllModeles();
    });
  }

  openDialogAddModele() {
    this.dialogRef = this.dialog.open(AddModele3dComponent, {
      width: '500px',
      height: '500px',
    });

    this.dialogRef.componentInstance.submitClicked.subscribe(
      (aModele: Modele) => {
        this.addNewModel(aModele);
        this.dialogRef?.close();
      }
    );
  }
}
