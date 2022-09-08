import { prisma } from "../config/database";

async function insertQuestion(askedBy: string, question: string) {
  await prisma.questions.create({
    data: { askedBy, question },
  });
}

async function getAllQuestions() {
  const questions = await prisma.questions.findMany();
  return questions;
}

async function getQuestionsById(id: number) {
  const question = await prisma.questions.findFirst({ where: { id } });
  return question;
}

export { insertQuestion, getAllQuestions, getQuestionsById };
