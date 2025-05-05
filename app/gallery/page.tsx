import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-12 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Campus Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful campus, events, and student life through images and videos.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <Tabs defaultValue="campus" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="Hostel">Boys Hostel</TabsTrigger>
            <TabsTrigger value="Uni">University</TabsTrigger>
            <TabsTrigger value="student-life">Student Life</TabsTrigger>
          </TabsList>

          <TabsContent value="campus" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryItem src="/IoET Gallery/mainioet.jpg" alt="Main Building of IoET" title="Main Building"/>
              <GalleryItem src="/IoET Gallery/IoET/IMG_20240913_134733974-01.jpeg" alt="IoET Campus View" title="IoET"/>
              <GalleryItem src="/IoET Gallery/IoET/IMG_20241016_144159216-01.jpeg" alt="IoET Campus View" title="IoET"/>
              <GalleryItem src="/IoET Gallery/IoET/IMG_20241015_194609040-01.jpeg" alt="Dr. Gour at IoET Campus" title="Dr. Gour at IoET"/>
              <GalleryItem src="/IoET Gallery/IoET/IMG_20241011_114533761-01.jpeg" alt="IoET Campus View" title="IoET"/>
              <GalleryItem src="/IoET Gallery/IoET/1000101344-03.jpeg" alt="Classrooms at IoET" title="Classrooms at IoET"/>
              <GalleryItem src="/IoET Gallery/IoET/IMG_20240924_120309700-01.jpeg" alt="Classrooms at IoET" title="Classrooms at IoET"/>
            </div>
          </TabsContent>

          <TabsContent value="Hostel" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryItem src="/IoET Gallery/Boys Hostel/IMG_20240913_204336845-01.jpeg" alt="Aryabhatt Hostel Building" title="Aryabhatt Hostel"/>
              <GalleryItem src="/IoET Gallery/Boys Hostel/IMG_20241226_065910271-01.jpeg" alt="Aerial View of Hostel" title="Aerial View"/>
              <GalleryItem src="/IoET Gallery/Boys Hostel/1000103048-01.jpeg" alt="Hostel Balcony View" title="Balcony View"/>
              <GalleryItem src="/IoET Gallery/Boys Hostel/1000103795-02.jpeg" alt="Hostel Basketball Ground" title="Basketball Ground"/>
              <GalleryItem src="/IoET Gallery/Boys Hostel/IMG_20241001_060956415-01.jpeg" alt="Sunrise at Hostel" title="Sunrise"/>
              <GalleryItem src="/IoET Gallery/Boys Hostel/IMG_20240913_204121958-01.jpeg" alt="Hostel Rooms Interior" title="Hostel Rooms"/>
              <GalleryItem src="/IoET Gallery/Boys Hostel/IMG_20240913_204240132-01.jpeg" alt="Hostel Night View" title="Vibes at Night"/>
            </div>
          </TabsContent>

          <TabsContent value="Uni" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryItem src="/IoET Gallery/Uni/IMG_20241128_064144080-01.jpeg" alt="Dr. Gour Sir Statue at University" title="Dr. Gour Sir Statue"/>
              <GalleryItem src="/IoET Gallery/Uni/library.jpg" title="Jawahar Lal Nehru Library"/>
              <GalleryItem src="/IoET Gallery/Uni/IMG_20241016_203640862-01.jpeg" title="Books at Jawahar Lal Nehru Library"/>
              <GalleryItem src="/IoET Gallery/Uni/IMG_20241016_203552859-01.jpeg" title="Jawahar Lal Nehru Library"/>
              <GalleryItem src="/IoET Gallery/Uni/IMG_20241016_203942626-01.jpeg" title="Open Air Library"/>
              <GalleryItem src="/IoET Gallery/Uni/IMG_20241020_155303363-01.jpeg" title="Ranganathan Bhawan"/>
              <GalleryItem src="/IoET Gallery/Uni/IMG_20241128_083351703-01.jpeg" title="University Road"/>
              <GalleryItem src="/IoET Gallery/Uni/1000117079-01.jpeg" title="Gour Prangan"/>
              <GalleryItem src="/IoET Gallery/Uni/1000117077-01.jpeg" title="Gour Prangan"/>
            </div>
          </TabsContent>

          <TabsContent value="student-life" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryItem
                src="/placeholder.svg?height=600&width=800"
                alt="Student Club"
                title="Student Club Activities"
              />
              <GalleryItem src="/placeholder.svg?height=600&width=800" alt="Hostel Life" title="Hostel Life" />
              <GalleryItem src="/placeholder.svg?height=600&width=800" alt="Sports Team" title="College Sports Teams" />
              <GalleryItem
                src="/placeholder.svg?height=600&width=800"
                alt="Cultural Performance"
                title="Cultural Performances"
              />
              <GalleryItem src="/placeholder.svg?height=600&width=800" alt="Campus Festival" title="Campus Festival" />
              <GalleryItem
                src="/placeholder.svg?height=600&width=800"
                alt="Student Council"
                title="Student Council Meeting"
              />
              <GalleryItem
                src="/placeholder.svg?height=600&width=800"
                alt="Outdoor Activities"
                title="Outdoor Activities"
              />
              <GalleryItem src="/placeholder.svg?height=600&width=800" alt="Cafeteria" title="Students at Cafeteria" />
              <GalleryItem src="/placeholder.svg?height=600&width=800" alt="Volunteer Work" title="Community Service" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function GalleryItem({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority={false}
          quality={75}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <h3 className="text-white font-medium p-4 w-full">{title}</h3>
      </div>
    </div>
  )
}

