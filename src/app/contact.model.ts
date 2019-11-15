export class Contact{
 
   constructor(public id:number, public name:string, public picture?:string,  
               public phone?: IContactPhone[],
               public email?:string,
               public direction?:string){
                 
  }

}

export enum PhoneType{
  mobile = 'mobile',
  home = 'home',
  work = 'work'
}

export interface IContactPhone{
  type:PhoneType;
  number:number;
}