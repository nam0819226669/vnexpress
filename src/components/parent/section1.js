import React from 'react'
export default function Section1(props){
    let bg = props.blog
    return(
        <div>
            <section section className = "section section_topstory section_topstory_folder " >
                <div className="container flexbox">
                    <div className="col-left-top">
                        <div className="wrapper-topstory-folder flexbox width_common wrapper-topstory-folder-v2">
                         {bg.slice(0,1).map((blog)=>(

                            <article className="item-news full-thumb article-topstory">
                                <div className="thumb-art">
                                    <a  href="./" className="thumb thumb-5x3">
                                        <picture>
                                            <img  style={{transform: "translateX(-50%)", left: "50%"}}
                                            intrinsicsize="680x408"
                                            src = {blog.image} />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className="title-news">
                                    <a href="./">{blog.title}</a>
                                </h3>
                                <p className="description">
                                    <a href="./">{blog.description}</a>
                                </p>
                                <p className="meta-news">
                                    <a className="cat c-parsed">{props.parent}</a>
                                </p>
                            </article>
                         ))
                         }

                            <div className="sub-news-top">
                                <div div className = "inner-sub-news-top" >
                                    <div className="scroll-sub-featured">
                                        <ul className="list-sub-feature">
                                            {bg.slice(1,4).map((blog)=>(

                                            <li>
                                                <h3 className="title_news">
                                                    <a href="./">{blog.title}</a>
                                                </h3>
                                                <p className="description">{blog.description}</p>
                                            </li>
                                            ))}
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <section  className = "section section_topic mt20" >
                            <div  className = "width_common box-slide-topic animated animatedFadeInUp fadeInUp  " >
                                <span  className = "txt-topic" >
                                    <svg  className = "ic ic-trend" >
                                        <use href="#Trend">
                                            <svg id="Trend" viewBox="0 0 32 32">
                                            <path d="M24 6v3.2h2.56l-8.96 8.96-6.4-6.4-11.2 11.2 2.24 2.24 8.96-8.96 6.4 6.4 11.2-11.2v2.56h3.2v-8h-8z"></path>
                                            </svg>
                                        </use>
                                    </svg>
                                    Chủ đề
                                </span>
                                <div className="swiper-button-box swiper-button-box-next swiper-button-next-topic">
                                    <svg className="ic ic-arrow-right">
                                        <use  href = "#Arrow-Right-1" >
                                            <svg id="Arrow-Right-1" viewBox="0 0 32 32">
                                            <path d="M9.8 31.4l-3-2.8 12.6-12.6-12.6-12.6 3-2.8 15.4 15.4-15.4 15.4z"></path>
                                            </svg>  
                                        </use>
                                    </svg>
                                </div>  
                                <div div className = "swiper-button-box swiper-button-box-prev swiper-button-prev-topic swiper-button-disabled" >
                                    <svg  className = "ic ic-arrow-left" >
                                        <use  href = "#Arrow-Right-1" >
                                            <svg id="Arrow-Left-1" viewBox="0 0 32 32">
                                            <path d="M22.2 0.601l3 2.8-12.6 12.6 12.6 12.6-3 2.8-15.4-15.4 15.4-15.4z"></path>
                                            </svg>
                                        </use>
                                    </svg>
                                </div>                          
                                <div className="swiper-container swiper-container-horizontal">
                                    <div className="swiper-wrapper check-width-chirld"> 
                                    <article className="swiper-slide item-news swiper-slide-active">
                                        <h3 className="title-news">
                                            <a href="/covid-19/tin-tuc" >Dịch Covid-19 bùng phát tháng 4/2021</a>
                                        </h3>
                                    </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <aside className="col-right-top">
                        <div className = "box-category box-news-small box-news-replace gaBoxLinkDisplay" >
                            <div className='width_common scroll-news-replace scrollbar-inner ss-container'
                            style={{height:'516.797px'}}>
                                <div  className = 'ss-wrapper' >
                                    <div className='ss-content'>
                                        {bg.map((blog)=>(

                                        <article  className = 'item-news small-thumb' >
                                            <div className='thumb-art'> 
                                                <a>
                                                    <picture>
                                                        <img src={blog.image}/>
                                                    </picture>
                                                 </a>
                                            </div>
                                            <h4 className='title-news'>
                                                <a>{blog.title}</a>
                                            </h4>

                                        </article>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </div>
                    </aside>
                </div>

            </section>
        </div>
    )
}