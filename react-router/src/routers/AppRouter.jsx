import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "../components/Header"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import RootPage from "../components/RootPage"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={RootPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help/:id" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default routes