import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NivelEducativo } from '../../interfaces/iNivelEducativo';
import { NivelesEducativosService } from '../services/niveles-educativos';

@Component({
  selector: 'app-nivel-educativo-endpoints',
  templateUrl: './nivel-educativo-endpoints.html',
  styleUrl: './nivel-educativo-endpoints.css',
})
export class NivelEducativoEndpoints implements OnInit{
  public NivelesEducativosResults$! : Observable<NivelEducativo[]>
  constructor(private service: NivelesEducativosService){ }
  ngOnInit(): void {
    this.service.getAllNivelesEducativos().subscribe(response =>{
      console.log(response);
    });
  }
}
