import {
  insertQuestion,
  getAllQuestions,
  getQuestionsById,
} from "../repositories/questionRepository";

async function postQuestion(askedBy: string, question: string) {
  await insertQuestion(askedBy, question);
}

async function findAllQuestions() {
  const questions = await getAllQuestions();
  return questions;
}

async function findQuestionsById(id: number) {
  const question = await getQuestionsById(id);
  return question;
}

export { postQuestion, findAllQuestions, findQuestionsById };
