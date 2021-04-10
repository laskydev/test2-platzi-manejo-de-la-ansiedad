type QuestionProps ={
    question: string
}
export const Question = ({ question}:QuestionProps) => {
    return (
        <>
            <h2 className="text-center">{question}</h2>
        </>
    )
}
