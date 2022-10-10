import Header from './Header'
import Footer from './Footer'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
        <div className='flex flex-col mx-auto items-center relative'>
            <Header />
            {children}
            <Footer />
        </div>
  )
}

export default Layout
