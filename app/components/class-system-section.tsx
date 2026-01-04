"use client";

import Image from "next/image";
import { useState } from "react";
import { blackpast } from "@/utils/fonts";
import classBtn from "@/public/images/classes/class-btn.png";
import { Trans, useLingui } from "@lingui/react/macro";

const CLASSES = [
  {
    id: 0,
    name: "katana",
    image: "/images/classes/katana.png",
    skills: [
      "/images/classes/Katana-skill-1.png",
      "/images/classes/Katana-skill-2.png",
      "/images/classes/Katana-skill-3.png",
      "/images/classes/Katana-skill-4.png",
      "/images/classes/Katana-skill-5.png",
      "/images/classes/Katana-skill-6.png",
      "/images/classes/Katana-skill-7.png",
      "/images/classes/Katana-skill-8.png",
      "/images/classes/Katana-skill-9.png",
      "/images/classes/Katana-skill-10.png",
      "/images/classes/Katana-skill-11.png",
      "/images/classes/Katana-skill-12.png",
      "/images/classes/Katana-skill-13.png",
      "/images/classes/Katana-skill-14.png",
      "/images/classes/Katana-skill-15.png",
    ],
    type: {
      en: "/images/classes/fire-en.png",
      th: "/images/classes/fire-th.png",
      km: "/images/classes/fire-km.png",
      cn: "/images/classes/fire-cn.png",
      ja: "/images/classes/fire-ja.png",
      kr: "/images/classes/fire-kr.png",
    },
    title: "/images/classes/title-katana.png",
  },
  {
    id: 1,
    name: "shuriken",
    image: "/images/classes/shuriken.png",
    skills: [
      "/images/classes/Shuriken-skill-1.png",
      "/images/classes/Shuriken-skill-2.png",
      "/images/classes/Shuriken-skill-3.png",
      "/images/classes/Shuriken-skill-4.png",
      "/images/classes/Shuriken-skill-5.png",
      "/images/classes/Shuriken-skill-6.png",
      "/images/classes/Shuriken-skill-7.png",
      "/images/classes/Shuriken-skill-8.png",
      "/images/classes/Shuriken-skill-9.png",
      "/images/classes/Shuriken-skill-10.png",
      "/images/classes/Shuriken-skill-11.png",
      "/images/classes/Shuriken-skill-12.png",
      "/images/classes/Shuriken-skill-13.png",
      "/images/classes/Shuriken-skill-14.png",
      "/images/classes/Shuriken-skill-15.png",
    ],
    type: {
      en: "/images/classes/fire-en.png",
      th: "/images/classes/fire-th.png",
      km: "/images/classes/fire-km.png",
      cn: "/images/classes/fire-cn.png",
      ja: "/images/classes/fire-ja.png",
      kr: "/images/classes/fire-kr.png",
    },
    title: "/images/classes/title-shuriken.png",
  },
  {
    id: 2,
    name: "yumi",
    image: "/images/classes/yumi.png",
    skills: [
      "/images/classes/Yumi-skill-1.png",
      "/images/classes/Yumi-skill-2.png",
      "/images/classes/Yumi-skill-3.png",
      "/images/classes/Yumi-skill-4.png",
      "/images/classes/Yumi-skill-5.png",
      "/images/classes/Yumi-skill-6.png",
      "/images/classes/Yumi-skill-7.png",
      "/images/classes/Yumi-skill-8.png",
      "/images/classes/Yumi-skill-9.png",
      "/images/classes/Yumi-skill-10.png",
      "/images/classes/Yumi-skill-11.png",
      "/images/classes/Yumi-skill-12.png",
      "/images/classes/Yumi-skill-13.png",
      "/images/classes/Yumi-skill-14.png",
      "/images/classes/Yumi-skill-15.png",
    ],
    type: {
      en: "/images/classes/water-en.png",
      th: "/images/classes/water-th.png",
      km: "/images/classes/water-km.png",
      cn: "/images/classes/water-cn.png",
      ja: "/images/classes/water-ja.png",
      kr: "/images/classes/water-kr.png",
    },
    title: "/images/classes/title-yumi.png",
  },
  {
    id: 3,
    name: "kunai",
    image: "/images/classes/kunai.png",
    skills: [
      "/images/classes/Kunai-skill-1.png",
      "/images/classes/Kunai-skill-2.png",
      "/images/classes/Kunai-skill-3.png",
      "/images/classes/Kunai-skill-4.png",
      "/images/classes/Kunai-skill-5.png",
      "/images/classes/Kunai-skill-6.png",
      "/images/classes/Kunai-skill-7.png",
      "/images/classes/Kunai-skill-8.png",
      "/images/classes/Kunai-skill-9.png",
      "/images/classes/Kunai-skill-10.png",
      "/images/classes/Kunai-skill-11.png",
      "/images/classes/Kunai-skill-12.png",
      "/images/classes/Kunai-skill-13.png",
      "/images/classes/Kunai-skill-14.png",
      "/images/classes/Kunai-skill-15.png",
    ],
    type: {
      en: "/images/classes/water-en.png",
      th: "/images/classes/water-th.png",
      km: "/images/classes/water-km.png",
      cn: "/images/classes/water-cn.png",
      ja: "/images/classes/water-ja.png",
      kr: "/images/classes/water-kr.png",
    },
    title: "/images/classes/title-kunai.png",
  },
  {
    id: 4,
    name: "naginata",
    image: "/images/classes/naginata.png",
    skills: [
      "/images/classes/Naginata-skill-1.png",
      "/images/classes/Naginata-skill-2.png",
      "/images/classes/Naginata-skill-3.png",
      "/images/classes/Naginata-skill-4.png",
      "/images/classes/Naginata-skill-5.png",
      "/images/classes/Naginata-skill-6.png",
      "/images/classes/Naginata-skill-7.png",
      "/images/classes/Naginata-skill-8.png",
      "/images/classes/Naginata-skill-9.png",
      "/images/classes/Naginata-skill-10.png",
      "/images/classes/Naginata-skill-11.png",
      "/images/classes/Naginata-skill-12.png",
      "/images/classes/Naginata-skill-13.png",
      "/images/classes/Naginata-skill-14.png",
      "/images/classes/Naginata-skill-15.png",
    ],
    type: {
      en: "/images/classes/wind-en.png",
      th: "/images/classes/wind-th.png",
      km: "/images/classes/wind-km.png",
      cn: "/images/classes/wind-cn.png",
      ja: "/images/classes/wind-ja.png",
      kr: "/images/classes/wind-kr.png",
    },
    title: "/images/classes/title-naginata.png",
  },
  {
    id: 5,
    name: "tessen",
    image: "/images/classes/tessen.png",
    skills: [
      "/images/classes/Tessen-skill-1.png",
      "/images/classes/Tessen-skill-2.png",
      "/images/classes/Tessen-skill-3.png",
      "/images/classes/Tessen-skill-4.png",
      "/images/classes/Tessen-skill-5.png",
      "/images/classes/Tessen-skill-6.png",
      "/images/classes/Tessen-skill-7.png",
      "/images/classes/Tessen-skill-8.png",
      "/images/classes/Tessen-skill-9.png",
      "/images/classes/Tessen-skill-10.png",
      "/images/classes/Tessen-skill-11.png",
      "/images/classes/Tessen-skill-12.png",
      "/images/classes/Tessen-skill-13.png",
      "/images/classes/Tessen-skill-14.png",
      "/images/classes/Tessen-skill-15.png",
    ],
    type: {
      en: "/images/classes/wind-en.png",
      th: "/images/classes/wind-th.png",
      km: "/images/classes/wind-km.png",
      cn: "/images/classes/wind-cn.png",
      ja: "/images/classes/wind-ja.png",
      kr: "/images/classes/wind-kr.png",
    },
    title: "/images/classes/title-tessen.png",
  },
];

export default function ClassSystemSection() {
  const [selectedClass, setSelectedClass] = useState("katana");
  const { i18n } = useLingui();
  const lang = i18n.locale;

  const selectedClassImage = CLASSES.find(
    (cl) => cl.name === selectedClass
  )?.image;
  const selectedClassTitle = CLASSES.find(
    (cl) => cl.name === selectedClass
  )?.title;
  const selectedClassType = CLASSES.find(
    (cl) => cl.name === selectedClass
  )?.type;
  const selectedClassSkills = CLASSES.find(
    (cl) => cl.name === selectedClass
  )?.skills;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/classes/bg.jpg"
          alt="Classes Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <h2
          className={`text-center text-blue-500 text-7xl mb-20 ${blackpast.className}`}
        >
          <Trans>class system</Trans>
        </h2>
        <div className="grid lg:grid-cols-2 gap-4 items-center justify-center">
          <div className="flex items-center justify-center relative size-[400px] xl:size-[600px] mx-auto">
            <Image
              src="/images/classes/aura.png"
              alt="Aura"
              width={600}
              height={600}
              className="absolute inset-0 object-cover animate-spin-slow pointer-events-none size-[400px] xl:size-[600px]"
            />
            <Image
              src={selectedClassImage || ""}
              alt={selectedClass || ""}
              width={640}
              height={830}
              className="z-10 pointer-events-none w-[400px] h-[520px] xl:w-[640px] xl:h-[830px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center">
              <Image
                src={
                  selectedClassType?.[lang as keyof typeof selectedClassType] ||
                  ""
                }
                alt={selectedClass || ""}
                width={400}
                height={100}
                className="pointer-events-none object-cover w-[300px] xl:w-[400px]"
              />
              <Image
                src={selectedClassTitle || ""}
                alt={selectedClass || ""}
                width={560}
                height={300}
                className="-mt-10 pointer-events-none object-cover w-[300px] h-[150px] xl:w-[560px] xl:h-[300px]"
              />
            </div>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              {selectedClassSkills?.map((skill) => (
                <Image
                  key={skill}
                  src={skill}
                  alt={skill}
                  width={100}
                  height={100}
                  className="pointer-events-none"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4 mt-20">
        {CLASSES.map((cl) => (
          <button
            key={cl.id}
            type="button"
            className="relative"
            onClick={() => setSelectedClass(cl.name)}
          >
            <Image src={classBtn} alt={cl.name} width={200} height={200} />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                className={`${blackpast.className} text-2xl pointer-events-none bg-clip-text text-transparent bg-linear-to-r from-[#C09645] via-[#FFC977] to-[#C09645]`}
              >
                <Trans>{cl.name}</Trans>
              </span>
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
