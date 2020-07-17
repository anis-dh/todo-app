import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from 'protractor';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'test message';
  welcomeMessageFromService: string;
  name = '';
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit() {
    // console.log( this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    console.log(this.service.excecuteHelloWorldBeanService());
    this.service.excecuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error));
  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.excecuteHelloWorldBeanService());
    this.service.excecuteHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error));
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response.message);
  }

  handleErrorResponse(error) {

    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
