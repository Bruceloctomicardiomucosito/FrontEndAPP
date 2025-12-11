import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../../interfaces/iEdificio';
import { EdificiosResults } from '../../interfaces/iEdificio';
import { AsyncPipe } from '@angular/common';
import { EdificiosService } from '../services/edificios';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edificios-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './edificios-endpoints.html',
  styleUrl: './edificios-endpoints.css',
})
export class EdificiosEndpoints implements OnInit{

  public EdificiosResults$!: Observable<Edificio[]>;
  public dataSource = new MatTableDataSource<Edificio>();
  public displayColumn: string[] = ['idEdificio','nombre','numeroPisos','funcion','observaciones','detalles','editar'];

  constructor(private service: EdificiosService){ }

  ngOnInit() : void 
  {
    this.getAllEdificios();
  }

  getAllEdificios(){
    this.service.getAllEdificios().subscribe(
      response =>{
        this.dataSource.data = response;
      }
    );
  }
}
