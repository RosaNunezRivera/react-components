import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

function App() {
  let isLoggedIn = false;

  const navOptions = [
    { href: "#", text: "Home" },
    { href: "#", text: "Zen Images" },
    { href: "#", text: "About Us" },
    { href: "#", text: "My Profile" },
  ];

  const links = [
    { url: '#', iconClass: 'fab fa-facebook' },
    { url: '#', iconClass: 'fab fa-instagram' },
    { url: '#', iconClass: 'fab fa-linkedin' },
    { url: '#', iconClass: 'fab fa-twitter' },
  ];

  const imagesList = [
    {
      url: 'https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Person using laptop on a wooden table'
    },
    {
      url: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',   
      alt: 'Abstract art with colorful shapes'
    },
    {
      url: 'https://images.unsplash.com/photo-1637972101193-7523990a7e2d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Mountain landscape with a lake'
    }
  ];

  return (
    <>
    <Header title="Zen Galley" navOptions={navOptions} isLoggedIn={isLoggedIn} />
    <main>
      <Hero title="Zen Galley" subTitle="Paint Your Peace here with us" classBtn="hero-btn" textBtn="Know More"/>
      <Gallery imagesList={imagesList} title="Our Gallery"  />
    </main>
    <Footer links={links} title="Our Gallery" />
  </>
  );
}

export default App;

