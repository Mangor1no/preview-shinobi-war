import Image from "next/image";
import { useLingui } from "@lingui/react/macro";

function HeroLinks() {
  const { i18n } = useLingui();
  const lang = i18n.locale;
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
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_APPSTORE as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/appstore.png"
              alt="app-store"
              width={183}
              height={44}
            />
          </div>
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_GOOGLE_PLAY as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/google-play.png"
              alt="google-play"
              width={183}
              height={44}
            />
          </div>
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_PC as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/pc.png"
              alt="pc"
              width={183}
              height={44}
            />
          </div>
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_APK as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/apk.png"
              alt="apk"
              width={183}
              height={44}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src={`/images/download/topup-${lang}.png`}
            alt="topup"
            width={176}
            height={220}
          />
          <Image
            src={`/images/download/agency-${lang}.png`}
            alt="agency"
            width={176}
            height={220}
          />
          <Image
            src={`/images/download/ranking-${lang}.png`}
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
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_APPSTORE as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/appstore.png"
              alt="app-store"
              width={183}
              height={44}
            />
          </div>
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_GOOGLE_PLAY as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/google-play.png"
              alt="google-play"
              width={183}
              height={44}
            />
          </div>
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_PC as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/pc.png"
              alt="pc"
              width={183}
              height={44}
            />
          </div>
          <div className="relative">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_APK as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 size-full z-10"
            />
            <Image
              src="/images/download/apk.png"
              alt="apk"
              width={183}
              height={44}
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={`/images/download/topup-${lang}.png`}
            alt="topup"
            width={80}
            height={90}
          />
          <Image
            src={`/images/download/agency-${lang}.png`}
            alt="agency"
            width={80}
            height={90}
          />
          <Image
            src={`/images/download/ranking-${lang}.png`}
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
