import { Injectable } from '@angular/core';
import { 
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UsersService, LoginInfo } from '../users/users.service';
import { UserCredential } from '@angular/fire/auth';

export interface Register {
  uid: string;
  email: string;
  nickname: string;
  phoneNumber: string;
  photoURL: string;
  role: string;

}

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  constructor(private firestore: Firestore, private usersService: UsersService) { }

  getRegisters(): Observable<Register[]> {
    const registersRef = collection(this.firestore, 'registers');
    return collectionData(registersRef, {idField: 'uid'});
  }

  async createRegister(loginInfo: LoginInfo,register: Register) : Promise<any> {
    const usersCredential : UserCredential = await this.usersService.register(loginInfo)
    .catch((error) => {
      console.log(error);
      return error;
    });

    register.uid = usersCredential.user.uid;
    const registersRef = collection(this.firestore, 'registers');
    return addDoc(registersRef, register);
  }

  //updateTodo(todo: Todo) : Promise<any> {
    //const docRef = doc(this.firestore, todos/${todo.id});
    //return updateDoc(docRef, {title: todo.title, completed: todo.completed});
  //}

  //deleteTodo(todo: Todo) : Promise<any> {
    //const docRef = doc(this.firestore, todos/${todo.id});
    //return deleteDoc(docRef);
  //}
}