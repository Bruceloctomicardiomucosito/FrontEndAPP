import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from '../../interfaces/iAula';
import { AulasService } from '../services/aulas';

@Component({
  selector: 'app-aulas-endpoints',
  imports: [AsyncPipe],
  templateUrl: './aulas-endpoints.html',
  styleUrl: './aulas-endpoints.css',
})
export class AulasEndpoints implements OnInit{
  public AulasResults$! : Observable<Aula[]>;
  public rspuesta: any;
  constructor(private service: AulasService){ }

  ngOnInit(): void {
    this.service.getAllAulas().subscribe(response => {
      console.log(response);
      this.rspuesta = response;
    });
  }

}
