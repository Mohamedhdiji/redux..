import { DELETE_TASK } from "./actionType";

// export const DELETE_TASK ="DELETE_TASK"
const init ={
    tasks : [
        {id:Math.random(),action:"wake up ",isDone:true},
        {id:Math.random(),action:"go  out ",isDone:false}
    ]
}


const reducer = (state=init,{type, payload})=> {
    switch(type){
        case DELETE_TASK:
        return {
            ...state,
            tasks:state.tasks.filter(el=>el.id !== payload),
        };
        default:
            return state; 
    }
};
export default reducer;