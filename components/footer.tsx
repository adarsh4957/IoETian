import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ioetians</h3>
            <p className="text-muted-foreground text-sm">
              A premier institution dedicated to excellence in education and innovation.
            </p>
            <div className="flex space-x-4">
              <Link target="_blank" href="https://www.facebook.com/p/Doctor-Harisingh-Gour-Vishwavidyalaya-Sagar-100076048982640/" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link target="_blank" href="https://x.com/DoctorGour" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/ioet.official/" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/school/govt.-boys-arts-and-commerce-college-sagar/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/repository" className="text-muted-foreground hover:text-primary text-sm">
                  Repository
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>Valley Campus</p>
              <p>Patheriya Jat, Madhya Pradesh </p>
              <p>470003</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ioetians. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

