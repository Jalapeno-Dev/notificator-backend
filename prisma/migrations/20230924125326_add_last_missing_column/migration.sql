/*
  Warnings:

  - Added the required column `user_id` to the `category_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category_items" ADD COLUMN     "user_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "category_items" ADD CONSTRAINT "category_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
