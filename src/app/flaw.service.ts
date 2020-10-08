import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlawService {

  constructor() { }

  getFlaw(): string {
    //generates a random number inclusively between 1 and 12
    let flaw = Math.floor(Math.random() * (12 - 1 + 1) + 1);

    switch(flaw) {
      case 1: {
        return "Forbidden love or susceptibility to romance";
      }
      case 2: {
        return "Enjoys decadent pleasures";
      }
      case 3: {
        return "Arrogance";
      }
      case 4: {
        return "Envies another creature's possessions or station";
      }
      case 5: {
        return "Overpowering greed";
      }
      case 6: {
        return "Prone to rage";
      }
      case 7: {
        return "Has a powerful enemy";
      }
      case 8: {
        return "Specific phobia";
      }
      case 9: {
        return "Shameful or scandalous history";
      }
      case 10: {
        return "Secret crime or misdeed";
      }
      case 11: {
        return "Possession of forbidden love";
      }
      case 12: {
        return "Foolhardy bravery";
      }
      default: {
        return "This is working now";
      }
    }
  }
}
