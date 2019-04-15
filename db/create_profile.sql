insert into "Profile"
(
    email, 
    password
) 
values 
( 
    $1, 
    $2
)
returning email, password