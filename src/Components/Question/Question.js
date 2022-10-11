
import Options from '../Options/Options';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'
const Question = ({ questions }) => {
    const id = questions.id;
    const { question, correctAnswer, options } = questions;
    const handlerRealAns = () => {
        alert(`Answer: ${correctAnswer}`);
    }
    const handlerUserAns = (ans) => {
        if (correctAnswer === ans) {
            alert(" Correct Answer")
        }
        else {
            alert("Not correct Answer")
        }
    }
    return (
        <div className='question-container'>
            <div className='quesxtion-title'>
                <p></p>
                <h3>Quiz:{question}</h3>
                <EyeIcon onClick={() => handlerRealAns()} className='icon' />
            </div>
            <section className='option-container'>
                {
                    options.map(option => <Options id={id} handlerUserAns={handlerUserAns} option={option}></Options>)
                }

            </section>
        </div >
    );
};

export default Question;