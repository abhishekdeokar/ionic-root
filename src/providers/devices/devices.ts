import { Http, Headers } from '@angular/http';  //according to website
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DevicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DevicesProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
    //console.log('Hello DevicesProvider Provider');
  }

  getDevices(){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:30000/api/tests')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }


/*createReview(review){
 
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), {headers: headers})
    .subscribe(res => {
      console.log(res.json());
    });

}*/
addDevice(device){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  this.http.post('http://localhost:30000/api/tests', device,{headers: headers})
  .subscribe(res => {
    console.log(res.json());
  });
}

deleteDevice(id){
  this.http.delete('http://localhost:30000/api/tests/'+id).subscribe((res) => {
    console.log(res.json());
  });
}

}