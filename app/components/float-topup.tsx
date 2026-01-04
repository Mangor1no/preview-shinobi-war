import Image from "next/image";
import QRCode from "react-qr-code";
import { useLingui } from "@lingui/react/macro";

function FloatTopup() {
  const { i18n } = useLingui();
  const lang = i18n.locale;

  return (
    <div className="fixed top-1/3 right-10 z-50 hidden lg:block">
      <div className="flex flex-col gap-2 items-center">
        <div className="z-10 backdrop-blur-xl bg-gray-600/20 p-2 rounded-full overflow-hidden aspect-square flex items-center justify-center size-[200px]">
          <Image
            src={`/images/download/topup-float-${lang}.png`}
            alt="topup"
            width={200}
            height={200}
            className="w-full h-full scale-125 mt-5"
          />
        </div>
        <div className="flex flex-col gap-2 items-center bg-gray-600/20 pt-28 -mt-28 p-2 rounded-xl backdrop-blur-xl">
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
          <QRCode
            value="https://www.google.com" // replace with universal link later
            size={183}
            className="rounded-xl border border-[#2c313d] p-6 bg-[#131825]"
            fgColor="#3084FA"
            bgColor="#000"
          />
        </div>
      </div>
    </div>
  );
}

export default FloatTopup;
