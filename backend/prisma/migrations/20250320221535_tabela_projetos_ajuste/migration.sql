/*
  Warnings:

  - Added the required column `nivel` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" ADD COLUMN     "nivel" INTEGER NOT NULL;
