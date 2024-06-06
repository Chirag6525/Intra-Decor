import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import DesignGallary from "./_components/DesignGallary";
import StyleList from "./_components/StyleList";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import CustomerReview from "./_components/CustomerReview";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<DesignGallary />
			<StyleList />
			<CustomerReview />
			<Contact />
			<Footer />
		</>
	);
}
