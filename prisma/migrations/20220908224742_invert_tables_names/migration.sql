/*
  Warnings:

  - You are about to drop the column `askedBy` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `answeredBy` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `questionId` on the `questions` table. All the data in the column will be lost.
  - Added the required column `answer` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answeredBy` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `askedBy` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_questionId_fkey";

-- AlterTable
ALTER TABLE "answers" DROP COLUMN "askedBy",
DROP COLUMN "question",
ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "answeredBy" TEXT NOT NULL,
ADD COLUMN     "questionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "answer",
DROP COLUMN "answeredBy",
DROP COLUMN "questionId",
ADD COLUMN     "askedBy" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
