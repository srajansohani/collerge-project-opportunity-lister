export const registerUser = "insert into users(user_name,user_email,user_password,college,dob) values($1,$2,$3,$4,$5)";

export const loginUser = "Select * from users where user_email = $1";