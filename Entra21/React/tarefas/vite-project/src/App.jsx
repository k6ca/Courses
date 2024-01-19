import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import React from 'react'
//import { userReducer } from 'react'

const tarefaReducer = (estado, acao) =>{
  switch(acao.type){
    case 'ADD_TASK':
      return[...estado, acao.playload];
    case 'COMPLETED':
      atualizarTarefa[acao.playload].completed = true;
      return atualizarTarefa;
    case 'DELETE':
      return estado.filter((_, index) => index !== acao.playload)
    default:
      return estado;
  }
}

function App() {
  //criando a tarefa com estado vazio
  const [novaTarefa, setNovaTarefa] = useState('');
  //criando o estado da lista de tarefas como reducer
  const [listaTarefas, setListaTarefas] = userReducer();

  //salvando e carregando as tarefas no armazenamento localstorage
  useEffect{() => (
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
  ), [listaTarefas]};

  //carregando as tarefas armazenadas no localStorage
  useEffect{() => {
    const tarefasArmazenadas = JSON.parse(localStorage.getItem('listaTarefas'))
  }};

  const adicionar = useCallback{(index) =>{
    if(novaTarefa.trim() !== '')
    {
      dispatchEvent({type:'ADD_TASK', playload : {text: novaTarefa, completed:false}});
      setNovaTarefa('');
    }
  },[novaTarefa]};

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <div>
      <input
        type='text'
        placeholder="Nova tarefa"
      />
      <button>Adicionar</button>

      </div>
    
    </div>
  )
}

export default App
