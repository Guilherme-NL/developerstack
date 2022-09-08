import { getAnswerById, insertAnswer } from "../repositories/answerRepository";

async function postAnswer(id: number, answeredBy: string, answer: string) {
  await insertAnswer(id, answeredBy, answer);
}

async function findAnswerById(id: number) {
  const answer = await getAnswerById(id);
  return answer;
}

export { postAnswer, findAnswerById };
