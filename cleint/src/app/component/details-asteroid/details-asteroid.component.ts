import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/model/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-asteroid',
  templateUrl: './details-asteroid.component.html',
  styleUrls: ['./details-asteroid.component.scss'],
  providers: [AsteroidService]
})
export class DetailsAsteroidComponent {

  dataAsteroid: any;
  

  constructor(private asteroidService: AsteroidService, private commentService: CommentService,  private router: Router ) {
 
    setTimeout(()=>{       
      this.asteroidService.dataSource.subscribe((data: any) => {
        this.dataAsteroid = data;
      });
    }, 3000);
   
    console.log("HATHA "+this.dataAsteroid);

  }

  ngOnInit(): void {
    // this.listDailyAsteroids();
    // console.log("miafene ertek"+this.miafene);
    //this.asteroidID = this.asteroidService.idAmitAtkellvinni;
    this.getCommentsByAsteroid('111111');
   
  }

  striingmertidk = this.asteroidService.stringYesterday;
  asteroids!: Asteroid;
  Object!: Asteroid;
  asteroidID?: string;
  miafene!: string;
  ertek!: string;
  comment: Comment = {
    author:'', 
    commentText: '',
    asteroidId: ''
  };
  submitted = false;
  receivedData: any;


  text: any;
  author: any


  listDailyAsteroids(): void {
    this.asteroidService.listAsteroids()
      .subscribe({
        next: (data) => {
          this.asteroids = data.pop()!;
          const keys = Object.keys(this.asteroids.near_earth_objects);
          //this.res.element_count = this.asteroids?.element_count;
          console.log(this.asteroids);
          console.log(keys)
        },
        error: (e) => console.error(e)
      });
  }


  onOpenAlert() {
    window.alert('The message is ' + this.dataAsteroid);
  }


  createComment(): void {
    const data = {
      author: this.comment.author,
      commentText: this.comment.commentText,
      asteroidId: '111111'
    };

    this.commentService.createComment(data)
      .subscribe({
        next: (res) => {
          console.log("most mentem a commentet"+res);
          this.submitted = true;
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

}
