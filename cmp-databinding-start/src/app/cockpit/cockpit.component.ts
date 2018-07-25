import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { emit } from 'cluster';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('newServerContent') newServerContent : ElementRef;

  
  constructor() { }

  ngOnInit() {
  }
  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: newServerName.value,
      //serverContent: this.newServerContent
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      //serverName: this.newServerName,
      serverName: newServerName.value,
      //serverContent: this.newServerContent
      serverContent: this.newServerContent.nativeElement.value
    });
  }

}
