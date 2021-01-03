export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    tyoe: string;
};

export type QuestionState = Question & { answers: string[] };

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);


export enum Difficulty {
    EASY = 'easy',
    HARD = 'hard',
    MEDIUM = 'medium',
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
    const quizQuestions = await fetch(url);
    const data = await quizQuestions.json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
};