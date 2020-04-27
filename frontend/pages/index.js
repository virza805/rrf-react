import Head from 'next/head';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import CategoryGridProducts from '../components/CategoryGridProducts';
import DealProducts from '../components/DealProducts';
import ChooseProducts from '../components/ChooseProducts';
import CategoryFilterProducts from '../components/CategoryFilterProducts';
import SocialShareBar from '../components/SocialShareBar';
import BlogPosts from '../components/BlogPosts';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="site-wrap">
      <Head>
        <title>Avacado</title>
      </Head>
      <Header />
      <HeroSlider />
      <CategoryGridProducts />
      <DealProducts />
      <CategoryGridProducts />
      <ChooseProducts />
      <CategoryFilterProducts />
      <BlogPosts />
      <CategoryGridProducts />
      <SocialShareBar />
      <Footer />
    </div>
  );
}

export default Home;