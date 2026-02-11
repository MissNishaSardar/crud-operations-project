-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "uName" TEXT NOT NULL,
    "uGender" TEXT NOT NULL,
    "uEmail" TEXT NOT NULL,
    "uPhoneNumber" TEXT NOT NULL,
    "uBio" TEXT NOT NULL,
    "uImage" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uEmail_key" ON "User"("uEmail");
