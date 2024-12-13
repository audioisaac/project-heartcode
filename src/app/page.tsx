import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Navigation, ShieldOff, Terminal } from "lucide-react"

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
import shiloh from "../../public/shiloh.jpg"
import dylan from "../../public/dylan.jpg"

export default function Home() {
  return (
    <div className = 'flex flex-row'>
      <Card>
        <CardHeader>
          <CardTitle> I'm Shiloh </CardTitle>
          <CardDescription> I like football </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src = {shiloh} width ={500}alt = "1"/> 
        </CardContent>
        <CardContent>
          <p> I made the home page on this website </p>
        </CardContent>
        <CardFooter>
          <p> Don't do drugs, it's bad for you </p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle> I'm Dylan </CardTitle>
          <CardDescription> I like sleeping </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src = {dylan} width ={500}alt = "1"/> 
        </CardContent>
        <CardContent>
          <p> I made the Quiz section on this website </p>
        </CardContent>
        <CardFooter>
          <p> Drugs are bad for you, they harm you and your family.</p>
        </CardFooter>
      </Card>
    </div>
  );

}
