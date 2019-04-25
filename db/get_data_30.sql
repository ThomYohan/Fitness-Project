select * from "Date"
right join "NutritionA" on "Date"."date_id" = "NutritionA"."date_id"
order by "date_recorded" desc limit(30)