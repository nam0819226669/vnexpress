import '../App.css';
import React, { useState, useEffect } from 'react'
import {Section2} from './section2'
import Footer from './footer'
import {Hearder} from './hearder'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Content from './content/content'
import Parent from './parent/parent'
import db from '../firebase.config';

 export default function Section1(props) {
     const [parent, setparent]=useState([])
     const [colormenu, setcolormenu] = useState('')
     const getparent = async () => {
         db.collection("parent").onSnapshot((querySnapshot) => {
             var arr = []
             querySnapshot.forEach((doc) => {
                 arr.push({
                     ...doc.data(),
                     id: doc.id
                 });
             });
             setparent(arr)

         })
     };
     useEffect(()=>{
         getparent();
    
     },[])
   
    
     
return(
    <body>
        < Hearder />  
        <BrowserRouter >

    <section className="section wrap-main-nav"> 
    <nav className="main-nav">
        <ul className="parent">
            <li className="home">
                <a href="/" className="flexbox" title="Trang chủ"
                    onclick="trackingLogoHome('logo-header-menu', this.href)">
                    <svg className="ic ic-home">
                        <use href="#Home">
                            <svg id="Home" viewBox="0 0 32 32">
                                <path
                                    d="M21.909 31.85h4c1.2 0 2-0.8 2-2v-14h2c0.6 0 1.2-0.2 1.6-0.6 0.8-0.8 0.6-2-0.2-2.8l-14-12c-0.8-0.6-1.8-0.6-2.6 0l-14 12c-0.8 0.8-1 2-0.2 2.8 0.2 0.4 0.8 0.6 1.4 0.6h2v14c0 1.2 0.8 2 2 2h4c1.2 0 2-0.8 2-2v-6h8v6c0 1.2 0.8 2 2 2z">
                                </path>
                            </svg>
                        </use>
                    </svg>
                </a>
            </li>
            {
            parent.map((pr)=>(
              <li onClick={()=>{setcolormenu(pr.id)}}>
                                <Link  style = {
                                    colormenu === pr.id ? {
                                        color: '#9f224e',
                                        borderBottom: '1px solid red'
                                    } : {}
                                }
                                        active
                                        to={`/parent/${pr.id}/${pr.Name}`} >
                                            {pr.Name}
                                </Link>
                            </li>
            ))}
            
            <li className="all-menu has_transition"><a href="">Tất cả <span className="hamburger"></span></a>
            </li>
        </ul>
    </nav>
    </section>
        <Switch>
        <Route exact path="/" component={Section2} />
        <Route exact path="/parent/:prID/:prNAME" component={Parent}></Route>
        <Route exact path="/contentblog/:Id/:Id_p/:Id_c" component={Content}></Route>
        </Switch>
        </BrowserRouter>
        <Footer/>
    </body>
)
}
