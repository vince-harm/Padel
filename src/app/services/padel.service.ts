import { Injectable } from '@angular/core';
import { PadelSite } from '../shared/site.model';
import { uuid } from '../shared/uuid';

@Injectable({
  providedIn: 'root'
})
export class PadelService {
  private sites: PadelSite[] = [
    {
      id: uuid(),
      city: 'Bruxelles',
      clubName: 'The Atomium Padel Club',
      image: 'images/bruxelles.jpg',
      initial: 'B',
      description: 'Situé au cœur de la capitale, ce centre propose des terrains indoor de dernière génération. Idéal pour une partie entre collègues ou un tournoi intensif.'
    },
    {
      id: uuid(),
      city: 'Liège',
      clubName: 'The Carré Club',
      image: 'images/liege.jpg',
      initial: 'L',
      description: 'La "Cité Ardente" porte bien son nom ! Profitez de terrains spacieux et d\'un club-house réputé pour sa convivialité et son ambiance unique.'
    },
    {
      id: uuid(),
      city: 'Arlon',
      clubName: 'Arlon Green Padel',
      image: 'images/arlon.jpg',
      initial: 'A',
      description: 'À la frontière du Luxembourg, ce site offre un cadre verdoyant et apaisant. Des installations modernes parfaites pour s\'évader du quotidien.'
    }
  ];
}
