import * as TYPES from '../action-types';

 export default function todo(state={
     data:[],
     flag:'all'
 },action){
  //=>为了防止不直接修改原有的状态信息，我们把原有的深度克隆一份，return的结果才是覆盖原有的信息。
   state=JSON.parse(JSON.stringify(state));
 switch(action.type){
    case TYPES.TODO_ADD:
      //=》增加任务信息：payload传递进来需要增加的任务信息
         let {payload}=action;
             payload.id=state.data.length===0?1:(parseFloat(
             state.data[state.data.length-1]['id'])+1);
             state.data.push(payload);
             break;
            //=>更新筛选方式
           case TYPES.TODO_FILTER:
             state.flag=action.text; 
           break;
           //=>修改任务状态
           case TYPES.TODO_UPDATE_SATATE:
            let {taskId,newState}=action;
         let  item= state.data.find(item=>item.id===taskId);
            if(item){
              item.state=newState;
            }
           break;
           case TYPES.TODO_DELETE:
             console.log(1)
             let {taskId:taskId_del}=action;
             state.data=state.data.filter(item=>item.id!==taskId_del);
             break;
         
 }
   return state;
 }