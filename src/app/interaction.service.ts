import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  getInteraction(): string {
    //generates a random number inclusively between 1 and 12
    let interaction = Math.floor(Math.random() * (12 - 1 + 1) + 1);

    switch(interaction) {
      case 1: {
        return "Argumentative";
      }
      case 2: {
        return "Arrogant";
      }
      case 3: {
        return "Blustering";
      }
      case 4: {
        return "Rude";
      }
      case 5: {
        return "Curious";
      }
      case 6: {
        return "Friendly";
      }
      case 7: {
        return "Honest";
      }
      case 8: {
        return "Hot tempered";
      }
      case 9: {
        return "Irritable";
      }
      case 10: {
        return "Ponderous";
      }
      case 11: {
        return "Quiet";
      }
      case 12: {
        return "Suspicious";
      }
      default: {
        return "This is working now";
      }
    }
  }
}
