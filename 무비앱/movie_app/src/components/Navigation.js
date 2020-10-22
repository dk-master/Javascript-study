import React from "react";
import { Link} from "react-router-dom" 
import "./Navigation.css";
function Navigation() {
    return <div className ="nav">
        <Link to = "/">Home</Link>
        <Link to = {{
            pathname : "/about",
            state : {
                fromNavigation: true
            }
        }}>About</Link>
    </div>
}





export default Navigation;
// a href를 사용하면 안돼요~~ ㅇ