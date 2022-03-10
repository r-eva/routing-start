import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  paramSubscription: Subscription

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        if (params.id !== undefined) {
          this.server = this.serversService.getServer(Number(params.id))
        }
      }
    )
    
  }

  ngOnDestroy(): void {
      this.paramSubscription.unsubscribe()
  }

}
