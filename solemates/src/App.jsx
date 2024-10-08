import {
  Hero,
  SpecialOffer,
  Services,
  PopularProduct,
  SuperQuality,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Sections";

import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl: padding-l wide: padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProduct/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App;