import Feed from "../../components/feed/Feed";
import Leftsidebar from "../../components/leftsidebar/Leftsidebar";
import Rightsidebar from "../../components/rightsidebar/Rightsidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="home-container">
                <Leftsidebar />
                <Feed />
                <Rightsidebar />
            </div>
        </>
    )
}
