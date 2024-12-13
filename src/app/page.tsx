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


export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle> Don't do Drugs </CardTitle>
          <CardDescription>We will be talking about the side effects and negative effects of taking/ doing drugs  </CardDescription>
        </CardHeader>
        <CardContent>
          <p> Why are drugs harmful? </p>
        </CardContent>
        <CardFooter>
          <p> Consequences for doing drugs </p>
        </CardFooter>
      </Card>
      <Input type="What's on your mind" placeholder="What's on your mind" />

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle> Drugs = LifeTime Regret </AlertTitle>
        <AlertDescription>
          If you do drugs you're gonna end up like dinosaurs
        </AlertDescription>
      </Alert>

      <p> Here's more information on the side effects of drugs and etc.</p>

      <Button> Click Here </Button>

    </div>
  );

}
