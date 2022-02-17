import React from 'react'
export default function Section2(props) {
    let bg = props.blog
    return(
        <section section className = "section section_container section_five_news mt20" >
            <div className="container">
                <div  className = "list-news-five width_common" >
                    <div className = "list-news-five width_common" >
                        {bg.slice(1, 4).map((blog)=>(
                              <article  className = "item-news full-thumb " >
                            <div  className = "inner-item-news-five width_common" >
                                <div  className = "thumb-art" >
                                    <a className="thumb thumb-5x3">
                                        <picture>
                                            <img className="lazy loading"
                                            src = {blog.image}
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className="title-news">
                                    <a>{blog.title}</a>
                                </h3>
                                <p className="meta-news">
                                    <a className="count_cmt" href="https://vnexpress.net/go-vap-se-go-12-chot-kiem-soat-ra-vao-4293942.html#box_comment_vne" style={{whiteSpace: 'nowrap', display:'none'}} >
                                        <svg className="ic ic-comment">
                                            <use href="#Comment-Reg">
                                                <svg id="Comment-Reg" viewBox="0 0 32 32">
                                                <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z"></path>
                                                </svg>
                                            </use>
                                        </svg>
                                        <span className="font_icon widget-comment-4293942-1">8</span>
                                    </a>
                                  </p>
                            </div>

                        </article>
                      
                        ))}
                           
                    </div>

                </div>
            </div>
        </section>
    )

 }