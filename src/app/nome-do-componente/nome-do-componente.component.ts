import { Component, OnInit } from '@angular/core';
import { NomeDoServicoService } from '../nome-do-serviço.service';

@Component({
  selector: 'app-nome-do-componente',
  templateUrl: './nome-do-componente.component.html',
  styleUrls: ['./nome-do-componente.component.css']
})
export class NomeDoComponenteComponent implements OnInit {
  characterInfo: any[] = [];

  constructor(private service: NomeDoServicoService) { }

  ngOnInit(): void { }

  searchCharacter(name: string): void { this.service.searchCharacter(name).subscribe( data => { this.characterInfo = data; console.log(data); // Inspecione os dados retornados
     }, error => { console.error('Erro ao buscar personagem:', error); } ); }}
