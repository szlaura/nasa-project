import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/model/comment.model';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-comment-asteroid',
  templateUrl: './comment-asteroid.component.html',
  styleUrls: ['./comment-asteroid.component.scss']
})
export class CommentAsteroidComponent implements OnInit{

   /*asteroid data*/
   @Input() currentAsteroidId: any;

  constructor(private commentService: CommentService, private modalService: NgbModal ) {}

  ngOnInit(): void{
    this.getCommentsByAsteroid(this.currentAsteroidId);
  }

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
  commentId: any;

  closeResult = '';

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
      this.getCommentsByAsteroid(this.currentAsteroidId);
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
    this.commentId=this.comment._id;
  }

  updateComment(id: string){
    const data = {
      commentText: this.text
    };
    console.log("AZ ADATOK UPDATEHEZ"+data.commentText);
    this.commentService.updateComment(id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.getCommentsByAsteroid(this.currentAsteroidId);
      },
      error: (e) => console.error(e)
    });
    
    
  }

  deleteComment(id: string){
    this.commentService.deleteComment(id).subscribe({ 
      next: () => {
        console.log("torolve lett");
        this.getCommentsByAsteroid(this.currentAsteroidId);
      },
      error: (e) => console.error(e)
    });
    
  }

  cancelComment(){
    this.comment = {
      author:'', 
      commentText: '',
      asteroidId: ''
    }
    this.submitted = false;
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
