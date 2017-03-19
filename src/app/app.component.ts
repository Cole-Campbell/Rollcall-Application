import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public isLoggedIn: boolean;

  constructor(public afService: AngularFire, private router: Router){
    //Checks to see if the user is logged in or not.
    this.afService.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Not Logged in.");
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }
        else if (auth != null) {
          console.log("Successfully Logged In.");
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.afService.auth.logout();
  }

}
/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/ClassLists')
  }
  title = 'app works!';
}

Object Display
@Component({
  selector: 'app-root',
  template: `
  <h1>{{ item | async | json }}</h1>
  <input type="text" #newname placeholder="Name" />
  <input type="text" #newsize placeholder="Size" />
  <br />
  <button (click)="save(newname.value)">Set Name</button>
  <button (click)="update(newsize.value)">Update Size</button>
  <button (click)="delete()">Delete</button>
  `,
})
//CRUD Operations for Angular Fire Objects
export class AppComponent {
  item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/ClassLists');
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }
}
*/

//CRUD Operation for list observable
/*@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
      <input type="text" #updatetext [value]="item.name" />
      <button (click)="updateItem(item.$key, updatetext.value)">Update</button>
      <button (click)="deleteItem(item.$key)">Delete</button>
    </li>
  </ul>
  <input type="text" #newitem />
  <button (click)="addItem(newitem.value)">Add</button>
  <button (click)="deleteEverything()">Delete All</button>
  `
})
export class AppComponent {
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/Students');
  }

  addItem(newName: string) {
    this.items.push({name: newName});
  }

  updateItem(key: string, newText: string) {
    this.items.update(key, {name: newText});
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }

  deleteEverything() {
    this.items.remove();
  }
}
*/

/*Login

@Component({
  selector: 'app-root',
  template: `
  <div> {{ (af.auth | async)?.uid }}</div>
  <button (click)="login()">Login</button>
  <button (click)="logout()">Logout</button>
  `
})

export class AppComponent {
  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
*/
