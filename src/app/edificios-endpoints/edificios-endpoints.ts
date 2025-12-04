import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../../interfaces/iEdificio';
import { EdificiosResults } from '../../interfaces/iEdificio';
import { AsyncPipe } from '@angular/common';
import { EdificiosService } from '../services/edificios';

@Component({
  selector: 'app-edificios-endpoints',
  imports: [AsyncPipe],
  templateUrl: './edificios-endpoints.html',
  styleUrl: './edificios-endpoints.css',
})
export class EdificiosEndpoints implements OnInit{

  public EdificiosResults$!: Observable<Edificio[]>;
  constructor(private service: EdificiosService){
  }
  ngOnInit() : void 
  {
    this.service.getAllEdificios().subscribe(
      response =>{
        console.log('Lista de edificios',response);
      }
    );
  }
}
