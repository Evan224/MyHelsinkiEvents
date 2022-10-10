import App from '../App'
import EventDetail from '../Pages/EventDetailPage'
import EventListPage from '../Pages/EventListPage'
import HomePage from '../Pages/HomePage'
import InformationPage from '../Pages/InformationPage'
import NotFoundPage from '../Pages/NotFoundPage'
import LoginPgae from '../Pages/LoginPage'
import ProfilePage from '../Pages/ProfilePage'

import {
  createBrowserRouter
} from 'react-router-dom'
import Layout from '@/components/Layout'

const path = [
  {
    path: '/',
    element: <App />
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
