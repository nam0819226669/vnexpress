import '../App.css';
import React, {useState, useEffect} from 'react'


 export function Hearder(){
     const [getdate, setDate] = useState('')
   const getdatecurent = () => {
       // Khai báo đối tượng Date
       var date = new Date();

       // Lấy số thứ tự của ngày hiện tại
       var current_day = date.getDay();

       // Biến lưu tên của thứ
       var day_name = '';

       // Lấy tên thứ của ngày hiện tại
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
       today = dd + '/' + mm + '/' + yyyy;
       setDate(day_name + ', ' + today)
   }
   useEffect(()=>{
    getdatecurent();
   },[])
        return (
            <div>
                <header className="section top-header">
     <div className="container ">
         <a href="" className="all-menu all-menu-tablet"><span className="hamburger"></span></a>
         <h1> <a href="/" d="" className="logo" title="VnExpress - Báo tiếng Việt nhiều người xem nhất"
                 onclick="trackingLogoHome('logo-header', this.href)">
                 <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v387/v2_2019/pc/graphics/logo.svg"
                     alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
             </a>
         </h1> <span className="time-now">{getdate}</span>
         <div className="right">
             <a href="/" className="btn24hqua " title="Mới nhất">
                 <svg className="ic ic-24h">
                     <use href="#time">
                         <svg id="time" viewBox="0 0 32 32">
                             <path
                                 d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c8.8 0 16-7.2 16-16s-7.2-16-16-16zM16 28c-6.6 0-12-5.4-12-12s5.4-12 12-12c6.6 0 12 5.4 12 12s-5.4 12-12 12z">
                             </path>
                             <path d="M18 8h-4v10h10v-4h-6v-6z"></path>
                         </svg>
                     </use>
                 </svg>Mới nhất</a>
             <a href="/" className="evne" title="VnExpress International"><svg className="ic ic-evne">
                     <use href="#letter-E">
                         <svg id="letter-E" viewBox="0 0 32 32">
                             <path fill="#9f224e"
                                 d="M10.783 7.811h15.652v-4.226h-20.87v24.83h20.87v-4.226h-15.652v-5.811h7.304v-4.755h-7.304v-5.811z">
                             </path>
                             <path fill="#9f224e"
                                 d="M28.5 32c0.828 0 1.5-0.682 1.5-1.524v-28.952c0-0.842-0.672-1.524-1.5-1.524h-25c-0.829 0-1.5 0.682-1.5 1.524v28.952c0 0.842 0.671 1.524 1.5 1.524h25zM26.586 9.396h-14.238v2.642h5.89c0.864 0 1.414 0.765 1.414 1.64v4.755c0 0.875-0.55 1.529-1.414 1.529h-5.89v2.642h14.238c0.864 0 1.414 0.766 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529h-20.869c-0.865 0-1.717-0.655-1.717-1.529v-24.83c0-0.875 0.852-1.64 1.717-1.64h20.869c0.864 0 1.414 0.765 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529z">
                             </path>
                             <path fill="#fff"
                                 d="M28 28.471v-4.226c0-0.875-0.55-1.64-1.414-1.64h-14.238v-2.642h5.89c0.864 0 1.414-0.655 1.414-1.529v-4.755c0-0.875-0.55-1.64-1.414-1.64h-5.89v-2.642h14.238c0.864 0 1.414-0.655 1.414-1.529v-4.226c0-0.875-0.55-1.64-1.414-1.64h-20.869c-0.865 0-1.717 0.765-1.717 1.64v24.83c0 0.875 0.852 1.529 1.717 1.529h20.869c0.864 0 1.414-0.655 1.414-1.529zM26.435 7.811h-15.652v5.811h7.304v4.755h-7.304v5.811h15.652v4.226h-20.87v-24.83h20.87v4.226z">
                             </path>
                         </svg>
                     </use>
                 </svg>International</a>

             <from className="search search-vne" action="https://timkiem." id="formSearchHeader">
                 <input id="keywordHeader" type="text" name="q" placeholder="Tìm kiếm" autocomplete="off" />
                 <button type="submit" title="Tìm kiếm" className="btn-search-vne" id="buttonSearchHeader"><svg
                         className="ic ic-search">
                         <use href="#Search">
                             <svg id="Search" viewBox="0 0 32 32">
                                 <path
                                     d="M14 28c-7.72 0-14-6.28-14-14s6.28-14 14-14c7.72 0 14 6.28 14 14s-6.28 14-14 14zM14 4c-5.514 0-10 4.486-10 10s4.486 10 10 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z">
                                 </path>
                                 <path
                                     d="M31.414 28.586l-4.786-4.786c-0.821 1.057-1.771 2.007-2.828 2.828l4.786 4.786c0.185 0.186 0.406 0.334 0.648 0.435s0.503 0.153 0.766 0.153 0.523-0.052 0.766-0.153c0.243-0.101 0.463-0.249 0.648-0.435s0.333-0.406 0.434-0.649 0.152-0.503 0.152-0.765c0-0.263-0.052-0.523-0.152-0.765s-0.248-0.463-0.434-0.649z">
                                 </path>
                             </svg>
                         </use>
                     </svg>
                 </button></from>
             <div id="myvne_taskbar">
                 <div id="myvne" className="myvne_taskbar myvne_login_button"><a href="" className="log_txt"
                         title="Đăng nhập"><svg className="ic ic-user">
                             <use href="#User">
                                 <svg id="User" viewBox="0 0 32 32">
                                     <path
                                         d="M16 16c4.418 0 8-3.582 8-8s-3.582-8-8-8c-4.418 0-8 3.582-8 8s3.582 8 8 8z">
                                     </path>
                                     <path
                                         d="M32 26.4c0.003-0.766-0.214-1.516-0.627-2.161s-1.002-1.157-1.699-1.475c-4.312-1.876-8.972-2.818-13.674-2.764-4.702-0.054-9.362 0.888-13.674 2.764-0.696 0.318-1.286 0.83-1.699 1.475s-0.63 1.395-0.627 2.161v5.6h32v-5.6z">
                                     </path>
                                 </svg>
                             </use>
                         </svg> Đăng nhập</a></div>
                 <div id="g_id_onload"></div>
             </div>
         </div>
     </div>
 </header> 
  
            </div>
        )
    

}
         