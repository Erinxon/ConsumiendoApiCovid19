import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid.interface';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  covid!: Covid;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.getInfoCovid();
  }

  getInfoCovid(): void {
    this.covidService.getInfoCovid().subscribe(
      (response) => {
        this.covid = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  getCasosActivos(): string {
    const confirmados = +this.covid.confirmados.replace(',','');
    const recuperados = +this.covid.recuperados.replace(',','');
    const fallecidos = +this.covid.fallecidos.replace(',','');
    const casosActivos = confirmados - recuperados - fallecidos;
    return casosActivos.toString();
  }

  getCasosActivosPorProvincia(confirmados: string, recuperados: string, fallecidos: string): string {
    const casosActivos = (Number.parseInt(confirmados) - Number.parseInt(recuperados)) - Number.parseInt(fallecidos);
    return casosActivos.toString();
  }

}
