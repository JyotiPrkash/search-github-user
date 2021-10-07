import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiEndpoints: string;
  getUserAPI:string;
  getRepoList:string;
  getTopicsAPI:string;
  constructor() { 
    this.apiEndpoints = "https://api.github.com/";
    this.getUserAPI = "users/";
    this.getRepoList = '/repos?per_page=10&page=';
    this.getTopicsAPI = 'repos/'
  }
}
