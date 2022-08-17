import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className='grid place-items-center bg-light-cream'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
