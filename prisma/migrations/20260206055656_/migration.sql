-- CreateTable
CREATE TABLE "Todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_todo" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
