
import Options from '../Options/Options';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'
const Question = ({ questions, quizName }) => {

    const { question, correctAnswer, options } = questions;
    const handlerRealAns = () => {
        // console.log("hjfgjkfgj")
        alert(`Answer: ${correctAnswer}`);
    }
    const handlerUserAns = () => {
        console.log(options);
        // const userAns0 = options[0].length;
        // const userAns1 = options[1].length;
        // const userAns2 = options[2].length;
        // const userAns3 = options[3].length;
        // const realAns = correctAnswer.length;
        // if (userAns1 === realAns.length) {
        //     alert('fhslkfgjlsd')
        // }
        // else {
        //     alert('nnot correct')
        // }
        // console.log(userAns0, userAns1, userAns2, userAns3);
        // if (userAns0 === realAns) {
        //     alert("jfshkjlfgh")
        //     console.log(userAns0, realAns);
        // }
        // else if (userAns1 !== realAns) {
        //     alert("jfshkjlfgh")
        //     console.log(userAns1, realAns);
        // }
        // else if (userAns2 !== realAns) {
        //     alert("jfshkjlfgh")
        //     console.log(userAns2, realAns);
        // }
        // else if (userAns3 !== realAns) {
        //     alert("jfshkjlfgh")
        //     console.log(userAns3, realAns);
        // }
        // else {
        //     alert(" Correct Ans ")
        // }

    }
    return (
        <div className='question-container'>
            <div className='quesxtion-title'>
                <p></p>
                <h3>Quiz:{question}</h3>
                <EyeIcon onClick={() => handlerRealAns()} className='icon' />
            </div>
            <section>
                <Options handlerUserAns={handlerUserAns} options={options}></Options>
            </section>
        </div >
    );
};

export default Question;