import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/section/herosection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-2 md:px-6 py-4">
      <div className="mx-auto max-w-[1400px] bg-[#f5f6f8] rounded-[64px] pt-8 pb-20 px-6 md:px-14 relative overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
