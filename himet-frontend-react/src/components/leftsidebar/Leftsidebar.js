import "./leftsidebar.css";
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, School, Event } from "@material-ui/icons";

export default function Leftsidebar() {
    return (
        <div className="left-sidebar">
            <div className="left-sidebar-wrapper">
                <ul className="left-sidebar-list">
                    <li className="left-sidebar-list-item">
                        <RssFeed className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Feed
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <Chat className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Chats
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <PlayCircleFilledOutlined className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Videos
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <Group className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Groups
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <Bookmark className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Bookmarks
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <HelpOutline className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Questions
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <WorkOutline className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Jobs
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <Event className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Events
                        </span>
                    </li>
                    <li className="left-sidebar-list-item">
                        <School className="left-sidebar-icon"/>
                        <span className="left-sidebar-list-item-text">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="left-sidebar-button">
                    Show More
                </button>
                <hr className="left-sidebar-hr" />
                <ul className="left-sidebar-friend-list">
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                    <li className="left-sidebar-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="left-sidebar-friend-img" />
                        <span className="left-sidebar-friend-name">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
