import Image from "next/image";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="bg-[#0e0d0c] py-10 text-center">
        <h1 className="p-5 text-3xl text-white">ABOUT US</h1>
        <div className="grid grid-cols-3 pt-4">
          <Image
            src="/company-history.avif"
            alt="thumbnail"
            width={500}
            height={100}
          />
          <div className="cols-span-2">
          <Card>
            <CardHeader>
              <div className="text-center">COMPANY HISTORY</div>
            </CardHeader>
            <CardContent>
              <h3 className="text-center">MENU3</h3>
            </CardContent>
          </Card>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutUs;
