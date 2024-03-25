"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="fixed w-full bg-black z-10">
        <div className="flex items-center justify-between">
        <Image
            src="https://drive.google.com/uc?export=view&id=1k4833g3RXBQcXBNwsKyt2HGJ-RFfXLxm"
            alt="logo"
            className="cursor-pointer p-3"
            width={150}
            height={150}
            onClick={() => router.push("/")}
          />
            

            <div className="hidden md:block">
              <div className="flex cursor-pointer items-center gap-8 text-white">
                <h3 onClick={() => router.push("/HomePage")}>HOMEPAGE</h3>
                <h3 onClick={() => router.push("/AboutUs")}>ABOUT US</h3>
                <h3 onClick={() => router.push("/Product")}>PRODUCTS</h3>
                <h3 onClick={() => router.push("/Teams")}>TEAMS</h3>
              </div>
            </div>
          

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden text-white">
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>MENU</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/")}>HOMEPAGE</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/AboutUs")}>ABOUT US</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/Product")}>PRODUCTS</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/Teams")}>TEAMS</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
