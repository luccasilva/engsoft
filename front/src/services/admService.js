import service from "./service";

export async function cadastro(data){   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };
   
   return service.post('/cadastro', data, axiosConfig)
}

export async function getUsuarios(){
   return service.get('/usuarios', {
      headers: {
        'x-access-token': localStorage.getItem('AuthToken')
      }
    }).then(response => response.data);       
}

export async function getArquivados(data){
   var postData = {
      data: data
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };
   return service.post('/arquivados', postData, axiosConfig)
}

export async function aplicar(usuario, teste){
   var postData = {
      usuario_id: usuario,
      teste_id: teste
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/aplicar/teste', postData, axiosConfig)
}

export async function cancelar(usuario, teste){
   var postData = {
      usuario_id: usuario,
      teste_id: teste
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/cancelar/teste', postData, axiosConfig)
}

export async function deletarCliente(usuario){
   var postData = {
      id: usuario
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/deletar', postData, axiosConfig)
}

export async function resultados(usuario, teste){
   var postData = {
      usuario_id: usuario,
      teste_id: teste
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/resultado', postData, axiosConfig)
}


export async function ver(usuario){
   var postData = {
      usuario_id: usuario,
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/verUsuario', postData, axiosConfig)
}

export async function arquivar(user, data){
   var postData = {
      user: user,
      data: data
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/arquivar', postData, axiosConfig)
}