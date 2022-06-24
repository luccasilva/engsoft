import service from "./service";

export async function login(data){
   return service.post('/login', data)            
}

export async function loginADM(data){
   return service.post('/loginADM', data)            
}

export async function logout(){
    localStorage.setItem('AuthToken', ''); 
 }