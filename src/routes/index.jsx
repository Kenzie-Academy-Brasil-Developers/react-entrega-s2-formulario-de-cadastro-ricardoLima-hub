import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";
import { useState } from "react";

const Router = () => {

    const [input, setInput] = useState([])
    console.log(input)

    return (
        <Switch>
            <Route exact path="/">
                <Register setInput={setInput}/>
            </Route>
            <Route path="/welcome/:name">
                <Welcome />
            </Route>
        </Switch>
    )
}

export default Router;