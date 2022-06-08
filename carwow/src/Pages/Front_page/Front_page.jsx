import s from './Front_page.module.css';
import SidebarNav from "../../Components/Sidebar_nav/Sidebar_nav";

const FrontPage = () => {
    return (
        <>
            <div className={s.front_page_container}>
                <div className="content_page">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquid autem consequuntur dicta dolor error fugit impedit inventore itaque, iusto laborum natus nisi quaerat quod repellendus sapiente similique soluta velit.</p>
                </div>
                <aside className={`${s.sidebar_left} sidebar`}>
                    <SidebarNav />
                </aside>
                <aside className="sidebar">
                    <SidebarNav />
                </aside>
            </div>
        </>
    )
}

export default FrontPage;