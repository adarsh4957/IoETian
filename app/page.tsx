import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, GraduationCap, Home, ImageIcon, Library, MapPin, School } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/IoET Gallery/mainioet.jpg"
          alt="College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Ioetians</h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Empowering minds, shaping futures. A premier institution dedicated to excellence in education and
            innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-background/20"
              asChild
            >
              <Link href="/gallery">Virtual Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="https://dhsgsu.edu.in/index.php/en/departments01/institute-of-engineering-and-technology" className="flex items-center gap-2 text-primary-foreground hover:underline">
              <GraduationCap size={20} />
              <span>Academics</span>
            </Link>
            <Link href="https://dhsgsu.edu.in/index.php/en/departments01/institute-of-engineering-and-technology" className="flex items-center gap-2 text-primary-foreground hover:underline">
              <BookOpen size={20} />
              <span>Admissions</span>
            </Link>
            <Link href="/campus-life" className="flex items-center gap-2 text-primary-foreground hover:underline">
              <Home size={20} />
              <span>Campus Life</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-primary-foreground hover:underline">
              <MapPin size={20} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History & Mission</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1985, Ioetians has grown from a small engineering college to a comprehensive institution of
                higher learning. Our journey has been marked by continuous innovation and a commitment to academic
                excellence.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to provide quality education that prepares students for the challenges of tomorrow. We
                strive to foster critical thinking, creativity, and ethical leadership among our students.
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/IoET Gallery/IoET/IMG_20240913_134733974-01.jpeg" alt="College History" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Faculties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of faculties led by experienced professors and equipped with state-of-the-art
              facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <School className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Computer Science and Engineering</h3>
                <p className="text-muted-foreground text-center mb-4">
                Providing cutting-edge education in software development, artificial intelligence, and computer systems, preparing students for the digital future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Library className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Electronics and Communication Engineering</h3>
                <p className="text-muted-foreground text-center mb-4">
                Offering comprehensive education in electronics, communication systems, and signal processing, preparing students for careers in telecommunications and embedded systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Aeronautical Engineering</h3>
                <p className="text-muted-foreground text-center mb-4">
                Providing specialized education in aircraft design, aerodynamics, and propulsion systems, preparing students for careers in aerospace and aviation industries.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/faculties">View All Faculties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Facilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our campus offers modern facilities designed to enhance the learning experience and student life.
            </p>
          </div>

          <Tabs defaultValue="libraries" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="libraries">Libraries</TabsTrigger>
              <TabsTrigger value="labs">Laboratories</TabsTrigger>
              <TabsTrigger value="hostels">Hostels</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>

            <TabsContent value="libraries" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/IoET Gallery/Uni/library.jpg" alt="Main Library" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">State-of-the-art Libraries</h3>
                  <p className="text-muted-foreground mb-4">
                  Jawaharlal Nehru Library, Dr. Harisingh Gour Vishwavidyalaya Sagar (Central University) is the oldest and Largest University Library situated in the Sagar district of Madhya Pradesh. It is located at the Centre of the University Teaching Departments to help the users for better and regular use of the Library. The Library has 3 stories Stack designed to accommodate 4 lacs volumes with an extension wing and a seminar hall. The present building's foundation stone was laid down by former Prime Minister Pt. Jawahar Lal Nehru. On the occasion of the University Commission’s tour of Saugor, Sir Radhakrishnan observed the following in connection with the site there: “This seat of the University with its situation amidst beautiful natural scenery would have been turned into a beauty spot in any other civilized country.”
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Main Central Library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Department Libraries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Digital Resource Center</span>
                    </li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="https://www.dhsgsu.edu.in/index.php/en/about-the-library">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="labs" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/IoET Gallery/IoET/labs.png"
                    alt="Research Laboratory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Laboratories</h3>
                  <p className="text-muted-foreground mb-4">
                    Our laboratories are equipped with cutting-edge technology to support research and practical
                    learning. From engineering workshops to science labs, we provide hands-on experience in every field.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Computer Science Labs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Engineering Workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Research Facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hostels" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="IoET Gallery/Boys Hostel/IMG_20241226_065910271-01.jpeg"
                    alt="Student Hostel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Comfortable Hostels</h3>
                  <p className="text-muted-foreground mb-4">
                    Our residential facilities provide a comfortable and safe living environment for students. With
                    modern amenities and a supportive community, our hostels feel like a home away from home.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Boys' Hostels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Girls' Hostels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>International Student Housing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sports" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="IoET Gallery/Uni/stadium.jpg"
                    alt="Sports Complex"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sports & Recreation</h3>
                  <p className="text-muted-foreground mb-4">
                    We believe in the holistic development of our students. Our sports facilities include indoor and
                    outdoor arenas for various games, a gymnasium, and a swimming pool.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Multi-purpose Stadium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Indoor Sports Complex</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Repository Highlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Academic Resources</h2>
              <p className="text-muted-foreground mb-4">
                Access our comprehensive repository of previous year question papers, study materials, and resources
                organized by year and branch to help you excel in your academics.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <span>Previous Year Question Papers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Library className="h-5 w-5 text-primary" />
                  </div>
                  <span>Study Materials & Notes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span>Research Papers & Publications</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/repository">Explore Repository</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="IoET Gallery/Uni/pyq.webp"
                alt="Academic Resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our beautiful campus, events, and student life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/IoET Gallery/IoET/IMG_20241016_144159216-01.jpeg"
                alt="Campus View"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="IoET Gallery/Uni/reading room.jpg"
                alt="Library Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="IoET Gallery/youth fest/IMG_20241125_235202793-01.jpeg"
                alt="Youth Festival 2024"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="IoET Gallery/isl/islcollage.png"
                alt="Sports Event"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/gallery">
                <ImageIcon size={16} />
                <span>View Full Gallery</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

