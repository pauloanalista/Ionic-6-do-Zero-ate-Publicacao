import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  tarefaCollection : any[]=[];
  key = 'tarefaCollection';
  
  constructor() { }

  salvar(tarefa : any, callback=null){
    tarefa.feito = false;

    //Obter do localStorage
    let value = localStorage.getItem(this.key);

    if (value==null || value==undefined){
      this.tarefaCollection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(this.tarefaCollection));
    }
    else{
      let collection : any[] = JSON.parse(value);
      collection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(collection));
    }

    if (callback!=null){
      callback();
    }
  }

  listar(){
    //Obter do localStorage
    let value = localStorage.getItem(this.key);
    
    if (value==null || value==undefined){
      return [];
    }

    let collection: any[] = JSON.parse(value);
    return collection;
  }

  delete(tarefa : any, callback=null){
  
    let value = localStorage.getItem(this.key);
    
    if (value==null || value==undefined){
      return;
    }

    let collection: any[] = JSON.parse(value);
    
    let resultcollection = collection.filter(item=>{return item.tarefa != tarefa.tarefa});

    localStorage.setItem(this.key, JSON.stringify(resultcollection));

    if (callback!=null){
      callback();
    }
  }

  atualizar(tarefa : any, callback=null){
    //Obter do localStorage
    let value = localStorage.getItem(this.key);

    if (value==null || value==undefined){
      return;
    }
    else{
      let collection : any[] = JSON.parse(value);
      collection.forEach(item=>{
        if (item.tarefa == tarefa.tarefa){
          item.feito = tarefa.feito;
        }
      });

      localStorage.setItem(this.key, JSON.stringify(collection));
    }

    if (callback!=null){
      callback();
    }
  }
}
