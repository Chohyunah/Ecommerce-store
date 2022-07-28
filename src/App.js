import { createContext, useState } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './App.css'
import data from './data.js';
import Cart from './routes/Cart.js';
import Detail from './routes/Detail.js';
import axios from 'axios';



function App(){

  let [postype, setPostype] = useState(data)
  let [재고] = useState([10,11,12])
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수
    return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand onClick={() => {navigate('/')}}>BokzaClub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>

        </Nav>
        </Container>
      </Navbar>

      <Routes> /** 메인페이지 */
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className="row">
            {
              postype.map((a, i)=>{
                return (
                <Content postype={postype[i]} navigate={navigate} i={i}></Content>
                )
                })
            }
       
            </div>
          </div>

          <button onClick={() => {
            axios.get('/newdata.json')
            .then((결과)=>{console.log(결과.data)
              let copy = [...postype, ...결과.data];
              setPostype(copy);
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>버튼</button>
          </> 
        }/>
        <Route path="/detail/:id" element={<Detail postype={postype}/>}/>
        <Route path = "/cart" element={<Cart/>}>Cart</Route>
      </Routes>

      </div>
  );
}

function Content (props) {
  return (
        <div className="col-md-4">
          <img src={"/images/mem"+props.i+".jpg"} onClick={() => {props.navigate('/detail/1')}} width="80%"/>
          <h4>{props.postype.title}</h4>
          <p>{props.postype.content}</p>
        </div>
  )
}

export default App;
