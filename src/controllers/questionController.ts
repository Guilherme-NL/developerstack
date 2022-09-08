import { Request, Response } from "express";
import { findAnswerById, postAnswer } from "../services/answerService";
import {
  postQuestion,
  findAllQuestions,
  findQuestionsById,
} from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;
  try {
    await postQuestion(askedBy, question);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function createAnswer(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { answeredBy, answer } = req.body;
  try {
    await postAnswer(id, answeredBy, answer);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function get(req: Request, res: Response) {
  try {
    const questions = await findAllQuestions();
    res.status(200).send(questions);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const question = await findQuestionsById(id);
    const answer = await findAnswerById(id);
    console.log(answer);
    const result = { ...question, answer };
    res.status(200).send(result);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
}
