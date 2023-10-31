import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './prov-add-edit/prov-add-edit.component';
import { ProvidersService } from './services/providers.service';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = [ 'nombre', 'razonSocial', 'direccion', 'accion'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog:MatDialog, 
    private _provService : ProvidersService
    ){
      
  }

  ngOnInit(): void{
    console.log('onInit');
    this.getProvidersList();
  }

  openAddEditEmpForm(){
    this._dialog.open(EmpAddEditComponent).afterClosed().subscribe(
      () => {
        this.getProvidersList();
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProvidersList(){
    this._provService.getProviderList().subscribe({
      next  : (res) =>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, error : (err) =>{
        console.error(err);
      }
    })
  }

  deleteProvider(nombre : string){
    this._provService.deleteProvider(nombre).subscribe({
      next : (res) => {
        alert("Provedor eliminado");
        this.getProvidersList();
      },
      error : console.error

    });
  }


}
