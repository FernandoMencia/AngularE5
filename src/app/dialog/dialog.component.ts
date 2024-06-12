import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  name: string= "";
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  address: string= "";

  getData() {
    return {
      name: this.name,
      email: this.emailFormControl.value,
      address: this.address
    };
  }
  
}
