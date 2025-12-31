import Image from "next/image";

function HeroLinks() {
  return (
    <>
      <div className="hidden lg:flex flex-col md:flex-row items-center gap-2.5 backdrop-blur-2xl px-2.5 rounded-xl border-3 border-[#DA102250] w-fit mx-auto z-10">
        <Image
          src="/images/icon-app.png"
          alt="icon-app"
          width={200}
          height={200}
          className="rounded-2xl"
        />
        <div className="hidden lg:flex flex-col items-center justify-center gap-1">
          <Image
            src="/images/download/appstore.png"
            alt="app-store"
            width={183}
            height={44}
          />
          <Image
            src="/images/download/google-play.png"
            alt="google-play"
            width={183}
            height={44}
          />
          <Image
            src="/images/download/pc.png"
            alt="pc"
            width={183}
            height={44}
          />
          <Image
            src="/images/download/apk.png"
            alt="apk"
            width={183}
            height={44}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/hero/topup.png"
            alt="topup"
            width={176}
            height={220}
          />
          <Image
            src="/images/hero/agency.png"
            alt="agency"
            width={176}
            height={220}
          />
          <Image
            src="/images/hero/ranking.png"
            alt="ranking"
            width={176}
            height={220}
          />
        </div>
      </div>
      <div className="flex lg:hidden flex-row items-center gap-2.5 backdrop-blur-2xl rounded-xl border-3 border-[#DA102250] w-fit mx-auto z-10">
        <Image
          src="/images/icon-app.png"
          alt="icon-app"
          width={90}
          height={90}
          className="rounded-2xl ml-1"
        />
        <div className="hidden lg:flex flex-col items-center justify-center gap-1">
          <Image
            src="/images/download/appstore.png"
            alt="app-store"
            width={183}
            height={44}
          />
          <Image
            src="/images/download/google-play.png"
            alt="google-play"
            width={183}
            height={44}
          />
          <Image
            src="/images/download/pc.png"
            alt="pc"
            width={183}
            height={44}
          />
          <Image
            src="/images/download/apk.png"
            alt="apk"
            width={183}
            height={44}
          />
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="/images/hero/topup.png"
            alt="topup"
            width={80}
            height={90}
          />
          <Image
            src="/images/hero/agency.png"
            alt="agency"
            width={80}
            height={90}
          />
          <Image
            src="/images/hero/ranking.png"
            alt="ranking"
            width={80}
            height={90}
          />
        </div>
      </div>
    </>
  );
}

export default HeroLinks;
