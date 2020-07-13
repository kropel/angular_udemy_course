import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName = '';
  allowNewServer = false;
  classNames = 'btn btn-primary';
  serverCreation = 'Noserver creating';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['TestServer', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }
  onCreateServer(e) {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = `Server was created. Name is ${this.serverName}`;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
