"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="h-screen bg-[#0e0d0c] text-white">
        <div className="text-center">
          <h1 className="p-8 text-3xl font-bold md:text-5xl">
            JOIN OUR EAT WELL, BE WELL CULTURE
          </h1>
          <h3 className="text-large p-3 md:text-xl ">
            Stay up-to-date with our upcoming events, seasonal specials and
            promotions
          </h3>
        </div>
        <hr className="mx-auto w-3/4" />
        <div className="m-5 flex flex-row justify-center">
          <Input
            type="text"
            className="mx-5 w-1/2 text-black"
            placeholder="input your email here"
          ></Input>
          <Button className="gap-8">Submit</Button>
        </div>
        <hr className="mx-auto w-3/4" />
        <div className="flex flex-col items-center">
          <Image
            src="https://drive.google.com/uc?export=view&id=1k4833g3RXBQcXBNwsKyt2HGJ-RFfXLxm"
            alt="logo"
            className="cursor-pointer pt-20"
            width={200}
            height={200}
          />
          <h1 className="p-5 text-center text-2xl font-bold md:text-3xl">
            We Create Perfect Catering For Your Days
          </h1>
        </div>
        <div className="mb-0 pt-10">
          <hr className="mx-auto w-full" />
          <p className="text-large pt-5 text-center md:text-xl">
            @2024. SpoonBoon. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
