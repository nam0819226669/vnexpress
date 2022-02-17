import React, { useEffect, useState } from "react";
import db from '../../firebase.config';
import '../../css/content.css'
export default function Content(props){
    const [detail, setDetail] =useState([]);
    const [parent, setParent] = useState([]);
    const [category, setCategory] = useState([]);
    const [blog, setBlog] = useState([]);
    const [getdate, setDate]=useState('')

    let id = props.match.params.Id;
    let id_p = props.match.params.Id_p;
    let id_c = props.match.params.Id_c;

    const getdetail = async (id, id_c) => {
        var arr1 =[];
           db.collection("Blogs").where('id_c', '==', id_c).onSnapshot((querySnapshot) => {
                       querySnapshot.forEach((doc) => {
                           arr1.push({
                               ...doc.data(),
                               id: doc.id
                           })
                       });
                       const filter1= arr1.filter((blog)=> blog.id != id)
                       setBlog(filter1)
                       const filter = arr1.filter((blog) => blog.id === id);
                       setDetail(filter)
        })
    }
         const getparent = async (id) => {
             var arr1 = [];
             db.collection("parent").doc(id).get().then((doc) => {
                 if (doc.exists) {
                     arr1.push({
                         ...doc.data(),
                         id: doc.id
                     })
                     setParent(arr1)
                 } else {
                     console.log("No such document!");
                 }
             }).catch((error) => {
                 console.log("Error getting document:", error);
             });
         };
         const getcategory = async (id) => {
             var arr1 = [];
             db.collection("categories").doc(id).get().then((doc) => {
                 if (doc.exists) {
                     console.log("Document data:", doc.data());
                     arr1.push({
                         ...doc.data(),
                         id: doc.id
                     })
                     setCategory(arr1)
                 } else {
                     console.log("No such document!");
                 }
             }).catch((error) => {
                 console.log("Error getting document:", error);
             });
         };
        
        useEffect(() => {
            getdetail(id, id_c);
            getparent(id_p);
            getcategory(id_c)
            getdatecurent();
        }, [])
        const getdatecurent=()=>{
             // Khai báo đối tượng Date
             var date = new Date();

             // Lấy số thứ tự của ngày hiện tại
             var current_day = date.getDay();

             // Biến lưu tên của thứ
             var day_name = '';

             // Lấy tên thứ của ngày hiện tại
             // eslint-disable-next-line default-case
             switch (current_day) {
                 case 0:
                     day_name = "Chủ nhật";
                     break;
                 case 1:
                     day_name = "Thứ hai";
                     break;
                 case 2:
                     day_name = "Thứ ba";
                     break;
                 case 3:
                     day_name = "Thứ tư";
                     break;
                 case 4:
                     day_name = "Thứ năm";
                     break;
                 case 5:
                     day_name = "Thứ sau";
                     break;
                 case 6:
                     day_name = "Thứ bảy";
             }
             var today = new Date();
             var dd = String(today.getDate()).padStart(2, '0');
             var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
             var yyyy = today.getFullYear();
             today = mm + '/' + dd + '/' + yyyy;
             setDate(day_name+', '+today)
        }
       
       
    return(
                                

        <div>
            
                    <section className = "section page-detail top-detail" >
                        <div  className = "container" >
                            <div className = "social_pin" >
                                <ul className = "social_left" >
                                    <li><a href="https://www.facebook.com/congdongvnexpress" className="social_fb flexbox btn_share"  rel="nofollow" title="Chia sẻ bài viết lên facebook"><svg className="ic ic-facebook"><use href="#Facebook"></use></svg></a></li>
                                    <li><a href="https://twitter.com/VnEnews" className="social_twit flexbox btn_share" data-type="tw" rel="nofollow" data-url="https://bit.ly/2RValCw" title="Chia sẻ bài viết lên twitter"><svg className="ic ic-twitter"><use href="#Twitter"></use></svg></a></li>
                                    <li className="myvne_save_for_later border"  title="Lưu bài viết"><a href="javascript:void(0);" className="social_save flexbox"><svg className="ic ic-save"><use href="#Save"></use></svg></a></li>
                                    <li className="li_comment">
                                        <a href="#box_comment_vne" className="social_comment flexbox" title="Bình luận"><svg className="ic ic-comment"><use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z"></path>
                                        </svg></use></svg><span className="number_cmt num_cmt_detail widget-comment-4293594-1"></span>
                                        </a>
                                    </li>
                                    <li><a href="/thoi-su" className="social_back flexbox"><svg className="ic ic-back"><use href="#Arrow-Right-2"></use></svg></a></li>
                                </ul>
                            </div>
                            {
                                detail.map((dt) => (
                            <div className="sidebar-1">
                                <div className="header-content width_common">
                                    <ul className="breadcrumb" data-campaign="Header">
                                        {parent.map((pr)=>(
                                     <li><a href="/thoi-su" title="Thời sự" >{pr.Name}</a></li>	
                                        ))}
                                    </ul>
                                    <span className="date">{getdate}</span>
                                </div>
                                <h1 className="title-detail">{dt.title}</h1>
                                <p className="description"><span className="location-stamp"></span>{dt.description}</p>
                                <article className="fck_detail ">
                                <p className="Normal">{dt.description1}</p>
                                <figure  itemscope="" itemtype="http://schema.org/ImageObject" className="tplCaption action_thumb_added">
                                <div div class = "fig-picture"
                                style = {
                                    {
                                        paddingBottom: '58.857142857143%', position:'relative'
                                    }
                                }
                                >
                                    <picture>
                                <video  style={{display: 'none'}} >
                                </video>
                                <img itemprop="contentUrl"  intrinsicsize="680x0" alt="Tàu cứu hộ của bộ đội biên phòng đang tìm kiếm hai ngư dân gặp nạn. Ảnh: Lam Sơn." className="lazy lazied"
                                 src={dt.image}/>
                                </picture>
                                </div>
                                <figcaption itemprop="description">
                                <p className="Image">{dt.content_img} </p>
                                </figcaption>
                                </figure>
                                <p className="Normal">{dt.description2}</p> <p className="author_mail">
                                <strong>Lê Hoàng</strong>
                                <a className="email" href="javascript:;"><i className="ic ic-email"></i></a>
                                </p>
                                </article>
                                <div className="footer-content  width_common">
                                <a href="/thoi-su" className="save back-folder minus">
                                    <svg className="ic ic-back"><use href="#Arrow-Right-2">
                                    <svg id="Arrow-Right-2" viewBox="0 0 32 32">
                                    <path d="M18.6 2.601l-2.8 2.8 8.6 8.6h-24.4v4h24.4l-8.6 8.6 2.8 2.8 13.4-13.4-13.4-13.4z"></path>
                                </svg></use></svg>&nbsp;&nbsp;<span className="tip"></span></a>
                                <div className="myvne_save_for_later" data-token="4883e7c96b87e2ebbcebda5bd0de7cb1" data-article-id="4293594" title="Lưu bài viết"><a href="javascript:void(0);" className="save"><svg className="ic ic-save-outline"><use href="#Save-1"></use><svg id="Save" viewBox="0 0 32 32">
                                <path d="M9.333 0.005c-1.833 0-3.333-0.2-3.333 2v29.995l10-5.999 10 5.999v-29.995c0-2.2-1.5-2-3.333-2h-13.333z"></path>
                                </svg></svg>Lưu</a>
                                </div>
                                <div className="social">
                                <span className="txt">Chia sẻ</span>
                                <a href="javascript:;" className="fb btn_share" data-type="fb" rel="nofollow" title="Chia sẻ bài viết lên facebook">
                                <svg className="ic ic-facebook"><use href="#Facebook"></use></svg>
                                </a>
                                <a href="javascript:;" className="tw btn_share" data-type="tw" rel="nofollow" data-url="https://bit.ly/2RValCw" title="Chia sẻ bài viết lên twitter">
                                <svg className="ic ic-twitter"><use href="#Twitter"></use></svg>
                                </a>
                                <a href="javascript:;" onclick="window.open('https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;su=Hai+ng%C6%B0+d%C3%A2n+m%E1%BA%A5t+t%C3%ADch+khi+v%C3%A0o+b%E1%BB%9D+tr%C3%A1nh+b%C3%A3o&amp;body=https%3A%2F%2Fvnexpress.net%2Fhai-ngu-dan-mat-tich-khi-vao-bo-tranh-bao-4293594.html', '_blank')" className="mail" rel="nofollow" title="Mail">
                                <svg className="ic ic-email"><use href="#Mail"></use></svg>
                                </a>
                                <a href="javascript:;" className="share-link btn_copy" rel="nofollow" title="Copy link">
                                            <svg className="ic ic-link"><use href="#Link"><svg id="Link" viewBox="0 0 32 32">
                                            <path d="M9 32.001c-2.4 0-4.6-1-6.4-2.6-3.6-3.6-3.6-9.2 0-12.8l1.4-1.4 2.8 2.8-1.4 1.4c-2 2-2 5.2 0 7.2s5.2 2 7.2 0l6-6c2-2 2-5.2 0-7.2l-1.4-1.4 2.8-2.8 1.4 1.4c3.6 3.6 3.6 9.2 0 12.8l-6 6c-1.6 1.6-4 2.6-6.4 2.6z"></path>
                                            <path d="M12 22.801l-1.4-1.4c-3.6-3.6-3.6-9.2 0-12.8l6-6c1.8-1.8 4-2.6 6.4-2.6s4.6 1 6.4 2.6c3.6 3.6 3.6 9.2 0 12.8l-1.4 1.4-2.8-2.8 1.4-1.4c2-2 2-5.2 0-7.2s-5.2-2-7.2 0l-6 6c-2 2-2 5.2 0 7.2l1.4 1.4-2.8 2.8z"></path>
                                            </svg></use></svg>
                                <span className="tip" style={{display: 'none'}} >Copy link thành công</span>
                                </a>
                                </div>
                                </div>
                                <div id="_detail_topic" className="lazier"></div>
                            </div>  
                            ))}
                            <div className="sidebar-2 col-sticky">
                        <div className="box-category">
                        <div className="banner-ads">
                        <div  id="sis_large1">
                        </div>
                        </div>
                        </div>	<div className="width_common wrapper-sticky">
                        <div className="inner-wrap-sticky" style={{position: "relative"}}>
                                <div className="box-category box-news-small box-xemnhieunhat animated animatedFadeInUp fadeInUp gaBoxLinkDisplay box-sticky" id="box_topview_detail" data-event-category="Article Link Display" data-event-action="Box-XemNhieuNhat" data-event-label="Item-0" data-gtm-vis-first-on-screen-2359946_230="2801" data-gtm-vis-total-visible-time-2359946_230="100" data-gtm-vis-has-fired-2359946_230="1"> 
                                    <div className="width_common title-box-category"><a data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Title-XemNhieuNhat&amp;vn_term=Desktop"  data-event-action="Box-XemNhieuNhat" data-event-label="Item-title" className="inner-title" title="Xem nhiều" href="/tin-xem-nhieu">Xem nhiều</a></div>
                                    <article className="item-news full-thumb"><div className="thumb-art">   
                                                <a   href="https://vnexpress.net/499-nguoi-trung-cu-dai-bieu-quoc-hoi-khoa-xv-4292073.html" data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-5x3" title="499 người trúng cử đại biểu Quốc hội khóa XV">
                                                    
                            <picture>
                                <img loading="lazy" intrinsicsize="300x180" />
                            </picture>
                                                    
                             </a>    
                            </div><div className="title-news"><a   href="https://vnexpress.net/499-nguoi-trung-cu-dai-bieu-quoc-hoi-khoa-xv-4292073.html" data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" title="499 người trúng cử đại biểu Quốc hội khóa XV">499 người trúng cử đại biểu Quốc hội khóa XV</a>
                                <span className="meta-news">
                                    
                            <a a className = "count_cmt"
                            href = "https://vnexpress.net/499-nguoi-trung-cu-dai-bieu-quoc-hoi-khoa-xv-4292073.html#box_comment_vne"
                            style = {{whiteSpace: 'nowrap', display: 'none' }} >
                            <svg className="ic ic-comment"><use href="#Comment-Reg"></use></svg>
                                <span className="font_icon widget-comment-4292073-1"></span>
                            </a>
                            
                                </span>
                                </div> 
                                    </article>
                                    
                                <article className="item-news">
                                    <div className="title-news">
                                        <a  data-event-action="Box-XemNhieuNhat" data-event-label="Item-2" href="https://vnexpress.net/bi-thu-binh-duong-khong-duoc-xac-nhan-tu-cach-dai-bieu-quoc-hoi-4292262.html" data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0" title="Bí thư Bình Dương không được xác nhận tư cách đại biểu Quốc hội">
                                            Bí thư Bình Dương không được xác nhận tư cách đại biểu Quốc hội
                                        </a>
                                        <span className="meta-news">
                                            
                            <a className="count_cmt" href="https://vnexpress.net/bi-thu-binh-duong-khong-duoc-xac-nhan-tu-cach-dai-bieu-quoc-hoi-4292262.html#box_comment_vne" style={{whiteSpace:'nowrap', display:'none'}}>
                            <svg className="ic ic-comment"><use href="#Comment-Reg"></use></svg>
                                <span className="font_icon widget-comment-4292262-1"></span>
                            </a>
                            
                                        </span>
                                    </div>
                                    
                                </article>
                                
                                <article className="item-news">
                                    <div className="title-news">
                                        <a  data-event-action="Box-XemNhieuNhat" data-event-label="Item-3" href="https://vnexpress.net/phat-hien-3-ca-nhiem-cong-ty-cho-3-500-cong-nhan-tam-nghi-viec-4292589.html" data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0" title="Phát hiện 3 ca nhiễm, công ty cho 3.500 công nhân tạm nghỉ việc">
                                            Phát hiện 3 ca nhiễm, công ty cho 3.500 công nhân tạm nghỉ việc
                                        </a>
                                        <span className="meta-news">
                                            
                            <a className="count_cmt" href="https://vnexpress.net/phat-hien-3-ca-nhiem-cong-ty-cho-3-500-cong-nhan-tam-nghi-viec-4292589.html#box_comment_vne" style ={{ whiteSpace:'nowrap', display:'inline-block'}} >
                            <svg className="ic ic-comment"><use href="#Comment-Reg"></use></svg>
                                <span className="font_icon widget-comment-4292589-1">74</span>
                            </a>
                            
                                        </span>
                                    </div>
                                    
                                </article>
                                
                                <article className="item-news">
                                    <div className="title-news">
                                        <a  data-event-action="Box-XemNhieuNhat" data-event-label="Item-4" href="https://vnexpress.net/interactive/2021/danh-sach-dai-bieu-quoc-hoi-khoa-15" data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=0" title="499 đại biểu Quốc hội khóa XV">
                                            499 đại biểu Quốc hội khóa XV
                                        </a>
                                        <span className="meta-news">
                                            
                            <a className="count_cmt" href="https://vnexpress.net/interactive/2021/danh-sach-dai-bieu-quoc-hoi-khoa-15#box_comment_vne" style={{whiteSpace: 'nowrap', display:'none'}} >
                            <svg className="ic ic-comment"><use href="#Comment-Reg"></use></svg>
                                <span className="font_icon widget-comment-4283118-1"></span>
                            </a>
                            
                                        </span>
                                    </div>
                                    
                                </article>
                                
                                </div><div id="_detail_blockRight" className="lazier hidden" data-loaded="1"></div><div className="box-category box-sticky"><div className="banner-ads"><div id="sis_nativeshop"><script>googTagCode.display.push("sis_nativeshop");</script></div></div></div>
                    </div>
                        </div>
                    </div>
                        </div>
                    </section>
                   
                   <section section className = "section page-detail bottom-detail" >
                        <div className="container">
                   <div id="_detail_cungChuyenMuc" className="lazier"></div>
                   <div id="_detail_quantam" className="lazier"></div>
                   <div className="box-category__list-news" >
                       <div className="sidebar-1">
                           <div className="width_common list-news-subfolder">
                               {blog.map((bg)=>(

                               <article className="item-news item-news-common gaBoxLinkDisplay" >
                                <div className="thumb-art">
                                    <a  href = {`/contentblog/${bg.id}/${bg.id_p}/${bg.id_c}`}
                                    className = "thumb thumb-5x3"
                                    title = "330 người tiếp xúc bảo vệ BV Đức Giang âm tính nCoV" >
                                            <picture>
                                                <img loading="lazy" intrinsicsize="300x180" alt="330 người tiếp xúc bảo vệ BV Đức Giang âm tính nCoV" className="lazy lazied" src={bg.image} />
                                            </picture>
                                        
                                    </a>
                                </div>
                                <h4 className="title-news">
                                    <a href = {`/contentblog/${bg.id}/${bg.id_p}/${bg.id_c}`}   title="330 người tiếp xúc bảo vệ BV Đức Giang âm tính nCoV">{bg.title}</a>
                                </h4>
                                <p className="description">
                                    <a href = {`/contentblog/${bg.id}/${bg.id_p}/${bg.id_c}`}   title="330 người tiếp xúc bảo vệ BV Đức Giang âm tính nCoV">{bg.description}</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1623656735000" timeago-id="4464">23' trước</span></span>
                                        <a className="cat c-parsed" parent-id=""  title="Sức khỏe" href="/suc-khoe">Sức khỏe</a>
                                    <a className="count_cmt" href="https://vnexpress.net/330-nguoi-tiep-xuc-bao-ve-bv-duc-giang-am-tinh-ncov-4293945.html#box_comment_vne" style={{whiteSpace:'nowrap', display:'none'}} >
                                    <svg className="ic ic-comment">
                                        <use href="#Comment-Reg">
                                            <svg id="Comment-Reg" viewBox="0 0 32 32">
                                            <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z"></path>
                                            </svg>
                                        </use></svg>
                                        <span className="font_icon widget-comment-4293945-1"></span>
                                    </a>
                                </p>
                        </article>
                               ))}
                             
                           </div>
                       </div>
                   </div>
               </div>
                    </section>
      
                </div>
            
    )
}