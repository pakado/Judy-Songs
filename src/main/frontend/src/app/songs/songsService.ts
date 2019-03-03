import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class SongsService {

  private URL = "https://judysongs.herokuapp.com/api/songs";
  constructor(private http: HttpClient) {

  }

  getSongs() : Observable<any> {
    return this.http.get(this.URL);
  }
}
