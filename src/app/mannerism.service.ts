import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MannerismService {

  constructor() { }

  getMannerism(): string {
    //generates a random number inclusively between 1 and 20
    let mannerism = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    switch(mannerism) {
      case 1: {
        return "Prone to singing, whistling, or humming quietly";
      }
      case 2: {
        return "Speaks in rhyme or some other peculiar way";
      }
      case 3: {
        return "Particularly low or high voice";
      }
      case 4: {
        return "Slurs words, lisps, or stutters";
      }
      case 5: {
        return "Enunciates overly clearly";
      }
      case 6: {
        return "Speaks loudly";
      }
      case 7: {
        return "Whispers";
      }
      case 8: {
        return "Uses flowery speech or long words";
      }
      case 9: {
        return "Frequently uses the wrong word";
      }
      case 10: {
        return "Uses colorful oaths and exclamations";
      }
      case 11: {
        return "Makes constant jokes or puns";
      }
      case 12: {
        return "Prone to predictions of doom";
      }
      case 13: {
        return "Fidgets";
      }
      case 14: {
        return "Squints";
      }
      case 15: {
        return "Stares into the distance";
      }
      case 16: {
        return "Chews something";
      }
      case 17: {
        return "Paces";
      }
      case 18: {
        return "Taps fingers";
      }
      case 19: {
        return "Bites fingernails";
      }
      case 20: {
        return "Twirls hair or tugs beard";
      }
      default: {
        return "This is working now";
      }
    }
  }
}
