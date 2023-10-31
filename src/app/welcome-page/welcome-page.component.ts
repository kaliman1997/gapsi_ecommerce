import { Component } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';



@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  candidate! : any;
  version : any;


  constructor(private _welcomeService : WelcomeService ){

  }

  ngOnInit(){
      
      this.getCandidate();
      this.getVersion();
  }

  getCandidate(){  
    this._welcomeService.getCandidate().subscribe({
      next  : (res) =>{
        console.log(res);
        this.candidate = res;
      }, error : (err) =>{
        console.error(err);
      }
    })
  }

  getVersion(){  
    this._welcomeService.getVersion().subscribe({
      next  : (res) =>{
        console.log(res);
        this.version = res;
      }, error : (err) =>{
        console.error(err);
      }
    })
  }

  

}
