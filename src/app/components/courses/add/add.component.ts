import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  courseForm: FormGroup;
  files:any;
  urlimage : any
  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService,
    private router: Router
    ) {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      image: [null, [Validators.required]]
    });
  }

  onSubmit() {
      const formData  = new FormData();
      formData.append('file', this.files);
      formData.append('upload_preset', 'lkffra40');
      formData.append('cloud_name', 'dcscoeeoo');
      this.courseService.uploadImage(formData).subscribe((res)=>{
          this.urlimage = res
          let course = this.courseForm.value
          course.id = Math.floor(Math.random() * 100)
          course.image = this.urlimage.url
          this.courseService.addCourse(course).subscribe((res)=>{
            this.router.navigate(['/courses'])
          })
        })
  }

  onFileSelected(event: any): void {
    this.files = event.target.files[0];
  }
  
}


  
