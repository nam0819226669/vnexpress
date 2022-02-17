import '../App.css';
import db from '../firebase.config';
import React, {
    useState,
    useEffect
} from 'react'
import Section3 from './section3'
import {Section4} from './section4'
import {Section6} from './section6'
import {Section7} from './section7'
import {Section8} from './section8'
export function Section2(){
     const [blogs, setBlogs] = useState([]);
     const getBlogs = async () => {
       
                 db.collection("Blogs").onSnapshot((querySnapshot) => {
                     const docs = [];
                     querySnapshot.forEach((doc) => {
                         docs.push({
                             ...doc.data(),
                             id: doc.id
                         });
                     });

                     setBlogs(docs);
                 })
           
      };
     useEffect(() => {
         getBlogs();
     }, []);
     const items = blogs.slice(0, 1);
    return(
        <div>  
                 
    <section className="section section_topstory">
        
       
     <div className="container flexbox">
         <div className="col-left-top">
             <div
                 className="wrapper-topstory-folder wrapper-topstory-folder-v2 wrapper-topstory-home flexbox width_common">
                  {
                      items.map((blog) => (
                 <article className="item-news full-thumb article-topstory">
                     <div className="thumb-art">
                         <a  href = { `/contentblog/${blog.id}/${blog.id_p}/${blog.id_c}`}
                         className = "thumb thumb-5x3" >
                             <picture>
                                 <img itemprop="contentUrl" loading="lazy" intrinsicsize="680x408"
                                     alt="Thêm 16 ca Covid-19 cộng đồng" className="lazy loading"
                                     src = {blog.image }
                                     />
                             </picture>
                         </a></div>
                     <h3 className="title-news"><a href = { `/contentblog/${blog.id}/${blog.id_p}/${blog.id_c}`} >{blog.title}</a></h3>
                     {/* <p className="description"><a href="" title="Thêm 16 ca Covid-19 cộng đồng">{blog.description}</a></p> */}
                     <p className="extend-lead description mt5" ><a  href = { `/contentblog/${blog.id}/${blog.id_p}/${blog.id_c}`} title="Thêm 16 ca Covid-19 cộng đồng">{blog.description}</a></p>
                     <p className="meta-news"><span className="time-public"><span datetime="2021-05-10 19:24:56"
                                 timeago-id="380">1h trước</span></span><a className="cat c-parsed" title="Sức khỏe"
                             href="/">Sức khỏe</a>
                         <a className="count_cmt" href=".">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275935-1"></span>
                         </a>
                     </p>
                 </article>
                 ))
                 }
                 <div className="sub-news-top">
                     <div className="inner-sub-news-top">
                         <div className="scroll-sub-featured">
                             <ul className="list-sub-feature">
                                 {
                                     blogs.slice(1,3).map((blog1) => (
                                 <li>
                                     <h3 className="title_news"><a href={`/contentblog/${blog1.id}/${blog1.id_p}/${blog1.id_c}`}
                                             title={blog1.title}>{blog1.title}</a>
                                     </h3>
                                     <p className = "description">
                                          <a href={`/contentblog/${blog1.id}/${blog1.id_p}/${blog1.id_c}`}  >{blog1.description}</a>
                                             <span className="meta-news">
                                             <a className="count_cmt" href="#">
                                                 <svg className="ic ic-comment">
                                                     <use use href = "#Comment-Reg" >
                                                         <svg id="Comment-Reg" viewBox="0 0 32 32"> 
                                                        <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z"></path>
                                                    </svg>
                                                     </use>
                                                 </svg>
                                                 <span className="font_icon widget-comment-4275865-1">4</span>
                                             </a>
                                         </span></p>
                                 </li>
                               ))
                               }
                                 {/*
                                 <!--box góc nhìn--> */}
                                 {blogs.slice(3,4).map((blog2)=>(
                                 <li className="item-gocnhin">
                                     <article className="item-news art-top-gn">
                                         <h3 className="title-news"><a href="" title={blog2.title}>{blog2.title}</a></h3>
                                         < p className = "description" > <a a href = ""
                                         title = {
                                             blog2.title
                                         } > {blog2.description}</a></p>
                                         <div className="width_common info-author flexbox">
                                             <p className="meta-news">
                                                 <a href="" className="cat" title="Trần Văn Phúc">Trần Văn Phúc</a>
                                                 <a className="count_cmt" href="">
                                                     <svg className="ic ic-comment">
                                                         <use href="#Comment-Reg"><svg id="Comment-Reg"
                                                                 viewBox="0 0 32 32">
                                                                 <path
                                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                                 </path>
                                                             </svg></use>
                                                     </svg>
                                                     <span className="font_icon widget-comment-4275353-1">98</span>
                                                 </a>
                                             </p>
                                             <div className="thumb-art thumb-author-gn">
                                                 <a href="" className="thumb thumb-1x1" title="Trần Văn Phúc">
                                                     <picture>
                                                         <img itemprop="contentUrl" loading="lazy"
                                                             intrinsicsize="100x100" alt="" className="lazy loading"
                                                             src="https://i1-vnexpress.vnecdn.net/2017/03/31/TranVanPhucpng-1490927036.png?w=100&amp;h=100&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bSd7XIwISyPCOEQsLmZazA" />
                                                     </picture>
                                                 </a>
                                             </div>
                                         </div>
                                     </article>
                                 </li>
                                 ))
                                 }
                             </ul>
                         </div>
                     </div>
                 </div>
      </div>
         </div>
         <aside className="col-right-top">
             <div className="box-category">
                 <div className="banner-ads">
                     <div id="_large_1" className="lazier"></div>
                 </div>
             </div>
         </aside>
     </div>
 </section>
                <Section3 />
                < Section4 />
                < Section6 />
                < Section7 />
                < Section8 /> 
  </div>   
 )
}