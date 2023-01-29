import { useEffect } from "react";
import Header from "./components/Header";
const Layout = ({ title = "Title", className, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
  
    return (
        <div>
            <Header/>
            <div className={className}>
                {children}
            </div>
        </div>
    );
};

export default Layout;