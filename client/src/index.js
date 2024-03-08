import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import RegisterScreen from './screens/registerScreen/RegisterScreen'
import DevScreen from './screens/devScreen/DevScreen'
import PrivateRoute from './components/utils/PrivateRoute'
import ProfileScreen from './screens/private/profile/ProfileScreen'
import DashboardScreen from './screens/private/dashboardScreen/DashboardScreen'
import CreateProfile from './screens/private/createProfil/CreateProfile'
import AddExperience from './screens/private/addExperience/AddExperience'
import AdEducation from './screens/private/addEducation/AdEducation'
import Posts from './screens/private/posts/Posts'
import Post from './screens/private/post/Post'
import MarketScreen from './screens/private/marketsScreen/MarketScreen'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/developper" element={<DevScreen />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile/user/:id" element={<ProfileScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/add-education" element={<AdEducation />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Post />} />
        <Route path="/markets" element={<MarketScreen />} />
      </Route>
      {/* <Route path="/profile/:id" element={<ProfileScreen />} /> */}
    </Route>,
  ),
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
