import HeroSection from "@/app/components/hero-section";
import NewsSection from "@/app/components/news-section";
import ClassSystemSection from "@/app/components/class-system-section";
import VisualGallerySection from "@/app/components/visual-gallery-section";
import { getAllNews } from "@/utils/get-posts";
import FloatTopup from "@/app/components/float-topup";
import { initLingui, PageLangParam } from "@/app/initLingui";

export default async function Home(props: PageLangParam) {
  const lang = (await props.params).lang;
  initLingui(lang);

  const allNews = await getAllNews();
  const latestNews = allNews.slice(0, 5);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatTopup />
      <HeroSection />
      <NewsSection news={latestNews} />
      <ClassSystemSection />
      <VisualGallerySection />
    </main>
  );
}
