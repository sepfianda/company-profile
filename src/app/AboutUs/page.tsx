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
      <div className="bg-[#0e0d0c] py-10">
        {/* Company History */}
        <div className="grid grid-cols-1 gap-5 px-10 pt-20 md:grid-cols-2">
          <Image
            src="https://drive.google.com/uc?export=view&id=1-vC-KcZaxv8R4r5-xv1-HpTGIoSZnHFs"
            alt="thumbnail"
            width={500}
            height={100}
          />
          <div className="h-full w-full">
            <Card className="bg-[#31363F]">
              <CardHeader>
                <div className="text-bold text-center text-xl text-white">
                  COMPANY HISTORY
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-justify text-xs text-white">
                  Indulge in a culinary journey like no other with SpoonBoon,
                  where every bite is crafted with passion and precision. At
                  SpoonBoon, we believe that great food is more than just
                  nourishment; it's an experience to be savored. Our chefs,
                  driven by creativity and expertise, meticulously curate each
                  dish to tantalize your taste buds and ignite your senses. From
                  exquisite appetizers to sumptuous mains and delectable
                  desserts, every offering bears the mark of quality and
                  innovation. With a commitment to using only the finest
                  ingredients sourced from trusted suppliers, SpoonBoon ensures
                  that every meal surpasses expectations. Whether you're hosting
                  a lavish event, planning a cozy dinner, or simply craving a
                  culinary treat, let SpoonBoon be your trusted partner in
                  gastronomic delight. Elevate your dining experience with
                  SpoonBoon and embark on a culinary adventure that will leave
                  you craving for more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* TEAM */}
        <div className="bg-[#0e0d0c] pt-10">
          <div className="grid grid-cols-1 gap-5 px-5 text-white md:grid-cols-3">
            <div>
              <div className="relative mx-auto md:h-72 md:w-72">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1it1ALnxd3ulV1PrPNQLbhelVPA1FLMtp"
                  alt="thumbnail"
                  fill
                  className="rounded-full object-cover pb-5"
                />
              </div>
              <Card>
                <CardHeader className="bg-[#76ABAE] pt-5 text-center text-white">
                  <h3>Chef Charlotte Gardea</h3>
                  <h1 className="pt-2">OWNER</h1>
                  <p className="pt-2">Le Cordon Bleu Culinary Academy</p>
                </CardHeader>
              </Card>
            </div>
            <div>
              <div className="relative mx-auto md:h-72 md:w-72">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1wHdE2bos6akPRiwDn_W9rGiuJxjI8u8t"
                  alt="thumbnail"
                  fill
                  className="rounded-full object-cover pb-5"
                />
              </div>
              <Card className="pt-15 gap-y-4">
                <CardHeader className="bg-[#76ABAE] text-center text-white">
                  <h3>Chef Robbins Anthony</h3>
                  <h1 className="pt-2">HEAD SENIOR CHEF</h1>
                  <p className="pt-2">Le Cordon Bleu Culinary Academy</p>
                </CardHeader>
              </Card>
            </div>
            <div>
            <div className="relative mx-auto md:h-72 md:w-72">
              <Image
                src="https://drive.google.com/uc?export=view&id=1pPrgf0Zs0zACVOKyxf-SmbXlqFGP5ORE"
                alt="thumbnail"
                fill
                className="rounded-full object-cover pb-5"
              />
              </div>
              <Card>
                <CardHeader className="bg-[#76ABAE] pt-8 text-center text-white">
                  <h3>Chef Julia Chloe</h3>
                  <h1 className="pt-2">HEAD JUNIOR CHEF</h1>
                  <p className="pt-2">Le Cordon Bleu Culinary Academy</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Culture */}
        <div className="grid grid-cols-1 gap-5 px-10 pt-10 md:grid-cols-2">
          <Image
            src="https://drive.google.com/uc?export=view&id=1f8X64fmrdM-inaOTI32O5sJkfPS02V8n
            "
            alt="thumbnail"
            width={500}
            height={100}
          />
          <div className="h-full w-full">
            <Card className="bg-[#31363F]">
              <CardHeader>
                <div className="text-bold text-center text-xl text-white">
                  OUR CULTURE
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-justify text-xs text-white">
                  Immerse yourself in a culinary journey that celebrates
                  diversity and embraces the richness of cultures with
                  SpoonBoon. At SpoonBoon, we believe that food is a universal
                  language that transcends borders and unites communities. Our
                  diverse menu reflects a fusion of flavors from around the
                  globe, curated to honor traditional recipes while infusing
                  modern twists. Whether it's the aromatic spices of India, the
                  savory delights of Mediterranean cuisine, or the bold flavors
                  of Latin America, each dish at SpoonBoon tells a story of
                  cultural heritage and culinary craftsmanship. Our chefs,
                  passionate about exploring culinary traditions, meticulously
                  craft each recipe to capture the essence of its origin,
                  delivering an authentic experience with every bite. From
                  vibrant street food-inspired starters to elegant gourmet
                  entrees and irresistible desserts, SpoonBoon invites you to
                  embark on a gastronomic adventure that celebrates the
                  beautiful tapestry of cultures. Let us transport you to
                  distant lands through the artistry of food, as we strive to
                  foster connection and appreciation for the world's diverse
                  culinary landscape
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
