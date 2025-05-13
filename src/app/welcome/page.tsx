"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="container-narrow mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-serif mb-8 text-accent">Welcome – Introduction</h1>
      
      <div className="prose prose-lg max-w-none mb-16">
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-accent">Dear visitor,</h2>
        
        <p className="font-medium text-xl mb-8">
          Welcome at the website of Jaap Goedemoed Artworks!
        </p>
        
        <p>
          In May 2025, the website was updated with new pictures of recent artworks and underwent a thorough technical overhaul. As part of this rebuild using modern technology (Next.js instead of WordPress), the response time for obtaining (enlarged) pictures of artworks has been considerably improved. This change also means you'll experience faster loading times when viewing artwork images and navigating the site. Furthermore, the new technology makes the website more secure and better prepared for future updates.
        </p>
        <p>
          The recent large artworks will be described in more detail at a later stage. In the near future also photographs of the travels of the artist are to be expected.
        </p>
        <p>
          The website jaapgoedemoed.com is becoming more and more unique, I am not aware of the existence of another artist's website revealing so much info on the arising of artworks, the ideas behind these artworks, the treatment of important moments for taking decisions during the making process, and interaction with artworks from other related artists. Also the impact of ethnographic objects and purchased artworks on my own artworks are frankly discussed.
        </p>
        
        
        <p>
          Thank you for visiting my website!
          It will be highly appreciated if you could leave comments (via the comment button or in the guest book) after your visit.
        </p>
        
        <p className="italic text-right">
          The studio – 28 October 2022 at early evening
        </p>
      </div>
      
      <div className="border-t border-border my-12 pt-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-accent">Introduction</h2>
        
        <div className="prose prose-lg max-w-none mb-12">
          <h3 className="text-xl md:text-2xl font-serif mb-4">A typical Goedemoed</h3>
          
          <p>
            It is more than thirty years since Goedemoed (De Bilt, the Netherlands, 1956) began making art, not always full-time, but always with enthusiasm and ambition. If it were possible to view his works of those years hanging alongside each other, strolling leisurely past them – first close up, then from a slight distance, you would see the development in the themes, techniques, materials, colors, and size. But every one of these works could be called a typical Goedemoed; carefully thought through, balanced and compelling. These are images with a lasting echo.
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">The beginning</h3>
          
          <p>
            Jaap became acquainted with graphic techniques such as etching and silk-screen printing at higschool.
          </p>
          
          <p>
            He was a keen and valued student during drawing lessons but only began painting on canvas seriously after finishing his studies. These were figurative paintings, first in oils and then in acrylics. Characteristic of these first steps are canvases with a flat scenery, painted in 1984 (1), and with a deep perspective, painted in 1985 (2).
          </p>
          
          <div className="flex flex-wrap my-8 gap-6 justify-center">
            <div className="float-left mr-6 mb-4 w-48 md:w-64">
              <div className="flex flex-col">
                <div className="relative mb-2">
                  <Image 
                    src="/Figurative Artworks 1980 -1989/Egyptian scene, flat 1984, 120 x 85 cm.jpg" 
                    alt="1984 - Flat scenery" 
                    width={250}
                    height={176}
                    className="object-cover border border-border rounded"
                  />
                </div>
                <p className="text-sm text-center text-text-muted">1</p>
              </div>
            </div>
            <div className="float-right ml-6 mb-4 w-48 md:w-64">
              <div className="flex flex-col">
                <div className="relative mb-2">
                  <Image 
                    src="/Figurative Artworks 1980 -1989/Egyptian scene, with depth 1985, 125 x 90 cm.jpg" 
                    alt="1985 - Deep perspective" 
                    width={250}
                    height={180}
                    className="object-cover border border-border rounded"
                  />
                </div>
                <p className="text-sm text-center text-text-muted">2</p>
              </div>
            </div>
          </div>
          
          <p>
            The flat division of the plane is inspired by and referring to Mondrian, the impossible construction of walls to M.C. Escher, the hieroglyphics to ancient Egypt. In his free time (he was now working as a qualified pharmacist), the young Goedemoed focused on figurative works, often with a symbolic significance. At this time he also experimented with different materials, including linen tape and modeling paste.
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">Turning point</h3>
          
          <div className="float-left mr-6 mb-6 w-full md:w-80 lg:w-96">
            <div className="flex flex-col">
              <div className="relative mb-2">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png" 
                  alt="Wooden plank (60x200cm) from 1990" 
                  width={380}
                  height={126}
                  className="border border-border rounded"
                />
              </div>
              <p className="text-sm text-center text-text-muted">3</p>
            </div>
          </div>
          
          <p>
            As a result of a process that started in earlier years, 1990 was perhaps a turning point in Jaap's artistic development. His work demonstrates less symbolism and the figurative themes are replaced by abstract images and strong attention to detail. These elements still define and characterize "a typical Goedemoed".
            Regarding the wooden plank (60x200cm)(3) from 1990, partially covered with linen tape, once again the influence of Escher appears: lower and upper side reveal identical structures, a development of changing patterns which return to their original shape, forming a metamorphosis. In this work ethnographic influences can be observed for the first time, e.g. emphasizing of the patina of the wood. Jaap finds much inspiration in ethnic art, which he has collected fervently since settling in Amsterdam.
          </p>
          
          <p>
            The colors and geometric patterns of the dance shawls and garments of the central Kuba Kingdom in Africa are an important source of inspiration as in Changing pattern with opening I (1990) (4), which is based on a fragment of a Ngongo woman's dance shawl.
            That year, the artist used this image for the cover of his thesis. In these and later paintings, Goedemoed has been guided by shapes inspired by the human spirit, like the African patterns, and those generated by computer. For this theme, Jaap is indebted to Douglas R. Hofstadter, author of Gödel, Escher, Bach. Having a precise mind, Goedemoed is fascinated by this book and Metamagical Themas by the same author.
            This brought him to computer-generated patterns and subtle deformations and transformations. The mathematical orders and theirvariations are features of his later works.
          </p>
          
          <div className="float-right ml-6 mb-6 w-48 md:w-56">
            <div className="flex flex-col">
              <div className="relative mb-2">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg" 
                  alt="Changing pattern with opening I (1990)" 
                  width={220}
                  height={232}
                  className="border border-border rounded"
                />
              </div>
              <p className="text-sm text-center text-text-muted">4</p>
            </div>
          </div>
          
          <p>
            During the early nineties, there was also an undeniable influence of Amsterdam artist, Frank Lodeizen.
            Jaap met the flamboyant Lodeizen while visiting one of his exhibitions and Lodeizen showed him a painting technique involving a mixture of acrylic paint and arabic gum. After drying, when the gum has crystallized, the mixture is rinsed with water which washes away some of the gum taking with it both undissolved and dissolved paint. Lodeizen calls his technique the "batik method". Jaap noticed that the final results are unpredictable and sometimes lead to quirky traces of the acrylic paint counterbalancing both the predictability of regular patterns and an excess of detail and precision.
          </p>
          
          <div className="float-left mr-6 mb-6" style={{ maxWidth: 'calc(2 * 12rem + 1.5rem)' }}> {/* Max width for 2 w-48 items + gap-6 */}
            <div className="flex flex-wrap gap-6">
              {/* Image 5, 15 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div className="relative mb-2">
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Tuscan tiling I 1994, 165 x 165 cm.jpg" 
                      alt="Tuscan tiling I (Montescudaio) (1994)" 
                      width={192} 
                      height={192}
                      className="object-cover border border-border rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">5, 15</p>
                </div>
              </div>
              {/* Image 6 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div className="relative mb-2">
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg" 
                      alt="Open structure (6)" 
                      width={192}
                      height={192}
                      className="object-cover border border-border rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">6</p>
                </div>
              </div>
              {/* Image 7 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div className="relative mb-2">
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Composition with fixed center 1998, 100 x 100 cm.jpg" 
                      alt="Closed structure (7)" 
                      width={192}
                      height={192}
                      className="object-cover border border-border rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">7</p>
                </div>
              </div>
              {/* Image 8, 12 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div className="relative mb-2">
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Disconnected Coptic tiling 1996, 150 x 150 cm.jpg" 
                      alt="Coptic healing scrolls (8, 12)" 
                      width={192}
                      height={192}
                      className="object-cover border border-border rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">8, 12</p>
                </div>
              </div>
              {/* Image 9, 10 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div className="relative mb-2">
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Detail of Tiling with handwritings 1997.jpg" 
                      alt="Japanese prints (9, 10)" 
                      width={192}
                      height={192}
                      className="object-cover border border-border rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">9, 10</p>
                </div>
              </div>
              {/* Image 11 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div className="relative mb-2">
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg" 
                      alt="Cigar boxes and prints by other artists (11)" 
                      width={192}
                      height={192}
                      className="object-cover border border-border rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">11</p>
                </div>
              </div>
            </div>
          </div>
          <p>
            The artists made a joint visit to the Tuscan village of Montescudaio for three weeks during the summer of 1994. Goedemoed found old agricultural tax papers complete with seals and stamps in a garbage heap in a backyard. They can be seen, sometimes combined with the batik method, in certain works of that year, for example Tuscan tiling I (Montescudaio) (5, 15). The new technique and use of structural elements do not appear to be a problem for Jaap. In other works, he explores patterns with open (6) and closed (7) structures to which he adds used paper items: fragments of newspapers, old banknotes, Coptic healing scrolls (parchment) (8, 12), Japanese prints (9, 10), cigar boxes (11), handwritten Islamic texts, prints by other artists (11), yellowed and stained materials harmonizing well with the 'washing' gum technique.
          </p>
          <div className="clear-both"></div>

          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">Large format</h3>
          
          <div className="float-left mr-6 mb-6 w-64">
            <div className="flex flex-col">
              <div className="relative mb-2">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg" 
                  alt="Composition with open structure (13, 16)" 
                  width={250}
                  height={250}
                  className="object-cover border border-border rounded"
                />
              </div>
              <p className="text-sm text-center text-text-muted">13, 16</p>
            </div>
          </div>
          <div className="float-left mr-6 mb-6 w-64">
            <div className="flex flex-col">
              <div className="relative mb-2">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Detail of Tiling with handwritings 1997, 2.jpg" 
                  alt="Newspaper photograph of a leader from the Balkan Wars (14)" 
                  width={250}
                  height={250}
                  className="object-cover border border-border rounded"
                />
              </div>
              <p className="text-sm text-center text-text-muted">14</p>
            </div>
          </div>
          <p>
            During the nineties, we see a move towards his first large works, often with spatial divisions. From a distance they are compositions with a strong central focal point, movement or a harmonious whole. Close-up, we see the mathematical precision with which the small spaces are painted and combined with other materials. This development culminated in "Composition with open structure" (150 x 150 cm) (13, 16) in which the artist combines many experiences. The composition is calming without being dull. The separate elements, painted in acrylics and arabic gum, invite the viewer to come closer. And close up, this second layer is fascinating! Jaap enjoys working in these large formats. The planning and the patience necessary to work with these sizes suit him. In this period, we also see a diversity emerge from his work: many things can always be seen in Jaap's work. It may be movement or a color pattern, or possibly unexpected vistas into a second or third layer.
            A Byzantine saint (9, 10, 14) , a Japanese garden (10), a newspaper photograph (14) of a leader from the Balkan Wars. They don't intrude upon an attentive viewer but form an indispensable part of the overall image.
            These were inspiring years for the artist and his work demands to be seen. With a substantial degree of confidence, daring and ambition, during a visit to New York Goedemoed succeeded in attracting the interest of the Montague Gallery in Soho where he showed his large multi-colored mosaics at group exhibition in the fall of 1997.
          </p>
          <div className="clear-both"></div>
          
          <p className="text-right mt-6">
            <em>Text: Rineke van Houten</em><br />
            <em>Translation: Jean E. Boucher</em>
          </p>
          
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-xl font-serif mb-4">Additional comment by George Degenhart, visual artist</h3>
            
            <p>
              A painting can be read as the result of a systematic sequence of acts that result in placing various materials on a foundation. Such an approach leads to clear insight into the production process and sometimes it is the objective, or one of the objectives, to make the process obvious.
              Personally, I believe in the perceptibility of the genesis of the painting because it elucidates the goal. But a painting gets its real meaning when there is a sense of interaction; interaction between me and the painting. This interaction does not emanate from factual data like brush strokes, color, form and depiction, but forms a whole that is more than the sum of its parts and generates a new and surprising image. This is what I notice when I am confronted with the works of Goedemoed. His very detailed canvases, filled with apparently identical, yet differing interlocking forms, conjure up an image like an expedition through the universe.
              Remarkably, the genesis is one of great discipline and method while the result leads to getting lost in… well, in what? This feeling of elusiveness also overcomes me when I look through binoculars at a clear, starry sky or when I see pictures of our planet or even the Netherlands taken from space, a world reduced to grains. Or take a photograph of sand on a beach. And although no two grains in the image are the same they still all look alike. Even an image of a crowd shows more similarities than differences.
              Sometimes the image within a painting is more or less within a framework, but more often than not it expands beyond the edges of the canvas and probably carries on. Sometimes the image seems to implode with an absorbing central point. The commercial contracts processed by Jaap show more similarities with sand grains than the authors would like. The feeling of order within an incomprehensible world that I am part of develops during the interaction with Jaap's work. That is exactly why I appreciate his work.
            </p>
          </div>
        </div>
      </div>
      
      
      <div className="mt-12 text-center">
        <Link 
          href="/artworks" 
          className="inline-flex items-center text-accent hover:text-accent-hover transition-colors"
        >
          <span>Explore My Artworks</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
