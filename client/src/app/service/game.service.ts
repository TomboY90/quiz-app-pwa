import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private requestUrl: string = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any[]> {
    return this.http.post(this.requestUrl + 'quiz', {})
      .pipe(
        map((item: any) => item.data)
      )
  }
}
