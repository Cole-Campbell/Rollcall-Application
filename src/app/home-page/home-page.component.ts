import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Response } from '@angular/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [],
  providers: [HttpService]
})

export class HomePageComponent /*implements OnInit*/ {

  constructor(private httpService: HttpService) { }

  asyncString = this.httpService.getData();


  printMe() {
    console.log(this.asyncString);
  }

  //printMe();

  /*ngOnInit() {
    //Calls Observable, but needs to be subscribed to.
    //Callback is either data comes back, an error, or complete.
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }*/

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email:email})
      .subscribe(
        data=> console.log(data)
      );
  }

}
