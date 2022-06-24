import service from "./service";

export async function listagem(){
   return service.get('/testes', {
      headers: {
        'x-access-token': localStorage.getItem('AuthToken')
      }
    }).then(response => response.data);       
}

export async function responder(form, data){
   var postData = {
      form: form,
      data: data
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };
   
   return service.post('/responder', postData, axiosConfig)
}

export async function atualizar(user, form, data){
   var postData = {
      user: user,
      form: form,
      data: data
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };
   
   return service.post('/atualizar', postData, axiosConfig)
}