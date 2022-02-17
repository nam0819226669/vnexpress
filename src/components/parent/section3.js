import React from 'react'
export default function Section3() {
    return(
        <section  className = "section section_container" >
            <div  className = 'container has_border flexbox' >
                <div  className = "col-left-folder-v2" >
                    <div className="width_common list-news-subfolder">
                        <article className='item-news item-news-common'>
                            <div className='thumb-art'>
                                <a className = 'thumb thumb-5x3' >
                                    <picture>
                                        <img  style={{transform:'translateX(-50%)', left:'50%'}}
                                        src="https://i1-vnexpress.vnecdn.net/2021/06/13/DSC0321JPG-1623579621-6546-1623579686.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=ftcsu8SLsTSjpIcx6ZyDWg"
                                        />
                                    </picture>

                                </a>
                            </div>
                            <h3  className = 'title-news' >
                                <a>Tiền Giang phong tỏa một xã vì 13 ca nghi nhiễm </a>
                            </h3>
                            <p className='description'>
                                <a> Tiền Giang phong tỏa một xã vì 13 ca nghi nhiễm</a>
                                <span className='meta-news'>
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
                                </span>
                            </p>

                        </article>
                    </div>
                </div>
                <div  className = 'col-right-folder-v2 sticky-ads col-sticky' >
                    <div className='box-category box-news-small box-sticky'>
                        <a>
                            <img src='https://s1.vnecdn.net/vnexpress/restruct/i/v392/banner/desktop_banner_biendong_300x70_x2.jpg'></img>
                        </a>
                    </div>
                    <div  className = 'box-category box-news-small box-sticky' >
                        <h2 className='width_common title-box-category'>
                            <span className='inner-title'>
                                <a> Cuộc sống đó đây</a>
                            </span>
                        </h2>
                        <article  className = 'item-news full-thumb' >
                            <div  className = 'thumb-art' >
                                <a  className = 'thumb thumb-5x3' >
                                    <picture>
                                        <img src='https://i1-vnexpress.vnecdn.net/2021/06/14/anhcatnoname-1623657059-7389-1623657114.png?w=300&h=180&q=100&dpr=1&fit=crop&s=xrz4HoqIK8pO3-cO2lT4gA'/>
                                    </picture>
                                </a>

                            </div>
                            <h3  className = 'title-news' >
                                <a>Cuộc sống của người đàn ông lấy 38 vợ</a>
                                 <span className='meta-news'>
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
                                </span>
                            </h3>
                        </article>
                    </div>
                </div>
                <div className='social_pin social_pin_folder'>
                    <ul className='social_left'>
                        <li>
                            <a className="social_fb flexbox btn_share">
                                <svg class = "ic ic-facebook" > 
                                  <use  href = "#Facebook" > 
                                    <svg id="Facebook" viewBox="0 0 32 32">
                                    <path d="M22.912 10.485l-0.582 5.515h-4.409v16h-6.622v-16h-3.3v-5.515h3.3v-3.32c0-4.486 1.865-7.164 7.168-7.164h4.407v5.515h-2.758c-2.058 0-2.195 0.777-2.195 2.214v2.756h4.99z"></path>
                                    </svg>
                                 </use>
                            </svg >
                            </a>
                        </li>
                        <li>
                            <a className="social_fb flexbox btn_share">
                                <svg class = "ic ic-facebook" > 
                                  <use  href = "#Twitter" >
                                    <svg id="Twitter" viewBox="0 0 32 32">
                                    <path d="M32 6.001c-1.2 0.6-2.4 0.8-3.8 1 1.4-0.8 2.4-2 2.8-3.6-1.2 0.8-2.6 1.2-4.2 1.6-1.2-1.2-3-2-4.8-2-3.4 0-6.4 3-6.4 6.6 0 0.6 0 1 0.2 1.4-5.4-0.2-10.4-2.8-13.6-6.8-0.6 1-0.8 2-0.8 3.4 0 2.2 1.2 4.2 3 5.4-1 0-2-0.4-3-0.8 0 3.2 2.2 5.8 5.2 6.4-0.6 0.2-1.2 0.2-1.8 0.2-0.4 0-0.8 0-1.2-0.2 0.8 2.6 3.2 4.6 6.2 4.6-2.2 1.8-5 2.8-8.2 2.8h-1.6c3 1.8 6.4 3 10 3 12 0 18.6-10 18.6-18.6v-0.8c1.4-1 2.6-2.2 3.4-3.6z"></path>
                                    </svg>
                                 </use>
                            </svg >
                            </a>
                        </li>
                        <li className = 'border' >
                            <a className='social_back flexbox'>
                                <svg class = "ic ic-back" > 
                                    <use  href = "#Arrow-Right-2" >
                                        <svg id="Arrow-Right-2" viewBox="0 0 32 32">
                                        <path d="M18.6 2.601l-2.8 2.8 8.6 8.6h-24.4v4h24.4l-8.6 8.6 2.8 2.8 13.4-13.4-13.4-13.4z"></path>
                                        </svg>
                                    </use>
                                </svg >
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}