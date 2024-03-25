import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  const url =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      {/* Hero Section */}
      <div className="relative md:h-[100vh] h-[50vh] bg-black bg-opacity-40 flex items-center">
        <div className="absolute -z-10 h-full w-full">
          <Image src={url} alt="background" fill objectFit="cover" />
        </div>

        <div className="mx-auto text-center">
          <h3 className="pt-20 text-xl font-extrabold text-white md:text-2xl">
            Welcome To SpoonBoon
          </h3>
          <h1 className="text-3xl text-white md:text-5xl">
            From Mundane to Magical, We Cater with Love
          </h1>
        </div>
      </div>
      {/* Company Overview */}
      <div className="bg-[#0e0d0c] text-center">
        <h1 className="relative p-5 text-3xl text-white">Company Overview</h1>
        <p className="text-large relative p-5 text-white">
          SpoonBoon Catering is a newly established company that will provide
          catering services for a variety of events and clients. Our services
          will include menu creation designed for every client's tastes and
          requirements, food preparation, delivery, service, and cleanup.
          Clients will receive ultimate value when choosing SpoonBoon for their
          next event. SpoonBoon will be owned and managed by local Chef
          Charlotte Gardea. Chef Charlotte has over 20 years of culinary and
          hospitality experience and is a graduate of Le Cordon Bleu Culinary
          Academy.
        </p>
        <Button>
          <Link href="/AboutUs">READ MORE</Link>
        </Button>
      </div>
      {/* Products */}
      <div className="bg-[#0e0d0c]">
        <h1 className="p-5 pt-10 text-center text-3xl text-white">
          Our Best Menu
        </h1>
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1k9LGYIIYSwVQJk2mjqeBrtN-cVTUnLvM"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-center font-bold">GARLIC BUTTER SHRIMP SCAMPI</h3>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=16Lto1QVi8DD89PLTyLNTJ18WU9QeM1RD"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-center font-bold">
                GRILLED CHICKEN WITH ROASTED GARLIC AND POTATO
              </h3>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1G5cwa3Slh02Xs-npRgrI7vcBgwK9plGs"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-center font-bold">MELTED MIX ICE CREAM</h3>
            </CardContent>
          </Card>
        </div>
        <div className="text-center pt-5">
        <Button className="items-center">
          <Link href="/Product">ANOTHER MENU</Link>
        </Button>
        </div>
      </div>
      {/* Testimonial */}
      <div className="items-center bg-[#0e0d0c] p-20">
        <div className="mb-8 text-center text-3xl text-white">Testimonials</div>
        <div>
          <Carousel>
            <CarouselContent className="-ml-2 gap-8 text-white md:-ml-4">
              <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                <h3 className="text-justify">
                  I just wanted to say thank you to SpoonBoon team. The food
                  quality was great. The food presentation was great and
                  although we were late sitting down the service was brilliant.
                  The team did a fantastic job and I have had lovely feedback
                  from everyone that attended my daughter's birthday party.
                </h3>
                <p className="py-6 text-center">Milan</p>
              </CarouselItem>
              <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                <h3 className="text-justify">
                  The food is extremely good; prices are very reasonable
                  considering the quantity of food, my new favourite now.
                </h3>
                <p className="py-6 text-center">Joyeeta</p>
              </CarouselItem>
              <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                <h3 className="text-justify">
                  The food was fantastic, and the service was absolutely
                  exceptional. The attention to detail in the planning phase was
                  particularly impressive and I was free to host without any
                  distractions on the day. You are in a different league to any
                  other caterer I've ever hired, so hopefully we will find
                  another occasion to celebrate with you soon!
                </h3>
                <p className="py-6 text-center">Munish Trukral</p>
              </CarouselItem>
              <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                <h3 className="text-justify">
                  They were total professional as every single one of our guests
                  loved the authentic food. Thank u so much!
                </h3>
                <p className="py-6 text-center">MDI</p>
              </CarouselItem>
              <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                <h3 className="text-justify">
                  The food was delicious and presented in a different and
                  delightful way on the tables. The staff was very attentive to
                  all our needs throughout the evening and helped clean up all
                  the mess.
                </h3>
                <p className="py-6 text-center">Sunil Sharma</p>
              </CarouselItem>
              <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                <h3 className="text-justify">
                  Polite staff, on time service & tasty food. We extend our
                  thanks to spoonboon team for the wonderful show put together
                  for our house party.
                </h3>
                <p className="py-6 text-center">Himesh Bhatnagar</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
