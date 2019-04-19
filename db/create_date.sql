insert into "Date"(user_id, date_recorded) values ($1, now())
returning date_id