import * as TYPES from '../action-types';

let todo={
    //=>增加任务信息
    add(payload){
        return{
         type:TYPES.TODO_ADD,
         payload:payload
        }
    },
    //=>更新筛选的类别:text(all/complete/uncomplete)
    filter(text){
        return{
            type:TYPES.TODO_FILTER,
            text
        }
    },
    //=>更惨指定任务状态信息
    updateState(taskId,newState){
     return{
         type:TYPES.TODO_UPDATE_SATATE,
         taskId,
         newState
         
     }
    },
    remove(taskId){
         return{
             type:TYPES.TODO_DELETE,
             taskId
         };
    }

};

export default  todo;