import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl=environment.apiURL
  constructor(private http:HttpClient) { }

  addCourse(course:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.apiUrl}/courses/`,course)
  }

  getCourses():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/courses/`)
  }
  getOneCourse(id:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/courses/${id}`)
  }

  deleteCourse(id:String):Observable<any[]>{
    return this.http.delete<any[]>(`${this.apiUrl}/courses/${id}`)
  }

  updateCourse(course:any,id:any){
    return this.http.patch(`${this.apiUrl}/courses/${id}`,course)
  }
  
  uploadImage(image:any){
    return this.http.post(`https://api.cloudinary.com/v1_1/dcscoeeoo/image/upload`,image)
  }

}
