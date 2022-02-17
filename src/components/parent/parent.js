import React, {useState, useEffect} from 'react'
import db from '../../firebase.config'
import '../../css/category.css'
import _Router from './router'
import { useHistory, NavLink } from "react-router-dom";
import {Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './test'


export default function Parent(props){
    const currentRoute = useHistory().location.pathname.toLowerCase();
    let id_pr = props.match.params.prID;
    let NAME = props.match.params.prNAME
    const [category, setCategory] = useState([])
    const [_color, setColor] = useState("")
    const getCategory=async(id)=>{
        const arr=[]
        await db.collection('categories').where('id_p', '==', id).onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                arr.push({...doc.data(), id: doc.id})
            })
            setCategory(arr)
            
        })
    }
      
    useEffect(async()=>{
        await getCategory(id_pr)
    })
return(
    <div>
       <Router>
           <section className="section top-header top-header-folder" style={{width:'100%', height: '100px'}}>
            <div div className = "container" >
                <div className="width_common top-folder flexbox">
                    <div div className = "title-folder" >
                        <h1>
                            <a href='/'>{NAME}</a>
                        </h1>
                    </div>
                    <div className="filter-date-search flexbox">
                        <a className="text-calendar view_by_date">
                            <svg className="ic ic-calendar">
                                <use use href = "#calendar" >
                                    <svg id="calendar" viewBox="0 0 32 32">
                                        <path d="M28 28.001h-24v-18h24v18zM30 4.001h-4v-4h-6v4h-8v-4h-6v4h-4c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2z"></path>
                                        <path d="M12 14.001h-4v4h4v-4z"></path>
                                        <path d="M18 14.001h-4v4h4v-4z"></path>
                                        <path d="M12 20.001h-4v4h4v-4z"></path>
                                        <path d="M18 20.001h-4v4h4v-4z"></path>
                                        <path d="M24 14.001h-4v4h4v-4z"></path>
                                        <path d="M24 20.001h-4v4h4v-4z"></path>
                                    </svg>
                                </use>
                            </svg>
                            <input input type = "hidden"
                           
                            placeholder = "Xem theo ngày"
                            className = "flatpickr-input"
                            value = "" />
                            <input className="flatpickr-input form-control input" placeholder="Xem theo ngày" tabindex="0" type="text" readonly="readonly"/>
                        </a>
                        <form className="search">
                            <input type="text" className="txt_input" placeholder="tìm kiếm trong chuyên mục" autoComplete="off"></input>
                            <input type="hidden" className="txt_input" placeholder="tìm kiếm trong chuyên mục" autoComplete="off"></input>
                            <button><svg class="ic ic-search button_search">
                                <use href="#Search"> <svg id="Search" viewBox="0 0 32 32">
                                <path d="M14 28c-7.72 0-14-6.28-14-14s6.28-14 14-14c7.72 0 14 6.28 14 14s-6.28 14-14 14zM14 4c-5.514 0-10 4.486-10 10s4.486 10 10 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z"></path>
                                <path d="M31.414 28.586l-4.786-4.786c-0.821 1.057-1.771 2.007-2.828 2.828l4.786 4.786c0.185 0.186 0.406 0.334 0.648 0.435s0.503 0.153 0.766 0.153 0.523-0.052 0.766-0.153c0.243-0.101 0.463-0.249 0.648-0.435s0.333-0.406 0.434-0.649 0.152-0.503 0.152-0.765c0-0.263-0.052-0.523-0.152-0.765s-0.248-0.463-0.434-0.649z"></path>
                                </svg></use> </svg></button>
                        </form>
                    </div>
                </div>
                     <nav className="width_common nav-folder">
                    <ul className="ul-nav-folder">
                        
                         {category.map((ct)=>(
                            <li onClick={()=>{setColor(ct.id)}}>
                                <Link  style = {
                                    _color === ct.id ? {
                                        color: '#9f224e',
                                        borderBottom: '1px solid red'
                                    } : {}
                                }
                                        active
                                        to={`/router/${ct.id}/${NAME}`} >
                                            {ct.name}
                                </Link>
                            </li>
                         ))}
                    </ul>
                </nav>
             </div>
        </section>
        <Switch>
            <Route path="/router/:id_c/:name" exact component={_Router} />
            <_Router id={id_pr} name_pr = {NAME}/>
        </Switch>
      </Router>
    </div>
)
}
