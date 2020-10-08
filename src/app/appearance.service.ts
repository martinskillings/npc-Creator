import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {

  constructor() { }

  getAppearance(): string {
    //generates a random number inclusively between 1 and 20
    let appearance = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    switch(appearance) {
      case 1: {
        return "Distinctive jewelry; earrings, necklace, circlet, bracelet, etc.";
      }
      case 2: {
        return "Piercings";
      }
      case 3: {
        return "Flamboyant or outlandish clothes";
      }
      case 4: {
        return "Formal, clean clothes";
      }
      case 5: {
        return "Ragged, dirty clothes";
      }
      case 6: {
        return "Pronounced scar";
      }
      case 7: {
        return "Missing teeth";
      }
      case 8: {
        return "Missing fingers";
      }
      case 9: {
        return "Unusual eye color (or two different colors)";
      }
      case 10: {
        return "Tattoos";
      }
      case 11: {
        return "Birthmark";
      }
      case 12: {
        return "Unusual skin color";
      }
      case 13: {
        return "Bald";
      }
      case 14: {
        return "Braided beard or hair";
      }
      case 15: {
        return "Unusual hair color";
      }
      case 16: {
        return "Nervous eye twitch";
      }
      case 17: {
        return "Distinctive nose";
      }
      case 18: {
        return "Distinctive posture (crooked or rigid)";
      }
      case 19: {
        return "Exceptionally beautiful";
      }
      case 20: {
        return "Exceptionally ugly";
      }
      default: {
        return "This is working now";
      }
    }
  }
}
