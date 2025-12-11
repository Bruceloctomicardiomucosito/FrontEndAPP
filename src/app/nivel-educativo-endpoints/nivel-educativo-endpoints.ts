import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NivelEducativo } from '../../interfaces/iNivelEducativo';
import { NivelesEducativosService } from '../services/niveles-educativos';
import { AsyncPipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nivel-educativo-endpoints',
  templateUrl: './nivel-educativo-endpoints.html',
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  standalone : true,
  styleUrl: './nivel-educativo-endpoints.css',
})
export class NivelEducativoEndpoints implements OnInit{
  public NivelesEducativosResults$! : Observable<NivelEducativo[]>
  public dataSource = new MatTableDataSource<NivelEducativo>();
  public displayColumn : string[] = ['idNivelEducativo', 'nombre', 'detalles','editar'];
  constructor(private service: NivelesEducativosService){ }
  ngOnInit(): void {
    this.getAllNiveles();
  }
  getAllNiveles()
  {
    this.service.getAllNivelesEducativos().subscribe(response => {
      this.dataSource.data = response;
    });
  }
}
