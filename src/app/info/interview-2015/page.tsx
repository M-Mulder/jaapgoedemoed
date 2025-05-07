import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Ethnographic Influences in My Work | Jaap Goedemoed',
  description: 'An interview with Jaap Goedemoed from 2015 discussing the ethnographic influences in his artwork, coming through Paul Klee and Max Ernst.',
};

export default function InterviewPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2018/12/The-artist-in-front-of-some-of-his-artworks-and-ethnographic-items-from-New-Guinea-in-his-home-in-Amsterdam-2015-697x1024.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">"Ethnographic influences in my work came through Paul Klee and Max Ernst"</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            An interview with Jaap Goedemoed in 2015
          </p>
        </div>
      </div>
      
      {/* Interview Introduction Section */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/5">
              <div className="relative shadow-md border border-border rounded overflow-hidden">
                <Image 
                  src="/2018/12/The-artist-in-front-of-some-of-his-artworks-and-ethnographic-items-from-New-Guinea-in-his-home-in-Amsterdam-2015-697x1024.jpg"
                  alt="The artist in front of some of his artworks and ethnographic items from New Guinea in his home in Amsterdam"
                  width={350}
                  height={500}
                  className="object-cover mx-auto"
                />
              </div>
              <p className="text-sm text-text-muted mt-2 text-center">
                The artist in front of some of his artworks and ethnographic items from New Guinea in his home in Amsterdam
              </p>
            </div>
            
            <div className="lg:w-3/5">
              <h2 className="text-2xl font-serif mb-4 text-text-accent">Introduction</h2>
              
              <div className="space-y-4 text-text">
                <p>
                  Jaap Goedemoed talks about the relationship between his artworks and ethnographic art. 
                  He began to paint in 1982 and after four years he started to collect ethnographic art. 
                  Four years later ethnographic influence became apparent in his work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interview Content */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <h2>The Interview</h2>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              How did you come to take up art?
            </p>
            
            <p>
              <span className="font-medium">Jaap Goedemoed:</span> I did not receive a formal art education. I had experienced different forms of art at high school where I discovered techniques such as etching and screen printing. At the time pharmaceutical studies were demanding and long, and did not offer much opportunity to produce art, but after completing my studies in 1982, I had more time and my first more serious paintings emerged. My chemical expertise facilitated my mastery of painting in oil (oil-based) and acrylic (water-based). My contacts with other artists such as Frank Lodeizen, George Degenhart and Theo Niermeijer helped me acquire additional technical skills. Spells of unemployment due to the bankruptcy of biomedical firms meant that I had some long stretches of painting. Consequently, I produced many large and labor-intensive artworks in 1996 and 1997.
            </p>
          </div>
          
          <div className="float-right ml-6 mb-8 mt-2 max-w-md">
            <div className="mb-2">
              <Image 
                src="/2018/12/Changing-tiling-on-a-wooden-plank-1990-60-x-200-cm-768x960.png"
                alt="Changing tiling on a wooden plank 1990, 60 x 200 cm"
                width={400}
                height={130}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fig. 1 - Changing tiling on a wooden plank 1990, 60 x 200 cm
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              What triggered your interest in ethnographic art?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> It began with my interest in modern art. Most classical modern artists such as Picasso, Matisse, Klee and Ernst were interested in ethnographic art and they kept ethnographic collections.
            </p>
            
            <p>
              I was very impressed by the catalogue of Primitivism in 20th Century Art [Lit.1] that was published to coincide with William Rubin's famous exhibition in the Museum of Modern Art (MoMA) in New York. My interest in ethnographic art was thus heightened indirectly, and it so happened that there appeared to be a good supply of ethnographic art in Amsterdam, where I live. Obviously, the masters of modern art in the early 20th century were beyond my financial scope, but ethnographic art was still within my means. Initially, I bought pieces ad hoc, I did not yet have any clear preference. Later, I preferred the more abstracted ethnographic styles, including the beautiful Kuba Cloth Shoowa Kasai Velvet (rectangular raffia palm fiber embroidery with geometric patterns) and dance skirts, and Asmat and Kamoro (Mimika) shields. Like other artists who collect arts, I am particularly interested in design and expression in ethnographic art; I am not attracted to pieces that may have been certified as authentic but are badly cut. A Salampasu woodcut in my collection was pictured in an earlier TK&C issue (publication by society of tribal art & culture): it may not be very old, but it was carved beautifully. I regard it as a contemporary piece of art.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              How has ethnographic art influenced your own artworks?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> From 1986, I began to collect much ethnographic art, and every week I would have a drink with collectors of ethnographic art in Ger Lambregt's Rarekiek gallery on Prinsengracht in Amsterdam. Around 1990, there was a marked change in my works: up to then they had been mainly spatial and figurative, and rather traditional. Despite my experiments with tape and relief, my work had a strong narrative.
            </p>
            
            <p>
              Since 1990, my works have acquired better balanced compositions on a flat surface, with frequent use of patterns and symbols; they no longer tell an unambiguous story. Others say my work has a strong ethnographic aura; the comprehensive photo of an interior accompanying this feature does indeed demonstrate that my work is in harmony with Asmat and Kamoro (Mimika) ethnographic art.
            </p>
          </div>
          
          <div className="float-right ml-6 mb-6 max-w-xs">
            <div className="mb-2">
              <Image 
                src="/2018/12/Changing-pattern-with-opening-I-1990-90-x-95-cm-768x729.jpg"
                alt="Changing pattern with opening I 1990, 90 x 95 cm"
                width={280}
                height={266}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fig. 2 - Changing pattern with opening I 1990, 90 x 95 cm
            </p>
          </div>
          
          <p>
            Changing tiling on a wooden plank 60x200cm (Fig. 1) may have an Escher-like motif (metamorphosis), but its execution has brought out ethnographic influences, such as the accentuated wood texture. Changing pattern with opening I 1990, 90x95cm (Fig. 2) is another artwork from 1990 and was used on the cover of my thesis. This work is undeniably ethnographic, inspired by motifs on a Ngeende dance skirt from the Kuba region. It has a distinct composition of a few lines with subtle color transitions between them. The design on a shoowa was increasingly distorted in a work from 1990: Changing pattern with relief I 1990, 100x100cm (Fig.3). After this, the influence of ethnographic art as a source of inspiration for shapes and patterns was less direct. However, several basic ethnographic influences remained: the use of various characters (letters) in all kinds of shapes, the use of repetitions, and the color scheme of mostly soft earthy colors. After 1994, I also used the so-called acrylic/gum arabic rinsing technique which means that acrylic color surfaces do not look new or homogeneous, but rather "worn" or "marked", suggesting that they have aged, like color surfaces in ethnographic objects.
          </p>
          
          <div className="float-left mr-6 mb-6 max-w-xs">
            <div className="mb-2">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Changing pattern with relief I 1990, 100 x 100 cm.jpg"
                alt="Changing pattern with relief I 1990, 100 x 100 cm"
                width={280}
                height={280}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fig. 3 - Changing pattern with relief I 1990, 100 x 100 cm
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              Could you explain the acrylic/gum arabic rinsing technique in more detail?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> Once acrylic paint has been applied and is dry, it can no longer be rinsed off the canvas. However, it is possible if you first mix the acrylic paint with gum arabic.
            </p>
            
            <p>
              After drying, the acrylic paint is rinsed off with water. If too much water is used, all will be washed off. If little water is used, it will leave more erratic acrylic remnants on the canvas. If you do not rinse at all, the acrylic/gum mixture will crackle, which also gives beautiful effects. A layer of varnish is required to seal and "preserve" the artwork. In many of my works I opted for the rinsed version, in others for the crystalline (crackle) version, and in some of my works both techniques were applied. I learnt from Frank Lodeizen that the "Batik" technique first requires the application of gum around the contours of the image. It is then left to dry before applying acrylic paint over the entire surface. The uncovered sections will acquire a fixed acrylic color without being rinsed off. Fig. 4, for example, shows an ancient script produced with gum arabic/acrylic, which was then wrapped in wet cloths. The result is reminiscent of an archaic manuscript.
            </p>
          </div>
          
<div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="max-w-xl mx-auto">
              <div className="mb-2">
                <Image 
                  src="/Old stock paper Artworks 2005 - 20/Les Tramways katerino 2013, 40 x 50 cm.jpg"
                  alt="Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm"
                  width={550}
                  height={688}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-sm text-text-muted text-center">
                Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm
              </p>
            </div>
            
            <div>
              <p className="text-sm mb-4">
                Old stock paper certificates from 1897 on canvas, acrylic with gum Arabic, bark pieces off an Italian pine tree, collected in Montescudaio, Tuscany.
              </p>
              <p className="text-sm">
                The red plane division in the center is based on the chips of Pinus bark I found. Other shapes of bark were used around the center pane. The red plane division looks rather 'ethnographic', although it was not a conscious attempt. The bark pieces in the outer part seem to lead a life of their own, as if they are circling round the inner part. In the series of artworks consisting of old stock share certificates, the outer part was usually intended as the decorative finish to the artwork, but in both this work and the work above, the outer parts seem to be competing with the inner parts. There aren't any real connections with ethnographic art, and yet this work has an ethnographic aura due to the color scheme, the wooden bark pieces and the shapes.
                This work shows how new shapes emerge in addition to the original shapes if you focus on the interspaces. Consciously or subconsciously, these 'residual shapes' contribute to our appreciation of the work. We see the same in many Oceanian shields.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              Did you lose any of your ethnographic inspiration after these examples from 1990?
            </p>
          </div>
          
          <div className="float-right ml-6 mb-6 max-w-xs">
            <div className="mb-2">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Ancient hand writing 1997, 42 x 30 cm.png"
                alt="Ancient hand writing 1997, 42 x 30 cm"
                width={240}
                height={320}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted">
              Fig. 4 – Ancient hand-writing 1997, 42 x 30 cm. Acryl/Arabic gum / modeling paste on carton.<br/>
              The irregularity of subtracting the acryl perfectly fits to this ancient handwriting. After some research performed after 17 years of making this artwork, it appears that that this word text is part of an old Samaritan handwriting from the 13th century BC.
            </p>
          </div>
          
          <p>
            <span className="font-medium">JG:</span> I don't think so. After my first encounter, my enthusiasm for ethnographic art was obviously at a peak, as was my tendency to create inspired applications. However, there were also other influences, such as computer designed plane divisions, regular polyhedra, especially convex pentagons which form isohedral tilings, patterns that our brain cannot produce. They were of interest to Douglas R. Hofstadter, known for his book Gödel-Escher-Bach: An Eternal Golden Braid [Lit.2]. You will find one such basic pattern in many of my works.
          </p>
          
          <p>
            Other influences are the beautiful patterns in nature, such as the wonderful pigmentation patterns of tropical seashells, for example Oliva porphyria L. These patterns are described by the researcher Hans Meinhardt [Lit.3]. It is interesting that patterns such as those of tropical seashells are not part of the ethnographic cultural expressions of indigenous Oceanic peoples. Apparently, Westerners (see Fig. 5) see them differently than indigenous people, and Oceanic inhabitants are less inclined to be inspired by beautiful natural designs, although we might have expected otherwise. The wealth of well-known and unknown manuscripts from ancient cultures have been an additional source of inspiration, and of course other artists' works can also be influential, at least if they also have an 'ethnographic feel'.
          </p>
          
          <div className="float-left mr-6 mb-6 max-w-xs">
            <div className="mb-2">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Division of the plane no. II 1997, 58 x 42 cm.png"
                alt="Division of the plane no. II 1997, 58 x 42 cm"
                width={240}
                height={320}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted">
              Fig. 5 – Division of the plane no. II 1997, 58 x 42 cm. Acryl/Arabic gum on paper.<br/>
              The subtraction treatment with wet textiles adds value to the surprising patterns of the black lines and smaller red patterns.
            </p>
          </div>
          
          <p>
            It may not be surprising that I have collected quite a lot of Frank Lodeizen's works. His abstract works reminded me very much of ethnographic compositions. When he came to my house and saw my Kuba canvases and other ethnographic work, he was very surprised. He was clearly unaware. It was quite interesting. It means that he probably acquired his style, which is now considered 'ethnographic', by closely observing and absorbing Klee's and Miro's works and those of similar artists. He didn't strike me as somebody who had archives of artistic patterns and motifs, because his art must be 'spontaneous'. I think that the influence of ethnographic shapes on artists after 1945 has been much greater than many would think possible: the secondary influence should not be underestimated, although not all artists are aware of the origin of their style.
          </p>
          
          <p>
            Incidentally, many of my patterns are also my own designs, often created with a pencil and a sketchpad during times of relaxation when on holiday, and through shapes that presented themselves in my surroundings.
          </p>
          
          <p>
            Furthermore, my most recent work (shown in the opening photo with the artist), 100x100cm was created between September and December 2014. Once again it is closely related to Asmat shields: I used natural material (bark pieces that had fallen off Pinus Pinacea trees in Tuscany), an almost identical simple color scheme (white-black-brown to ocher, with an additional orange red hue in my work), and with a strong relief. Of course, my work is completely abstract, whereas Asmat shields are about stylized symbolic representations. I think the beautiful Mimika shield next to it should however be considered as an entirely abstract art. Coincidence arising from the irregular shapes of bark pieces is important in my work. In Asmat patterns coincidence hardly exists: their patterns are passed on from generation to generation. It would be interesting to see how Asmat and Mimika woodcutters would respond to my work.
          </p>
          
<div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="max-w-xl mx-auto">
              <div className="mb-2">
                <Image 
                  src="/Old stock paper Artworks 2005 - 20/Les Tramways de Kiew 2013, 40 x 50 cm.jpg"
                  alt="Les Tramways de Kiew 2013, 40 x 50 cm"
                  width={550}
                  height={688}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-sm text-text-muted text-center">
                Les Tramways de Kiew 2013, 40 x 50 cm
              </p>
            </div>
            
            <div>
              <p className="text-sm mb-4">
                Old stock paper certificates from 1905 on canvas, acrylic with gum arabic.
              </p>
              <p className="text-sm">
                This is an example of recent work with many symbols and signs, and much repetition. In Africa and Oceania repetition is standard in any form of art, such as music, stories, visual arts, dance (with masks). The ordering of the symbols and signs shows an irregular regularity. Symmetrical, but not quite: it is a little trick applied by many indigenous artists in Oceania and Africa. They know that too much regularity is predictable and therefore boring.
              </p>
            </div>
          </div>
          
          <p>
            Jaap: "I still remember the Asmat shield in the Volkenkundig (ethnological) Museum in Rotterdam (now called Wereldmuseum – world museum) that contained the imprint of a Western boot having become part of traditional Asmat patterns. The designer clearly regarded the imprint as a contemporary and interesting design. Here you see a similar process: I happened to find a 3D 'KIDS' label which was a source of inspiration, it needed a bit of manipulation. Look, doesn't it remind you of an Asmat shield pattern, although it was not intentional."
          </p>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              Why did you choose to have those two books in the opening photo?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> I recently read Carl Hoffman's latest biography Savage Harvest, and it made a deep impression on me. Michael Rockefeller, a young anthropologist, was very young when he investigated the cultural expressions of authentic indigenous peoples with a passion. He was probably a few miles off the coast of New Guinea when he hit seriously bad weather (in November 1961) in a rickety catamaran that was not seaworthy. His boat capsized. After strapping an empty petrol can to his torso, Michael decided to swim to the distant shore many miles away, while his Dutch escort was left with the capsized catamaran. It was extremely bad luck that Michael landed on the territory of an Asmat village. The people were no longer 'allowed' to take revenge after a 'headhunting' spree by a neighboring village. And not only that, but they had lost five tribal members during 'corrective' action carried out by a Dutch patrol. And then this 'white man' (whom they probably already knew from his previous visits to collect objects) suddenly appeared from the sea like Neptune, all alone and without any guards, exhausted after having swum 18 hours. It so happened that a group of Asmat warriors from the village of Otsjanep were having a rest on the beach. The Asmat warriors probably pierced Michael with a spear the moment he set foot on the beach, his head was severed from his torso and roasted on a fire, the contents were consumed, 'sucked off a sago palm leaf'. [Lit.5] The young Rockefeller story is so tragic, he who was so eager to come up with something special and show it to his domineering father. And it looked like he had found it on his expeditions to the last indigenous peoples on our planet. It is described in "Primitive Art" and demonstrated in his collection of ethnographic art for the newly opened Museum of Primitive Art in New York. It is amazing how he managed to gather such a large collection on his own when he was only 23 years old [exhibited in the Metropolitan Museum of Art in New York]. The descriptions in his book are quite revealing when he relates how he purchased some very large and impressive Bis poles for next to nothing in the very village of Otsjanep. Someone who can buy Bis poles must be very powerful in the eyes of the Asmat, and therefore, from an Asmat perspective, the consumption of Michael's life forces was seen as compensation for previous Asmat losses suffered during action carried out by the Dutch patrol.
            </p>
            
            <p>
              The book also explains the reasons why Dutch administrators and mission members were keen to present Michael Rockefeller's death as a tragic drowning incident, and not as an expression of cannibalism: The Netherlands was under great international pressure to renounce Western New Guinea in lieu of Indonesia and it sought support from America (which made no difference). If the outside world had heard that there was still headhunting and cannibalism, it would not give a good impression of the Dutch administration in the region. And the Rockefeller family was an influential family in the US, not to be ignored. There is evidence that the Dutch administrators and mission members had been made aware of Michael Rockefeller's true tragic end almost immediately, but they were ordered by a higher authority 'to keep it under wraps'. Even today, Dutch archives remain closed.
            </p>
            
            <p>
              I couldn't get the story out of my head, and I therefore also bought the travel account of Michael Rockefeller's expeditions [Lit.6], published in 1967. I noticed that this book now is a collector's item on the internet where they ask high prices. It is fascinating to know that this book contains many photographs of Otsjanep and its villagers, possibly including the warriors who killed and cannibalized Michael Rockefeller. As a kind of tribute of honor, I have displayed the book The Asmat of New Guinea: The Journal of Michael Clark Rockefeller (The Michael C. Rockefeller Expeditions 1961) in the opening photo.
            </p>
          </div>
          
          <div className="float-right ml-6 mb-6 max-w-xs">
            <div className="mb-2">
              <Image 
                src="/Interviuw/ZEB_0079.jpg"
                alt="Polychroome mask from the Ituri wood"
                width={240}
                height={320}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fig. 7 – Polychroome mask from the Ituri wood.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              You seem to be particularly attracted to abstract ethnographic art. Why?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> Considering that some indigenous peoples experienced a very different economic development to Western societies, it continues to fascinate me how their artists allowed their design and artistic expression to transition into abstraction with much greater ease than artists in our Western society. In the West, abstraction only really took off in the 20th century, meanwhile some of the previously mentioned shoowas have been part of European collections or museums for centuries (since the 17th century). They obviously did not initiate change at the time. European artists were clearly not receptive to this kind of change.
            </p>
            
            <p>
              Earlier, I mentioned the beautiful abstract pattern on the Mimika shield next to my artwork in the opening photo. Undoubtedly, we now see this ethnographic art through 'Western eyes', and the entirely abstract pattern on the Mimika shield, is more likely to strike a sensitive chord in us today than the stylized symbols of Asmat ethnographic art, although they are very beautiful too.
            </p>
          </div>
          
          <div className="float-left mr-6 mb-6 max-w-xs">
            <div className="mb-2">
              <Image 
                src="/Interviuw/de-etnografische-invloed-kwam-via-paul-klee-max-ernst-interview-met-jaap-goedemoed-8-638.png"
                alt="Mbuti tapas from the Ituri wood in Eastern Congo"
                width={240}
                height={320}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fig. 6 – Mbuti tapas from the Ituri wood in Eastern Congo.
            </p>
          </div>
          
          <div className="mb-8">
            <p>
              A Mbuti tapas loincloth [Fig.6] from the Ituri region of Congo also has abstract patterns. The plane division is beautiful with only a few repeating basic elements. I have had this tapas for about 30 years and it is most unfortunate that I did not give it the interest it deserved. In Ger Lambregts' gallery on Prinsengracht, Amsterdam, you could buy such tapas for 100 guilders (about 45 Euros or 50 dollars) in the 1980s, which is a rather small sum for such beautiful cultural heritage, which may soon be lost. I'm afraid I was not much aware of the value at the time, otherwise I would have bought more. A tapas is made by men out of a mixture of bark from six different tree varieties, the women would make the color pigments (only black in this tapas) and produce the images. The pattern will most likely be an abstracted representation of something typically found in the dense rainforest. We have many samples of transitions in Mbuti tapas from abstract, to semi-abstract and figurative. It is amazing that these semi-nomadic people can produce such sophisticated pieces of art in such a humid climate and such a harsh environment, where no other peoples other than a few of these Pygmy communities can survive. They may have been making these abstract images for hundreds of years. If Paul Klee had seen these Mbuti drawings, they would have probably inspired him greatly. The fusion of special plane divisions with some rather dreamy or poetic elements, based and built on simple lines and the importance of symbols and signs, they are all typical Klee features. It is a pity that the Mbuti tapas had not yet emerged from the Ituri woods during Klee's life because they would have had an impact on Klee and history of art. Mbuti were copied by several other artists, such as Jasper Johns and his crosshatch method, but the artworks are less refined and lack the poetry of the Mbuti and Klee, and some are imitated without much forethought and without any original artistic input. Unfortunately, it often happens to inspiring ethnographic examples: they are followed blindly. Even the masters of modern art in the early 20th century were aware of this danger and might consequently suddenly stop applying ethnographic elements in their works.
            </p>
            
            <p>
              It is quite amazing that we have these harmonious and peaceful Mbuti presentations on tapas, created by different indigenous groups in the same Ituri region, and that the fiercest polychrome masks I have ever seen came from the same region, some of which I have included in my collection. [Fig.7] They are so intimidating that my family members objected to having them on the wall in our living room.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              Have you visited Africa or other countries with ethnographic art?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> No, I'm afraid not. Due to my interest in Egyptology, I have visited Egypt, but I have not been to 'Dark Africa'. Dropping down the wide Congo River must be the most wonderful experience. I hope I will get round to it one day. Currently, the rediscovery of those three Mayan cities of Chactún, Lagunita, and Tamchen in Campeche, Yucatan, Mexico is in the news. There are some beautiful photos taken by the expedition leader, Ivan Sprajc, on the internet [Lit.4]. They reminded me of my own photos from 1989 (Fig. 8), when I visited the Mayan ruins of Bonampak and Yaxchilan in nearby Chiapas with guides. Both sites were overgrown by the jungle. Yaxchilan can only be reached by boat over the Usumacinta River and Bonampak after a long trek on foot through the Lacandon jungle. At the time both sites were guarded by Mexican soldiers to prevent looting. The constructions and sculptures in Yaxchilan and the murals in Bonampak were stunning. The expeditions to these Mayan sites in the jungle were a great experience!
            </p>
          </div>
          
          <div className="mb-10 max-w-md mx-auto">
            <div className="mb-2">
              <Image 
                src="/images/taxation-glerum-1991/1989_Nov_Chiapas_Yaxchilan_07b.jpg"
                alt="Maya ruins and at the foreground stele in Yatchilan, Mexico, december 1989"
                width={400}
                height={300}
                className="object-contain mx-auto"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fig. 8 – Maya ruins and at the foreground stele in Yatchilan, Mexico, december 1989.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              You are now 59. What else would you like to achieve in relation to your artwork?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> So far, my artistic oeuvre has developed over a period in a series of waves: 1984-1985 saw an end to figurative work and I was open to multicultural influences. Around 1990 there was a transition period to larger abstract works, and around 1997 I produced large, multicultural mosaics. They were followed by a quieter phase in which the substrate consisted of old stock paper certificates. It was a beautiful collection. This relatively quiet phase was also related to more demands on time due to work and family life. Gradually, I am finding that I have more time available to create art and I would like to produce some more larger works. I would like to apply the experiences and techniques I have acquired over the years: the acrylic/gum rinsing technique and the use of special materials such as Pinus Pinacea bark pieces and old documents. I imagine my future works will retain an 'ethnographic aura', which has become part and parcel of my being.
            </p>
          </div>
          
          <div className="flex flex-row gap-8 mb-10">
            <div className="max-w-sm">
              <div className="mb-2">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Composition 2014, 100 x 100 cm (2).jpg"
                  alt="Composition 2014, 100 x 100 cm"
                  width={350}
                  height={350}
                  className="object-contain mx-auto"
                />
              </div>
              <p className="text-sm text-text-muted text-center">
                Composition 2014, 100 x 100 cm
              </p>
            </div>
            
            <div>
              <p className="text-sm mb-4">
                3D artwork with pieces of Pinus Pinacea bark ('umbrella pine') from Tuscany.
              </p>
              <p className="text-sm">
                This time the bark pieces have a light orange brown color. One of the bright orange shapes was an original chip of bark off the Pinus tree with this kind of 'eye'. It is still possible to identify this piece by its grain structure. All the other bright orange pieces were copied and cut out of cardboard. It has created a strong sense of rhythm between the tree bark structures and the smaller shapes in bright orange. When taking photos after 11 am as sunlight falls diagonally and partly across the artwork, the artefact comes to life. The bark pieces in the sunlit part have much more depth and seem to be jumping off the flat surface, and the white background (titanium acrylic paint mixed with sand) emanates a brilliant white.
              </p>
            </div>
          </div>
          
          <h3 className="mt-16 mb-4">Postscript</h3>
          <p>
            At the time of the interview in 2015, there was much discussion about ethnographic influences that might have shaped certain artworks, including the work Changing pattern with opening I 1990, 90x95cm (Fig.2) from 1990. At the time, I was unable to illustrate this influence with an attractive sample of woven raffia from the Kuba region, and the influence was dispelled in a few words. However, 28 years after creating the artwork, I was surfing on the web and noticed this attractive sample on the site of an ethnographic art dealer in San Francisco! The connection and source of inspiration are obvious; I knew I had seen these specific shapes before.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 my-8">
            <div className="w-64">
              <div className="mb-2">
                <Image 
                  src="/2021/04/KubaNoblewoman.jpg"
                  alt="Detail of Kuba Noblewoman's Skirt, Bushoong Group, DR Congo, Early 20th century"
                  width={250}
                  height={250}
                  className="object-contain mx-auto"
                />
              </div>
              <p className="text-xs text-text-muted text-center">
                Detail of Kuba Noblewoman's Skirt, Bushoong Group, DR Congo, Early 20th century
              </p>
            </div>
            
            <div className="w-64">
              <div className="mb-2">
                <Image 
                  src="/2018/12/Changing-pattern-with-opening-I-1990-90-x-95-cm-768x729.jpg"
                  alt="Changing pattern with opening I 1990, 90 x 95 cm"
                  width={250}
                  height={250}
                  className="object-contain mx-auto"
                />
              </div>
              <p className="text-xs text-text-muted text-center">
                Changing pattern with opening I 1990, 90 x 95 cm
              </p>
            </div>
          </div>
          
          <p>
            My use of color gives my artworks quite a different character compared to the canvasses of Kuba artists, which are usually sandy colored. As I said before, there is a very direct ethnographic influence around 1990, and although we still see the same influence in larger works after 2010, which have increasingly become 3D, it is not as easy to identify the influence in a specific example compared to the example above. The artwork from 1990 was used on the cover of my thesis Polyphosphazene Drug Delivery Systems for Antitumor Treatment, 28 June 1990. I gave the artwork in the thesis the title "Drug release and polymer degradation struggles". The lines in the artwork remind many people of Keith Haring's work. However, as far as I know, Keith Haring did not produce any abstract artworks in this way.
          </p>
          
          <p className="text-sm mt-8 text-text-muted">
            Translation: Rosemary Mitchel-Schuitevoerder
          </p>
          
          <div className="mt-8 border-t border-border pt-8">
            <h4 className="text-lg font-medium mb-4">Literature References</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Primitivism in 20th Century Art, Affinity of the Tribal and the Modern, The Museum of Modern Art, New York, Edited by William Rubin, Volumes I & II, ISBN 0-87070-518-0, 1984.</li>
              <li>Metamagical Themas, Questioning for the Essence of Mind and Pattern, Douglas R. Hofstadter, Basic Books, Inc., Publishers, New York, ISBN 0-465-04540-5,1985, p. 191-212: Parquet Deformations: A Subtle, Intricate Art Form.</li>
              <li>The Algorithmic Beauty of Sea Shells, Hans Meinhardt, Springer Verlag Berlin Heidelberg New York, ISBN 3-540-57842-0, 1995.</li>
              <li>Photos: Scientists Found Three Lost Mayan Cities in the Mexican Jungle, with photos made by Ivan Sprajc, http://www.ryot.org/lost-mayan-citieschactun-lagunita-tamchen/791177.</li>
              <li>Savage Harvest – A Tale of Cannibals, Colonialism, and Michael Rockefeller's Tragic Quest for Primitive Art, Carl Hoffman, William Morrow/Harper Collins Publishers, 322 pagina's.</li>
              <li>Gerbrands, Adrian A., ed. The Asmat of New Guinea: The Journal of Michael Clark Rockefeller. New York: Museum of Primitive Art, 1967.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
