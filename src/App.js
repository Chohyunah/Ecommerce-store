/* eslint-disable */
import { createContext, useEffect, useState } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './App.css'
import data from './data.js';
import Cart from './routes/Cart.js';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App(){

  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([])) 
  },[] )

 /*  누가 Detail 페이지에 접속하면
  그페이지에 보이느 상품id 가져와서
  localStorage에 watched 항목에 추가 */

  let [postype, setPostype] = useState(data)
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수
  let [재고] = useState([10,11,12])
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
                )})
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
          }}>더보기</button>
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
          <Link to = {"/detail/"+props.postype.id}>
            <img src={"/images/mem"+props.i+".jpg"} width="80%"/>
            <h4>{props.postype.title}</h4>
            <p>{props.postype.content}</p>
          </Link>
        </div>
  )
}

export default App;
