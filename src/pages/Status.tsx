import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status(){
  const [newAnswer,setNewAnswer]=useState('') 
  const [answers,setAnswers]=useState([
    'Concordo',
    'Olha,faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event:FormEvent){
    event.preventDefault()
    setAnswers([newAnswer,...answers])
    setNewAnswer('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){

    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer,...answers])
      setNewAnswer('')
    }

  }
 
  return(
    <main className="status">
    <Header title="Tweet"/>
     <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae libero ducimus dolores at cum itaque sequi, sint modi error perferendis veniam consequuntur omnis nobis mollitia optio ipsa dolorem accusantium."/>
     <Separator/>
     <form onSubmit={createNewAnswer} className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/maikonsilvaoliveira.png" alt="Maikon Oliveira"/>
        <textarea 
         id="tweet" 
         placeholder="Tweet your answer"
         value={newAnswer }
         onKeyDown={handleHotKeySubmit}
         onChange={(event)=>(
          setNewAnswer(event.target.value)
          )}/>
      </label>
      <button type="submit">
        <PaperPlaneRight/>
        <span>Answer</span>
      </button>
     </form>
     {answers.map(answer=>{
      return <Tweet key={answer} content={answer}/>
     })}
  </main>
  )
}