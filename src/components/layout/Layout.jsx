import Navbar from "./layout-components/Navbar"

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Calderas from "../calderas/Calderas"
const Layout = () => {
    return (
       <div>
           <Router>
                <Navbar />
            <Switch>
                <Route exact path="/calderas" component={Calderas} />
            </Switch>
            </Router>
       </div>
    )
}
export default Layout
