import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemService {

  constructor(private http:Http) { }

  createItem(item){
    return this.http.post('http://localhost:8080/items/create', item)
      .map(res => res.json());
  }

  getItems(){
    return this.http.get('http://localhost:8080/items/list')
      .map(res => res.json());
  }


}
