import "./rightsidebar.css";

export default function Rightsidebar() {
    return (
        <div className="right-sidebar">
           <div className="right-sidebar-wrapper">
               <div className="birthday-container">
                   <img className="birthday-img" src="/assets/gift.png" alt="" />
                   <span className="birthday-text">
                       {" "}
                       <b>Nayanjyoti Das </b> and <b>3 others friends </b> have birthday today.
                   </span>
               </div>
               <img className="right-sidebar-ad" src="/assets/ad.png" alt="advertisement" />
               <h4 className="right-sidebar-title">
                   Online Friends
               </h4>
               <ul className="right-sidebar-friend-list">
                   <li className="right-sidebar-friend">
                       <div className="right-sidebar-profile-img-container">
                           <img className="right-sidebar-profile-img" src="/assets/person/3.jpeg" alt="" />
                           <span className="right-sidebar-online">
                               
                           </span>
                       </div>
                       <span className="right-sidebar-username">Nayanjyoti Das</span>
                   </li>
                   <li className="right-sidebar-friend">
                       <div className="right-sidebar-profile-img-container">
                           <img className="right-sidebar-profile-img" src="/assets/person/3.jpeg" alt="" />
                           <span className="right-sidebar-online">
                               
                           </span>
                       </div>
                       <span className="right-sidebar-username">Nayanjyoti Das</span>
                   </li>
                   <li className="right-sidebar-friend">
                       <div className="right-sidebar-profile-img-container">
                           <img className="right-sidebar-profile-img" src="/assets/person/3.jpeg" alt="" />
                           <span className="right-sidebar-online">
                               
                           </span>
                       </div>
                       <span className="right-sidebar-username">Nayanjyoti Das</span>
                   </li>
                   <li className="right-sidebar-friend">
                       <div className="right-sidebar-profile-img-container">
                           <img className="right-sidebar-profile-img" src="/assets/person/3.jpeg" alt="" />
                           <span className="right-sidebar-online">
                               
                           </span>
                       </div>
                       <span className="right-sidebar-username">Nayanjyoti Das</span>
                   </li>
               </ul>
           </div>
        </div>
    )
}
