import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  updateForm: FormGroup;
  itemId: string;
  files:any;
  urlimage:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private courseService: CoursesService
  ) {
    this.updateForm = this.fb.group({
      title: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      image: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params.id;
      this.loadItem();
    });
  }

  loadItem(): void {
    this.courseService.getOneCourse(this.itemId).subscribe(res => {
      this.updateForm.patchValue(res);
    });
  }

  onSubmit(): void {
    const formData  = new FormData();
    formData.append('file', this.files);
    formData.append('upload_preset', 'lkffra40');
    formData.append('cloud_name', 'dcscoeeoo');
    this.courseService.uploadImage(formData).subscribe((res)=>{
        this.urlimage = res
        let course = this.updateForm.value
        course.image = this.urlimage.url
        const updatedItem = this.updateForm.value;
        this.courseService.updateCourse(updatedItem,this.itemId).subscribe(response => {
          console.log(response);
          this.router.navigate(['/courses'])
        }, error => {
          console.error('Error updating item', error);
        });
      })
    
  }

  deleteCourse(){
    this.courseService.deleteCourse(this.itemId).subscribe(response => {
      console.log("deleted successfully")
      this.router.navigate(['/courses'])
    })

  }
  onFileSelected(event: any): void {
    this.files = event.target.files[0];
  }
}
