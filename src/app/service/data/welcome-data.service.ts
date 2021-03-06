import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  excecuteHelloWorldBeanService() {

   return  this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  excecuteHelloWorldServiceWithPathVariable(name) {

    return  this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
   }
}
