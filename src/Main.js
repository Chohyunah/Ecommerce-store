/* eslint-disable */
import { createContext, useEffect, useState } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './Main.css'
import data from './data.js';
import Content from './Content.js';
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import axios from 'axios';

function Main(){
  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([])) 
  },[] )

 /*  누가 Detail 페이지에 접속하면
  그페이지에 보이느 상품id 가져와서
  localStorage에 watched 항목에 추가 */

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수
  let [inven] = useState([10,11,12])
    return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
            <div className="nav">
                <div className='title' onClick={() => {navigate('/')}}>Shoeper</div>
                <div className='cart' onClick={() => {navigate('/cart')}}>🛒</div>
            </div>
        </Container>
        
      </Navbar>

      <Routes> /* 메인페이지 */
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

          <button className='plusBtn' onClick={() => {
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

export default Main;