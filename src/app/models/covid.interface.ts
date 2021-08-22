import { CovidPorProvincia } from "./CovidPorProvincia";

export interface Covid 
{
    confirmados: string;
    recuperados: string;
    fallecidos: string;
    covidPorProvincia: CovidPorProvincia[];
    ultimaActualizacion: string;
}
