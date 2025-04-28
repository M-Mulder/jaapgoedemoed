import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Introduction | Jaap Goedemoed',
  description: 'Introduction to the works and artistic philosophy of Jaap Goedemoed.',
};

export default function IntroductionPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2018/12/Egyptian-scene-with-depth-1985-125-x-90-cm-3.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">Introduction</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Welcome to the website of Jaap Goedemoed Artworks
          </p>
        </div>
      </div>
      
      {/* Welcome Message */}
      <div className="container-narrow py-12 border-b border-border">
        <div className="prose prose-invert mx-auto">
          <h2>Welcome</h2>
          
          <p>
            Dear visitor,
          </p>
          
          <p>
            Welcome at the website of Jaap Goedemoed Artworks!
          </p>
          
          <p>
            In October 2022 the website has been updated with pictures of a new pentagonal artwork and a detailed description of this artwork with pictures of intermediate stages.
            This is again put in the menu section Welcome – Introduction.
          </p>
          
          <p>
            The website jaapgoedemoed.com is becoming more and more unique, I am not aware of the existence of another artist's website revealing so much info on the arising of artworks, the ideas behind these artworks, the treatment of important moments for taking decisions during the making process, and interaction with artworks from other related artists. Also the impact of ethnographic objects and purchased artworks on my own artworks are frankly discussed.
          </p>
          
          <p>
            Possibly there is so much information and such an abundance of details, that in the last year no visitor dares to leave a message on the website. Please, give me your comments, if you don't trust the comment button send your mail to jaapgoedemoed@gmail.com. If you are not native English speaker, please send your comment in your own language, if this is more comfortable to you, no problem!
          </p>
          
          <p>
            If your comment is very valuable, I can put your message in an anonymous way on the website if this is desired. Of course you can also inquire for prices of artworks, and inquire for a visit of the studio.
          </p>
          
          <p>
            The new pentagonal artwork Composition No. 2 can also be seen in Artworks.
            Also new works based on old stock papers appeared.
          </p>
          
          <p>
            It is reminded that all artworks are described. Please use the text symbol in orange, when the enlargement of the artwork is on the screen, by moving the cursor at the lower side in the right corner on this text symbol and click, and the artwork will turn around showing a short description of the artwork.
          </p>
          
          <p>
            When stated "In private collection" the artwork is already sold and not available. If not stated, the artwork is still available for sale. All available artworks can be viewed in Amsterdam and in the studio.
          </p>
          
          <p>
            Thank you for taking notice of this information and thank you for visiting this website!
          </p>
          
          <p className="text-right">
            The studio – 28 October 2022 at early evening
          </p>
        </div>
      </div>
      
      {/* Artist Introduction */}
      <div className="container-narrow py-12">
        <div className="prose prose-invert mx-auto">
          <h2>Introduction</h2>
          
          <h3>A typical Goedemoed</h3>
          
          <p>
            It is more than thirty years since Goedemoed (De Bilt, the Netherlands, 1956) began making art, not always full-time, but always with enthusiasm and ambition. If it were possible to view his works of those years hanging alongside each other, strolling leisurely past them – first close up, then from a slight distance, you would see the development in the themes, techniques, materials, colors, and size. But every one of these works could be called a typical Goedemoed; carefully thought through, balanced and compelling. These are images with a lasting echo.
          </p>
          
          <h3>The beginning</h3>
          
          <p>
            Jaap became acquainted with graphic techniques such as etching and silk-screen printing at higschool.
          </p>
          
          <p>
            He was a keen and valued student during drawing lessons but only began painting on canvas seriously after finishing his studies. These were figurative paintings, first in oils and then in acrylics. Characteristic of these first steps are canvases with a flat scenery, painted in 1984 (1), and with a deep perspective, painted in 1985 (2).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2018/12/Egyptian-scene-flat-1984-120-x-85-cm-3.jpg"
                  alt="Egyptian scene flat, 1984"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <p className="text-center text-sm mt-2">1. Egyptian scene flat, 1984</p>
            </div>
            <div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2018/12/Egyptian-scene-with-depth-1985-125-x-90-cm-3.jpg"
                  alt="Egyptian scene with depth, 1985"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <p className="text-center text-sm mt-2">2. Egyptian scene with depth, 1985</p>
            </div>
          </div>
          
          <p>
            The flat division of the plane is inspired by and referring to Mondrian, the impossible construction of walls to M.C. Escher, the hieroglyphics to ancient Egypt. In his free time (he was now working as a qualified pharmacist), the young Goedemoed focused on figurative works, often with a symbolic significance. At this time he also experimented with different materials, including linen tape and modeling paste.
          </p>
          
          <h3>Turning point</h3>
          
          <p>
            As a result of a process that started in earlier years, 1990 was perhaps a turning point in Jaap's artistic development. His work demonstrates less symbolism and the figurative themes are replaced by abstract images and strong attention to detail. These elements still define and characterize "a typical Goedemoed".
            Regarding the wooden plank (60x200cm)(3) from 1990, partially covered with linen tape, once again the influence of Escher appears: lower and upper side reveal identical structures, a development of changing patterns which return to their original shape, forming a metamorphosis. In this work ethnographic influences can be observed for the first time, e.g. emphasizing of the patina of the wood. Jaap finds much inspiration in ethnic art, which he has collected fervently since settling in Amsterdam.
          </p>
          
          <div className="my-8">
            <div className="relative aspect-video shadow-lg">
              <Image 
                src="/2018/12/Changing-tiling-on-a-wooden-plank-1990-60-x-200-cm-819x1024.png"
                alt="Changing tiling on a wooden plank, 1990"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-center text-sm mt-2">3. Changing tiling on a wooden plank, 1990</p>
          </div>
          
          <p>
            The colors and geometric patterns of the dance shawls and garments of the central Kuba Kingdom in Africa are an important source of inspiration as in Changing pattern with opening I (1990) (4), which is based on a fragment of a Ngongo woman's dance shawl.
            That year, the artist used this image for the cover of his thesis. In these and later paintings, Goedemoed has been guided by shapes inspired by the human spirit, like the African patterns, and those generated by computer. For this theme, Jaap is indebted to Douglas R. Hofstadter, author of Gödel, Escher, Bach. Having a precise mind, Goedemoed is fascinated by this book and Metamagical Themas by the same author.
            This brought him to computer-generated patterns and subtle deformations and transformations. The mathematical orders and theirvariations are features of his later works.
          </p>
          
          <div className="my-8">
            <div className="relative aspect-square shadow-lg">
              <Image 
                src="/2019/01/Changing-pattern-with-opening-I-1990-90-x-95-cm.jpg"
                alt="Changing pattern with opening I, 1990"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <p className="text-center text-sm mt-2">4. Changing pattern with opening I, 1990</p>
          </div>
          
          <p>
            During the early nineties, there was also an undeniable influence of Amsterdam artist, Frank Lodeizen.
            Jaap met the flamboyant Lodeizen while visiting one of his exhibitions and Lodeizen showed him a painting technique involving a mixture of acrylic paint and arabic gum. After drying, when the gum has crystallized, the mixture is rinsed with water which washes away some of the gum taking with it both undissolved and dissolved paint. Lodeizen calls his technique the "batik method". Jaap noticed that the final results are unpredictable and sometimes lead to quirky traces of the acrylic paint counterbalancing both the predictability of regular patterns and an excess of detail and precision.
          </p>
          
          <p>
            The artists made a joint visit to the Tuscan village of Montescudaio for three weeks during the summer of 1994. Goedemoed found old agricultural tax papers complete with seals and stamps in a garbage heap in a backyard. They can be seen, sometimes combined with the batik method, in certain works of that year, for example Tuscan tiling I (Montescudaio) (5). The new technique and use of structural elements do not appear to be a problem for Jaap. In other works, he explores patterns with open and closed structures to which he adds used paper items: fragments of newspapers, old banknotes, Coptic healing scrolls (parchment), Japanese prints, cigar boxes, handwritten Islamic texts, prints by other artists, yellowed and stained materials harmonizing well with the 'washing' gum technique.
          </p>
          
          <h3>Additional Comment by George Degenhart, visual artist</h3>
          
          <blockquote>
            A painting can be read as the result of a systematic sequence of acts that result in placing various materials on a foundation. Such an approach leads to clear insight into the production process and sometimes it is the objective, or one of the objectives, to make the process obvious.
            Personally, I believe in the perceptibility of the genesis of the painting because it elucidates the goal. But a painting gets its real meaning when there is a sense of interaction; interaction between me and the painting. This interaction does not emanate from factual data like brush strokes, color, form and depiction, but forms a whole that is more than the sum of its parts and generates a new and surprising image. This is what I notice when I am confronted with the works of Goedemoed. His very detailed canvases, filled with apparently identical, yet differing interlocking forms, conjure up an image like an expedition through the universe.
            Remarkably, the genesis is one of great discipline and method while the result leads to getting lost in… well, in what? This feeling of elusiveness also overcomes me when I look through binoculars at a clear, starry sky or when I see pictures of our planet or even the Netherlands taken from space, a world reduced to grains. Or take a photograph of sand on a beach. And although no two grains in the image are the same they still all look alike. Even an image of a crowd shows more similarities than differences.
            Sometimes the image within a painting is more or less within a framework, but more often than not it expands beyond the edges of the canvas and probably carries on. Sometimes the image seems to implode with an absorbing central point. The commercial contracts processed by Jaap show more similarities with sand grains than the authors would like. The feeling of order within an incomprehensible world that I am part of develops during the interaction with Jaap's work. That is exactly why I appreciate his work.
          </blockquote>
          
          <div className="mt-10 space-x-4 text-center">
            <Link 
              href="/artworks/composition-2017" 
              className="btn"
            >
              Explore Composition 2017
            </Link>
            <Link
              href="/artworks"
              className="btn btn-outline"
            >
              View All Artworks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
