import './App.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'
import Reservations from './components/Reservations'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './components/Menu'
import DishDetail from './components/DishDetail'
import GenericError from './components/GenericError'

function App() {
  return (
    <Router>
      <MyNavBar title="Strivestaurant" />
      <Switch>
        {/* I want also MyNavBar to have history, location and match */}
        {/* <Route path="/" exact component={Home} /> */}
        <Route
          path="/"
          exact
          render={(routerProps) => (
            // routerProps is the only parameter you're given when you use the "render" prop
            // routerProps is an object containing history, location and match
            <Home
              title="strive"
              // location={routerProps.location}
              // history={routerProps.history}
              // match={routerProps.match}
              {...routerProps}
            />
          )}
        />
        <Route component={Menu} path="/menu" exact />
        {/* Route is a HOC -> High Order Component */}
        {/* Route will give our components 3 additional props: history, location and match */}
        <Route path="/reservations" exact component={Reservations} />
        {/* let's create a dynamic route */}
        <Route component={DishDetail} path="/details/:id" />
        {/* localhost:3000/details/0 */}
        {/* localhost:3000/details/1 */}
        {/* localhost:3000/details/whatever */}
        {/* all these three routes will load DishDetail */}
        <GenericError />
      </Switch>
    </Router>
  )
}

export default App
