import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { map, catchError } from 'rxjs/operators'
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient, private global: GlobalService) { }



  getUserByUserid(userID) {
    let url = this.global.apiEndpoints + this.global.getUserAPI + userID;
    return this.http.get(url).pipe(
      map((res) => res),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  getRepoListByUserid(userID, pageNumber) {
    let url = this.global.apiEndpoints + this.global.getUserAPI + userID + this.global.getRepoList + pageNumber;
    return this.http.get(url).pipe(
      map((res) => res),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  getRepoTopics(userID, repoName) {

    let url = this.global.apiEndpoints + this.global.getTopicsAPI + userID + '/' + repoName
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Accept': `application/vnd.github.mercy-preview+json`
      })
    }).pipe(
      map((res) => res),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }



}
