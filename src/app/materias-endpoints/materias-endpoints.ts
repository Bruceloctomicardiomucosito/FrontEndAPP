import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../../interfaces/iMateria';
import { MateriasService } from '../services/materias';

@Component({
  selector: 'app-materias-endpoints',
  imports: [AsyncPipe],
  templateUrl: './materias-endpoints.html',
  styleUrl: './materias-endpoints.css',
})
export class MateriasEndpoints implements OnInit{
  public MateriasResults$! : Observable<Materia[]>;
  constructor(private service: MateriasService){ }

  ngOnInit(): void {
    this.service.getAllMaterias().subscribe(
      response =>{
        console.log(response)
    });
  }
}
