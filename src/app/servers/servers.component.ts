import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  selectedServer: number

  constructor(private serversService: ServersService,
              // private router: Router,
              // private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route})     /// navigate method by default does not know on which router you're curently on, therefore you need to pass second parameter)
  
  }

  onClickSelectedServer(id: number) {
    this.selectedServer = id
  }

}
