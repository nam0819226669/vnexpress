import React from 'react'
export default function Section4(){
    return(
        <section className = 'section section_container section_video' >
            <div className='container animated animatedFadeInUp fadeInUp'>
            <div className='width_common inner-section-video'>
                <hgroup  className = 'width_common title-box-category' >
                    <h2  className = 'parent-cate' >
                        <a className='inner-title'>Video</a>
                    </h2>
                    <a target = "_blank"
                    rel = "nofollow"
                    href = "https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1" className='youtube_subcribe right'>Theo dõi trên</a>
                </hgroup>
                <div  className = 'width_common wrapper-box-video' >
                    <div className='box-player-video'>
                        <div className='thumb-video thumb thumb-16x9'>
                            <span span className = 'play-icon' >
                                <svg className = 'ic ic-play' >
                                    <use href = '#play-1' >
                                        <svg id="play-1" viewBox="0 0 32 32">
                                        <path d="M27.2 14.4l-20-14c-1.4-1-3.2 0-3.2 1.6v28c0 1.6 1.8 2.6 3.2 1.6l20-14c1-0.8 1-2.4 0-3.2z"></path>
                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <picture>
                                <img src='https://i1-vnexpress.vnecdn.net/2021/06/10/af-gwangju-0906-1623283457-2052-1623283687.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=uxsS2XpzAGgvqPDSNm21MQ'/>
                            </picture>
                        </div>
                        <div className='item-news'>
                            <h4 className='title-news'>
                                <a >Tòa nhà đổ sập vào xe buýt ở Hàn Quốc, 9 người chết</a>
                            </h4>
                        </div>

                    </div>
                    <div className='box-scroll-video scrollbar-inner ss-container'>
                        <div className = 'ss-wrapper' >
                            <div  className = 'ss-content' >
                                <article  className = 'item-news item-news-common' >
                                    <div  className = 'thumb-art' >
                                        <a className='thumb thumb-16x9 play_video_list'>
                                            <picture>
                                                < img src = 'https://i1-vnexpress.vnecdn.net/2021/06/10/af-gwangju-0906-1623283457-2052-1623283687.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=wchuN7K9IDEgmTDuZ_qGIw' / >
                                            </picture>
                                            <span className='duration-video has_transition'>00:57</span>
                                            <span className="playing-txt has_transition" style={{display:'none'}}>Đang phát</span>
                                        </a>

                                    </div>
                                    <h3 className = 'title-news' >
                                        <a>
                                            Tòa nhà đổ sập vào xe buýt ở Hàn Quốc, 9 người chết
                                        </a>
                                    </h3>
                                </article>
                            </div>
                            <div className="ss-scroll"  style={{height: '46.4503%', top: '0%', right: '-375px'}} ></div>
                        </div>
                    </div>
                </div>
            </div>
        

            </div>
            </section>
    )
}