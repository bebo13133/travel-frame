export interface User {
    _id?: string; 
    name: string;
    username?: string;
    email: string;
    password?: string;
    address?: string; 
    phoneNumber?: string; 
    gender?: 'male' | 'female' | 'other'; 
    accessToken?: string; 
  
  }