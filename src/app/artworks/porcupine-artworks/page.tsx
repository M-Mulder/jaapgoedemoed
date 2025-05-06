import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'The Making of Porcupine Artworks (2020-2022) | Jaap Goedemoed',
  description: 'Detailed journey of creating two porcupine artworks between 2020-2022 by artist Jaap Goedemoed.',
};

export default function PorcupineArtworksPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/2022/03/Porcupine-I-5-March-2021-finale-werk-2048x2039.jpg')] bg-no-repeat bg-cover blur-xl"></div>
          </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">The Making of Two Porcupine Artworks</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Porcupine Boogie Woogie I, 113×113 cm (2020-2021) &amp; Porcupine Boogie Woogie II, 163×163 cm (2021-2022)
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="container-narrow py-12">
        <div className="prose prose-invert mx-auto">
          <p>
            In the interview during 2015, also available on this website, I happened to criticise Jasper Johns, the famous American artist, because I felt that in his own works with dashes, he had imitated ethnographic artistic expressions by the Mbuti, a pygmy people from the Ituri region of north-eastern Congo, with far less sophistication and not half as much poetry. The Mbuti tend to create mostly abstract representations on tree bark, consisting of rhythmic dashes, arranged distinctively. Fortunately, this does not stop large numbers visiting my website, predominantly from the USA. The USA generates about 15,000 viewings, more than a third of all visitors.
          </p>
          
          <p>
            But at the time I had no idea that after around six to seven years I would be creating two artworks in which dashes were to be a significant component. Or rather, dashes in the form of three-dimensional quills, so not a flat line on paper, but something quite physical and tangible, which makes a huge difference. You cannot accuse my style of flat faux art which I accredited to Jasper John: I am not aware of any works of art by other artists that contain arrangements of porcupine quills as applied to my applications. In fact, Marian Bijlenga used porcupine quills to create very loose, graceful compositions, in contrast to my rather densely packed quills and tight structures.
          </p>

          <div className="relative aspect-square my-8 shadow-lg">
            <Image 
              src="/2022/03/Porcupine-I-17-Nov-2020.jpg"
              alt="The making of the first porcupine artwork"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                The making of the first porcupine artwork. Started in May 2020, on 8 November 2020 the full surface of canvas was covered. However, the linear design will be changed hereafter, including some holes for allowing inclusion of ammonite fossils.
              </p>
            </div>
          </div>
          
          <p>
            My works were a rather delayed outcome of a visit to Tuscany with Frank Lodeizen in the summer of 1994. At the time I had not yet realized that due to his lifestyle and alcohol abuse, Frank was virtually "spent" – he was then 63 – and no longer capable of producing new works of art. During that holiday I happened to see some old Tuscan tax papers, which were about to be burnt on a pile of rubbish in a backyard in the village of Montescudaio. Frank was there too, but I remember he was not particularly interested in the old papers. Those papers enabled me to make the grand piece of work Tuscan Tiling I 1994 – 165 x 165 cm by the end of 1994, the very year I found them.
          </p>

          <p>
            After many years, I happened to be back in Montescudaio, where my family and I spent many holidays between 2005 and 2017. And during those holidays, I collected many other materials, such as pine barks (see my work Composition I 2014 – 100 x 100 cm), sea balls lying on Tuscany beaches, which are the remains of Posidonia Oceanica, underwater seagrass moulded into balls by the movement of water on the sands (see my large work of sea balls 2017), a large amount of scrap iron and old driftwood (leading to the medium-sized works Composition 2018 – 100 x 100 cm and Composition 2019 – 100 x 100 cm), and porcupine quills, leading to the works in 2021 and 2022, the subject of my story.
          </p>
        </div>
      </div>
      
      {/* Creation Process - First Artwork */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">Porcupine Boogie Woogie I (2020-2021)</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              In everything I did, I was the total opposite of Frank Lodeizen, whose work I greatly admired. His works of art were made during a short period of time, possibly within a couple of hours, and their format could not be too big, preferably 35 x 45 cm, no bigger than 60 x 80 cm. Quite contrary to my approach: the large works take many months, the first porcupine-quill work took 6 months and the second one, in spite of all my acquired experience and skills, took 9 months. Again, I dare claim that the quality of my larger works equals that of the smaller ones. But large formats would not allow me to work spontaneously, it would not work. A fair amount of preparation and planning is required.
            </p>
            
            <p>
              I had picked up the idea to gather natural materials or objects in my immediate surroundings from Frank Lodeizen. This is not unusual among artists.
            </p>
            
            <p>
              First, I made use of the old tax papers, next the pieces of pine bark, then the sea balls and scrap iron and old driftwood, and finally the porcupine quills, as you can see. These porcupine quills were sorted and arranged on kitchen-roll paper on trays in my studio where they were left for a long time. I'm afraid, they had to wait as many as eight years before their artist came into action. They were found in the forest of Montescudaio in the summer of 2012 by the entrance of a burrow – most likely of the porcupine. It was not until yours truly moved to the new studio that I was suddenly inspired to do something with the quills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-I-15-January-2021bewerkt-2048x2048.jpg"
                  alt="On 15 January 2021 all blocks were fixed to the canvas"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    On 15 January 2021 all blocks were fixed to the canvas. Note that 'upside' and 'downside' have been reversed.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-I-5-March-2021-finale-werk-2048x2039.jpg"
                  alt="Final appearance with blue box frame"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    On 5 March 2020 the artwork received its final appearance with the blue box frame. The final size is 113x113cm.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              There were about 240 quills, and some of them could not be used. The added quills, ordered on-line, meant that I eventually had about 300 quills at my disposal. First, I made blocks with 5 quills each of balsa wood, i.e. the points of the quills were inserted into 5 x 1 x 1 cm pieces of balsa wood on either side, and the rectangular blocks were arranged linearly. This method gave the work its strictly linearly arranged aspect. However, this was not enough to fill the entire surface of the 100 x 100 cm canvas. I therefore decided to complement the black and white quills with orange and white artificial quills. Bamboo sticks – wooden satay skewers or plant stakes, depending on the length needed – were wrapped in a linen tape and painted, with some added variation in the designs like the porcupine quills. When finished, the orange colour looked rather dominant and therefore I added a different colour, a very delicate moss green, to provide some counterbalance. When all the boxes were filled, it looked a bit boring. Several gaps in this arrangement would give it more liveliness. The smaller gaps were filled with the sea balls I had been experimenting with.
            </p>
            
            <p>
              Chance always plays a part when creating works of art. Just at the right time, I came across beautiful ammonites in Stenelux, Sjoerd and Carla Mulder's shop in Amsterdam. The earthy colours of the ammonites really match the other colours. And, of course, the symbolic meaning fits in well, too: the fossil as an object that has managed to conquer time, and the spiral shape as a symbol and a spin off of the Golden Ratio, a result of perfect mathematics as applied by nature. It required three larger gaps, which led to major modifications of the acquired arrangement at that point. However, the increased gaps rendered the composition more exciting.
            </p>
            
            <p>
              The work is now well on its way, and yet the white pattern of the balsa slats I found rather boring. You may have noticed that my principles are quite different to Jan Schoonhoven's; he would have simply painted all the boxes white. At the most recent exhibition at Kunst RAI (Art in the RAI exhibition centre in Amsterdam), we saw many of Jan Schoonhoven's followers: loads of artworks with boxes and squares, all painted glossy white, all lit up with spotlights to create shadows. Originality is not given to all artists, as we have already seen in Jasper Johns' work. By the way, Jan Schoonhoven junior has now appeared on the scene. He makes all kinds of small wieldy, white reliefs, which are inexpensive compared to those of Schoonhoven senior, who has long since passed away.
            </p>
            
            <p>
              While Schoonhoven is all about the play of light and shadow created by neatly arranged boxes, as if, as a matter of irony, he wanted to show that the industrial age can also produce something beautiful, the boxes in my work are filled with objects that are anything but industrial. Schoonhoven's works are an ode to regularity, whereas mine are an ode to irregularity and to natural and biological variety and richness. And of course, it is quite ironic that my variety of coloured quills clearly loses out compared to the variety of porcupine quills. In my second work the difference is even more pronounced. Of course, I may have done this deliberately, because I want to emphasise the beauty of the undefined creator's work in nature.
            </p>
            
            <p>
              Schoonhoven could produce his reliefs together with his wife in the small kitchen of their house in Delft – after he had finished his shifts as a postie –, whereas the creation of my work would be impossible in a small kitchen.
            </p>
            
            <p>
              The final step looks easy, i.e. the application of coloured dashes on the white slatted pattern. I felt that the work looked overly horizontal. After much experimentation, I discovered that vertical lines in bold colours, together with lightly coloured horizontal lines, could counteract this horizontal aspect. I was quite surprised that I needed so many experiments to find out. It strikes me how we always seem to struggle to visualise the outcome, how difficult it is to think ahead and that we always need to resort to this kind of experimentation.
            </p>
            
            <p>
              But of course, the beautiful box frame with its pale light blue on the inside is the finite step. The box frame in my current work has virtually become part and parcel of the artwork itself. Adriaan van Dijk was my neighbour in De Bilt, my place of birth. He has made my box frames with great skill. At the time we did not have much contact, because when you are a child a slight age difference is a major barrier to becoming friends. The discussions I have with him about colour schemes have become a very pleasing final step in the creation of the artwork, and I always listen very carefully to Adriaan's advice. Regarding the large piece of work with the sea balls he advised me to keep the box frame plain and white, so that the pentagonal pattern and the ochre-coloured sea balls would attract all the attention instead of the box frame. Well spotted!
            </p>
          </div>
        </div>
      </div>
      
      {/* Creation Process - Second Artwork */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">Porcupine Boogie Woogie II (2021-2022)</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              This first work of art was meant to be the final one. After more than 6 months of work, it had been enough. Yet again, it was pure chance when my search on the internet for porcupine quills led to an offer of 500 porcupine quills from the taxidermy shop in Nijmegen. Emma van Grinsven was very helpful on this occasion. The quills, by the way, belonged to deceased porcupines in zoos.
            </p>
            
            <div className="relative aspect-video my-8 shadow-lg">
              <Image 
                src="/2022/03/Porcupine-II-May-2021-500-pennen-1-2048x1371.jpg"
                alt="500 porcupine quills arranged by pattern"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                  May 2021 – 500 porcupine quills were obtained from a taxodermy shop in Nijmegen. The quills were arranged according to their quill pattern.
                </p>
              </div>
            </div>
            
            <p>
              While making the first work I had to figure out many things, and repeatedly it crossed my mind that "next time I must do this differently!" Those 500 quills gave me an unexpected opportunity to adopt another approach. And the idea was so clear in my mind that elaborate preparatory sketch designs were no longer necessary.
            </p>
            
            <p>
              My first modification was not to arrange quills in linear blocks, but in rectangular blocks. This would help the variation in the quill pattern stand out more. From a technical perspective it was not at all easy to make larger blocks – sometimes with up to 30 quills: not only the black and white quill pattern varies, but also the length of quills, their thickness, and shape, especially their points. Consequently, I found it difficult at first to obtain good rectangles. If you look closely, you will see one skewed slat; the tension of unequal quills in the block of quills above caused the rectangle to be stretched. I would occasionally need to improvise when a quill was just that little bit shorter than the other quills. The formation of the blocks was different, too: they were now surrounded by 4 slats.
            </p>
            
            <p>
              Once again, the porcupine quills were followed by coloured quills. One of my principles is that two boxes in the same colour should not be side by side. We want to keep it lively. This meant that orange and green were not enough, it needed an additional third colour: light purple was chosen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Afbeeldingen-voor-The-Making-of-two-porcupine-artworks-3-2046x2048.jpg"
                  alt="Quill boxes not yet fixed to canvas"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Stage on 11 July 2021. The quill boxes are still not fixed yet at the canvas. Because of tensions not all blocks are rectangular. This was corrected as much as possible during fixation to the canvas.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Afbeeldingen-voor-The-Making-of-two-porcupine-artworks-4.jpg"
                  alt="Background surfaces preparation"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Stage on 9 August 2021. The background surfaces of the future boxes for the colored quills were covered with acrylic paint mixed with sand. The blue squares are the future boxes for the sea balls or other objects.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              The new work was made of slightly bigger balsa slats, 12 x 12 mm. The larger work presents impressive amounts of material: over 70 slats of 1 meter in length were needed and I had to use 68 rolls of linen tape for the coloured quills (which I did not count), in total 187 meter! Balsa wood was sometimes difficult to come by: it seems that it is often used in the blades of windmills and in the furnishing of luxury vessels. Fortunately, I was given a tip that there was plenty of balsa wood available from Peter van Ginkel's shop in Arts and Crafts supplies.
            </p>
            
            <p>
              The blocks of porcupine quills were arranged directly on the canvas, and they were also secured immediately with acrylic paste because some of the rectangles were under tension as I explained earlier, which made it necessary to fasten them down. The coloured quills could of course be made according to the customary method, i.e. a slat at either end. If one of these slats shares a side with the blocks of porcupine quills, then the coloured quills should not be on the same level as the blocks of porcupine quills. Technically this is too complicated. Instead, they were moved up one level. The whole work consists of 2 layers of slats, so the dividing partitions are 24 mm high. It explains why the coloured quill boxes are on two levels in this work.
            </p>
            
            <p>
              I previously mentioned that chance always plays a major part when making these kinds of works. It's exactly what makes working on this kind of artwork so much fun. I had no clear idea what either work would look like, wich of course is not made any easier if chance turns out to play a major part.
            </p>
            
            <p>
              In the layout of the work, I still had eleven open boxes. At the time I happened to be in the Zuiderziel shop in Roelof Hartstraat, Amsterdam, owned by Paula van der Heijdt, and I spotted some ethnographic-looking masks, each with an extremely individual patina and an individual facial expression with lighter and darker spots. Each mask, or each ethnographic male, seems to have its own personality. The masks fitted like a glove in the remaining boxes. I am so superstitious that I invariably think that it was not a matter of chance. I'd rather think it was predestined. First there were six masks and a little later – chance! – I was supplied with an additional 5 masks made by the same person. When this happens, I usually tell myself: apparently this had to be, this is intervention by higher powers! A great title had already crossed my mind: Eleven ethnographic guys got lost in a modern artwork!
            </p>
            
            <p>
              However, not long after, I decided on a mutation: I could not resist the temptation of an even bigger ammonite which I saw in Stenelux. Such a large ammonite has such a powerful effect, it simply had to be part of the artefact, just like in the first work. Consequently, I needed to move one mask out of the centre. This little mask, I felt, did not emanate much personality.
            </p>
          </div>
        </div>
      </div>
      
      {/* Final Stages and Reflections */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">Final Stages and Reflections</h2>
          
          <div className="prose prose-invert mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-II-6-December-2021-2048x2048.jpg"
                  alt="Work in progress with colored boxes"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Stage on 2 September 2021. Various boxes are filled with the artificial colored quills. It took 3 weeks for this small part of the surface.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-II-23-December-2021-2048x2048.jpg"
                  alt="Almost complete artwork stage"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Stage of the work on 6 December 2021. It took 7 months to fill the larger boxes. From the original 11 ethnographic masks one mask in the centre was replaced by a large ammonite fossil.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              I chose the titles Porcupine Boogie Woogie I – 2021 and Porcupine Boogie Woogie II – 2022 and while they are nice and short, they are also a perfect description – they are spot on. It was not until Adriaan came to the studio to fit the frame that I first saw the large work vertically, as I had only worked on it horizontally. Now and then I climbed up a stepladder to have a good view of the work from above, but it's different, you don't clearly see the depth of the boxes.
            </p>
            
            <p>
              And even though I am the maker, and I could have guessed this might be the case, I was still impressed. But what causes this? I think it relates to the large structure, the depth of the boxes. Of course Boogie Woogie will remind you of Mondrian. Victory Boogie Woogie was his final – and unfinished – work, his swan song. Naturally, I don't want this to be my final piece. But Victory Boogie Woogie was a significant final step for Mondrian, a breaking point compared to his previous oeuvre. In my early days, in the 1980s, I devoted several works to Mondrian. At the time I was deeply impressed by the man and his work. That's why I feel honoured to be able to nick part of a title used by him, which is my way of showing him respect. My work is the total opposite of Mondrian's work; it could not be more 3D! This 3D-development has been apparent since the large sea-balls artwork with the pentagonal boxes in 2017. That work was maybe even more radical than this work. However, I feel this work is richer from a cultural perspective; there are more interactive components and filling those large blocks with porcupine quills has also been a rather radical approach. Due to the biological variation in quill dimensions, I was extremely challenged, and it took me four months to make the porcupine quill blocks, which requires loads of patience, I assure you! Frank Lodeizen wouldn't have managed without a doubt!
            </p>
            
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src="/2022/03/Composition-2022-Procupine-Boogie-Woogie-II-scaled.jpg"
                alt="The completed artwork"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                  The final stage on 28 January 2022. After almost 9 months the artwork is finally finished. The final size is 163x163cm.
                </p>
              </div>
            </div>
            
            <p>
              Here is another thought: while creating my previous works I had felt that the work would never be surpassed by myself. That is what I thought about the great Tuscan work of art in 1994, with the large mosaic made from the 1997 manuscripts, the large abstract work in 1999 consisting of one cut-out canvas and placed on a second canvas – I kept thinking, I will not be able to surpass this. And so it was for quite a while, until the sea-balls artwork with its 3D-pentagonal boxes from 2017 presented itself. It was quite radical, and again I thought, I won't be able to top that. Until these two Porcupine Boogie Woogie artworks appeared. They are definite equal if not more. It makes me hopeful that in my remaining years the accumulation of experience and wealth of images in my mind will outweigh a decrease in physical strength and physical decline.
            </p>
            
            <p>
              If I may put it this way, these two works contain a lot of my DNA; all my obsessions such as creating structures and breaking away from the flat, my collection of objects, the pursuit of timelessness, and the nurture of beauty are incorporated in these works. The works are in line with any previous works I made. The second work is slightly more exuberant than the first one. All my experiences in making artworks since 1990 are incorporated in these works. I think so much of my DNA is in these works that I don't dare to think about selling – or about selling prices – disposing of the works would feel like an amputation.
            </p>
            
            <p>
              This is the story of the two Porcupine Boogie Woogie artworks.
            </p>
            
            <p className="text-right italic">
              Translated from dutch by Rosemary Mitchell-Schuitevoerder.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/artworks" className="btn">
              Return to Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

