/* eslint-disable */
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

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
  
  export default Content;
  