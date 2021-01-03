import React from 'react';
import { Wrapper } from './QuestionCard.style';
import {Answers} from '../App';


type Props = {
    question: string;
    answers: string[];
    questionNR: number;
    totalQuestion: number;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: Answers | undefined;
}
const QuestionCard: React.FC<Props> = ({ question, answers, questionNR, callback, totalQuestion, userAnswer }) =>
(<Wrapper>
    <p className="number">
        {questionNR} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
        {answers.map(answer => (
            <div className="ans" key={answer}>
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
            </div>
        ))}
    </div>
</Wrapper>)


export default QuestionCard;