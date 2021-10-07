import { Component, Input, OnInit } from '@angular/core';
import { Repo } from './repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo: Repo;
  repoName:string = "";
  repoOwner:string = "";
  constructor() { }

  ngOnInit(): void {
    this.repoName = this.repo.name;
    this.repoOwner = this.repo.owner.login;
  }

}
