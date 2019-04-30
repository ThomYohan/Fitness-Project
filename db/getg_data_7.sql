select * from "Date"
right join "NutritionG" on "Date"."date_id" = "NutritionG"."date_id"
order by "date_recorded" asc limit(7)