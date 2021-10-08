import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import  {  NgbToast, NgbToastService, NgbToastType }  from  'ngb-toast';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs-compat';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  isRepoLoader:boolean = false;
  isProfileLoader:boolean = false;


  searchUserRequest = new Subject<string>();

  constructor(private server : ServerService, private  toastService:  NgbToastService) {
    
    this.searchUserRequest.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value)
        this.searchUser();
      });

   }

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
    this.isProfileLoader = true;
    this.server.getUserByUserid(this.searchQuery).subscribe((response) => {

        this.userdata = response;
        this.totalRepoCount = (response['public_repos'] < 100) ? response['public_repos'] : 100;
        this.getRepos();
        this.toastSuccess.text = "Fetched public repos of "+ this.userdata['name']
      
        this.toastService.show(this.toastSuccess);
        this.isProfileLoader = false;
    }, (error:HttpErrorResponse) => {
      this.userdata = {};
      this.isSearched = false;
      this.isProfileLoader = false;
      this.toastError.text = error['message'];
      this.toastService.show(this.toastError);
    });
  }

  getRepos(){
    this.isRepoLoader = true;
    this.server.getRepoListByUserid(this.searchQuery, this.pageNumber).subscribe((response) => {
      this.repoList = response;
      this.isSearched = true;
      this.isRepoLoader = false;
    }, (error:HttpErrorResponse) => {
      this.repoList = [];
      this.isSearched = true;
      this.isRepoLoader = false;
      this.toastError.text = error['message'];
      this.toastService.show(this.toastError);
    });
  }

}
