"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0e0d0c] text-white h-screen">
        <div className="text-center mb-5">
          <h1 className="p-3 text-5xl">JOIN OUR EAT WELL, BE WELL CULTURE</h1>
          <h3 className="p-3 text-xl">Stay up-to-date with our upcoming events, seasonal specials and promotions</h3>
        </div>
        <hr className="w-1/2 mx-auto"/>
        <div className="flex flex-row justify-center m-5">
          <Input type="text" className="h-[50] w-[50] text-black mx-5" placeholder="input your email here"></Input>
          <Button className="gap-8">Submit</Button>
        </div>
        <hr className="w-1/2 mx-auto"/>
        <div className="flex flex-col items-center mt-5">
          <h1 className="cursor-pointer text-2xl font-bold">LOGO</h1>
          <h1 className="text-2xl font-bold p-10">
            We Create Perfect Catering For Your Days
          </h1>
          <p>@2024. Foodie. All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
