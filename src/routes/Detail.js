import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import './Detail.css';
/* import {Context1} from './../App.js' */


function Detail(props){
  
  let {id} = useParams();
  let [tab, setTab] = useState(0) /* 0번째 탭이 보이는 상태 */
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={"/images/mem"+(id)+".jpg"} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.postype[id].title}</h4>
            <p>{props.postype[id].content}</p>
            <p>{props.postype[id].writer}</p>
            <button className="btn btn-danger">관심목록</button> 
          </div>
        </div>
        <br></br>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link id="tabvar" onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="tabvar" onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="tabvar" onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        
        <TabContent postype={props.postype} tab={tab}></TabContent>

      </div>

    )
  }

  function TabContent({tab, postype}){
    let [fade, setFade] = useState('')

    useEffect(()=>{
      setTimeout(()=>{ setFade('end') }, 100)
    return ()=>{
      setFade('')
    }
    }, [tab])

    return (<div className={'start ' + fade}>
      
    {[<div>{postype[1].title}</div>,<div>내용1</div>,<div>내용2</div>][tab]}
    </div>)
  }

  
  
  export default Detail;
  