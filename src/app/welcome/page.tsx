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
          In October 2022 the website has been updated with pictures of a new pentagonal artwork and a detailed description of this artwork with pictures of intermediate stages.
        </p>
        
        <p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="flex flex-col items-center">
              <div className="relative aspect-square w-full mb-4">
                <Image 
                  src="/Figurative Artworks 1980 -1989/Egyptian scene, flat 1984, 120 x 85 cm.jpg" 
                  alt="1984 - Flat scenery" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-center text-text-muted">1</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative aspect-square w-full mb-4">
                <Image 
                  src="/Figurative Artworks 1980 -1989/Egyptian scene, with depth 1985, 125 x 90 cm.jpg" 
                  alt="1985 - Deep perspective" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-center text-text-muted">2</p>
            </div>
          </div>
          
          <p>
            The flat division of the plane is inspired by and referring to Mondrian, the impossible construction of walls to M.C. Escher, the hieroglyphics to ancient Egypt. In his free time (he was now working as a qualified pharmacist), the young Goedemoed focused on figurative works, often with a symbolic significance. At this time he also experimented with different materials, including linen tape and modeling paste.
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">Turning point</h3>
          
          <p>
            As a result of a process that started in earlier years, 1990 was perhaps a turning point in Jaap's artistic development. His work demonstrates less symbolism and the figurative themes are replaced by abstract images and strong attention to detail. These elements still define and characterize "a typical Goedemoed".
            Regarding the wooden plank (60x200cm)(3) from 1990, partially covered with linen tape, once again the influence of Escher appears: lower and upper side reveal identical structures, a development of changing patterns which return to their original shape, forming a metamorphosis. In this work ethnographic influences can be observed for the first time, e.g. emphasizing of the patina of the wood. Jaap finds much inspiration in ethnic art, which he has collected fervently since settling in Amsterdam.
          </p>
          
          <div className="my-8 flex justify-center">
            <div className="flex flex-col items-center max-w-2xl">
              <div className="relative w-full h-[400px] mb-4">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png" 
                  alt="Wooden plank (60x200cm) from 1990" 
                  width={600}
                  height={200}
                  className="mx-auto h-full w-auto"
                />
              </div>
              <p className="text-sm text-center text-text-muted">3</p>
            </div>
          </div>
          
          <p>
            The colors and geometric patterns of the dance shawls and garments of the central Kuba Kingdom in Africa are an important source of inspiration as in Changing pattern with opening I (1990) (4), which is based on a fragment of a Ngongo woman's dance shawl.
            That year, the artist used this image for the cover of his thesis. In these and later paintings, Goedemoed has been guided by shapes inspired by the human spirit, like the African patterns, and those generated by computer. For this theme, Jaap is indebted to Douglas R. Hofstadter, author of Gödel, Escher, Bach. Having a precise mind, Goedemoed is fascinated by this book and Metamagical Themas by the same author.
            This brought him to computer-generated patterns and subtle deformations and transformations. The mathematical orders and theirvariations are features of his later works.
          </p>
          
          <div className="my-8 flex justify-center">
            <div className="flex flex-col items-center max-w-2xl">
              <div className="relative w-full h-[400px] mb-4">
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg" 
                  alt="Changing pattern with opening I (1990)" 
                  width={400}
                  height={400}
                  className="mx-auto h-full w-auto"
                />
              </div>
              <p className="text-sm text-center text-text-muted">4</p>
            </div>
          </div>
          
          <p>
            During the early nineties, there was also an undeniable influence of Amsterdam artist, Frank Lodeizen.
            Jaap met the flamboyant Lodeizen while visiting one of his exhibitions and Lodeizen showed him a painting technique involving a mixture of acrylic paint and arabic gum. After drying, when the gum has crystallized, the mixture is rinsed with water which washes away some of the gum taking with it both undissolved and dissolved paint. Lodeizen calls his technique the "batik method". Jaap noticed that the final results are unpredictable and sometimes lead to quirky traces of the acrylic paint counterbalancing both the predictability of regular patterns and an excess of detail and precision.
          </p>
          
          <p>
            The artists made a joint visit to the Tuscan village of Montescudaio for three weeks during the summer of 1994. Goedemoed found old agricultural tax papers complete with seals and stamps in a garbage heap in a backyard. They can be seen, sometimes combined with the batik method, in certain works of that year, for example Tuscan tiling I (Montescudaio) (5, 15). The new technique and use of structural elements do not appear to be a problem for Jaap. In other works, he explores patterns with open (6) and closed (7) structures to which he adds used paper items: fragments of newspapers, old banknotes, Coptic healing scrolls (parchment) (8, 12), Japanese prints (9, 10), cigar boxes (11), handwritten Islamic texts, prints by other artists (11), yellowed and stained materials harmonizing well with the 'washing' gum technique.
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">Large format</h3>
          
          <p>
            During the nineties, we see a move towards his first large works, often with spatial divisions. From a distance they are compositions with a strong central focal point, movement or a harmonious whole. Close-up, we see the mathematical precision with which the small spaces are painted and combined with other materials. This development culminated in "Composition with open structure" (150 x 150 cm) (13, 16) in which the artist combines many experiences. The composition is calming without being dull. The separate elements, painted in acrylics and arabic gum, invite the viewer to come closer. And close up, this second layer is fascinating! Jaap enjoys working in these large formats. The planning and the patience necessary to work with these sizes suit him. In this period, we also see a diversity emerge from his work: many things can always be seen in Jaap's work. It may be movement or a color pattern, or possibly unexpected vistas into a second or third layer.
            A Byzantine saint (9, 10, 14) , a Japanese garden (10), a newspaper photograph (14) of a leader from the Balkan Wars. They don't intrude upon an attentive viewer but form an indispensable part of the overall image.
            These were inspiring years for the artist and his work demands to be seen. With a substantial degree of confidence, daring and ambition, during a visit to New York Goedemoed succeeded in attracting the interest of the Montague Gallery in Soho where he showed his large multi-colored mosaics at group exhibition in the fall of 1997.
          </p>
          
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
      
      <div className="border-t border-border my-12 pt-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-accent">A serious piece of art on my wall</h2>
      
        <div className="prose prose-lg max-w-none">
        <p>
          On Saturday 22 February 2020, a feature about my purchase of a first piece of art was published in My favourite item in the Dutch NRC newspaper. I submitted 680 words and some photos, but I had exceeded the word limit of 240 words for this regular feature. Despite some deletions, Gretha Pama, the editor, wrote a good article. I will post the longer version on my website and add several interesting facts about the Dutch artists Lucebert and Frank Lodeizen.
        </p>

        <p>
          Although I had the third-highest academic grade in my peer group, it took 7.5 years to complete my long uninspiring studies of pharmacy (currently it is a five-year degree course) in the northern student city of Groningen. It was a long way from Amsterdam, and rather parochial in the 1970s. After receiving my degree, I returned to the west of the country, where I hoped I would experience some cultural rejuvenation. I had found a job at a pharmaceutical company between Amsterdam and Haarlem (immediately west of Amsterdam), and I could not have wished for more attractive living quarters in Amsterdam: for one year I was the caretaker of a beautiful floor in an old historic building on the Amstel river, diagonally across from the famous theatre Carré, not far from the sluice gates in the Amstel.
        </p>

        <p>
          I had only recently taken up painting again and I was still quite a novice. I did not yet have my own style and was not quite sure of the purpose of my painting. I was rather guileless and believed that my paintings should exude a &apos;strong message&apos;: &apos;we had had enough of all that woolly art!&apos; I hung several paintings with strong messages, or should we say &apos;shocking messages,&apos; from the 1980s on the walls of my beautiful studio. At the time I did not realize that a brazen message that sticks out a mile does not necessarily support the artwork.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="flex flex-col items-center">
            <div className="relative aspect-square w-full mb-4">
              <Image 
                src="/Figurative Artworks 1980 -1989/Mondrian skies 1985, 150 x 200 cm.jpg" 
                alt="1980 Reaching out to the Lord – oil on board, 80x80cm" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">1980 Reaching out to the Lord – oil on board, 80x80cm</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative aspect-square w-full mb-4">
              <Image 
                src="/Figurative Artworks 1980 -1989/Portrait of a man No.1 1985, 50 x 90 cm.jpg" 
                alt="1980 The hungry bridegroom – oil on board 80x80cm" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">1980 The hungry bridegroom – oil on board 80x80cm</p>
          </div>
        </div>

        <p>
          Looking back, I realize that the twenty-four year old Jaap was out to shock the socks off his audience. The painting on the left shows Ernie (in the children&apos;s programme Sesame Street) who suits the action to the word in the biblical text: &quot;But Jesus called the children to Him and said, let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these (Luke 18:16). Ernie depicts the artist&apos;s rather cynical religious experience. The scene in the background was taken from ten-year old Jaap&apos;s Sunday school booklet; I was sent to Sunday school every week to learn about the Bible. Of course, this was great for my parents, because it took me off their hands for a couple of hours. Religious education did not have much effect: when I became an adolescent, I unwaveringly decided that religion was a figment of the mind, based on a human need to control the fear inherent to life. It does not offer consolation to people who are not interested in such fantasies; throughout the ages, religion has proved to be incapable of reducing worldwide acts of terror. Religion does not have a positive influence on man.
        </p>

        <p>
          The painting on the right might be perceived as even darker. It looks as if the marriage only lasted a day. Obviously, I was interested in Picasso&apos;s work at the time, although I did not yet know that Dora Maar, a fascinating artist and photographer, modelled for the &apos;weeping woman&apos;. Did you notice the woman&apos;s lock of hair draped over the edge of the painting? Just a little joke. The black ladderback chair in the right-hand corner is a version of the Hill House 1 Chair designed in 1903 by Charles Rennie Mackintosh.
        </p>

        <p>
          Younger friends, visiting me at the time, thought the works were &apos;cool&apos; or whatever they said in 1982. However, the older generation, like an older auntie of mine, was rather shocked by these paintings and wondered whether I was in my right mind. After I had produced several such paintings, I had got it out of my system and could move on. I found that after a while you tire of shocking messages, you lose interest in those works of art, they have a limited shelf life. The twenty-four year old Jaap had not yet shaken off adolescence, but in the following years his techniques and themes showed great progress. Ten years later – in 1990 – the adolescent/painter had completed his experiments, and the mature painter had acquired a personal style, a typical Jaap Goedemoed style, still apparent in my current work.
        </p>

        <p>
          After the oeuvres from the 1980s were taken down, I decided that it was time to have a serious piece of art on the walls of my new home in Amsterdam-Zuid, an upmarket quarter of the city. After all, my pharmaceutical job provided me with enough money and as a bachelor I had no expenses generally associated with family life. In 1984, I decided to have a browse in Galerie Espace on one of the canals, Keizersgracht; it was the last day of an exhibition of Lucebert&apos;s paintings.
        </p>

        <p>
          Lucebert (1924-1994) is a well-known artist in the Netherlands; initially as an innovative poet, &apos;the Emperor of the Fifties&apos;, and as a visual artist. He knew the painters of the international Cobra movement well, but he never joined the movement. Although his artwork do not fetch as much in the international art market as work by Appel, Corneille, Constant, Alechinsky, and Jorn, his paintings are nevertheless quite pricey. Lucebert had many exhibitions abroad.
        </p>

        <p>
          Many of his works in the gallery, the larger oil paintings, did not fit my budget. There was a smaller piece of art (72x82cm) on the first floor of the gallery that was not in a prominent place. It had apparently not drawn much interest as it was still for sale. Although I felt it was slightly over my budget (7,250 guilders ~ 3290 euros), art purchase arrangements at the time allowed me to pay in instalments over a period of thirty-six months which made it feasible. The assistant in the gallery who served me, looked at me in surprise, probably thinking &apos;strange for such a young person&apos; to spend so much money on art – I was a young-looking 28 year old –, or maybe she was wondering how I could make such a decision in a matter of minutes. Later I discovered that the young lady was Maia Swaanswijk, the artist&apos;s daughter (Lucebert&apos;s real name was Bertus Swaanswijk), who managed sales in the gallery.
        </p>

        <p>
          Very soon the painting &apos;Mother wins&apos; was given a permanent place in my new home, and it has not been moved for 34 years. After all those years the painting still fascinates me, and I have never regretted the hasty purchase. This piece of art really appeals to me because it not only shows the typical jagged unpredictable Lucebert forms of heads and bodies, in black and dark purple outlines, but it also has many soft pastel shades.
        </p>

        <div className="my-12 flex justify-center">
          <div className="flex flex-col items-center max-w-2xl">
            <div className="relative w-full aspect-[72/82] mb-4">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Composition with fixed center 1998, 100 x 100 cm.jpg" 
                alt="Lucebert 1984 – Mother wins, oil painting on canvas, 72x82cm" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">Lucebert 1984 – Mother wins, oil painting on canvas, 72x82cm</p>
          </div>
        </div>

        <p>
          It is this combination that makes the painting so strong and appealing to me. According to Wim Hazeu, his biographer, Lucebert was colour-blind. There are many of Lucebert&apos;s paintings I do not like: too many harsh colours on top of each other. Sometimes a painting needs lighter and softer colours for more balance to create quieter sections that bring out other parts in the artwork.
        </p>

        <p>
          I am not sure about Lucebert&apos;s colour blindness: for example, I love the colours (and the composition) of his gouaches in his beautiful poetry publication Van de maltentige losbol.
        </p>

        <p>
          The empty wall around Lucebert&apos;s work of art has changed significantly over the past thirty-four years. In the immediate years after the introduction of Lucebert&apos;s work, the wall around the painting, and the mantelpiece were filled with ethnographic objects (masks and statues mainly from Africa), predominantly collected in Amsterdam. I liked the combination of Lucebert&apos;s painting and ethnographic art, and his painting held up well among all the ethnographic busyness.
        </p>

        <p>
          Apparently Lucebert did not approve of ethnographic art, he would not buy or collect it because he did not want &apos;ethnographic art removed from its cultural context&apos;. I did not share his sentiment, my urge to collect was based on my feeling or awareness that all these beautiful cultures and their expressions are disappearing across the world and just to have several of these cultural expressions in my limited living environment gives me great comfort. Unfortunately, ethnography is no longer available in Africa and can now be seen mainly in collections and museums in the West. More than eleven years after hanging up Lucebert&apos;s painting, my wife was sharing the living quarters with me, we had children, and inevitably the ethnographic content in the living room was reduced after we moved it to our upper floors. Only Lucebert could stay, and gradually found himself in a more &apos;gentrified&apos;, much emptier living room among many interesting objects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="flex flex-col items-center">
            <div className="relative aspect-video w-full mb-4">
              <Image 
                src="/Passed Exhibitions/BaudZuid-expo-3.jpg" 
                alt="1996 Jaap's living room – The Lucebert painting surrounded by more and more ethnographic items" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">1996 Jaap&apos;s living room – The Lucebert painting surrounded by more and more ethnographic items</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative aspect-video w-full mb-4">
              <Image 
                src="/Passed Exhibitions/ExhibitionJaapG.jpg" 
                alt="2013 The family living room and the Lucebert painting amidst a reduced number of ethnographic items" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">2013 The family living room and the Lucebert painting amidst a reduced number of ethnographic items</p>
          </div>
        </div>

        <p>
          From 1990 to 1996, I collected many works by another artist well-known to Lucebert. In the early 1950s they would meet in the café frequented by the Cobra artists (Café Eijlders in Amsterdam), they became good friends and in February 1952 they travelled to Paris together. This artist was the aforementioned Frank Lodeizen, whom I will feature in more detail. Frank had not shared the same degree of success that was enjoyed by Lucebert and the Cobra artists for a variety of reasons. I got to know Frank&apos;s work well and appreciated the beauty and sensitivity of his work from the period between1986 and 1996. And because Frank had not been successful in the art market, I had been able to buy some of his beautiful paintings at very reasonable prices, including 29 unique pieces of art. Later I added 48 reproductive works (etchings, lithographs, prints, lithographs, screen prints). Coincidentally Frank Lodeizen&apos;s early works included two portraits of his friend Lucebert.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="flex flex-col items-center">
            <div className="relative aspect-square w-full mb-4">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Division of the plane no. I 1997,-55 x 57 cm.png" 
                alt="1957 Portrait of Lucebert Woodcut" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">1957 Portrait of Lucebert Woodcut</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative aspect-square w-full mb-4">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Division of the plane no. II 1997, 58 x 42 cm.png" 
                alt="1992 Portrait of Lucebert on paper 27x35cm" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">1992 Portrait of Lucebert on paper 27x35cm</p>
          </div>
        </div>

        <p>
          The portrait on the left is beautiful, consisting of just a few black lines and dots, and some coffee stains, and several touches of brown, and a little dash of blue. And although I don&apos;t know why it is there, it adds interest to the work. The portrait was created on 6 February 1992, and Lucebert had probably lost his hair due to cancer and chemotherapy. Jaap added the portrait to Frank Lodeizen&apos;s best pieces of work and soon it became a feature on my living room wall.
        </p>

        <p>
          Shortly afterwards (in October/November 1993) I bought a second Lucebert portrait made by Frank Lodeizen: a woodcut like Lucebert&apos;s portrait from 1957. I have already described how my first &apos;expensive&apos; art purchase was an oil painting by Lucebert in Gallery Espace in 1984. To me it was a miracle how I acquired two portraits by Lodeizen, one of the young Lucebert and one of the older and by then sick Lucebert. I was very grateful to have them, and the portraits were not any old portrait, I regarded them as my cultural heritage and I was aware how privileged I was to have come across these pieces of art and could even purchase them.
        </p>

        <p>
          In June 1995 I bought a third piece of art associated with the relationship between Lucebert and Frank Lodeizen. This is the work of art from 1994, Lucebert&apos;s funeral, mixed media on paper, 100x70cm. If you study it closely, you will recognise the random letters of LUCEBERT in the abstract, although the letters B and R are missing. It is a strong piece of work, and it complements the memory of Lucebert, together with the two Lucebert portraits made by Frank Lodeizen.
        </p>

        <div className="my-12 flex justify-center">
          <div className="flex flex-col items-center max-w-2xl">
            <div className="relative w-full aspect-[10/7] mb-4">
              <Image 
                src="/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg" 
                alt="1994 Lucebert's funeral, mixed media on paper, 100x70cm" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">1994 Lucebert&apos;s funeral, mixed media on paper, 100x70cm</p>
          </div>
        </div>

        <p>
          Frank Lodeizen and Lucebert were close friends, who frequently met in the early 1950s, and possibly once a year in the 1980s and 1990s. As an eleven-year old boy Frank Lodeizen managed to survive the Holocaust by escaping from the roundup of Jews at Central Station, who were waiting to be transported to Westerbork in the east of the Netherlands, a detention and transit camp. His mother and stepfather, and his sister, and many other relatives died in Sobibor, an extermination camp in Poland. Lucebert died of colon cancer in May 1994; Frank Lodeizen died in 2013. Frank attended Lucebert&apos;s funeral in Bergen (the Netherlands) on 16 May 1994. Frank was deeply moved when Lucebert died. In his collection of Tuscan letters (1994), Frank wrote the following lines dedicated to Lucebert, which show us how important Lucebert was to Frank Lodeizen.
        </p>

        <blockquote className="italic border-l-4 border-accent pl-4 my-6">
          Lucebert the unspoken human cry<br />
          invisible pillar of support<br />
          your poetry will never die<br />
          it has given us a new consciousness<br />
          floods of expression enshrouded in warmth<br />
          for whoever can feel<br />
          reality seen through the mirror in your drawing<br />
          cheerful and sombre poetry<br />
          your paintings yin and yang in harmony<br />
          light and airy but filled
        </blockquote>

        <p>
          Wim Hazeu&apos;s biography of Lucebert was published on 6 February 2018. Not long after, big headlines in all the Dutch newspapers reported the disclosure of Lucebert&apos;s letters which he had written when he was a young man living in Germany (Apollensdorf near Wittenberg, where he was employed in an ammunition factory). It appeared that the young Bertus Swaanswijk (which was his real name, and he did not change it to Lucebert until after 1945; his father&apos;s first name was Lubertus; &apos;Luce&apos; and &apos;bert&apos; both mean &apos;light&apos;) had volunteered to work in Germany in June 1943, and in his letters to his girlfriend Tiny Koppijn, the young Swaanswijk clearly expressed himself pro-Nazi; in fact, his expressions were anti-Semitic and he ended the letter with the &apos;Sieg Heil!&apos; greeting. Lucebert never referred to this aberration at any time in his life. It led to much criticism, particularly because Lucebert had always presented himself as a revolutionary, against (colonial) rulers, against evil and unfreedom, and because he took issue against many people with reactionary views and narrow-minded citizenry. Of course, Lucebert knew that this publication would be the end of his status as the front-runner of the Vijftigers, a group of experimental writers loosely connected to the Cobra artists, and of his artistic career. Many of Lucebert&apos;s fans say that Lucebert&apos;s approach and commitment to life after 1945 made up for his youthful indiscretion. Some of Lucebert&apos;s followers believe that Lucebert&apos;s image was damaged, that much of his moral authority now was lost, and that some of Lucebert&apos;s poems can now be read from two different perspectives.
        </p>

        <p>
          Lucebert had always been Frank Lodeizen&apos;s shining light, Frank Lodeizen had wanted to be like him, and play with language and words as well as paint. Because these revelations about Lucebert were not made public until 2018, Frank Lodeizen did not see his great hero fall from his pedestal.
        </p>

        <p>
          It is interesting to reconsider my purchase of works of art retrospectively: first there was my rather impulsive purchase of a relatively expensive work of art by a well-known artist (Lucebert oil painting 72x82cm, 7250 guilders (~ 3290 euros), a painting by an established artist. It was followed by many purchases of art by an artist who was less successful in the art market: 31 works of art (29 unique items) by Frank Lodeizen with a total cost of 11,642 guilders (5,200 euros) (approximately 370 guilders (on average 170 euros per work of art). In comparison, the latter were higher risk purchases of works by an artist who was not established. All in all, Frank Lodeizen&apos;s works of art have greatly influenced my life and my development as an artist. I treasure my possession of the Frank Lodeizen collection, it reflects a typical phase in my life with memories of the interactions between the artist Frank Lodeizen and me. Whereas I regard Lucebert&apos;s painting as a powerful work of art, it remains &quot;the painting on the wall&quot; without any added effect on my artistic development. I did however buy many collections of and about Lucebert&apos;s poems, and many books of and about Lucebert&apos;s paintings, which fill a bookshelf, but that&apos;s all. In retrospect, it was a blessing in disguise for my own artistic development that I then became fascinated with Frank Lodeizen&apos;s work and that I did not buy a second &apos;expensive&apos; Lucebert painting! In terms of financial investment, a second Lucebert painting would have been better, but as a &apos;human&apos; investment in myself, my choice of the &apos;unknown&apos; Frank Lodeizen artworks turned out to be the best pathway for me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="flex flex-col items-center">
            <div className="relative aspect-video w-full mb-4">
              <Image 
                src="/Passed Exhibitions/ExhibitionJaapG1.jpg" 
                alt="Exhibition view of Jaap's artwork" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">Exhibition view of Jaap's artwork</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative aspect-video w-full mb-4">
              <Image 
                src="/Passed Exhibitions/ExhibitionJaapG.jpg" 
                alt="Exhibition view in gallery" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-text-muted">Exhibition view in gallery</p>
          </div>
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
