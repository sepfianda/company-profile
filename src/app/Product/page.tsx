import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Product = () => {
  return (
    <div>
      <div className="bg-[#0e0d0c] py-10">
        <h1 className="pt-20 text-center text-3xl font-extrabold text-[#BF3131]">
          OUR DELICIOUS APPETIZERS
        </h1>
        <hr className="mx-auto w-1/2 border-b-4 solid border-[#EAD196]" />
        <div className="grid grid-cols-1 gap-8 px-5 pt-20 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="
                    https://drive.google.com/uc?export=view&id=1zTqlywnC4JZq-bn6nqmIJWsxxrR9XuAr"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-large text-center font-bold">
                CLASSIC STUFFED MUSHROOMS
              </h3>
              <p className="font-xs pt-4 text-justify">
                Classic stuffed mushrooms are a delectable appetizer featuring
                large mushroom caps filled with a savory mixture typically
                composed of breadcrumbs, garlic, herbs (such as parsley or
                thyme), cheese (often Parmesan or mozzarella), and sometimes
                sausage or bacon for added flavor. These bite-sized delights are
                then baked until golden and served piping hot, offering a
                delightful combination of earthy mushroom flavor and rich,
                aromatic stuffing. Perfect for gatherings or as a tantalizing
                starter, classic stuffed mushrooms are sure to please any palate
              </p>
            </CardContent>
          </Card>
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
              <h3 className="font-large text-center font-bold">
                GARLIC BUTTER SHRIMP SCAMPI
              </h3>
              <p className="font-xs pt-4 text-justify">
                Garlic butter shrimp scampi is a mouthwatering dish that
                showcases plump shrimp cooked in a luxurious sauce made with
                garlic, butter, lemon juice, and white wine or broth. This
                classic Italian-inspired recipe bursts with flavor, as the
                garlic infuses the buttery sauce, creating a rich and aromatic
                base for the tender shrimp. Served over pasta or with crusty
                bread to soak up the delicious sauce, garlic butter shrimp
                scampi is a satisfying and elegant meal that is quick and easy
                to prepare, making it perfect for both weeknight dinners and
                special occasions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1twthgSIc828ozD0ayKnBE3hfXm_KsDMi
                  "
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-large text-center font-bold">
                STUFFED CHEESY GARLIC BREAD
              </h3>
              <p className="font-xs pt-4 text-justify">
                Stuffed cheesy garlic bread is an indulgent twist on the classic
                garlic bread, featuring a crispy exterior and a soft, buttery
                interior stuffed with gooey melted cheese and fragrant garlic.
                This irresistible treat combines the comforting flavors of
                garlic, butter, and cheese, resulting in a savory and satisfying
                snack or side dish. Whether served alongside pasta, soup, or
                enjoyed on its own, stuffed cheesy garlic bread is sure to
                please any crowd with its irresistible combination of flavors
                and textures.
              </p>
            </CardContent>
          </Card>
        </div>
        <h1 className="pt-20 px-5 text-center text-3xl font-extrabold text-[#BF3131]">
          OUR DELICIOUS MAIN COURSE
        </h1>
        <hr className="mx-auto w-1/2 border-b-4 solid border-[#EAD196]" />
        <div className="grid grid-cols-1 gap-8 px-5 pt-20 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1mVGaCfH-3krcnoDLcHX2I5dpt6CSda4J"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-large text-center font-bold">
                MEATBALL POTATO CASSEROLE
              </h3>
              <p className="font-xs pt-4 text-justify">
                Meatball potato casserole is a hearty and comforting dish that
                brings together tender meatballs, creamy potatoes, and savory
                sauce in one satisfying bake. Layers of seasoned meatballs,
                sliced potatoes, and a flavorful tomato or cream-based sauce are
                assembled and baked until bubbly and golden. The result is a
                deliciously cozy meal that combines the richness of meat with
                the comforting wholesomeness of potatoes. Perfect for family
                dinners or potluck gatherings, meatball potato casserole is sure
                to warm both hearts and bellies with its irresistible
                combination of flavors.
              </p>
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
              <h3 className="font-large text-center font-bold">
                GRILLED CHICKEN WITH ROASTED GARLIC AND POTATO
              </h3>
              <p className="font-xs pt-4 text-justify">
                Grilled chicken with roasted garlic and potatoes is a
                mouthwatering dish that pairs tender, juicy chicken with
                fragrant, caramelized garlic and crispy roasted potatoes. The
                chicken is marinated in a blend of herbs and spices, then
                grilled to perfection, resulting in a smoky and flavorful
                centerpiece. Alongside, roasted garlic cloves add a mellow
                sweetness and depth of flavor, while the potatoes soak up all
                the delicious juices, turning golden and crispy in the oven.
                This satisfying meal is perfect for any occasion, offering a
                delightful combination of savory flavors and hearty textures.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1U5TBJuK7n9I5z_-KwP0NeUpw-yJrtVDj"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-large text-center font-bold">
                CREAMY SPINACH SALMON
              </h3>
              <p className="font-xs pt-4 text-justify">
                Creamy spinach salmon is a luxurious dish that combines tender,
                flaky salmon with a velvety sauce infused with spinach and
                cream. The salmon fillets are gently seared to lock in moisture
                and flavor, then nestled into a luscious sauce made from sautéed
                spinach, garlic, and rich cream. This elegant yet easy-to-make
                dish offers a perfect balance of indulgence and nutrition, with
                the vibrant green spinach adding both color and nutrients to the
                creamy sauce. Creamy spinach salmon is a sophisticated main
                course that is sure to impress guests or make any weeknight
                dinner feel special.
              </p>
            </CardContent>
          </Card>
        </div>
        <h1 className="pt-20 px-5 text-center text-3xl font-extrabold text-[#BF3131]">
          OUR DELICIOUS DESSERT
        </h1>
        <hr className="mx-auto w-1/2 border-b-4 solid border-[#EAD196]" />
        <div className="grid grid-cols-1 gap-8 px-5 pt-20 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1x_n-5QfZtEcCwmA6bSWxfq-zIpWI7Id6"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-large text-center font-bold">
                TROPICAL MILLE FEUILLE
              </h3>
              <p className="font-xs pt-4 text-justify">
                Tropical mille feuille is a delightful dessert that layers
                crispy puff pastry with creamy custard or whipped cream and
                exotic fruits like mango, pineapple, and passionfruit. The flaky
                pastry provides a satisfying crunch, while the luscious cream
                adds richness and balance to the sweetness of the tropical
                fruits. This elegant dessert offers a tantalizing blend of
                textures and flavors, making it a perfect treat for any
                occasion, whether enjoyed at a fancy dinner party or as a
                refreshing indulgence on a sunny afternoon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="object-cover">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1QB20z1m6Ibq87BQxh9EJquzIUpjRg-QY"
                  alt="thumbnail"
                  width={500}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-large text-center font-bold">
                DIRT PUDDING PARFAITS
              </h3>
              <p className="font-xs pt-4 text-justify">
                Dirt pudding parfaits are a whimsical dessert that combines
                layers of creamy chocolate pudding, crumbled chocolate cookies,
                and gummy worms to create a playful homage to a garden scene.
                The chocolate pudding serves as the "dirt," while the cookie
                crumbs mimic soil, and the gummy worms add a fun, unexpected
                element. These individual parfaits are both delicious and
                visually appealing, making them a hit at children's parties or
                any gathering where a touch of nostalgia and sweetness is
                welcomed.
              </p>
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
              <h3 className="font-large text-center font-bold">
                MELTED MIX ICE CREAM
              </h3>
              <p className="font-xs pt-4 text-justify">
                Melted mix ice cream combines the classic flavors of chocolate,
                vanilla, and red velvet into a delightful swirl of creamy
                indulgence. This decadent treat features velvety chocolate,
                smooth vanilla, and hints of rich red velvet cake, all blended
                together in a melty, irresistible fusion. Whether enjoyed in a
                cone or a bowl, melted mix ice cream offers a tantalizing medley
                of flavors that is sure to satisfy any sweet tooth.
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Testimonial */}
        <div className="items-center bg-[#0e0d0c] p-20">
          <div className="text-center text-3xl text-[#BF3131]">
            Testimonials
          </div>
          <hr className="mb-8 mx-auto w-1/3 border-b-4 solid border-[#EAD196]" />
          <div>
            <Carousel>
              <CarouselContent className="-ml-2 gap-8 text-white md:-ml-4">
                <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                  <h3 className="text-justify">
                    I just wanted to say thank you to SpoonBoon team. The food
                    quality was great. The food presentation was great and
                    although we were late sitting down the service was
                    brilliant. The team did a fantastic job and I have had
                    lovely feedback from everyone that attended my daughter's
                    birthday party.
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
                    exceptional. The attention to detail in the planning phase
                    was particularly impressive and I was free to host without
                    any distractions on the day. You are in a different league
                    to any other caterer I've ever hired, so hopefully we will
                    find another occasion to celebrate with you soon!
                  </h3>
                  <p className="py-6 text-center">Munish Trukral</p>
                </CarouselItem>
                <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                  <h3 className="text-justify">
                    They were total professional as every single one of our
                    guests loved the authentic food. Thank u so much!
                  </h3>
                  <p className="py-6 text-center">MDI</p>
                </CarouselItem>
                <CarouselItem className="border border-white p-8 md:basis-1/2 lg:basis-1/3">
                  <h3 className="text-justify">
                    The food was delicious and presented in a different and
                    delightful way on the tables. The staff was very attentive
                    to all our needs throughout the evening and helped clean up
                    all the mess.
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
    </div>
  );
};

export default Product;
