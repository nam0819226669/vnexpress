import '../App.css';

export function Section7(){
    return(
        <section className="section section_container section_photo">
        <div className="container has_border animated animatedFadeInUp fadeInUp" id="automation_Photo">
            <hgroup className="width_common title-box-category">
                <h2 className="parent-cate">
                    <a href="/anh" className="inner-title" title="Ảnh">Ảnh</a>
                </h2>
            </hgroup>
            <div className="width_common wrap-slide-photo wrap-slide-photo-v2">
                <div className="wrap-thumb width_common">
                    <div className="inner-wrap-thumb width_common">
                        <div className="Thumb-photo swiper-container swiper-container-vertical">
                            <div className="swiper-wrapper" style={{transform: 'translate3d(0px, -2400px, 0px)'}}>
                                <div className="swiper-slide item-news full-thumb swiper-slide-duplicate swiper-slide-duplicate-active"
                                    style={{height: '480px'}}>
                                    <div className="thumb-art">
                                        <a href="" title="9 nàng thơ của Trương Nghệ Mưu" className="thumb thumb-5x3">
                                            <picture>
                                                <img loading="lazy" intrinsicsize="900x540"
                                                    alt="9 nàng thơ của Trương Nghệ Mưu" className="lazy lazied" src="">
                                                </img> </picture>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*
                            <!-- Add Arrows --> */}
                            <div className="swiper-button-vne swiper-button-next-photo" aria-label="Next slide">
                                <svg className="ic ic-arrow-down">
                                    <use className="#Arrow-Right-1"></use>
                                </svg>
                            </div>
                            <div className="swiper-button-vne swiper-button-prev-photo" aria-label="Previous slide">
                                <svg className="ic ic-arrow-up">
                                    <use className="#Arrow-Right-1"></use>
                                </svg>
                            </div>
                            <span className="swiper-notification" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
                <div className="Title-photo swiper-container swiper-container-vertical swiper-container-thumbs">
                    <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, -1200px, 0px)'}}>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-thumb-active"
                            data-swiper-slide-index="0">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">9 nàng thơ
                                        của
                                        Trương
                                        Nghệ
                                        Mưu</a></h3>
                                <p className="description"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">Lưu Hạo
                                        Tồn,
                                        Đổng
                                        Khiết,
                                        Chu Đông Vũ... thành danh sau khi được Trương Nghệ Mưu chọn đóng phim.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620822600000" timeago-id="1057">2h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002753"
                                        data-itm-source="#vn_source=1002753&amp;vn_campaign=Desktop&amp;vn_medium=Title-GiaiTri&amp;vn_term=Home"
                                        title="Giải trí" href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276742-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-next"
                            data-swiper-slide-index="1">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Phong cách
                                        hoa
                                        hậu Thái tại Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Amanda
                                        Obdam -
                                        đại diện Thái Lan tại Miss Universe đang diễn ra tại Mỹ - chuộng váy áo cut-out
                                        phối
                                        túi hàng hiệu.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620828000000" timeago-id="4817">1h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002750" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276314-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="2">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân đọ
                                        sắc cùng thí sinh Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân
                                        tạo dáng bên người đẹp đến từ Brazil, Cộng hòa Dominica và Hoa hậu Hoàn vũ 2019
                                        Zozibini Tunzi trong buổi chụp hình chung.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" data-category-id="1002726" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276897-1">6</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="3">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động
                                        '99
                                        núi, 99 hồ' giữa rừng Tây Bắc</a></h3>
                                <p className="description"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Động Tiên
                                        Sơn
                                        là một trong những hang đá còn nguyên nét hoang sơ của Tây Bắc, với những thạch
                                        nhũ
                                        đẹp.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed"
                                        data-itm-source="#vn_source=1004088&amp;vn_campaign=Desktop&amp;vn_medium=Title-DuLich&amp;vn_term=Home"
                                        title="Du lịch" href="/">Du lịch</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4275791-3">4</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-prev"
                            data-swiper-slide-index="4">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">'Phố biến
                                        thành sông' sau mưa lớn ở Hà Nội</a></h3>
                                <p className="description"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">Cơn
                                        mưa
                                        lớn
                                        trong hơn một giờ khiến nhiều tuyến phố ở Hà Nội ngập sâu, giao thông ùn tắc,
                                        tối
                                        11/5.</a></p>
                                <p className="meta-news">
                                    <a className="cat hidden c-parsed"></a>
                                    <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276546-3">13</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                            data-swiper-slide-index="0">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">9 nàng thơ
                                        của
                                        Trương
                                        Nghệ
                                        Mưu</a></h3>
                                <p className="description"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">Lưu Hạo
                                        Tồn,
                                        Đổng
                                        Khiết,
                                        Chu Đông Vũ... thành danh sau khi được Trương Nghệ Mưu chọn đóng phim.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620822600000" timeago-id="1059">2h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002753"
                                        data-itm-source="#vn_source=1002753&amp;vn_campaign=Desktop&amp;vn_medium=Title-GiaiTri&amp;vn_term=Home"
                                        title="Giải trí" href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276742-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-next" data-swiper-slide-index="1">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Phong cách
                                        hoa
                                        hậu Thái tại Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Amanda
                                        Obdam -
                                        đại diện Thái Lan tại Miss Universe đang diễn ra tại Mỹ - chuộng váy áo cut-out
                                        phối
                                        túi hàng hiệu.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620828000000" timeago-id="4847">1h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002750" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276314-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news" data-swiper-slide-index="2">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân đọ
                                        sắc cùng thí sinh Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân
                                        tạo dáng bên người đẹp đến từ Brazil, Cộng hòa Dominica và Hoa hậu Hoàn vũ 2019
                                        Zozibini Tunzi trong buổi chụp hình chung.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" data-category-id="1002726" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276897-1">6</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news" data-swiper-slide-index="3">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động
                                        '99
                                        núi, 99 hồ' giữa rừng Tây Bắc</a></h3>
                                <p className="description"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Động Tiên
                                        Sơn
                                        là một trong những hang đá còn nguyên nét hoang sơ của Tây Bắc, với những thạch
                                        nhũ
                                        đẹp.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed"
                                        data-itm-source="#vn_source=1004088&amp;vn_campaign=Desktop&amp;vn_medium=Title-DuLich&amp;vn_term=Home"
                                        title="Du lịch" href="/">Du lịch</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4275791-3">4</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate-prev" data-swiper-slide-index="4">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">'Phố biến
                                        thành sông' sau mưa lớn ở Hà Nội</a></h3>
                                <p className="description"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">Cơn
                                        mưa
                                        lớn
                                        trong hơn một giờ khiến nhiều tuyến phố ở Hà Nội ngập sâu, giao thông ùn tắc,
                                        tối
                                        11/5.</a></p>
                                <p className="meta-news">
                                    <a className="cat hidden c-parsed"></a>
                                    <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276546-3">13</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-thumb-active"
                            data-swiper-slide-index="0">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">9 nàng thơ
                                        của
                                        Trương
                                        Nghệ
                                        Mưu</a></h3>
                                <p className="description"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">Lưu Hạo
                                        Tồn,
                                        Đổng
                                        Khiết,
                                        Chu Đông Vũ... thành danh sau khi được Trương Nghệ Mưu chọn đóng phim.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620822600000" timeago-id="1061">2h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002753"
                                        data-itm-source="#vn_source=1002753&amp;vn_campaign=Desktop&amp;vn_medium=Title-GiaiTri&amp;vn_term=Home"
                                        title="Giải trí" href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276742-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-next"
                            data-swiper-slide-index="1">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Phong cách
                                        hoa
                                        hậu Thái tại Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Amanda
                                        Obdam -
                                        đại diện Thái Lan tại Miss Universe đang diễn ra tại Mỹ - chuộng váy áo cut-out
                                        phối
                                        túi hàng hiệu.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620828000000" timeago-id="4873">1h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002750" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276314-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="2">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân đọ
                                        sắc cùng thí sinh Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân
                                        tạo dáng bên người đẹp đến từ Brazil, Cộng hòa Dominica và Hoa hậu Hoàn vũ 2019
                                        Zozibini Tunzi trong buổi chụp hình chung.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" data-category-id="1002726" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276897-1">6</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="3">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động
                                        '99
                                        núi, 99 hồ' giữa rừng Tây Bắc</a></h3>
                                <p className="description"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Động Tiên
                                        Sơn
                                        là một trong những hang đá còn nguyên nét hoang sơ của Tây Bắc, với những thạch
                                        nhũ
                                        đẹp.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" title="Du lịch" href="/">Du
                                        lịch</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4275791-3">4</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="4">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">'Phố biến
                                        thành sông' sau mưa lớn ở Hà Nội</a></h3>
                                <p className="description"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">Cơn
                                        mưa
                                        lớn
                                        trong hơn một giờ khiến nhiều tuyến phố ở Hà Nội ngập sâu, giao thông ùn tắc,
                                        tối
                                        11/5.</a></p>
                                <p className="meta-news">
                                    <a className="cat hidden c-parsed"></a>
                                    <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use className="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276546-3">13</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="swiper-notification" aria-atomic="true"></span>
                </div>
            </div>
        </div>
        <div id="_photos" className="lazier hidden"></div>
    </section>
    )
}