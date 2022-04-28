import Banner from "../components/banner";
import Footer from "../components/footer";
import LatestArticle from "../components/latestArticle";
import Navbar from "../components/navbar";
import Whyeasybank from "../components/whyeasybank";

export default function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<Whyeasybank />
			<LatestArticle />
			<Footer />
		</>
	);
}
