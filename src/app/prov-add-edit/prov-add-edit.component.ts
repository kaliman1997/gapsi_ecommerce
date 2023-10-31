import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProvidersService } from '../services/providers.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prov-add-edit',
  templateUrl: './prov-add-edit.component.html',
  styleUrls: ['./prov-add-edit.component.scss']
})
export class EmpAddEditComponent {
  provForm : FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _provService : ProvidersService, private _dialogRef: DialogRef<EmpAddEditComponent>
    ){
    this.provForm = this._fb.group({
      nombre : '',
      razonSocial : '',
      direccion : ''
    });

  }

  onClear(){
    this._dialogRef.close();
  }

  onFormSubmit(){
    if(this.provForm.valid){
      console.log(this.provForm.value);
      this._provService.addProvider(this.provForm.value).subscribe({
        next: (val: any)=>{
          console.log(val);
          alert(val.msg);
          this._dialogRef.close();
          

        },
        error: (err: any)=>{
          console.error(err);
          alert(err.error.msg);
        }
        


      });
    }

  }

}
