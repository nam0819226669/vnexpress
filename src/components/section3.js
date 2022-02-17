import '../App.css';
import React, { useEffect, useState } from "react";
import db from '../firebase.config';
import Section5 from './section5'
 export default function Section3(props) {
 
const [blognew, setblognew] = useState([]);
var [parent, setparent] = useState([]);
const [post, setpost] = useState([]);

const getparent = async () => {
     db.collection("parent").onSnapshot((querySnapshot) => {
         var arr=[]
        querySnapshot.forEach((doc) => {
            arr.push({
                ...doc.data(),
                id: doc.id
            });
        });
        setparent(arr)
        getcategories(arr)
        getblog(arr);
        
    })
};
const getcategories = async(parent)=>{
 db.collection("categories").onSnapshot((querySnapshot) => {
     var arr_c = []
     querySnapshot.forEach((doc) => {
         arr_c.push({
             ...doc.data(),
             id: doc.id
         });
     });
     getblog(parent, arr_c);
 })
}
const getblog = async (arr_pr, arr_c) => {
    var arr = []
    db.collection("Blogs").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            arr.push({
                ...doc.data(),
                id: doc.id
            })

        });
       const post_new= arr_pr.map((pr)=>{
           const selectedPosts = arr.filter((post) => post.id_p === pr.id);
           const selectedCategories = (arr_c || []).filter((ct) => ct.idparent === pr.id);
            return {
                ...pr,
                id_c: selectedCategories,
                posts: selectedPosts
            }   
              
           })
           setpost(post_new)
    })

};


const getblognew = async () => {
    db.collection("Blogs").onSnapshot((querySnapshot) => {
        var arr = []
        querySnapshot.forEach((doc) => {
            arr.push({
                ...doc.data(),
                id: doc.id
            })

        });
        setblognew(arr);
    })
};

     useEffect(() => {
         getparent();
         getblognew();

         
     }, []);

     
    return(
     <div>
    <section className="section section_stream_home section_container">
                      
     <div className="container has_border flexbox">
         <div className="col-left col-small" id="automation_TV0">
            {
                 blognew.slice(4,12).map((blog) => (
                     
                <article  key={blog.id} className="item-news item-news-common">
                    <h3 className="title-news"><a href=""
                            title="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19">{blog.title}</a>
                    </h3>
                    <div className="thumb-art">
                        <a href="" className="thumb thumb-5x3"
                            title="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19">
                            <picture>
                                <img itemprop="contentUrl" loading="lazy"
                                    alt="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19"
                                    className="lazy loading"
                                    src= {blog.image}/>
                            </picture>
                        </a></div>
                    <p className="description"><a href=""
                         title="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19>">{blog.description}</a><span
                         className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275848-1">6</span>
                         </a>
                     </span></p>
                 </article>
            ))} 
            </div>
         <div className="col-right col-medium">
            <div className="box-category box-cate-featured box-covid-2021 has-border">
                 <article className="item-news item-news-common hidden" id="live_topic_covid">
                 </article>
                 <div className="inner-box-cv flexbox width_common">
                     <div className="header-cv flexbox">
                         <p className="txt-head">
                             <strong>Số ca nhiễm tại Việt Nam</strong>
                             <span>Lây nhiễm cộng đồng từ 27/4</span>
                         </p>
                         <div className="width_common box-count-head flexbox">
                             <a href="/covid-19/covid-19-viet-nam" className="link-to-page"></a>
                             <div className="item-count-head">
                                 <span className="txt-ch">Tổng</span>
                                 <span className="number-count">458</span>
                             </div>
                             <div className="item-count-head">
                                 <span className="txt-ch">Ca nhiễm<br />theo ngày</span>
                                 <div className="width_common chart-by-date chart-by-date" id="chart-by-date">

                                     <li className="flex">
                                         <div className="td"><svg className="spl" width="88" height="30"
                                                 stroke-width="1.5" stroke="rgb(243, 88, 91)"
                                                 fill="rgb(243, 88, 91, 0.2)">
                                                 <path className="sparkline--fill"
                                                     d="M4 26.32 L 4 26.32 L 10.153846153846153 26.5 L 16.307692307692307 25.4 L 22.461538461538463 25.21 L 28.615384615384617 25.95 L 34.769230769230774 25.03 L 40.92307692307693 24.66 L 47.07692307692308 25.95 L 53.23076923076923 23.19 L 59.38461538461539 14.72 L 65.53846153846155 18.96 L 71.6923076923077 11.78 L 77.84615384615385 9.57 L 84 3.5 V 30 L 4 30 Z"
                                                     stroke="none"></path>
                                                 <path className="sparkline--line"
                                                     d="M4 26.32 L 4 26.32 L 10.153846153846153 26.5 L 16.307692307692307 25.4 L 22.461538461538463 25.21 L 28.615384615384617 25.95 L 34.769230769230774 25.03 L 40.92307692307693 24.66 L 47.07692307692308 25.95 L 53.23076923076923 23.19 L 59.38461538461539 14.72 L 65.53846153846155 18.96 L 71.6923076923077 11.78 L 77.84615384615385 9.57 L 84 3.5"
                                                     fill="none"></path>
                                                 <line className="sparkline--cursor" x1="-1000" x2="-1000" y1="0"
                                                     y2="30" stroke-width="2"></line>
                                                 <circle className="sparkline--spot" cx="-1000" cy="-1000" r="2">
                                                 </circle>
                                                 <rect width="88" height="30" className="sparkline--interaction-layer">
                                                 </rect>
                                             </svg><span className="tooltip" hidden="true"></span></div>
                                     </li>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="wrap-slide-cv">
                         <div className="textlink-to-page flexbox">
                             <a href="covid-19/covid-19-viet-nam" className="flexbox" title="Số liệu Covid-19"><span
                                     className="ico-cv ico-tracking"></span><span className="txt-cv">Số liệu
                                     Covid-19</span></a>
                             <a href="covid-19/tin-tuc" className="flexbox" title="Tin tức cập nhật"><span
                                     className="ico-cv ico-news"></span><span className="txt-cv">Tin tức cập
                                     nhật</span></a>
                         </div>
                         <div className="width_common table-cv">
                             <table className="tbl-cv" cellspacing="0" cellpadding="0">
                                 <thead>
                                     <tr>
                                         <th className="col-prov">Tỉnh</th>
                                         <th className="col-today">Hôm nay</th>
                                         <th className="col-all">Tổng</th>
                                     </tr>
                                 </thead>
                             </table>
                             <div className="width_common wrap-scroll-tb scrollbar-inner ss-container">
                                 <div className="ss-wrapper">
                                     <div className="ss-content">
                                         <table className="tbl-cv tbl-sort" cellspacing="0" cellpadding="0">
                                             <tbody>
                                             </tbody>
                                             <tbody>
                                                 <tr>
                                                     <td className="col-prov">Hà Nội <span>(Cộng đồng: 51)</span>
                                                     </td>
                                                     <td className="col-today number-up">+32</td>
                                                     <td className="col-all"><strong>143</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Bắc Ninh</td>
                                                     <td className="col-today number-up">+27</td>
                                                     <td className="col-all"><strong>85</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Vĩnh Phúc</td>
                                                     <td className="col-today number-up">+20</td>
                                                     <td className="col-all"><strong>53</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Đà Nẵng</td>
                                                     <td className="col-today number-up">+18</td>
                                                     <td className="col-all"><strong>53</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Bắc Giang</td>
                                                     <td className="col-today number-up">+15</td>
                                                     <td className="col-all"><strong>47</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hưng Yên</td>
                                                     <td className="col-today number-up">+6</td>
                                                     <td className="col-all"><strong>19</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hoà Bình</td>
                                                     <td className="col-today number-up">+3</td>
                                                     <td className="col-all"><strong>5</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hải Dương</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>5</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Lạng Sơn</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>4</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Điện Biên</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>2</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Đăk Lăk</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>2</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hà Nam</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>16</strong></td>
                                                 </tr>
                                                 <tr data-score="6">
                                                     <td className="col-prov">Thái Bình</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>6</strong></td>
                                                 </tr>
                                                 <tr data-score="3">
                                                     <td className="col-prov">Quảng Nam</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>3</strong></td>
                                                 </tr>
                                                 <tr data-score="3">
                                                     <td className="col-prov">Thừa Thiên Huế</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>3</strong></td>
                                                 </tr>
                                                 <tr data-score="2">
                                                     <td className="col-prov">Nam Định</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>2</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">TP HCM</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Yên Bái</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Đồng Nai</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Quảng Ngãi</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Thanh Hóa</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Nghệ An</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Phú Thọ</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Quảng Ninh</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Hải Phòng</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Quảng Trị</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                                 <div className="ss-scroll ss-hidden"></div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             {
                 post.slice(0,7).map((blog) => {
             return(
                   
            <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category kinhdoanh">
                    <h2 className="parent-cate">
                         <a href="/" className="inner-title" title="Kinh doanh">{blog.Name}</a>
                    </h2>
                    {blog.id_c.map((categori)=>{
                        return(
                         <span className="sub-cate"><a href={`/product/${categori.id}`} title="Quốc tế">{categori.name}</a></span>
                            )})}
                             
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                        {

                            blog.posts.slice(0, 1).map((post_content) => {
                                        return (
                     <article className="item-news full-thumb flexbox ">
                                       
                         <div key={post_content.id} className="thumb-art">
                             <a href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Giá cả leo thang bủa vây người Mỹ">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228" alt="Giá cả leo thang bủa vây người Mỹ"
                                         className="lazy lazied"
                                         src={post_content.image} data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/im335914-1620619489-8938-1620619825.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=GV6AEtTSVhvT4V0RqUb6eQ">
                                     </img> </picture>
                             </a>
                         </div>
                              
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Giá cả leo thang bủa vây người Mỹ">{post_content.title}</a></h3>
                             <p className="description">
                                 <a href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Giá cả leo thang bủa vây người Mỹ">
                                     {post_content.description}
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275588-1">33</span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                        )})}
                        {
                            blog.posts.slice(1, 2).map((post_content) => {
                                        return (                        
                        < article className = "item-news article-sub-right" >
                         <h3 className="title-news"><a href="thoi-trang-viet-lep-ve-truoc-dai-gia-ngoai-4275612.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0">{post_content.title}</a></h3>
                         <p className="description">
                             <a href="thoi-trang-viet-lep-ve-truoc-dai-gia-ngoai-4275612.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0"
                                 title="Thời trang Việt lép vế trước đại gia ngoại">
                                {post_content.description}
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt"
                                     href="thoi-trang-viet-lep-ve-truoc-dai-gia-ngoai-4275612.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275612-1">96</span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     )})}
                     <div className="sub-news-cate flexbox">
                         {
                             blog.posts.slice(2, 5).map((post_content) => {
                                         return (
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="vasep-kien-nghi-tp-hcm-hoan-thu-phi-ha-tang-cang-bien-4276356.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="VASEP kiến nghị TP HCM hoãn thu phí hạ tầng cảng biển">{post_content.title}</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="vasep-kien-nghi-tp-hcm-hoan-thu-phi-ha-tang-cang-bien-4276356.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276356-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                     )})}

                          </div>
                 </div>
             </div>
                 )})
            }
            </div>
     </div>
                
 </section>
    < Section5 pr={post} />
    
    </div>
    
    )
}