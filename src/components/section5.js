import '../App.css';
import React, {useEffect,useState } from 'react'

export default Section5;
function Section5(props){
    console.log(props.pr)
    

    
    return(
        
    <section className="section section_container">
      {
         props.pr && props.pr.slice(1,4).map((blog) => {
             return( 
           
    <section className="section section_container">
         <div className="container has_border">
             <hgroup className="width_common title-box-category dulich">
                 <h2 className="parent-cate"><a href="/" className="inner-title" title="Du lịch">{blog.Name}</a></h2><span
                     className="sub-cate"><a href="//dau-chan" title="Dấu chân">Dấu chân</a></span><span
                     className="sub-cate"><a href="//tu-van" title="Tư vấn">Tư vấn</a></span><span
                     className="sub-cate"><a href="//safe-go" title="Safe Go">Safe Go</a></span><span
                     className="sub-cate"><a href="//diem-den" title="Điểm đến">Điểm đến</a></span><span
                     className="sub-cate"><a href="//anh-video" title="Ảnh">Ảnh</a></span><span className="sub-cate"><a
                         href="//an-va-choi" title="Ăn và chơi">Ăn và chơi</a></span>
             </hgroup>
             <div className="width_common section_box_cate flexbox">
                 {blog.posts.slice(0,1).map((post)=>{
                     return(
                    <div className="col-boxcate colbox-left">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Cuộc sống ở nơi không có Covid-19">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="500x300" alt="Cuộc sống ở nơi không có Covid-19"
                                         className="lazy lazied"
                                         src={post.image}
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/12/3-1620797454-1217-1620797470-1-1666-5897-1620823220.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=TbYW57SU1jCx2G6acn6L7A">
                                     </img></picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Cuộc sống ở nơi không có Covid-19">{post.title}</a></h3>
                             <p className="description">
                                 <a href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                     title="Cuộc sống ở nơi không có Covid-19">
                                     <span className="location-stamp"></span>{post.description}
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                         style={{display: 'none'}}>
                                         <svg className="ic ic-comment">
                                             <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276752-1"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                 </div>
                
                     )
                 })}
                  <div className="col-boxcate colbox-center">
                      {blog.posts.slice(1,3).map((post)=>{
                     return(
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="ca-ran-chin-mieng-con-dop-mang-phap-phong-4275626.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Cá rán chín miệng còn đớp, mang phập phồng">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Cá rán chín miệng còn đớp, mang phập phồng" className="lazy lazied"
                                        src={post.image}
                                        data-src="https://i1-dulich.vnecdn.net/2021/05/11/yin-and-yang-fish-1620710008-4218-1620710365.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qhE6dxsq798QyTgcsUS8og">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="ca-ran-chin-mieng-con-dop-mang-phap-phong-4275626.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Cá rán chín miệng còn đớp, mang phập phồng">{post.title}</a><span className="meta-news">
                                 <a className="count_cmt" href="ca-ran-chin-mieng-con-dop-mang-phap-phong-4275626.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275626-1">33</span>
                                 </a>
                             </span></h3>
                     </article>
                        )
                        })
                        }
                    </div>
                 <div className="col-boxcate colbox-right">
                     {
                         blog.posts.slice(3, 7).map((post) => {
                                     return (
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="5-trai-nghiem-tron-nong-he-o-pu-luong-4274204.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="5 trải nghiệm trốn nóng hè ở Pù Luông">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="5 trải nghiệm trốn nóng hè ở Pù Luông" className="lazy lazied"
                                        src={post.image}
                                        data-src="https://i1-dulich.vnecdn.net/2021/05/12/tran-huy-thang-3-5529-15392249-9639-2286-1620805124.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wcoiCMYJIBgxWcle2iY4FQ">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="5-trai-nghiem-tron-nong-he-o-pu-luong-4274204.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title={post.title}>{post.title}</a><span className="meta-news">
                                 <a className="count_cmt" href="5-trai-nghiem-tron-nong-he-o-pu-luong-4274204.html"
                                     style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4274204-1"></span>
                                 </a>
                             </span></h3>
                     </article>
                     )
                     })
                     }
                    </div>
             </div>
         </div>
     </section>
        )
         })
        } 
      <div id="_havien_v2" className="lazier hidden"></div>
 </section>
    )
}