import { Component } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
  

  headers = [];

  todoArray=[];
  
  test(){
    var self = this;

    $.ajax({
                url: "http://localhost:8088/classementConstructeurs",
                type: "POST",
                method: "POST",
                cache: false,
                crossDomain: true,
                success: function (data) {
                 //alert(JSON.stringify(data));
                  printClassementConstructeurs(data);
                  self.todoArray = data;

                  self.headers = ["position","ecurie_name", "nb_points"];
                   
                  //add position column :
                  var i=1;
                  for (var v of data) {
                    data[i-1]["position"] = i;
                    i++;
                  }

                 


                  //result = JSON.stringify(data);
                //  template: `<div class="data">  
                //     <ul class="list-instyled">  
                //       <li *ngFor="let todo of data">{{todo}}</li>  
                //     </ul>  
                //   </div>`
           
                  // @Component({
                  //   selector:'heroes',
                  //   template: `
                  //   <table>
                  //       <thead>
                  //           <th>ecurie_name</th>
                  //           <th>id_ecurie</th>
                  //       </thead>
                  //       <tbody>
                  //           <tr *ngFor="let hero of heroes">
                  //               <td>{{hero.ecurie_name}}</td>
                  //               <td>{{hero.id_ecurie}}</td>
                  //           </tr>
                  //       </tbody>
                  //   </table>
                  // `
                  // })

                  // export class Heroes {

                  //   heroes = data;
                  
                  // }
            }
        });
        //alert(this.todoArray[0].ecurie_name);
        //$("body").html(this.todoArray);
    }

}
function printClassementConstructeurs(data){
  //alert(JSON.stringify(data));
}


