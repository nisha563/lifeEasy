import { ChangeDetectionStrategy, Component,Inject,inject } from '@angular/core';
import {MatDialogActions, MatDialogClose,MatDialogRef, MatDialogContent, MatDialogModule, MatDialogTitle, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogbox',
  imports: [MatDialogModule,MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './dialogbox.html',
  styleUrl: './dialogbox.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialogbox {

readonly dialogRef = inject(MatDialogRef<Dialogbox>);
  constructor(@Inject(MAT_DIALOG_DATA) public data: {content: string,title:string}) { }
}
