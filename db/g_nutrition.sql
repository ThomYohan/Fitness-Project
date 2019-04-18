CREATE TABLE "NutritionG" (
	"goals_id" serial NOT NULL,
	"date_id" integer NOT NULL,
	"goals_saturated_fat" integer,
	"goals_polyunsaturated_fat" integer,
	"goals_monounsaturated_fat" integer,
	"goals_trans_fat" integer,
	"goals_cholesterol" integer,
	"goals_sodium" integer,
	"goals_potassium" integer,
	"goals_fiber" integer,
	"goals_sugar" integer,
	"goals_vitamin_a" integer,
	"goals_vitamin_c" integer,
	"goals_calcium" integer,
	"goals_iron" integer,
	"goals_fat" integer,
	"goals_protein" integer,
	"goals_carbohydrates" integer,
	"goals_workouts" integer,
	"goals_calories_burned" integer,
	"goals_minutes" integer,
	"goals_weight" integer,
	"goals_neck" integer,
	"goals_chest" integer,
	"goals_waist" integer,
	CONSTRAINT NutritionG_pk PRIMARY KEY ("goals_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Profile" (
	"user_id" serial NOT NULL,
	"name" VARCHAR(255),
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"age" integer,
	"gender" VARCHAR(255),
	"location" VARCHAR(255),
	CONSTRAINT Profile_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "NutritionA" (
	"achievement_id" serial NOT NULL,
	"date_id" integer NOT NULL,
	"ach_saturated_fat" integer,
	"ach_polyunsaturated_fat" integer,
	"ach_monounsaturated_fat" integer,
	"ach_trans_fat" integer,
	"ach_cholesterol" integer,
	"ach_sodium" integer,
	"ach_potassium" integer,
	"ach_fiber" integer,
	"ach_sugar" integer,
	"ach_vitamin_a" integer,
	"ach_vitamin_c" integer,
	"ach_calcium" integer,
	"ach_iron" integer,
	"ach_fat" integer,
	"ach_protein" integer,
	"ach_carbohydrates" integer,
	"ach_workouts" integer,
	"ach_calories_burned" integer,
	"ach_minutes" integer,
	"ach_weight" integer,
	"ach_neck" integer,
	"ach_chest" integer,
	"ach_waist" integer,
	CONSTRAINT NutritionA_pk PRIMARY KEY ("achievement_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Date" (
	"date_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"date_recorded" DATE,
	CONSTRAINT Date_pk PRIMARY KEY ("date_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "NutritionG" ADD CONSTRAINT "NutritionG_fk0" FOREIGN KEY ("date_id") REFERENCES "Date"("date_id");


ALTER TABLE "NutritionA" ADD CONSTRAINT "NutritionA_fk0" FOREIGN KEY ("date_id") REFERENCES "Date"("date_id");

ALTER TABLE "Date" ADD CONSTRAINT "Date_fk0" FOREIGN KEY ("user_id") REFERENCES "Profile"("user_id");
