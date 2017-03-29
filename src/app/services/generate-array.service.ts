//Service generates an awway from an object passed to it. The main use of this
//service is to open arrays within Firebase tables. Primarily this is used
//for getting class lists in a group, and students of a rollcall.

import { Injectable } from '@angular/core';

@Injectable()
export class GenerateArrayService {
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }
}
