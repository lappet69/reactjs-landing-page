import {
  HeroBanner,
  Layout,
  Portfolio,
  Service,
  Testimonial,
} from "../components";

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <Service />
      <Portfolio />
      <Testimonial />
    </Layout>
  );
};

export default Home;
