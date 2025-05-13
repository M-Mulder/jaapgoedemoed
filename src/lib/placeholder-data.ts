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
  category?: string; // Added to help with categorization
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
  // Abstract Artworks 1990 - Present
  {
    id: '1',
    title: 'Composition 2014',
    slug: 'composition-2014',
    year: 2014,
    description: 'A sophisticated geometric composition exploring spatial relationships and color harmony, with carefully balanced elements creating a meditative visual experience.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/2019/01/Composition-2014-100-x-100-cm-2.jpg',
    featured: true,
    category: 'abstract'
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
    featured: true,
    category: 'abstract'
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
    featured: true,
    category: 'abstract'
  },
  {
    id: '7',
    title: 'Changing Tiling on a Wooden Plank',
    slug: 'changing-tiling-wooden-plank',
    year: 1990,
    description: 'An elongated composition exploring the gradual transformation of geometric patterns across a horizontal plane. The work invites the viewer to observe how patterns evolve and interact across the composition.',
    medium: 'Mixed media on wood',
    dimensions: '60 x 200 cm',
    imagePath: '/2019/01/Changing-tiling-on-a-wooden-plank-1990-60-x-200-cm.png',
    featured: false,
    category: 'abstract'
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
    featured: false,
    category: 'abstract'
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
    featured: false,
    category: 'abstract'
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
    featured: true,
    category: 'abstract'
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
    featured: false,
    category: 'abstract'
  },
  {
    id: '15',
    title: 'Composition with Open Structure',
    slug: 'composition-with-open-structure',
    year: 1999,
    description: 'A geometric abstraction featuring an open structure that creates a sense of space and movement across the canvas. The composition balances structured and spontaneous elements.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/2018/12/Composition-with-open-structure-1999-150-x-150-cm-slider.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '16',
    title: 'Disconnected Coptic Tiling',
    slug: 'disconnected-coptic-tiling',
    year: 1996,
    description: 'A composition inspired by Coptic visual traditions, featuring a pattern of disconnected tiles that create a rhythmic abstraction of space and form.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/2018/12/Disconnected-Coptic-tiling-1996-150-x-150-cm-slider.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '17',
    title: 'Disconnected Tiling Old and Modern',
    slug: 'disconnected-tiling-old-and-modern',
    year: 1997,
    description: 'A work that juxtaposes traditional and contemporary tiling patterns, creating a dialogue between historical and modern approaches to geometric abstraction.',
    medium: 'Mixed media on canvas',
    dimensions: '155 x 170 cm',
    imagePath: '/2018/12/Disconnected-tiling-old-and-modern-1997-155-x-170-cm-slider.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '18',
    title: 'Division of the Plane with Unequal Units',
    slug: 'division-of-the-plane-with-unequal-units',
    year: 1996,
    description: 'An exploration of spatial division using unequal geometric units, creating a dynamic tension between symmetry and asymmetry across the composition.',
    medium: 'Mixed media on canvas',
    dimensions: '180 x 180 cm',
    imagePath: '/2018/12/Division-of-the-plane-with-unequal-units-1996-180x180-cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '19',
    title: 'Tiling with Handwritings',
    slug: 'tiling-with-handwritings',
    year: 1997,
    description: 'A composition that integrates calligraphic elements with geometric tiling patterns, exploring the relationship between written language and abstract visual form.',
    medium: 'Mixed media on canvas',
    dimensions: '135 x 145 cm',
    imagePath: '/2018/12/Tiling-with-handwritings-1997-135-x-145-cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '20',
    title: 'Changing Pattern Variations',
    slug: 'changing-pattern-variations',
    year: 1991,
    description: 'A study of pattern transformations across a defined field, with subtle variations in color and form creating a sense of visual rhythm and progression.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/2018/12/Changing-pattern-variations-1991-150-x-150-cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '21',
    title: 'Changing Pattern with Opening I',
    slug: 'changing-pattern-with-opening-i',
    year: 1990,
    description: 'A geometric composition featuring a central opening that interrupts an evolving pattern, creating a focal point that draws the viewer into the composition.',
    medium: 'Mixed media on canvas',
    dimensions: '90 x 95 cm',
    imagePath: '/2019/01/Changing-pattern-with-opening-I-1990-90-x-95-cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '30',
    title: 'Composition No. 2 2022',
    slug: 'composition-no-2-2022',
    year: 2022,
    description: 'A sophisticated composition that continues the artist\'s investigation of geometric form and spatial relationships, featuring a balanced arrangement of shapes and colors.',
    medium: 'Mixed media on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/2022/10/Composition-no.2-29-sept-2022-om-14-1-scaled.jpg',
    featured: false,
    category: 'abstract'
  },

  // Old stock paper Artworks 2005 - Present
  {
    id: '3',
    title: 'Sea Balls Composition',
    slug: 'sea-balls-composition',
    year: 2018,
    description: 'An innovative work created from sea balls collected from the beach. These natural spherical formations are arranged in a compelling geometric pattern.',
    medium: 'Natural materials on panel',
    dimensions: '150 x 150 cm',
    imagePath: '/2020/05/Sea-balls-on-the-beach-1320x990.jpg',
    featured: true,
    category: 'others'
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
    featured: true,
    category: 'paper'
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
    featured: true,
    category: 'paper'
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
    featured: false,
    category: 'paper'
  },
  {
    id: '22',
    title: 'Russian Text Study I',
    slug: 'russian-text-study-i',
    year: 2005,
    description: 'An artistic exploration of Cyrillic text forms and layouts, combining documentary and aesthetic approaches to typography and language.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/2019/01/Rusiesch-txt1-1.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '23',
    title: 'Russian Text Study II',
    slug: 'russian-text-study-ii',
    year: 2005,
    description: 'A continuation of the artist\'s exploration of Russian textual forms as visual compositions, examining the relationship between language and visual structure.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/2019/01/Rusiesch-txtno1.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '24',
    title: 'Ancient Hand Writing',
    slug: 'ancient-hand-writing',
    year: 1997,
    description: 'A study of historical manuscript forms, exploring the visual aesthetics of handwritten texts as compositional elements.',
    medium: 'Mixed media on paper',
    dimensions: '42 x 30 cm',
    imagePath: '/2019/01/Ancient-hand-writing-1997-42-x-30-cm.png',
    featured: false,
    category: 'paper'
  },
  {
    id: '25',
    title: 'Les Tramways de Kiew',
    slug: 'les-tramways-de-kiev',
    year: 2013,
    description: 'Part of the urban transit documentation series, this work captures the iconic tram systems of Kiev through a combination of historical documents and artistic interpretation.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/2019/01/Les-Tramways-de-Kiew-2013-40-x-50-cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '26',
    title: 'Tramways d\'Odessa',
    slug: 'tramways-d-odessa',
    year: 2008,
    description: 'A mixed media composition documenting the historic tram system of Odessa, integrating historical imagery with contemporary artistic expression.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/2019/01/Tramways-dOdessa-2008-e1547040551730.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '38',
    title: 'Loterij mei 1870 met Frank Lodeizen',
    slug: 'loterij-mei-1870-frank-lodeizen',
    year: 1870,
    description: 'Artwork incorporating historical lottery ticket from May 1870, featuring elements related to Frank Lodeizen.',
    medium: 'Mixed media on paper',
    dimensions: 'Dimensions not specified',
    imagePath: '/Old stock paper Artworks 2005 - 20/Loterij mei 1870 met Frank Lodeizen IMG_6772.png',
    featured: false,
    category: 'paper'
  },
  {
    id: '39',
    title: 'Grieks Aandeelkunstwerk Oktober 2022',
    slug: 'grieks-aandeelkunstwerk-oktober-2022',
    year: 2022,
    description: 'Artwork based on a Greek share certificate, created in October 2022.',
    medium: 'Mixed media on paper',
    dimensions: 'Dimensions not specified',
    imagePath: '/Old stock paper Artworks 2005 - 20/Grieks aandeelkunstwerk 1 okt 2022 IMG_6403.png',
    featured: false,
    category: 'paper'
  },

  // Figurative Artworks 1980-1989
  {
    id: '8',
    title: 'Egyptian Scene with Depth',
    slug: 'egyptian-scene-with-depth',
    year: 1985,
    description: 'A composition inspired by Egyptian artistic conventions but reinterpreted with spatial depth and dimensional perspective. This work represents an early exploration of how traditional visual languages can be reinterpreted through contemporary approaches.',
    medium: 'Oil on canvas',
    dimensions: '125 x 90 cm',
    imagePath: '/2018/12/Egyptian-scene-with-depth-1985-125-x-90-cm-3.jpg',
    featured: false,
    category: 'figurative'
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
    featured: false,
    category: 'figurative'
  },
  {
    id: '32',
    title: 'Longing to the Lord',
    slug: 'longing-to-the-lord',
    year: 1980,
    description: 'An early figurative work that explores spiritual themes through a fusion of representational and symbolic elements, created during the artist\'s formative period.',
    medium: 'Oil on carton',
    dimensions: '60 x 80 cm',
    imagePath: '/2021/04/Lnging-to-the-Lord-1980-oil-on-carton.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '33',
    title: 'The Hungry Bridegroom',
    slug: 'the-hungry-bridegroom',
    year: 1980,
    description: 'A figurative oil painting that combines narrative and symbolic elements, reflecting the artist\'s early interest in storytelling through visual imagery.',
    medium: 'Oil on carton',
    dimensions: '60 x 80 cm',
    imagePath: '/2021/04/The-hungry-bridegroom-1980-oil-painting-on-carton.jpg',
    featured: false,
    category: 'figurative'
  },

  // Porcupine Artworks (additional category)
  {
    id: '34',
    title: 'Porcupine I',
    slug: 'porcupine-i',
    year: 2021,
    description: 'An innovative work incorporating porcupine quills as a primary medium, creating a textured surface with natural materials that explores pattern and form.',
    medium: 'Porcupine quills on panel',
    dimensions: '100 x 100 cm',
    imagePath: '/2022/03/Porcupine-I-5-March-2021-finale-werk-2048x2039.jpg',
    featured: false,
    category: 'porcupine'
  },
  {
    id: '35',
    title: 'Porcupine II',
    slug: 'porcupine-ii',
    year: 2021,
    description: 'A continuation of the artist\'s exploration of porcupine quills as an artistic medium, arranged in a geometric pattern that creates complex visual rhythms.',
    medium: 'Porcupine quills on panel',
    dimensions: '100 x 100 cm',
    imagePath: '/2022/03/Porcupine-II-23-December-2021-2048x2048.jpg',
    featured: false,
    category: 'porcupine'
  },
  {
    id: '36',
    title: 'Porcupine Boogie Woogie II',
    slug: 'porcupine-boogie-woogie-ii',
    year: 2022,
    description: 'A work inspired by the geometric abstraction of Mondrian\'s Boogie Woogie series, reinterpreted through the unique material properties of porcupine quills.',
    medium: 'Porcupine quills on panel',
    dimensions: '100 x 100 cm',
    imagePath: '/2022/03/Composition-2022-Procupine-Boogie-Woogie-II-scaled.jpg',
    featured: false,
    category: 'porcupine'
  },

  // Match Artworks (additional category in Others)
  {
    id: '37',
    title: 'Composition with Matches',
    slug: 'composition-with-matches',
    year: 2022,
    description: 'An experimental work using match sticks as a primary material, arranged in a careful composition that explores the relationship between industrial objects and artistic form.',
    medium: 'Matches on panel',
    dimensions: '30 x 40 cm',
    imagePath: '/2022/10/Nieuw-werk-lucifers-resten-JG-2022-30x40cm-1320x1720.jpg',
    featured: false,
    category: 'others'
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
