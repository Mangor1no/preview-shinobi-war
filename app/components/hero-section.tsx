import Image from "next/image";
import { blackpast } from "@/utils/fonts";
import HeroLinks from "./hero-links";

export default function HeroSection() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-screen h-screen hidden lg:block">
        <Image
          src="/images/hero/bg.png"
          alt="Hero Background"
          quality={100}
          width={3840}
          height={2160}
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <div className="absolute inset-0 w-screen h-screen block lg:hidden">
        <Image
          src="/images/hero/bg-mobile.png"
          alt="Hero Background"
          quality={100}
          width={1080}
          height={1920}
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <div className="absolute inset-0 w-full h-full hidden lg:flex items-center justify-center z-10">
        <h1 className={`text-center text-blue-600 ${blackpast.className}`}>
          <span
            className="text-[280px] 2xl:text-[360px] 3xl:text-[500px] pointer-events-none
          [-webkit-text-stroke:3px_#4780fc]"
          >
            Shinobi
          </span>
          <br />
          <span className="text-[100px] 3xl:text-[250px] pointer-events-none [-webkit-text-stroke:3px_#4780fc]">
            war
          </span>
        </h1>
      </div>
      <div className="absolute inset-0 w-full h-full flex lg:hidden items-center justify-center z-10">
        <div
          className={`space-y-32 sm:space-y-52 text-center text-blue-600 ${blackpast.className}`}
        >
          <p
            className="text-[80px] xs:text-[130px] sm:text-[150px] md:text-[180px] pointer-events-none
          [-webkit-text-stroke:3px_#4780fc]"
          >
            Shinobi
          </p>
          <p className="text-[80px] xs:text-[130px] sm:text-[150px] md:text-[180px] pointer-events-none [-webkit-text-stroke:3px_#4780fc]">
            war
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-[90%] md:w-[80%] lg:w-[70%] z-10">
        <Image
          src="/images/hero/characters.png"
          alt="Shinobi"
          width={1700}
          height={992}
          quality={100}
        />
      </div>
      <div className="absolute inset-x-0 bottom-20 md:bottom-0 z-10">
        <HeroLinks />
      </div>
    </section>
  );
}
