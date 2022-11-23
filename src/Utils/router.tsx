import App from '../App'
import EventDetail from '../pages/EventDetailPage'
import EventListPage from '../pages/EventListPage'
import HomePage from '../pages/HomePage'
import InformationPage from '../pages/InformationPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPgae from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import ManagePage from '@/pages/ManagePage'
import { redirect } from "react-router-dom";
import {
  createBrowserRouter,ScrollRestoration
} from 'react-router-dom'
import Layout from '@/components/Layout'

const homePageloader = async () => {
  return redirect("/homepage");
};


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
    path: '/managepage',
    element: <ManagePage />
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
