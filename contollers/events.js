import { pool } from '../db.js';
import { listAllEvents, listSpecificEvent } from '../queries/events.js';

export const listEvents = async(req,res)=>{
    
    try{
        const result = await pool.query(listAllEvents);
        const events = result.rows;
        res.status(200).json(events);
    }
    catch(err){
        console.log(err);
    }

}

export const listEvent = async(req,res)=>{
    const {id} = req.params;
    try{
        const result = await pool.query(listSpecificEvent,[id]);
        const event = result.rows[0];
        res.status(201).json(event);
    }
    catch(err){
        console.log(err);
    }
}
