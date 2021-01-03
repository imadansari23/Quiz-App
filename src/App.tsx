import React, { useState } from 'react';
import { fetchQuestions } from './Components/API';
import { Difficulty, QuestionState } from './Components/API';
import {GlobalStyle, Wrapper} from './App.style';
import QuestionCard  from './Components/QuestionCard';

export type Answers = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const TOTAL = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answers[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);
  const startQuiz = async() => {
    setLoading(true);
    setGameOver(false);

    const NewQuestion = await fetchQuestions(10,Difficulty.EASY);

    setQuestions(NewQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const SelectedAnswer = e.currentTarget.value;
      const correct = questions[number].correct_answer === SelectedAnswer;
      if(correct){
        setScore(pre => pre + 1)
      }
        const AnswerObj = {
          question:questions[number].question,
          answer:SelectedAnswer,
          correct,
          correctAnswer:questions[number].correct_answer,
        }

        setUserAnswers((prev) => [...prev,AnswerObj]);
      
      console.log(SelectedAnswer)
    }
  }

  const nextQuestion =() => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL ? (<button className="start" onClick={startQuiz}>START QUIZ</button>) : null}   
      {!gameOver ? <p>SCORE: {score}</p> : null}
      {loading ? (<p>Loading Questions.........</p>) : null}
      {!loading && !gameOver ? (
        <QuestionCard 
        questionNR = {number + 1}
        totalQuestion = {TOTAL}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      /> 
      ) : null}       
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL - 1 ? (
        <button className="next" onClick={nextQuestion}>NEXT</button>
      ) : null}
      
    </Wrapper>
    </>
  );
}

export default App;
