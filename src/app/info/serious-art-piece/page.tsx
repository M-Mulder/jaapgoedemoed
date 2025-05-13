import React from 'react';
import Image from 'next/image';

// Data for the artworks mentioned in the text
const relatedArtworks = [
  {
    id: '32', // Assuming this corresponds to 'Reaching out to the Lord' based on text
    title: 'Reaching out to the Lord',
    year: 1980,
    medium: 'oil on board',
    dimensions: '80x80cm',
    imagePath: '/2021/04/Lnging-to-the-Lord-1980-oil-on-carton.jpg', // Path might need adjustment if different from placeholder
    alt: 'Artwork: Reaching out to the Lord, 1980'
  },
  {
    id: '33', // Assuming this corresponds to 'The hungry bridegroom'
    title: 'The hungry bridegroom',
    year: 1980,
    medium: 'oil on board',
    dimensions: '80x80cm',
    imagePath: '/2021/04/The-hungry-bridegroom-1980-oil-painting-on-carton.jpg', // Path might need adjustment
    alt: 'Artwork: The hungry bridegroom, 1980'
  },
  {
    id: '31',
    title: 'Lucebert - Mother wins',
    year: 1984,
    medium: 'oil painting on canvas',
    dimensions: '72x82cm',
    imagePath: '/2021/04/Lucebert-1984-ΓÇô-Mother-wins-oil-painting-on-canvas-72x82cm.jpg',
    alt: 'Artwork: Lucebert 1984 – Mother wins'
  },
  {
    id: '27',
    title: 'Portrait of Lucebert Woodcut',
    year: 1957,
    medium: 'Woodcut',
    dimensions: 'Unknown', // Dimensions not specified in text for this one
    imagePath: '/2021/03/1957-Portrait-of-Lucebert-Woodcut.jpg',
    alt: 'Artwork: 1957 Portrait of Lucebert Woodcut'
  },
  {
    id: '28',
    title: 'Portrait of Lucebert on paper',
    year: 1992,
    medium: 'Mixed media on paper', // Assumed based on similar works
    dimensions: '27x35cm',
    imagePath: '/2021/03/1992-Portrait-of-Lucebert-on-paper-27x35cm-.jpg',
    alt: 'Artwork: 1992 Portrait of Lucebert on paper'
  },
  {
    id: '29',
    title: 'Lucebert’s funeral',
    year: 1994,
    medium: 'mixed media on paper',
    dimensions: '100x70cm',
    imagePath: '/2021/03/1994-Luceberts-funeral-mixed-media-on-paper-100x70cm.jpg',
    alt: 'Artwork: 1994 Lucebert’s funeral'
  }
];

// Helper function to find artwork data by title substring
const findArtwork = (titleSubstring: string) => {
  return relatedArtworks.find(art => art.title.includes(titleSubstring));
};

const SeriousArtPiecePage = () => {
  const artworkReachingLord = findArtwork('Reaching out to the Lord');
  const artworkHungryBridegroom = findArtwork('hungry bridegroom');
  const artworkMotherWins = findArtwork('Mother wins');
  const artworkLucebertWoodcut = findArtwork('Lucebert Woodcut');
  const artworkLucebertPaper = findArtwork('Lucebert on paper');
  const artworkLucebertFuneral = findArtwork('Lucebert’s funeral');

  return (
    <div className="bg-[#0f0f0f] text-white"> {/* Added bg color to match other info pages */}
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-16 overflow-hidden"> {/* Keeping 40vh for now, can adjust if needed */}
        <Image 
          src={artworkMotherWins?.imagePath || "/2021/04/Lucebert-1984-ΓÇô-Mother-wins-oil-painting-on-canvas-72x82cm.jpg"} // Fallback just in case
          alt="Lucebert - Mother wins, a serious piece of art"
          fill
          className="object-cover object-center brightness-[0.7]" // Matched object-center and brightness
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div> {/* Matched gradient */}
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4"> {/* Matched container and flex properties */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">A Serious Piece of Art on My Wall</h1> {/* Matched text styling */}
          <p className="text-white/80 md:text-lg max-w-2xl">
            Reflections on acquiring a significant artwork by Lucebert and its place among personal collections and artistic influences.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mt-8"></div> {/* Added decorative line */}
        </div>
      </section>

      <div className="container-narrow mx-auto px-4 py-8 prose lg:prose-xl prose-invert max-w-4xl">
        {/* Removed original h1, content starts here */}
        <p>On Saturday 22 February 2020, a feature about my purchase of a first piece of art was published in My favourite item in the Dutch NRC newspaper. I submitted 680 words and some photos, but I had exceeded the word limit of 240 words for this regular feature. Despite some deletions, Gretha Pama, the editor, wrote a good article. I will post the longer version on my website and add several interesting facts about the Dutch artists Lucebert and Frank Lodeizen.</p>

      <p>Although I had the third-highest academic grade in my peer group, it took 7.5 years to complete my long uninspiring studies of pharmacy (currently it is a five-year degree course) in the northern student city of Groningen. It was a long way from Amsterdam, and rather parochial in the 1970s. After receiving my degree, I returned to the west of the country, where I hoped I would experience some cultural rejuvenation. I had found a job at a pharmaceutical company between Amsterdam and Haarlem (immediately west of Amsterdam), and I could not have wished for more attractive living quarters in Amsterdam: for one year I was the caretaker of a beautiful floor in an old historic building on the Amstel river, diagonally across from the famous theatre Carré, not far from the sluice gates in the Amstel.</p>

      <p>I had only recently taken up painting again and I was still quite a novice. I did not yet have my own style and was not quite sure of the purpose of my painting. I was rather guileless and believed that my paintings should exude a ‘strong message’: ‘we had had enough of all that woolly art!’ I hung several paintings with strong messages, or should we say ‘shocking messages,’ from the 1980s on the walls of my beautiful studio. At the time I did not realize that a brazen message that sticks out a mile does not necessarily support the artwork.</p>

      <div className="flex flex-wrap justify-center gap-6 my-8">
        {artworkReachingLord && (
          <figure className="w-64 md:w-72 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={artworkReachingLord.imagePath} alt={artworkReachingLord.alt} width={300} height={300} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{artworkReachingLord.year} {artworkReachingLord.title} – {artworkReachingLord.medium}, {artworkReachingLord.dimensions}</figcaption>
          </figure>
        )}

        {artworkHungryBridegroom && (
          <figure className="w-64 md:w-72 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={artworkHungryBridegroom.imagePath} alt={artworkHungryBridegroom.alt} width={300} height={300} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{artworkHungryBridegroom.year} {artworkHungryBridegroom.title} – {artworkHungryBridegroom.medium} {artworkHungryBridegroom.dimensions}</figcaption>
          </figure>
        )}
      </div>

      <p>Looking back, I realize that the twenty-four year old Jaap was out to shock the socks off his audience. The painting on the left shows Ernie (in the children’s programme Sesame Street) who suits the action to the word in the biblical text: “But Jesus called the children to Him and said, let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these (Luke 18:16). Ernie depicts the artist’s rather cynical religious experience. The scene in the background was taken from ten-year old Jaap’s Sunday school booklet; I was sent to Sunday school every week to learn about the Bible. Of course, this was great for my parents, because it took me off their hands for a couple of hours. Religious education did not have much effect: when I became an adolescent, I unwaveringly decided that religion was a figment of the mind, based on a human need to control the fear inherent to life. It does not offer consolation to people who are not interested in such fantasies; throughout the ages, religion has proved to be incapable of reducing worldwide acts of terror. Religion does not have a positive influence on man.</p>

      <p>The painting on the right might be perceived as even darker. It looks as if the marriage only lasted a day. Obviously, I was interested in Picasso’s work at the time, although I did not yet know that Dora Maar, a fascinating artist and photographer, modelled for the ‘weeping woman’. Did you notice the woman’s lock of hair draped over the edge of the painting? Just a little joke. The black ladderback chair in the right-hand corner is a version of the Hill House 1 Chair designed in 1903 by Charles Rennie Mackintosh.</p>

      <p>Younger friends, visiting me at the time, thought the works were ‘cool’ or whatever they said in 1982. However, the older generation, like an older auntie of mine, was rather shocked by these paintings and wondered whether I was in my right mind. After I had produced several such paintings, I had got it out of my system and could move on. I found that after a while you tire of shocking messages, you lose interest in those works of art, they have a limited shelf life. The twenty-four year old Jaap had not yet shaken off adolescence, but in the following years his techniques and themes showed great progress. Ten years later – in 1990 – the adolescent/painter had completed his experiments, and the mature painter had acquired a personal style, a typical Jaap Goedemoed style, still apparent in my current work.</p>

      <p>After the oeuvres from the 1980s were taken down, I decided that it was time to have a serious piece of art on the walls of my new home in Amsterdam-Zuid, an upmarket quarter of the city. After all, my pharmaceutical job provided me with enough money and as a bachelor I had no expenses generally associated with family life. In 1984, I decided to have a browse in Galerie Espace on one of the canals, Keizersgracht; it was the last day of an exhibition of Lucebert’s paintings.</p>

      <p>Lucebert (1924-1994) is a well-known artist in the Netherlands; initially as an innovative poet, ‘the Emperor of the Fifties’, and as a visual artist. He knew the painters of the international Cobra movement well, but he never joined the movement. Although his artwork do not fetch as much in the international art market as work by Appel, Corneille, Constant, Alechinsky, and Jorn, his paintings are nevertheless quite pricey. Lucebert had many exhibitions abroad.</p>

      <p>Many of his works in the gallery, the larger oil paintings, did not fit my budget. There was a smaller piece of art (72x82cm) on the first floor of the gallery that was not in a prominent place. It had apparently not drawn much interest as it was still for sale. Although I felt it was slightly over my budget (7,250 guilders ~ 3290 euros), art purchase arrangements at the time allowed me to pay in instalments over a period of thirty-six months which made it feasible. The assistant in the gallery who served me, looked at me in surprise, probably thinking ‘strange for such a young person’ to spend so much money on art – I was a young-looking 28 year old –, or maybe she was wondering how I could make such a decision in a matter of minutes. Later I discovered that the young lady was Maia Swaanswijk, the artist’s daughter (Lucebert’s real name was Bertus Swaanswijk), who managed sales in the gallery.</p>

      <p>Very soon the painting ‘Mother wins’ was given a permanent place in my new home, and it has not been moved for 34 years. After all those years the painting still fascinates me, and I have never regretted the hasty purchase. This piece of art really appeals to me because it not only shows the typical jagged unpredictable Lucebert forms of heads and bodies, in black and dark purple outlines, but it also has many soft pastel shades.</p>

      {artworkMotherWins && (
        <figure className="float-right ml-6 mb-6 w-64 md:w-72">
          <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
            <Image src={artworkMotherWins.imagePath} alt={artworkMotherWins.alt} width={350} height={400} className="mx-auto" />
          </div>
          <figcaption className="text-center text-sm">{artworkMotherWins.title} {artworkMotherWins.year}, {artworkMotherWins.medium}, {artworkMotherWins.dimensions}</figcaption>
        </figure>
      )}

      <p>It is this combination that makes the painting so strong and appealing to me. According to Wim Hazeu, his biographer, Lucebert was colour-blind. There are many of Lucebert’s paintings I do not like: too many harsh colours on top of each other. Sometimes a painting needs lighter and softer colours for more balance to create quieter sections that bring out other parts in the artwork.</p>

      <p>I am not sure about Lucebert’s colour blindness: for example, I love the colours (and the composition) of his gouaches in his beautiful poetry publication Van de maltentige losbol.</p>

      <p>The empty wall around Lucebert’s work of art has changed significantly over the past thirty-four years. In the immediate years after the introduction of Lucebert’s work, the wall around the painting, and the mantelpiece were filled with ethnographic objects (masks and statues mainly from Africa), predominantly collected in Amsterdam. I liked the combination of Lucebert’s painting and ethnographic art, and his painting held up well among all the ethnographic busyness.</p>

      <div className="my-12 flex flex-col md:flex-row gap-8 justify-center items-start">
        <figure className="w-full md:w-1/2">
          <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-md"> {/* Added h-72 for fixed height */}
            <Image 
              src="/Website Assets/Hero Images/Living room Jaap in 1996.jpg" 
              alt="Living room in 1996 with Lucebert painting and ethnographic art" 
              fill
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <figcaption className="text-center text-sm mt-2 text-text-muted">
            The Lucebert painting surrounded more and more by ethnographic objects in 1996.
          </figcaption>
        </figure>
        <figure className="w-full md:w-1/2">
          <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-md"> {/* Added h-72 for fixed height */}
            <Image 
              src="/Website Assets/Hero Images/woonkamer 10 juli 2020 IMG_6089.jpg" 
              alt="Living room in 2020 with Lucebert painting" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <figcaption className="text-center text-sm mt-2 text-text-muted">
            The Lucebert painting in 2020 with few ethnographic objects.
          </figcaption>
        </figure>
      </div>

      <p>Apparently Lucebert did not approve of ethnographic art, he would not buy or collect it because he did not want ‘ethnographic art removed from its cultural context’. I did not share his sentiment, my urge to collect was based on my feeling or awareness that all these beautiful cultures and their expressions are disappearing across the world and just to have several of these cultural expressions in my limited living environment gives me great comfort. Unfortunately, ethnography is no longer available in Africa and can now be seen mainly in collections and museums in the West. More than eleven years after hanging up Lucebert’s painting, my wife was sharing the living quarters with me, we had children, and inevitably the ethnographic content in the living room was reduced after we moved it to our upper floors. Only Lucebert could stay, and gradually found himself in a more ‘gentrified’, much emptier living room among many interesting objects.</p>

      {/* Placeholder for 1996 living room image if available */}
      {/* <figure className="my-6">
        <Image src="/path/to/1996_living_room.jpg" alt="1996 Jaap’s living room" width={800} height={600} className="mx-auto" />
        <figcaption className="text-center text-sm mt-2">1996 Jaap’s living room – The Lucebert painting surrounded by more and more ethnographic items</figcaption>
      </figure> */}

      {/* Placeholder for 2013 living room image if available */}
      {/* <figure className="my-6">
        <Image src="/path/to/2013_living_room.jpg" alt="2013 The family living room" width={800} height={600} className="mx-auto" />
        <figcaption className="text-center text-sm mt-2">2013 The family living room and the Lucebert painting amidst a reduced number of ethnographic items</figcaption>
      </figure> */}


      <p>From 1990 to 1996, I collected many works by another artist well-known to Lucebert. In the early 1950s they would meet in the café frequented by the Cobra artists (Café Eijlders in Amsterdam), they became good friends and in February 1952 they travelled to Paris together. This artist was the aforementioned Frank Lodeizen, whom I will feature in more detail. Frank had not shared the same degree of success that was enjoyed by Lucebert and the Cobra artists for a variety of reasons. I got to know Frank’s work well and appreciated the beauty and sensitivity of his work from the period between1986 and 1996. And because Frank had not been successful in the art market, I had been able to buy some of his beautiful paintings at very reasonable prices, including 29 unique pieces of art. Later I added 48 reproductive works (etchings, lithographs, prints, lithographs, screen prints). Coincidentally Frank Lodeizen’s early works included two portraits of his friend Lucebert.</p>

      <div className="flex flex-wrap justify-center gap-6 my-8">
        {artworkLucebertWoodcut && (
          <figure className="w-56 md:w-64 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={artworkLucebertWoodcut.imagePath} alt={artworkLucebertWoodcut.alt} width={250} height={320} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{artworkLucebertWoodcut.year} {artworkLucebertWoodcut.title}</figcaption>
          </figure>
        )}

        {artworkLucebertPaper && (
          <figure className="w-56 md:w-64 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={artworkLucebertPaper.imagePath} alt={artworkLucebertPaper.alt} width={250} height={320} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{artworkLucebertPaper.year} {artworkLucebertPaper.title} {artworkLucebertPaper.dimensions}</figcaption>
          </figure>
        )}
      </div>

      <p>The portrait on the left is beautiful, consisting of just a few black lines and dots, and some coffee stains, and several touches of brown, and a little dash of blue. And although I don’t know why it is there, it adds interest to the work. The portrait was created on 6 February 1992, and Lucebert had probably lost his hair due to cancer and chemotherapy. Jaap added the portrait to Frank Lodeizen’s best pieces of work and soon it became a feature on my living room wall.</p>

      <p>Shortly afterwards (in October/November 1993) I bought a second Lucebert portrait made by Frank Lodeizen: a woodcut like Lucebert’s portrait from 1957. I have already described how my first ‘expensive’ art purchase was an oil painting by Lucebert in Gallery Espace in 1984. To me it was a miracle how I acquired two portraits by Lodeizen, one of the young Lucebert and one of the older and by then sick Lucebert. I was very grateful to have them, and the portraits were not any old portrait, I regarded them as my cultural heritage and I was aware how privileged I was to have come across these pieces of art and could even purchase them.</p>

      <p>In June 1995 I bought a third piece of art associated with the relationship between Lucebert and Frank Lodeizen. This is the work of art from 1994, Lucebert’s funeral, mixed media on paper, 100x70cm. If you study it closely, you will recognise the random letters of LUCEBERT in the abstract, although the letters B and R are missing. It is a strong piece of work, and it complements the memory of Lucebert, together with the two Lucebert portraits made by Frank Lodeizen.</p>

      {artworkLucebertFuneral && (
        <figure className="my-8 max-w-lg mx-auto">
          <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
            <Image src={artworkLucebertFuneral.imagePath} alt={artworkLucebertFuneral.alt} width={500} height={350} className="mx-auto" />
          </div>
          <figcaption className="text-center text-sm">{artworkLucebertFuneral.year} {artworkLucebertFuneral.title}, {artworkLucebertFuneral.medium}, {artworkLucebertFuneral.dimensions}</figcaption>
        </figure>
      )}

      <p>Frank Lodeizen and Lucebert were close friends, who frequently met in the early 1950s, and possibly once a year in the 1980s and 1990s. As an eleven-year old boy Frank Lodeizen managed to survive the Holocaust by escaping from the roundup of Jews at Central Station, who were waiting to be transported to Westerbork in the east of the Netherlands, a detention and transit camp. His mother and stepfather, and his sister, and many other relatives died in Sobibor, an extermination camp in Poland. Lucebert died of colon cancer in May 1994; Frank Lodeizen died in 2013. Frank attended Lucebert’s funeral in Bergen (the Netherlands) on 16 May 1994. Frank was deeply moved when Lucebert died. In his collection of Tuscan letters (1994), Frank wrote the following lines dedicated to Lucebert, which show us how important Lucebert was to Frank Lodeizen.</p>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
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

      <p>Wim Hazeu’s biography of Lucebert was published on 6 February 2018. Not long after, big headlines in all the Dutch newspapers reported the disclosure of Lucebert’s letters which he had written when he was a young man living in Germany (Apollensdorf near Wittenberg, where he was employed in an ammunition factory). It appeared that the young Bertus Swaanswijk (which was his real name, and he did not change it to Lucebert until after 1945; his father’s first name was Lubertus; ‘Luce’ and ‘bert’ both mean ‘light’) had volunteered to work in Germany in June 1943, and in his letters to his girlfriend Tiny Koppijn, the young Swaanswijk clearly expressed himself pro-Nazi; in fact, his expressions were anti-Semitic and he ended the letter with the ‘Sieg Heil!’ greeting. Lucebert never referred to this aberration at any time in his life. It led to much criticism, particularly because Lucebert had always presented himself as a revolutionary, against (colonial) rulers, against evil and unfreedom, and because he took issue against many people with reactionary views and narrow-minded citizenry. Of course, Lucebert knew that this publication would be the end of his status as the front-runner of the Vijftigers, a group of experimental writers loosely connected to the Cobra artists, and of his artistic career. Many of Lucebert’s fans say that Lucebert’s approach and commitment to life after 1945 made up for his youthful indiscretion. Some of Lucebert’s followers believe that Lucebert’s image was damaged, that much of his moral authority now was lost, and that some of Lucebert’s poems can now be read from two different perspectives.</p>

      <p>Lucebert had always been Frank Lodeizen’s shining light, Frank Lodeizen had wanted to be like him, and play with language and words as well as paint. Because these revelations about Lucebert were not made public until 2018, Frank Lodeizen did not see his great hero fall from his pedestal.</p>

      <p>It is interesting to reconsider my purchase of works of art retrospectively: first there was my rather impulsive purchase of a relatively expensive work of art by a well-known artist (Lucebert oil painting 72x82cm, 7250 guilders (~ 3290 euros), a painting by an established artist. It was followed by many purchases of art by an artist who was less successful in the art market: 31 works of art (29 unique items) by Frank Lodeizen with a total cost of 11,642 guilders (5,200 euros) (approximately 370 guilders (on average 170 euros per work of art). In comparison, the latter were higher risk purchases of works by an artist who was not established. All in all, Frank Lodeizen’s works of art have greatly influenced my life and my development as an artist. I treasure my possession of the Frank Lodeizen collection, it reflects a typical phase in my life with memories of the interactions between the artist Frank Lodeizen and me. Whereas I regard Lucebert’s painting as a powerful work of art, it remains “the painting on the wall” without any added effect on my artistic development. I did however buy many collections of and about Lucebert’s poems, and many books of and about Lucebert’s paintings, which fill a bookshelf, but that’s all. In retrospect, it was a blessing in disguise for my own artistic development that I then became fascinated with Frank Lodeizen’s work and that I did not buy a second ‘expensive’ Lucebert painting! In terms of financial investment, a second Lucebert painting would have been better, but as a ‘human’ investment in myself, my choice of the ‘unknown’ Frank Lodeizen artworks turned out to be the best pathway for me.</p>

      {/* Placeholder for Oct 2017 image if available */}
      {/* <figure className="my-6">
        <Image src="/path/to/oct_2017_home.jpg" alt="Oct 2017, At the artist’s home" width={800} height={600} className="mx-auto" />
        <figcaption className="text-center text-sm mt-2">Oct 2017, At the artist’s home. The recently made sea balls composition (150 x150 cm) on the wall</figcaption>
      </figure> */}

      {/* Placeholder for 1996 home image if available */}
      {/* <figure className="my-6">
        <Image src="/path/to/1996_home_ethnographic.jpg" alt="At the artist’s home in 1996" width={800} height={600} className="mx-auto" />
        <figcaption className="text-center text-sm mt-2">At the artist’s home in 1996. Ethnographic influences</figcaption>
      </figure> */}

      </div> {/* This closes the inner container-narrow div */}
    </div> // This closes the main bg-[#0f0f0f] text-white div
  );
};

export default SeriousArtPiecePage;
