import React from 'react'
export default function Footer(){
    return(
        <div>
              <footer className="footer">
    <div className="inner-footer">
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Trang chủ" f=""
                    onclick="trackingLogoHome('logo-footer-menu', this.href)">Trang chủ</a></li>
            <li className="item-menu"><a href="https://video." title="Video">Video</a></li>
            <li className="item-menu"><a href="infographics" title="Infographics">Infographics</a>
            </li>
            <li className="item-menu border-top" style={{paddingtop: '15px',bordertop: '1px solid #e5e5e5'}}><a href=""
                    title="Mới nhất">Mới nhất</a></li>
            <li className="item-menu"><a href="" title="Xem nhiều">Xem nhiều</a></li>
            <li className="item-menu"><a href="anh">Ảnh</a></li>
            <li className="item-menu"><a href="tin-nong" title="Tin nóng">Tin nóng</a></li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Thời sự">Thời sự</a></li>
            <li className="item-menu"><a href="" title="Góc nhìn">Góc nhìn</a></li>
            <li className="item-menu"><a href="" title="Thế giới">Thế giới</a></li>
            <li className="item-menu"><a href="" title="Kinh doanh">Kinh doanh</a></li>
            <li className="item-menu"><a href="giai-tri" title="Giải trí">Giải trí</a></li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Thể thao">Thể thao</a></li>
            <li className="item-menu"><a href="" title="Pháp luật">Pháp luật</a></li>
            <li className="item-menu"><a href="" title="Giáo dục">Giáo dục</a></li>
            <li className="item-menu"><a href="" title="Sức khỏe">Sức khỏe</a></li>
            <li className="item-menu"><a href="" title="Đời sống">Đời sống</a></li>
            <li className="item-menu"><a href="" title="Du lịch">Du lịch</a></li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Khoa học">Khoa học</a></li>
            <li className="item-menu"><a href="" title="Số hóa">Số
                    hóa</a></li>
            <li className="item-menu"><a href="" title="Xe">Xe</a>
            </li>
            <li className="item-menu"><a href="" title="Ý kiến">Ý
                    kiến</a></li>
            <li className="item-menu"><a href="" title="Tâm sự">Tâm
                    sự</a></li>
            <li className="item-menu"><a href="hai" title="Hài">Hài</a>
            </li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Rao vặt">Rao vặt</a></li>
            <li className="item-menu"><a href="" title="Shop VnExpress">Shop VnExpress</a></li>
            <li className="item-menu"><a href="" title="Startup">Startup</a></li>
            <li className="item-menu"><a href="" title="Pay VnExpress">Pay
                    VnExpress</a></li>
            <li className="item-menu"><a href="" title="Kid-lab">Kid-lab</a></li>
            <li className="item-menu"><a href="" title="Mua ảnh VnExpress">Mua ảnh VnExpress</a></li>
            <li className="item-menu"><a href="" title="Vhome">Vhome</a></li>
        </ul>
        <div className="wrap-contact">
            <div className="contact downloadapp">
                <p>Tải ứng dụng</p>
                <a href="" className="app_vne open-popup-link" title="VnExpress"><svg className="ic ic-vne">
                        <use className="#letter-E"></use>
                    </svg>VnExpress</a>
                <a href="" className="app_evne open-popup-link" title="International"><svg className="ic ic-evne">
                        <use className="#letter-E-grey">
                            <svg id="letter-E-grey" viewBox="0 0 32 32">
                                <path fill="#757575" style={{fill: 'var(--color3, #757575)'}}
                                    d="M10.783 7.812h15.652v-4.226h-20.87v24.83h20.87v-4.226h-15.652v-5.811h7.304v-4.755h-7.304v-5.811z">
                                </path>
                                <path fill="#757575" style={{fill: 'var(--color3, #757575)'}}
                                    d="M28.5 32.001c0.828 0 1.5-0.682 1.5-1.524v-28.952c0-0.842-0.672-1.524-1.5-1.524h-25c-0.829 0-1.5 0.682-1.5 1.524v28.952c0 0.842 0.671 1.524 1.5 1.524h25zM26.586 9.397h-14.238v2.642h5.89c0.864 0 1.414 0.765 1.414 1.64v4.755c0 0.875-0.55 1.529-1.414 1.529h-5.89v2.641h14.238c0.864 0 1.414 0.766 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529h-20.869c-0.865 0-1.717-0.655-1.717-1.529v-24.83c0-0.875 0.852-1.64 1.717-1.64h20.869c0.864 0 1.414 0.766 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529z">
                                </path>
                                <path fill="#fff" style={{fill: 'var(--color2, #fff)'}}
                                    d="M28 28.471v-4.226c0-0.875-0.55-1.64-1.414-1.64h-14.238v-2.642h5.89c0.864 0 1.414-0.655 1.414-1.529v-4.755c0-0.875-0.55-1.64-1.414-1.64h-5.89v-2.642h14.238c0.864 0 1.414-0.655 1.414-1.529v-4.226c0-0.875-0.55-1.64-1.414-1.64h-20.869c-0.865 0-1.717 0.766-1.717 1.64v24.83c0 0.875 0.852 1.529 1.717 1.529h20.869c0.864 0 1.414-0.655 1.414-1.529zM26.435 7.812h-15.652v5.811h7.304v4.755h-7.304v5.811h15.652v4.226h-20.87v-24.83h20.87v4.226z">
                                </path>
                            </svg>
                        </use>
                    </svg>International</a>
            </div>
            <div className="contact">
                <p>Liên hệ</p>
                <a data-medium="Menu-LienHeToaSoan" title="Liên hệ tòa soạn" href="" className="mail"><svg
                        className="ic ic-mail">
                        <use className="#Mail">
                            <svg id="Mail" viewBox="0 0 32 32">
                                <path
                                    d="M17.416 18.606c-0.436 0.257-0.922 0.392-1.416 0.392s-0.981-0.135-1.416-0.392l-14.559-8.605c-0.005 0.045-0.024 0.086-0.024 0.132v18.764c0 0.293 0.105 0.573 0.293 0.78s0.442 0.323 0.707 0.323h30c0.265 0 0.52-0.116 0.707-0.323s0.293-0.488 0.293-0.78v-18.764c0-0.046-0.019-0.086-0.024-0.131l-14.56 8.604z">
                                </path>
                                <path
                                    d="M31 4.001h-30c-0.265 0-0.52 0.123-0.707 0.341s-0.293 0.514-0.293 0.823v2.327c-0 0.211 0.049 0.417 0.142 0.598s0.226 0.329 0.386 0.428l15 9.345c0.145 0.091 0.307 0.138 0.472 0.138s0.327-0.047 0.472-0.138l15-9.345c0.16-0.099 0.293-0.247 0.386-0.428s0.142-0.387 0.142-0.598v-2.327c0-0.309-0.105-0.605-0.293-0.823s-0.442-0.341-0.707-0.341z">
                                </path>
                            </svg>
                        </use>
                    </svg>Tòa soạn</a>
                <a title="Liên hệ quảng cáo"
                    href="https://eclick.vn/lien-he/?utm_source=VNE&amp;utm_medium=CPC_BOX&amp;utm_campaign=LienHeQuangCao"
                    className="ads"><svg className="ic ic-ads">
                        <use className="#QuangCao"></use>
                    </svg>Quảng cáo</a>
            </div>
            <div className="hotline">
                <p>Đường dây nóng</p>
                <div className="left">
                    <strong>083.888.0123</strong>
                    <p>(Hà Nội)</p>
                </div>
                <div className="right">
                    <strong>082.233.3555</strong>
                    <p>(TP. Hồ Chí Minh)</p>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright width_common">
        <p><a title="VnExpress - Báo tiếng Việt nhiều người xem nhất" href=""><img
                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v388/v2_2019/pc/graphics/logo.svg"
                    alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" /></a></p>
        <div className="right flexbox">
            <a href="/rss" title="RSS">RSS</a>
            <span className="txt-follow">Theo dõi VnExpress trên</span>
            <a href="https://www.facebook.com/congdongvnexpress/" className="social_ft face_ft" title="Facebook"><svg
                    className="ic ic-facebook">
                    <use className="#Facebook">
                        <svg id="Facebook" viewBox="0 0 32 32">
                            <path
                                d="M22.912 10.485l-0.582 5.515h-4.409v16h-6.622v-16h-3.3v-5.515h3.3v-3.32c0-4.486 1.865-7.164 7.168-7.164h4.407v5.515h-2.758c-2.058 0-2.195 0.777-2.195 2.214v2.756h4.99z">
                            </path>
                        </svg>
                    </use>
                </svg></a>
            <a href="https://twitter.com/VnEnews" className="social_ft twitter_ft" title="Twitter"><svg
                    className="ic ic-twitter">
                    <use className="#Twitter">
                        <svg id="Twitter" viewBox="0 0 32 32">
                            <path
                                d="M32 6.001c-1.2 0.6-2.4 0.8-3.8 1 1.4-0.8 2.4-2 2.8-3.6-1.2 0.8-2.6 1.2-4.2 1.6-1.2-1.2-3-2-4.8-2-3.4 0-6.4 3-6.4 6.6 0 0.6 0 1 0.2 1.4-5.4-0.2-10.4-2.8-13.6-6.8-0.6 1-0.8 2-0.8 3.4 0 2.2 1.2 4.2 3 5.4-1 0-2-0.4-3-0.8 0 3.2 2.2 5.8 5.2 6.4-0.6 0.2-1.2 0.2-1.8 0.2-0.4 0-0.8 0-1.2-0.2 0.8 2.6 3.2 4.6 6.2 4.6-2.2 1.8-5 2.8-8.2 2.8h-1.6c3 1.8 6.4 3 10 3 12 0 18.6-10 18.6-18.6v-0.8c1.4-1 2.6-2.2 3.4-3.6z">
                            </path>
                        </svg>
                    </use>
                </svg></a>
            <a href="https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1"
                className="social_ft youtube_ft" title="Youtube"><svg className="ic ic-youtube">
                    <use className="#Youtube">
                        <svg id="Youtube" viewBox="0 0 32 32">
                            <path
                                d="M31.331 7.521c-0.368-1.386-1.452-2.477-2.829-2.847-2.496-0.673-12.502-0.673-12.502-0.673s-10.007 0-12.502 0.673c-1.377 0.37-2.461 1.462-2.829 2.847-0.669 2.512-0.669 7.752-0.669 7.752s0 5.241 0.669 7.752c0.368 1.386 1.452 2.432 2.829 2.802 2.496 0.673 12.502 0.673 12.502 0.673s10.007 0 12.502-0.673c1.377-0.37 2.461-1.416 2.829-2.802 0.669-2.512 0.669-7.752 0.669-7.752s0-5.24-0.669-7.752zM12.727 20.032v-9.516l8.364 4.758-8.364 4.758z">
                            </path>
                        </svg>
                    </use>
                </svg></a>
        </div>
    </div>
    <div className="copyright-footer mt10 mb20 flexbox width_common">
        <p>
            <strong>Báo tiếng Việt nhiều người xem nhất</strong><br />Thuộc Bộ Khoa học Công nghệ<br />Số giấy phép:
            06/GP-BTTTT
            ngày 03/01/2014
        </p>
        <p>
            Tổng biên tập: Phạm Hiếu<br />Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội<br />Điện
            thoại: 024
            7300 8899 - máy lẻ 4500
        </p>
        <p style={{textalign: 'right'}}>© 1997-2021. Toàn bộ bản quyền thuộc VnExpress</p>
    </div>
</footer>
   
        </div>
    )
}