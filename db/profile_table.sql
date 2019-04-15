CREATE TABLE "Profile" (
	"user_id" serial NOT NULL,
	"name" VARCHAR(255),
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"age" integer,
	"gender" VARCHAR(255),
	"location" VARCHAR(255),
	CONSTRAINT Profile_pk PRIMARY KEY ("user_id")
	)