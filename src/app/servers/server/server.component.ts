import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../shared/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  id: number = 1;
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // This code works fine, but the better option is the use of Observable

    // if (typeof(this.route.snapshot.params['id']) !== 'undefined'){
    //   this.idServer = Number(this.route.snapshot.params['id']);
    // }
    // this.server = this.serversService.getServer(this.idServer);


    // subscribe bind any change in the app
    // this.id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(this.id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id'])
    //   }
    // );

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
