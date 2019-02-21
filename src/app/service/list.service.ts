import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ListService {

  constructor(
    public http: HttpClient
  ) { }

  public getList(id) {
    return this.http.get('/assets/info.json');
  }

}
