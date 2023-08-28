import {
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
  SpecialOffer,
} from './sections'
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-b padding-r">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="paddingx sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black text-white padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App