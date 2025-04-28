// Types for our placeholder data
export interface Artwork {
  id: string;
  title: string;
  slug: string;
  year: number;
  description: string;
  medium: string;
  dimensions: string;
  imagePath: string;
  featured: boolean;
}

export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'solo' | 'group';
  description: string;
}

export interface Photograph {
  id: string;
  title: string;
  slug: string;
  year: number;
  description: string;
  location: string;
  imagePath: string;
}

// Artworks Collection
export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Composition',
    slug: 'composition-2014',
    year: 2014,
    description: 'A sophisticated geometric composition exploring spatial relationships and color harmony, with carefully balanced elements creating a meditative visual experience.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/2019/01/Composition-2014-100-x-100-cm-2.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Composition 2017',
    slug: 'composition-2017',
    year: 2017,
    description: 'A bold geometric composition with overlapping forms creating a sense of depth and movement. The work explores color relationships and spatial tension.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg',
    featured: true
  },
  {
    id: '3',
    title: 'Sea Balls Composition',
    slug: 'sea-balls-composition',
    year: 2018,
    description: 'An innovative work created from sea balls collected from the beach. These natural spherical formations are arranged in a compelling geometric pattern.',
    medium: 'Natural materials on panel',
    dimensions: '150 x 150 cm',
    imagePath: '/2020/05/Sea-balls-on-the-beach-1320x990.jpg',
    featured: true
  },
  {
    id: '4',
    title: 'Chemin de Fer Lung Tsing U Hai',
    slug: 'chemin-de-fer',
    year: 2005,
    description: 'A mixed media composition integrating archival materials with contemporary artistic elements, exploring themes of travel, cultural exchange, and historical memory.',
    medium: 'Mixed media collage',
    dimensions: '40 x 50 cm',
    imagePath: '/2021/04/Chemin-de-Fer-Lung-Tsing-U-Hai-2005-40-x-50-cm-1650x2048.jpg',
    featured: true
  },
  {
    id: '5',
    title: 'Les Tramways d\'Iekaterinoslaw',
    slug: 'tramways-iekaterinoslaw',
    year: 2013,
    description: 'Part of the tram series, this work documents and artistically interprets the historic tram systems of Eastern Europe, combining documentary and aesthetic approaches.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/2021/04/Les-Tramways-dIekaterinoslaw-2013-40-x-50-cm.jpg',
    featured: true
  },
  {
    id: '6',
    title: 'Changing Pattern with Relief',
    slug: 'changing-pattern-with-relief',
    year: 1990,
    description: 'A textured work exploring pattern variations with dimensional relief elements that create visual complexity through shadows and form. The interplay of light across the relief surface creates an ever-changing visual experience.',
    medium: 'Mixed media on panel',
    dimensions: '100 x 100 cm',
    imagePath: '/2019/01/Changing-pattern-with-relief-I-1990-100-x-100-cm.jpg',
    featured: true
  },
  {
    id: '7',
    title: 'Changing Tiling on a Wooden Plank',
    slug: 'changing-tiling-wooden-plank',
    year: 1990,
    description: 'An elongated composition exploring the gradual transformation of geometric patterns across a horizontal plane. The work invites the viewer to observe how patterns evolve and interact across the composition.',
    medium: 'Mixed media on wood',
    dimensions: '60 x 200 cm',
    imagePath: '/2018/12/Changing-tiling-on-a-wooden-plank-1990-60-x-200-cm-819x1024.png',
    featured: false
  },
  {
    id: '8',
    title: 'Egyptian Scene with Depth',
    slug: 'egyptian-scene-with-depth',
    year: 1985,
    description: 'A composition inspired by Egyptian artistic conventions but reinterpreted with spatial depth and dimensional perspective. This work represents an early exploration of how traditional visual languages can be reinterpreted through contemporary approaches.',
    medium: 'Oil on canvas',
    dimensions: '125 x 90 cm',
    imagePath: '/2018/12/Egyptian-scene-with-depth-1985-125-x-90-cm-3.jpg',
    featured: false
  },
  {
    id: '9',
    title: 'Egyptian Scene Flat',
    slug: 'egyptian-scene-flat',
    year: 1984,
    description: 'A study of Egyptian visual language that maintains the traditional flatness of Egyptian art while introducing contemporary elements. This work reflects the artist\'s early interest in ancient aesthetic systems and their potential for contemporary expression.',
    medium: 'Oil on canvas',
    dimensions: '120 x 85 cm',
    imagePath: '/2018/12/Egyptian-scene-flat-1984-120-x-85-cm-3.jpg',
    featured: false
  },
  {
    id: '10',
    title: 'Division of the Plane with Various Elements',
    slug: 'division-of-the-plane-with-various-elements',
    year: 1997,
    description: 'An abstract geometric composition exploring the division of a two-dimensional plane using various shapes, colors and textures. The work creates a visual rhythm through the careful arrangement of compositional elements.',
    medium: 'Mixed media on canvas',
    dimensions: '160 x 160 cm',
    imagePath: '/2018/12/Division-of-the-plane-with-various-elements-1997-160-x-160-cm.jpg',
    featured: false
  },
  {
    id: '11',
    title: 'Tuscan Tiling I',
    slug: 'tuscan-tiling-i',
    year: 1994,
    description: 'A geometric pattern study inspired by historic Italian tiling designs, reinterpreted through a contemporary minimalist aesthetic. The work connects traditional pattern-making with modern compositional approaches.',
    medium: 'Acrylic on canvas',
    dimensions: '165 x 165 cm',
    imagePath: '/2018/12/Tuscan-tiling-I-1994-165-x-165-cm.jpg',
    featured: false
  },
  {
    id: '12',
    title: 'Fabrication des Bouteilles à Odessa',
    slug: 'fabrication-bouteilles-odessa',
    year: 2005,
    description: 'A mixed media work that explores industrial heritage and manufacturing processes in Odessa, combining historical documentation with artistic interpretation.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/2021/04/Fabrication-des-Bouteilles-a-Odessa-I-2005-40-x-50-cm.jpg',
    featured: false
  },
  {
    id: '13',
    title: 'Composition with Fixed Center',
    slug: 'composition-with-fixed-center',
    year: 1998,
    description: 'A structured composition built around a stable central focal point, with geometric elements radiating outward in a balanced arrangement. The work creates a sense of stability and order while maintaining visual interest through color variation and textural elements.',
    medium: 'Mixed media on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/2018/12/Composition-with-fixed-center-1998-100-x-100-cm-slider.jpg',
    featured: true
  },
  {
    id: '14',
    title: 'Composition 2018',
    slug: 'composition-2018',
    year: 2018,
    description: 'A contemporary geometric composition that builds on the artist\'s exploration of spatial relationships and color harmony, creating a dynamic visual field that rewards extended viewing.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/2021/04/Composition-2018-100x100-cm.jpg',
    featured: false
  }
];

// Exhibitions data
export const exhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'Exhibition',
    venue: 'Italiaander Gallery',
    location: 'Amsterdam, Netherlands',
    startDate: '2019-03-02',
    endDate: '2019-03-17',
    type: 'solo',
    description: 'Solo exhibition featuring recent works at the Italiaander Gallery in Amsterdam.'
  },
  {
    id: '2',
    title: 'Exhibition',
    venue: 'Slotervaart Medical Center',
    location: 'Amsterdam, Netherlands',
    startDate: '2016-10-08',
    endDate: '2017-04-07',
    type: 'solo',
    description: 'An extended exhibition at the Slotervaart Medical Center, Louwesweg 6, Amsterdam.'
  },
  {
    id: '3',
    title: 'Exhibition',
    venue: 'Baut Zuid Restaurant',
    location: 'Amsterdam, Netherlands',
    startDate: '2015-09-15',
    endDate: '2015-10-30',
    type: 'solo',
    description: 'Exhibition at the pop-up restaurant Baut Zuid Amsterdam near Olympic Stadion.'
  },
  {
    id: '4',
    title: 'Exhibition',
    venue: 'Galerie Ruimte',
    location: 'Amsterdam, Netherlands',
    startDate: '2008-04-01',
    endDate: '2008-05-31',
    type: 'solo',
    description: 'Solo exhibition at Galerie Ruimte in Amsterdam, featuring works from the "Tramways d\'Odessa" series.'
  },
  {
    id: '5',
    title: 'Exhibition',
    venue: 'RIVM',
    location: 'Amsterdam, Netherlands',
    startDate: '2001-12-13',
    endDate: '2002-01-31',
    type: 'solo',
    description: 'Solo exhibition at the Dutch National Institute for Public Health and the Environment (RIVM).'
  },
  {
    id: '6',
    title: 'Exhibition',
    venue: 'Montague Art Gallery',
    location: 'New York, USA',
    startDate: '1997-10-18',
    endDate: '1997-11-30',
    type: 'group',
    description: 'Group exhibition at Montague Art Gallery, 54 Greene Street, New York.'
  },
  {
    id: '7',
    title: 'Exhibition',
    venue: 'Hommage Gallery',
    location: 'Amsterdam, Netherlands',
    startDate: '1997-11-16',
    endDate: '1997-12-20',
    type: 'group',
    description: 'Group exhibition at Hommage Gallery, Cornelis Schuytstraat 9, Amsterdam.'
  }
];

// Atelier data
export const atelierInfo = {
  title: "A new atelier for Jaap Goedemoed",
  description: "In July 2020, the artist began using a new atelier located about 8 km south from his home in Amsterdam in a residential area of Amstelveen. The atelier was first renovated and then the walls were covered with artworks and ethnographic objects. In August 2020, the first activities started for a new artwork composed with porcupine spines. The atelier includes a storage room with all available artworks from the artist, from the early works in 1980 up to the present, if not sold.",
  visitInfo: "It is possible for interested art lovers of the work of Jaap Goedemoed, especially for those travelling from far away (USA – number 1 country of visitors or for instance Singapore – number 10 country of visitors) with a stop in Amsterdam, or Amsterdam visitors by car or train, to bring a visit to the atelier. Please send a request for a visit via Contact to the artist (or to: jaapgoedemoed@gmail.com), together with motivation and an approximate date. This is only possible for individuals, not for groups.",
  images: [
    {
      id: "atelier1",
      src: "/2021/04/The-new-atelier-1-22-August-2020-2048x1365.jpg",
      caption: "The new atelier 1, 22 August 2020"
    },
    {
      id: "atelier2",
      src: "/2021/04/The-new-atelier-2-22-August-2020-2048x1365.jpg",
      caption: "The new atelier 2, 22 August 2020"
    },
    {
      id: "atelier3", 
      src: "/2021/04/The-new-atelier-3-22-August-2020-2048x1365.jpg",
      caption: "The new atelier 3, 22 August 2020"
    },
    {
      id: "atelier4",
      src: "/2021/04/The-new-atelier-4-22-August-2020-2048x1365.jpg", 
      caption: "The new atelier 4, 22 August 2020"
    },
    {
      id: "atelier5",
      src: "/2021/04/The-new-atelier-5-22-August-2020-1365x2048.jpg",
      caption: "The new atelier 5, 22 August 2020"
    },
    {
      id: "atelier6",
      src: "/2021/04/The-new-atelier-6-28-December-2020-work-in-progress-Composition-2021-1365x2048.jpg",
      caption: "The new atelier 6, 28 December 2020 (work in progress - Composition 2021)"
    },
    {
      id: "atelier7",
      src: "/2021/04/The-new-atelier-7-31-January-2021.jpg",
      caption: "The new atelier 7, 31 January 2021"
    },
    {
      id: "atelier8",
      src: "/2021/04/The-new-atelier-8-17-february-2021-1365x2048.jpg",
      caption: "The new atelier 8, 17 February 2021"
    },
    {
      id: "atelier9",
      src: "/2021/04/The-new-atelier-9-21-February-2021-2048x1365.jpg",
      caption: "The new atelier 9, 21 February 2021"
    }
  ]
};

// Placeholder Photographs
export const photographs: Photograph[] = [
  {
    id: '1',
    title: 'Les Tramways de Kiew',
    slug: 'les-tramways-de-kiew',
    year: 2013,
    description: 'A photographic study documenting the historic tram system of Kyiv, capturing both the vehicles and the urban infrastructure.',
    location: 'Kyiv, Ukraine',
    imagePath: '/2019/01/Les-Tramways-de-Kiew-2013-40-x-50-cm.jpg'
  },
  {
    id: '2',
    title: 'Tramways d\'Odessa',
    slug: 'tramways-odessa',
    year: 2008,
    description: 'Part of the urban transit documentation series, this work captures the historic tram system of Odessa with its distinctive character.',
    location: 'Odessa, Ukraine',
    imagePath: '/2019/01/Tramways-dOdessa-2008-e1547040551730.jpg'
  },
  {
    id: '3',
    title: 'Ancient Hand Writing',
    slug: 'ancient-hand-writing',
    year: 1997,
    description: 'A photographic documentation of historical manuscripts and text fragments, exploring the visual qualities of written language.',
    location: 'Amsterdam, Netherlands',
    imagePath: '/2019/01/Ancient-hand-writing-1997-42-x-30-cm.png'
  },
  {
    id: '4',
    title: 'Russian Text Study I',
    slug: 'russian-text-study-1',
    year: 2005,
    description: 'A photographic exploration of Cyrillic typography and Russian text forms, examining the visual patterns and rhythms of language.',
    location: 'Amsterdam, Netherlands',
    imagePath: '/2019/01/Rusiesch-txt1-1.jpg'
  },
  {
    id: '5',
    title: 'Galerie Ruimte Exhibition',
    slug: 'galerie-ruimte-exhibition',
    year: 2008,
    description: 'Documentation of the artist\'s exhibition at Galerie Ruimte in Amsterdam, showing the spatial relationship between works.',
    location: 'Amsterdam, Netherlands',
    imagePath: '/2019/01/Apr-May-2008-Exhibition-in-Galerie-Ruimte-Amsterdam.jpg'
  },
  {
    id: '6',
    title: 'Division of the Plane Study',
    slug: 'division-of-the-plane-study',
    year: 2000,
    description: 'Photographic documentation of geometric division concepts, exploring the mathematical organization of visual space.',
    location: 'Amsterdam, Netherlands',
    imagePath: '/2019/01/Division-of-the-plane-no.png'
  }
];

// Biography text 
export const biographyContent = {
  intro: "Jaap Goedemoed (b. 1956, De Bilt) is a Dutch contemporary artist whose work spans painting, mixed media, collage, and photography. His artistic practice evolved alongside a distinguished career in pharmaceutical science, creating a unique intersection of precision, experimentation, and creative expression.",
  
  earlyLife: "Born in De Bilt, The Netherlands in 1956, Goedemoed showed early artistic talent with high marks for drawing and early experiments with screen printing and etching techniques during his high school years at Het Nieuwe Lyceum in Bilthoven (1968-1974). He later pursued Pharmacy at Groningen State University, graduating as a pharmacist in 1982, during which time he began creating his initial figurative oil paintings.",
  
  artisticDevelopment: "Goedemoed's artistic development reveals a fascinating evolution from detailed figurative paintings inspired by Egyptian culture (1984) to abstract art influenced by ethnographic art (1990). Throughout his career, he experimented with various techniques and materials including relief, tape on canvas, mixed media, and large-scale collages incorporating materials like Coptic healing scrolls, old Islamic handwritings, banknotes, and stamps. His work demonstrates a sophisticated understanding of composition, often influenced by his scientific background.",
  
  careerHighlights: "While maintaining his scientific career, Goedemoed's artistic work has been exhibited in multiple venues including New York's Montague Art Gallery (1997), Hommage Gallery in Amsterdam (1997), Galerie Ruimte in Amsterdam (2007-2008), Baut Zuid in Amsterdam (2015), Slotervaart Medical Center (2016-2017), and Italiaander Galleries in Amsterdam (2019). His work has also been prominently displayed at the RIVM (Dutch National Institute for Public Health and the Environment), where he served as a member of the Art Commission from 2005 to 2010.",
  
  currentPractice: "Goedemoed continues his work as a pharmaceutical assessor at the Medicines Evaluation Board of The Netherlands while maintaining his artistic practice. His dual career as both scientist and artist creates a unique synergy in his work, bringing analytical precision and experimental methodology to his creative expression. He has published several art books including 'Tramways d'Odessa' (2008) and 'Artworks Jaap Goedemoed – Selection of works 1984-2018' (2018)."
};

// Artist statement for Info page
export const artistStatement = "My work explores the intersections between architectural space, memory, and perception. Through a process that combines photographic documentation, painting, and mixed media approaches, I investigate how built environments shape our experience and how they persist in memory after direct encounter. The tension between structure and atmosphere, between the precise and the ephemeral, drives my practice. I am particularly interested in liminal spaces—thresholds, transitions, and boundaries—where different conditions meet and transform one another. Working primarily with painting and photography, I develop compositions that exist in a space between abstraction and representation, inviting viewers to navigate familiar forms that resist complete identification.";

// Process description for Info page
export const processDescription = "My working process typically begins with photographic documentation of architectural spaces, urban environments, or landscape features that serve as reference material and conceptual starting points. These images are then transformed through a painting process that involves multiple layers, often combining precise geometric elements with more atmospheric and gestural approaches. I frequently work in series, developing variations on particular themes or structural motifs. Materials and techniques are selected based on their conceptual and expressive potential for each body of work, ranging from traditional oil painting to experimental approaches incorporating natural pigments, photographic elements, and found materials.";

// Ethnographic influence for Info page
export const ethnographicInfluence = "My approach is informed by an ethnographic sensibility—a deep attention to how spaces are inhabited, transformed, and given meaning through human activity. Influences from Dutch architectural traditions, particularly the legacy of De Stijl and structural rationalism, are evident in my compositional strategies. The works of Douglas Hofstadter on the nature of consciousness and pattern recognition, as well as the poetic observations of Hans Lodeizen on the nature of perception, have been significant philosophical touchstones for my practice. These influences converge in work that examines how built structures embody cultural values and how they shape both collective and personal memory.";
