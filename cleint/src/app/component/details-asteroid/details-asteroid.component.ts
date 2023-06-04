import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/model/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-asteroid',
  templateUrl: './details-asteroid.component.html',
  styleUrls: ['./details-asteroid.component.scss']
})
export class DetailsAsteroidComponent implements OnInit{

  /*asteroid data*/
  currentDailyAsteroidsId: any;
  currentAsteroidId: any;

  constructor(private asteroidService: AsteroidService, private commentService: CommentService,  private router: Router ) {}

  ngOnInit(): void {
    this.asteroidService.currentDataDailyAsteroids.subscribe(data => {
      this.currentDailyAsteroidsId = data;
      console.log("currentastid DAILY"+ this.currentDailyAsteroidsId);
    })

    this.asteroidService.currentDataAsteroid.subscribe(data => {
      
     this.currentAsteroidId = data;
     console.log("currentastid"+ this.currentAsteroidId);
    })

    this.listDailyAsteroids(this.currentDailyAsteroidsId);
    this.getCommentsByAsteroid(this.currentAsteroidId);
  }

  striingmertidk = this.asteroidService.stringYesterday;
  asteroids!: Asteroid;
  comment: Comment = {
    author:'', 
    commentText: '',
    asteroidId: ''
  };
  submitted = false;
  receivedData: any;

  /*comment*/
  text: any;
  author: any

  listDailyAsteroids(id: any): void {
    this.asteroidService.getDailyAsteroidsById(id)
      .subscribe({
        next: (data) => {
          this.asteroids = data;
         
          console.log("mai asztaroidak "+this.asteroids.element_count);
        },
        error: (e) => console.error(e)
      });
  }


  // onOpenAlert() {
  //   window.alert('The message is ' + this.dataAsteroid);
  // }


  createComment(): void {
    const data = {
      author: this.comment.author,
      commentText: this.comment.commentText,
      asteroidId: this.currentAsteroidId
    };

    this.commentService.createComment(data)
      .subscribe({
        next: (res) => {
          console.log("most mentem a commentet"+res);
        },
        error: (e) => console.error(e)
      });
      this.comment = {
        author:'', 
        commentText: '',
        asteroidId: ''
      }
  }

  getCommentsByAsteroid(asteroidid: string): void {
    this.commentService.getComments(asteroidid)
      .subscribe({
        next: (data) => {
        this.receivedData = data;
        },
        error: (e) => console.error(e)
      });
  }

  clickEditButton() {
    this.submitted = true;
  }

  updateComment(id: string){
    const data = {
      author: this.author,
      commentText: this.text
    };
    console.log("AZ ADATOK UPDATEHEZ"+data.author+ " "+data.commentText);
    this.commentService.updateComment(id, data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
    window.location.reload();
  }

  deleteComment(id: string){
    this.commentService.deleteComment(id).subscribe({
      next: () => {
        console.log("torolve lett");
      },
      error: (e) => console.error(e)
    });;
  }

  cancelComment(){
    this.comment = {
      author:'', 
      commentText: '',
      asteroidId: ''
    }
    this.submitted = false;
  }

}
