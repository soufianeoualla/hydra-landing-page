import Header from "@components/Header";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import ContactForm from "@components/ContactForm";
import Banner from "@components/Banner";
import Introduction from "@components/Introduction";
import Features from "@components/Features";
import Technologies from "@components/Technologies";
import Build from "@components/Build";
import Layout from "@components/ui/Layout";

function App() {
  return (
    <main className=" bg-primary p-8">
      <Layout>
        <Header />
        <Hero />
        <Banner />
        <Introduction />
        <Features />
        <Technologies />
      </Layout>
      <Build />
      <Layout>
        <ContactForm />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
