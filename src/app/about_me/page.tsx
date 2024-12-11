"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Navigation, Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FocusCards } from "@/components/ui/focus-cards";

import Cocaine from "../../../public/cocaine.jpg"

const words = `hello
`

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Don't be a Drug addict.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}






const CocaineContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Information on COCAINE:
              </span>{" "}
              Cocaine use can lead to severe health issues such as heart attack, stroke, addiction, and mental health disorders. Legal consequences include imprisonment, hefty fines, and criminal records, affecting employment and social status.
            </p>
            <Image
              src={Cocaine}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};



const FentanylContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Information on FENTANYL:
              </span>{" "}
              Fentanyl use can cause respiratory failure, overdose, addiction, and death. Legal consequences include severe criminal charges, long prison sentences, and substantial fines. Possession and trafficking carry particularly harsh penalties due to fentanyl's high potency.
            </p>
            <Image
              src={Cocaine}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};




const CannabisContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Information on CANNABIS:
              </span>{" "}
              Cannabis use can cause memory issues, impaired coordination, anxiety, and addiction. Legal consequences vary by location, with fines, criminal charges, and imprisonment for illegal possession or distribution. Some regions impose strict penalties for trafficking.
            </p>
            <Image
              src={Cocaine}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Cocaine",
    title: "Why do Cocaine when you can do much more?",
    src: Cocaine,
    content: <CocaineContent />,
  },
  {
    category: "Fentanyl",
    title: "Diminish your productivity.",
    src: Cocaine,
    content: <FentanylContent />,
  },
  {
    category: "Cannabis",
    title: "Drugs = Bad",
    src: Cocaine,
    content: <CannabisContent />,
  }
];

