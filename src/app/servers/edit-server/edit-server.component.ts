import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../shared/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: {id: number, name: string, status: string};
  serverId: number;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Method 1: Whit snapshot
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    // Method 2: With subscribe (RECOMENDED)
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(this.serverId);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id'])
      }
    );

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus
      });
  }

}
