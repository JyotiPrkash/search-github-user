import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  @Input() repoName:string;
  @Input() user:string;
  topicList:any;
  constructor(public server : ServerService) {
    // this.topicList = ['python', 'angular', 'django', 'pythohjgjghhgjn', 'angular', 'djgfgfhdrdango', 'python', 'angular', 'djajkhnvbbnvfngo']
   }

  ngOnInit(): void {
    this.getTopics();
  }


  getTopics(){
    this.server.getRepoTopics(this.user, this.repoName).subscribe((response) => {
      this.topicList = response['topics'];
    }, (error) => {
      this.topicList = [];
    });
  }

}
