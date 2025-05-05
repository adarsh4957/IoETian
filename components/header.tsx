"use client"

import React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, GraduationCap, Home, Library, Menu, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="font-bold text-xl">Ioetians</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/about"
                          >
                            <GraduationCap className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">About Ioetians</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Learn about our history, mission, vision, and values.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about" title="History">
                        Our journey from foundation to present day.
                      </ListItem>
                      <ListItem href="/about" title="Leadership">
                        Meet our administrative team and board.
                      </ListItem>
                      <ListItem href="/about" title="Achievements">
                        Our academic recognitions and certifications.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/repository"
                        title="Academic Repository"
                        icon={<Library className="h-4 w-4 mr-2" />}
                      >
                        Access study materials and question papers.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Campus Life</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/events" title="Events">
                        Calendar of academic and cultural events.
                      </ListItem>
                      <ListItem href="/gallery" title="Gallery">
                        Photos and videos from campus life.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary">
                    About
                  </Link>
                  <Link href="/faculties" className="text-lg font-medium hover:text-primary">
                    Faculties
                  </Link>
                  <Link href="/facilities" className="text-lg font-medium hover:text-primary">
                    Facilities
                  </Link>
                  <Link href="/events" className="text-lg font-medium hover:text-primary">
                    Events
                  </Link>
                  <Link href="/gallery" className="text-lg font-medium hover:text-primary">
                    Gallery
                  </Link>
                  <Link href="/repository" className="text-lg font-medium hover:text-primary">
                    Repository
                  </Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

