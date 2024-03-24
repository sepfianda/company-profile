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

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="fixed w-full bg-white">
        <div className="flex items-center justify-between">
            <h1 className="cursor-pointer text-2xl font-bold">LOGO</h1>

            <div className="hidden md:block">
              <div className="flex cursor-pointer items-center gap-8 ">
                <h3 onClick={() => router.push("/AboutUs")}>ABOUT US</h3>
                <h3 onClick={() => router.push("/Product")}>PRODUCTS</h3>
                <h3 onClick={() => router.push("/Teams")}>TEAMS</h3>
              </div>
            </div>
          

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>MENU</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
