import Header from "./components/header";
import HeroSection from "./components/hero-section";
import NewsSection from "./components/news-section";
import ClassSystemSection from "./components/class-system-section";
import VisualGallerySection from "./components/visual-gallery-section";
import Footer from "./components/footer";
import { getAllNews } from "@/utils/get-posts";
import FloatTopup from "./components/float-topup";

export default async function Home() {
  const allNews = await getAllNews();
  const latestNews = allNews.slice(0, 5);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatTopup />
      <Header />
      <HeroSection />
      <NewsSection news={latestNews} />
      <ClassSystemSection />
      <VisualGallerySection />
      <Footer />
    </main>
  );
}
