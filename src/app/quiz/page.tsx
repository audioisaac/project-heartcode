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

export default function Quiz() {
  return (
    <div>

      {/* START CODING HERE */}
      <p>Methamphetamine, heroin, and cannabis were the three most commonly 
abused drugs in Singapore. 1,621 methamphetamine abusers (52%), 1,039 heroin 
abusers (33%), and 276 cannabis abusers (9%) were arrested in 2023.</p>

<p>Negative effects of drugs include:
Associated health issues such as lung or heart disease, stroke, cancer, or mental health conditions.
Damage to the brain, heart, liver, lungs, and kidneys.
Increased risk of cancer.
Abnormal vital signs, sleep changes, decreased memory, and cognitive abilities.
Nausea, vomiting, diarrhea, stomach pain.
Legal consequences, financial problems, injuries, and death.</p>

      {/* END CODING HERE */}
    </div>
  );

}
