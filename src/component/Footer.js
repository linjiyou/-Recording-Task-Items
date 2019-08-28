import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action';
 class Footer extends React.Component{
      constructor(props){
         super(props)
         //=>自己构建展示的数据
         this.showDate=[{text:'全部',flag:'all'},
         {text:'已完成',flag:'complete'},
         {text:'未完成',flag:'uncomplete'}
        ]
      }
      render(){
          let {flag}=this.props;

          return <div className='panel-footer'>
             <ul className='nav nav-pills' onClick={this.updateFilter}>
             {this.showDate.map((item,index)=>{
                 let {text,flag:itemFlag}=item;
                 return <li key={index} className={itemFlag===flag?'presentation active':'presentation'} >
                 <a href='javascript:;' flag={itemFlag}>{text}</a>
             </li>
             })} 
                {/* <li className='presentation active' >
                   <a href='javascript:;'>全部</a>
               </li>
               <li className='presentation'>
                   <a href='javascript:;'>已完成</a>
               </li>
               <li className='presentation'>
                   <a href='javascript:;'>未完成</a>
               </li> */}
             </ul>
           {this.props.flag}
          </div>
     
      }
      updateFilter=(ev)=>{
        let target=ev.target,
            tarTag=target.tagName;

        //=>合并事件源：事件源是li，也让其变为里面的A
            if(tarTag==='LI'){
                target=target.firstElementChild;
                tarTag=target.tagName;
            }
            if(tarTag==='A'){
                let text='all';
            //    switch(target.innerHTML){
            //        case '已完成':
            //            text='complete';
            //            break;
            //        case '为完成':
            //            text='uncomplete';
            //            break;
            //    }
            if(target.innerHTML==='已完成'){
                text='complete';
    
            }
            else if(target.innerHTML==='未完成'){
                text='uncomplete';
            }         
            
            if(this.props.flag===text){
          //=>当前筛选状态和点击的按钮是一致的，这样是没有必要再重新更新筛选状态
                   return;

                }
                this.props.filter(text);
            }
      }

}
export default connect(state=>({...state.todo}),action.todo)(Footer);