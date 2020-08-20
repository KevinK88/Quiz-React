import React from 'react';
// Types
import {AnswerObject} from '../App';
// Styles
import {Wrapper,ButtonWrapper} from './QuestionCard.styles';

type Props ={
    question:string;
    answers:string[];
    callback:(e: React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer: AnswerObject | undefined;
    questionNumber : number;
    totalQuestions:number;
};
const QuestionCard:React.FC<Props>=({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
    })=>(
<Wrapper>
    <p className='number'>
        Question:{questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html:question}}/>
    <div>
    {answers
        ? answers.map((answers)=>(
            <ButtonWrapper 
            key={answers}
            correct={userAnswer?.correctAnswer === answers}
            userClicked={userAnswer?.answer === answers}
            >
                <button disabled={userAnswer ? true :false} value={answers} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html:answers}}/>
                </button>
            </ButtonWrapper>
        ))
        : 'No answers!'
    }
</div>
</Wrapper>
);

export default QuestionCard;

