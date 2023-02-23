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

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수
  let [재고] = useState([10,11,12])
    return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container className="cart" >
        <Navbar.Brand onClick={() => {navigate('/')}}>Shoeper</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link  onClick={() => {navigate('/cart')}}>🛒</Nav.Link>

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
              shoes.map((a, i)=>{
                return (
                    <Content shoes={shoes[i]} navigate={navigate} i={i}></Content>
                )})
            }
       
            </div>
          </div>

          <button onClick={() => {
            axios.get('/newdata.json')
            .then((result)=>{console.log(result.data)
              let copy = [...shoes, ...result.data];
              setShoes(copy);
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>더보기</button>
          </> 
        }/>

        <Route path = "/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path = "/cart" element={<Cart/>}></Route>
      </Routes>

      </div>
  );
}

function Content (props) {
  return (
        <div className="col-md-4">
          <Link to = {"/detail/"+props.shoes.id}>
            <img src={"/images/num"+props.i+".png"} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
          </Link>
        </div>
  )
}

export default App;
