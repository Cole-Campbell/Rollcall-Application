import { Injectable } from '@angular/core';

@Injectable()
export class GenerateArrayService {
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }
}
