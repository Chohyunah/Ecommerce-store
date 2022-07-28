import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './../store.js'

function Cart() {

    let state =  useSelector((state) => state ) //Redux store 가져와줌
    let dispatch = useDispatch() //store.js로 요청을 보내주는 함수

    return (
        <div>
            <div>{state.user.name}의 장바구니</div>
            {/* <button onClick={() => {dispatch(changeAge(10))}}>+</button> */}
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key = {i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td><button onClick={()=>{
                                    dispatch(increase(state.cart[i].id))
                                }}>+</button></td>
                            </tr> 
                        )
                    }
                   
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart