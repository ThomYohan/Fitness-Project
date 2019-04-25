-- select * from "Date"
-- right join "NutritionA" on "Date"."date_id" = "NutritionA"."date_id"
-- where "date_recorded" in ( $1, $2, $3, $4, $5, $6, $7 )

select * from "Date"
right join "NutritionA" on "Date"."date_id" = "NutritionA"."date_id"
order by "date_recorded" desc limit(7)