export interface Base {
  id: number; 
  active: boolean;
}
export interface Account extends Base {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  age: number > 18
  pass_hash: string;
  salt: any;
  level: "Guest" | "User" | "Moderator" | "Admin";
}
export interface Profile extends Base {
  mode: "PUBLIC" | "PRIVATE";
  userId: string;
  bio?: string;
  interests?: string[];
  twitter?: string,   
  phone?: string;
}
export interface Task extends Base {
  title: string;
  description: string;
}
export interface Post extends Base {
  title: string; 
  content: string;
  userId: string;
}
export interface Comment extends Base {
  content: string; 
  userId: number;
  postId: number;
}
