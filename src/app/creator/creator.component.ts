import { Component, OnInit } from '@angular/core';

import { DisplayNPCService } from '../display-npc.service'; //imports the function used below


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor(private displayNPC: DisplayNPCService) { }

  ngOnInit(): void {
    
  }

  getNPC(): void{
    this.displayNPC.getNPC(); //calls the getNPC function from display-npc service
  }

}
