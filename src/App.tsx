import { useState } from "react";
import { Form } from "./components/Form";
import { Question } from "./components/Question";
import { Results } from "./components/Results";
import { data } from "./data";

function App() {
  const [numberQuestion, setNumberQuestion] = useState(0)
  const [valueTest, setValueTest] = useState(0)

  const dataArr = data()
  let question:string = '';
  if (numberQuestion < 21){
    question = dataArr[numberQuestion].question
  }
  
  console.log(dataArr.length-1)
  return (
    <>
      <h1 className="text-center mt-5 mb-3 text-uppercase">Test como se siente tu cuerpo</h1>
      <p className="px-5 text-center">En este momento explora cómo se siente tu cuerpo. Indica la intensidad en una escala de 0 a 10, en donde 0 es nada y 10 es máximo.	
	    </p>

      {(numberQuestion < dataArr.length )
        ?
        <div className="container bg-light mx-auto ">
          <Question
            question={question}
          />
          <Form
            setNumberQuestion={setNumberQuestion}
            numberQuestion={numberQuestion}
            valueTest={valueTest}
            setValueTest={setValueTest}
          />
        </div>
        :
        <Results
          result={valueTest}
        />
      }
      
    </>
  );
}

export default App;
