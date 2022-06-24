import service from "./service";

export async function cadastrarCurso(data){
   var postData = {
      nome: data.nome,
      descricao: data.descricao,
      site: data.site,
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/cadastrar/profissao', postData, axiosConfig)
}

export async function getProfissoes(){
   return service.get('/profissoes', {
    }).then(response => response.data);       
}

export async function atualizarCurso(id, data){
   var postData = {
      id: id,
      nome: data.nome,
      descricao: data.descricao,
      site: data.site,
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/atualizar/profissao', postData, axiosConfig)
}


export async function apagarCurso(data){
   var postData = {
      id: data,
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/apagar/profissao', postData, axiosConfig)
}

export async function verCurso(id){
   var postData = {
      id: id,
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };

   return service.post('/verProfissao', postData, axiosConfig)
}