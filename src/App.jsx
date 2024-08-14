import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Success from "./pages/Success"
import Home from "./pages/Home"
import OrderPizza from "./pages/OrderPizza"




function App() {
  

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/OrderPizza">
          <OrderPizza />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>

      </Switch>
    </>
  )
}

export default App
