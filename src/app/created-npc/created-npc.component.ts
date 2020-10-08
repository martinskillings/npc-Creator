import { Component, OnInit } from '@angular/core';

//imports the service that actually builds the random info for the npc
import { DisplayNPCService } from '../display-npc.service';

@Component({
  selector: 'app-created-npc',
  templateUrl: './created-npc.component.html',
  styleUrls: ['./created-npc.component.css']
})
export class CreatedNPCComponent implements OnInit {

  constructor(public displayNPC: DisplayNPCService) { }

  ngOnInit(): void {
  }

}
