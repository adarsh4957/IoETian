import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-12 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Events</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our campus events through photos and memories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <Tabs defaultValue="Youth" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="Youth">Youth Festival</TabsTrigger>
          </TabsList>

          <TabsContent value="Youth" className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Youth Festival</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241126_103507823-01.jpeg" alt="Youth Festival Schedule" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241125_235202793-01.jpeg" alt="Youth Festival Lighting" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241128_202509552-01.jpeg" alt="Youth Festival Lighting" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241125_233741126-01-01.jpeg" alt="Candle March" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241126_000552682-01.jpeg" alt="Gour Prangan" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241128_202626500-01.jpeg" alt="Youth Festival Lighting" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241127_104709517-01.jpeg" alt="Golden Jubilee Hall" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241128_202559131-01.jpeg" alt="Youth Festival Lighting" title="Youth Festival 2024" width={800} height={600}/>
              <GalleryItem src="/IoET Gallery/youth fest/IMG_20241126_001600121-01.jpeg" alt="Youth Festival Lighting" title="Youth Festival 2024" width={800} height={600}/>
              </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}

function GalleryItem({ 
  src, 
  alt, 
  title,
  width = 800,
  height = 600 
}: { 
  src: string
  alt: string
  title: string
  width?: number
  height?: number
}) {
  return (
    <div className="group relative w-full">
      <div className="relative w-full pb-[100%] md:pb-[75%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 w-full h-full object-contain bg-black/5"
          style={{ objectPosition: 'center' }}
          quality={100}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end"
        >
          <div className="p-4 space-y-2">
            <h3 className="text-white font-medium text-lg">{title}</h3>
            <p className="text-white/80 text-sm">{alt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

