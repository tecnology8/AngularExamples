import {Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from '../contact.model';

@Component({
  selector:'app-contacts-list',
  templateUrl:'./contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit{
  public contacts: Contact[] = [];
  constructor() { 
    this.contacts.push(new Contact(1,"Ruddy Cruceta"));
    this.contacts.push(new Contact(2,"Juan Pablo Duarte", [{type:PhoneType.mobile, number:8096359857}]));
  }
  
  ngOnInit(){

  }
}