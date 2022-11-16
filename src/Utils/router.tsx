import App from '../App'
import EventDetail from '../pages/EventDetailPage'
import EventListPage from '../pages/EventListPage'
import HomePage from '../pages/HomePage'
import InformationPage from '../pages/InformationPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPgae from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import { redirect } from "react-router-dom";

const homePageloader = async () => {
  return redirect("/homepage");
};

import {
  createBrowserRouter
} from 'react-router-dom'
import Layout from '@/components/Layout'

const path = [
  {
    path: '/',
    element: <App />,
    loader: homePageloader,
  },
  {
    path: '/eventlist',
    element: <EventListPage />
  },
  {
    path: '/eventdetail',
    element: <EventDetail />
  },
  {
    path: '/homepage',
    element: <HomePage />
  },
  {
    path: '/informationpage',
    element: <InformationPage />
  },
  {
    path: '/loginpage',
    element: <LoginPgae />
  },
  {
    path: '/ProfilePage',
    element: <ProfilePage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

const layoutpath = path.map((item) => {
  item.element = (<Layout>{item.element}</Layout>)
  return item
})

const router = createBrowserRouter(layoutpath)

export default router
