import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Order from "./Orders";

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/orders" component={Order} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;