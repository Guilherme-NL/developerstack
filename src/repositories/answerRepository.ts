import { prisma } from "../config/database";

async function insertAnswer(id: number, answeredBy: string, answer: string) {
  await prisma.answers.create({
    data: { answeredBy, answer, question: { connect: { id } } },
  });
}

async function getAnswerById(id: number) {
  const answer = await prisma.answers.findMany({ where: { questionId: id } });
  console.log(answer);
  return answer;
}

export { insertAnswer, getAnswerById };
