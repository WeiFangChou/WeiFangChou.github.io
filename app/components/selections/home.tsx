"use client";

import { myProfile } from "../../config/site";
import { Button, Link } from "@heroui/react";
import { AnimateIcon } from "../imgs/icons";
import { motion } from "framer-motion";
import Image from "next/image";

export const HomeSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground"
      id="home"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* 左側文字 */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">WeiFang Chou</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-700 mb-8">
            iOS Developer
          </h2>
          <p className="text-lg md:text-xl text-foreground-700 leading-relaxed mb-10">
            {myProfile.description}
          </p>

          {/* 按鈕群組 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
              as={Link}
              color="primary"
              href={myProfile.contact}
              variant="shadow"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
              as={Link}
              href={myProfile.resume}
              variant="bordered"
              color="primary"
            >
              Download Resume
            </Button>
          </div>

          {/* 社群連結 */}
          <div className="flex gap-4">
            {myProfile.socialLinks.map((link) => (
              <Button
                as={Link}
                key={link.label}
                href={link.href}
                className="w-12 h-12 min-w-unit-12"
                isExternal={!link.href.startsWith("#")}
                isIconOnly
                variant="flat"
                color="default"
              >
                <AnimateIcon>{link.icon && <link.icon />}</AnimateIcon>
              </Button>
            ))}
          </div>
        </div>

        {/* 右側頭像：RWD + 手機高度限制 + 動畫 */}
        <div className="flex-1 flex items-center justify-center bg-transparent">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="p-2 sm:p-2 md:p-12">
              <Image
                src={myProfile.avatar}
                alt="avatar"
                width={500}
                height={500}
                className="md:rounded-lg  object-fill max-h-[70vw] md:max-h-[500px] w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
