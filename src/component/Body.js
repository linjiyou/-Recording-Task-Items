import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action';

 class Body extends React.Component{
  constructor(props){
    super(props)
}
      render(){
        //=>获取redux中的任务数据，根据falg标识，筛选对应的内容
    
          let {data,flag}=this.props;
          data=data.filter(item=>{
            let {state}=item;
            state=parseFloat(state);
            if(flag==='complete'){
              return state===1
            }
            else if(flag==='uncomplete'){
              return state===0;
            }
            else{
              return true;
            }
          })
          return <div className='panel-body'>
                <ul className='list-groud'>
                  {data.map((item,index)=>{
                    let {id,name,state}=item;
                    state=parseFloat(state)
                    return  <li key={index} className='list-group-item'>
                    <input type='checkbox' name='todo' checked={!!state} 
                    onChange={ev=>{
                      //=》更新当前状态的任务信息
                      let newState=ev.target.checked?1:0;
                      this.props.updateState(id,newState);
                    }}/>
                    <span className={state===1?'complete':''}>{name}</span>
                    <a href='javascript:;' className='btn-danger'
                     onClick={ev=>{
                    let isOK =window.confirm('一旦删除将不能还原，确定要删除？');
                    if(isOK){
                     console.log(this.props.remove(id)) ;
                    }
                     }}>删</a>
                    </li>
                  })}
               
              </ul>
          </div>
      }
}
export default connect(state=>({...state.todo}),action.todo)(Body);