import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/model/comment.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { Toast } from 'bootstrap';


@Component({
  selector: 'app-comment-asteroid',
  templateUrl: './comment-asteroid.component.html',
  styleUrls: ['./comment-asteroid.component.scss']
})
export class CommentAsteroidComponent implements OnInit{

  constructor(private commentService: CommentService, private authService: AuthService,private modalService: NgbModal ) {}

  ngOnInit(): void{
    this.getCommentsByAsteroid(this.currentAsteroidId);

    this.authService.currentState.subscribe(data => {
      this.currentState = data;
    });
    this.toast = new Toast(this.toastEl.nativeElement,{});
  }

   /*asteroid data*/
   @Input() currentAsteroidId: any;

   /*logged in or not*/
   currentState= false;

   /*toast message*/
   @ViewChild('myToast',{static:true}) 
   toastEl!: ElementRef<HTMLDivElement>;
   toast: Toast | null = null;
   toastMessage='';

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
          this.openToast('Create comment success!');
          console.log(res);
        },
        error: (e) => {
          this.openToast('Create comment fail!');
          console.error(e);}
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
    this.commentService.updateComment(id, data).subscribe({
      next: (res) => {   
        this.getCommentsByAsteroid(this.currentAsteroidId);
        this.openToast('Update success!');
      },
      error: (e) => {
        this.openToast('Update fail!');
        console.error(e);
      }
    });
    
    
  }

  deleteComment(id: string){
    this.commentService.deleteComment(id).subscribe({ 
      next: () => {
        this.getCommentsByAsteroid(this.currentAsteroidId);
        this.openToast('Delete success!');
      },
      error: (e) => {
        this.openToast('Delete fail!');
        console.error(e);
      }
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

  openToast(msg: string){
    this.toastMessage = msg;
    this.toast!.show();
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
