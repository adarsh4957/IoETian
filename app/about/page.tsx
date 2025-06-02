"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Users, Trophy, Target, BookOpen, History } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/Ioet Gallery/mainioet.jpg"
          alt="College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About IOET</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Shaping the future through excellence in education
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm">Research Labs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">-</div>
              <div className="text-sm">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <History className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                      <p className="text-muted-foreground mb-4">
                      Institute of Engineering and Technology (IoET) is  an AICTE approved Engineering  Institution under the umbrella of Dr. H. S. Gour   University, Sagar,  
formerly University of Saugor, was established on 18th July 1946 by Dr. Sir Hari Singh Gour (Nov. 26, 1870 – Dec. 25, 1949) by his lifetime savings. Besides, various schools of study and departments the Institute of Engineering and Technology is the one which is newly established in the university campus by the year 2022.
IoET offers various undergraduate degree courses of various field of engineering like Aeronautical Engineering, Electronics and Communication Engineering, Fashion and apparel Engineering, Food Technology Engineering, Computer Sciences Engineering, Dairy Engineering. This institute is located at down hills of Dr. H.S. Gour University Sagar.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-2">2022</h4>
                          <p className="text-sm text-muted-foreground">Establishment of the institution</p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">2022</h4>
                          <p className="text-sm text-muted-foreground">AICTE approved </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">2022</h4>
                          <p className="text-sm text-muted-foreground">Recognized as GFTI</p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">101-150</h4>
                          <p className="text-sm text-muted-foreground">NIRF Rankings Among Indian Universities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mission">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Our Mission</h3>
                      </div>
                      <p className="text-muted-foreground">
                      The mission of IoET Sagar is to deliver quality technical education through modern teaching and infrastructure, fostering students’ intellectual and ethical growth. The institute strives to create an inclusive environment that equips students with the skills and values needed to succeed professionally and serve society. Through innovation, faculty development, and industry collaboration, IET Sagar prepares adaptable and responsible graduates for a rapidly evolving world.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Our Vision</h3>
                      </div>
                      <p className="text-muted-foreground">
                      The vision of the Institute of Engineering and Technology (IoET), Sagar, is to create technical excellence in education and research to serve society. The institute aspires to achieve academic distinction by adopting innovative teaching and learning methodologies, providing state-of-the-art facilities, and nurturing ethical, moral, and cultural values to develop well-rounded professionals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                      <div className="grid gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold mb-2">NAAC accredited</h4>
                          <p className="text-sm text-muted-foreground">Accreditation for academic excellence</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold mb-2">Research Excellence</h4>
                          <p className="text-sm text-muted-foreground">Various research papers published in renowned journals</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold mb-2">Industry Partnerships</h4>
                          <p className="text-sm text-muted-foreground">Collaborations with 100+ leading companies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leadership">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Our Leadership</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Prof.-Ashish-Verma.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Prof.-Ashish-Verma</h4>
                          <p className="text-sm text-muted-foreground">Director</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Dr. Shikhar Purohit.png"
                              alt="Guest Faculty"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Dr. Shikhar Purohit</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Dr.Sheery-Nasir-Siddiqui.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Dr.Sheery-Nasir-Siddiqui</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Dr-Biresh-Kumar-Gupta.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Dr.Biresh Kumar Gupta</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Miss. Aakriti Jain.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Miss. Aakriti Jain</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Dr.Muneshwar-Hembram.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Dr.Muneshwar Hembram</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Mr.-Shivam-Bhalla.png"
                              alt="Dean"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Mr.Shivam Bhalla</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Mr.Vivek-Bhargava.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Mr.Vivek Bhargava</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/Dr.-Sandhya-Pathak.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Dr.Sandhya Pathak</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src="/IoET Gallery/faculty/richa-madam-ioet.png"
                              alt="Director"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h4 className="font-bold">Miss.Richa Jain</h4>
                          <p className="text-sm text-muted-foreground">Guest Faculty</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Life</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/IoET Gallery/mainioet.jpg"
                  alt="Campus Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Modern Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art facilities including smart classrooms, labs, and research centers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/IoET Gallery/isl/IMG-20250505-WA0002.jpg"
                  alt="IoET Super league"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">IoET Super league</h3>
                <p className="text-sm text-muted-foreground">
                  Vibrant campus life with numerous clubs, events, and cultural activities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/IoET Gallery/Uni/stadium.jpg"
                  alt="Sports Facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Abdul Gani Khan Stadium</h3>
                <p className="text-sm text-muted-foreground">
                  Extensive sports infrastructure for physical fitness and recreational activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 