import bcrypt from 'bcrypt';
import { pool } from '../db.js';
import { loginUser, registerUser } from '../queries/auth.js';

export const Register = async(req,res)=>{
    const {name,email,password,college,dob} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        pool.query(registerUser,[name,email,hashedPassword,college,dob],(err,result)=>{
            if(err){
                console.log(err.message);
            }
            res.status(200).json({message: 'Succesfully registered'});
        })

    }
    catch(err){
        throw err;
    }
}

export const Login = async(req,res)=>{
    const {email,password} = req.body;
    const result = await pool.query(loginUser,[email]);
    if(!result){
        throw result;
    }
    const user = result.rows[0];
    if(!user && !(await bcrypt.compare(password, user.user_password))){
        return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ username: user.username }, jwtSecret);
    res.json({token: token});
}

export function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) return res.sendStatus(403);
  
      req.user = user;
      next();
    });
  }