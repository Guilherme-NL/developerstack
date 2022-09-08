-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "askedBy" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "answers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
