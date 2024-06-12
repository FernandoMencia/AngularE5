import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entrega5';
  name = '';
  email = '';
  address = '';

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
      if (result) {
        this.name = result.name;
        this.email = result.email;
        this.address = result.address;
      }
    });
  }
}
