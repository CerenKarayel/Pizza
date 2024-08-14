import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Order from "./pages/Order"
import Success from "./pages/Success"
import Home from "./pages/Home"

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
        <Route path="/Order">
          <Order />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>

      </Switch>
    </>
  )
}

export default App
