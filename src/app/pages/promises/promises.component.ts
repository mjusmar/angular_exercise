import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then( users => {
      console.log(users);
    })
    
    // const promise = new Promise( (resolve, reject) => {
    //   if(false){
    //     resolve('hellow world!');
    //   }
    //   else{
    //     reject('something went wrong');
    //   }
    // }); 

    // promise.then( (mensaje) => {
    //   console.log(mensaje)
    // })
    // .catch( 
    //   error => console.log('Error en mi promesa', error)
    // );

    // console.log('fin del init');
  }

  getUsers(){

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then( body => resolve(body.data));
      
      });
    }

}
