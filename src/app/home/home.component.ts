import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import  {  NgbToast, NgbToastService, NgbToastType }  from  'ngb-toast';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchQuery:string = "";
  userdata:object;
  repoList:any = [];
  pageNumber:number = 1;
  totalRepoCount:number = 0;
  isLoaderActive:boolean = true;
  isSearched:boolean = false;
  show:boolean = true;
  toastSuccess: NgbToast;
  toastError: NgbToast;
  constructor(private server : ServerService, private  toastService:  NgbToastService) { }

  ngOnInit(): void {

    this.toastSuccess = {
			toastType:  NgbToastType.Success,
			text:  "",
			dismissible:  true,
      timeInSeconds:3
		}

    this.toastError = {
			toastType:  NgbToastType.Danger,
			text:  "",
			dismissible:  true,
      timeInSeconds:3
		}

  }

  searchUser(){
    this.isLoaderActive = true;
    this.isSearched = true;
    this.server.getUserByUserid(this.searchQuery).subscribe((response) => {

        this.userdata = response;
        this.totalRepoCount = (response['public_repos'] < 100) ? response['public_repos'] : 100;
        this.getRepos();
        this.toastSuccess.text = "Fetched public repos of "+ this.userdata['name']
      
        this.toastService.show(this.toastSuccess);
      
    }, (error:HttpErrorResponse) => {
      this.userdata = {};
      this.isLoaderActive = false;
      this.isSearched = false;
      this.toastError.text = error['message'];
      this.toastService.show(this.toastError);
    });
  }

  getRepos(){
    this.server.getRepoListByUserid(this.searchQuery, this.pageNumber).subscribe((response) => {
      this.repoList = response;
      this.isLoaderActive = false;
      this.isSearched = true;
    }, (error:HttpErrorResponse) => {
      this.repoList = [];
      this.isLoaderActive = false;
      this.isSearched = true;
      this.toastError.text = error['message'];
      this.toastService.show(this.toastError);
    });
  }

}
