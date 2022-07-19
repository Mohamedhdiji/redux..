import { DELETE_TASK } from "./actionType"

export const deleteTask =(id)=>{
return{
    type:DELETE_TASK,
    payload :id, 
    };
} ;