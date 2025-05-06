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

// Comprehensive Artworks Collection - Including all artworks from all folders
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
    imagePath: '/Large abstract Artworks 1990 - 20/Composition 2014, 100 x 100 cm.jpg',
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
    imagePath: '/Large abstract Artworks 1990 - 20/Composition-2017, 150 x150 slider.jpg',
    featured: true,
    category: 'abstract'
  },
  {
    id: '4',
    title: 'Changing Pattern with Relief',
    slug: 'changing-pattern-with-relief',
    year: 1990,
    description: 'A textured work exploring pattern variations with dimensional relief elements that create visual complexity through shadows and form. The interplay of light across the relief surface creates an ever-changing visual experience.',
    medium: 'Mixed media on panel',
    dimensions: '100 x 100 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Changing pattern with relief I 1990, 100 x 100 cm.jpg',
    featured: true,
    category: 'abstract'
  },
  {
    id: '5',
    title: 'Changing Tiling on a Wooden Plank',
    slug: 'changing-tiling-wooden-plank',
    year: 1990,
    description: 'An elongated composition exploring the gradual transformation of geometric patterns across a horizontal plane. The work invites the viewer to observe how patterns evolve and interact across the composition.',
    medium: 'Mixed media on wood',
    dimensions: '60 x 200 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png',
    featured: false,
    category: 'abstract'
  },
  {
    id: '6',
    title: 'Division of the Plane with Various Elements',
    slug: 'division-of-the-plane-with-various-elements',
    year: 1997,
    description: 'An abstract geometric composition exploring the division of a two-dimensional plane using various shapes, colors and textures. The work creates a visual rhythm through the careful arrangement of compositional elements.',
    medium: 'Mixed media on canvas',
    dimensions: '160 x 160 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '7',
    title: 'Tuscan Tiling I',
    slug: 'tuscan-tiling-i',
    year: 1994,
    description: 'A geometric pattern study inspired by historic Italian tiling designs, reinterpreted through a contemporary minimalist aesthetic. The work connects traditional pattern-making with modern compositional approaches.',
    medium: 'Acrylic on canvas',
    dimensions: '165 x 165 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Tuscan tiling I 1994, 165 x 165 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '8',
    title: 'Composition with Fixed Center',
    slug: 'composition-with-fixed-center',
    year: 1998,
    description: 'A structured composition built around a stable central focal point, with geometric elements radiating outward in a balanced arrangement. The work creates a sense of stability and order while maintaining visual interest through color variation and textural elements.',
    medium: 'Mixed media on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Composition with fixed center 1998, 100 x 100 cm.jpg',
    featured: true,
    category: 'abstract'
  },
  {
    id: '9',
    title: 'Composition 2018',
    slug: 'composition-2018',
    year: 2018,
    description: 'A contemporary geometric composition that builds on the artist\'s exploration of spatial relationships and color harmony, creating a dynamic visual field that rewards extended viewing.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Composition 2018, 100x100 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '10',
    title: 'Composition with Open Structure',
    slug: 'composition-with-open-structure',
    year: 1999,
    description: 'A geometric abstraction featuring an open structure that creates a sense of space and movement across the canvas. The composition balances structured and spontaneous elements.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '11',
    title: 'Disconnected Coptic Tiling',
    slug: 'disconnected-coptic-tiling',
    year: 1996,
    description: 'A composition inspired by Coptic visual traditions, featuring a pattern of disconnected tiles that create a rhythmic abstraction of space and form.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Disconnected Coptic tiling 1996, 150 x 150 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '12',
    title: 'Disconnected Tiling Old and Modern',
    slug: 'disconnected-tiling-old-and-modern',
    year: 1997,
    description: 'A work that juxtaposes traditional and contemporary tiling patterns, creating a dialogue between historical and modern approaches to geometric abstraction.',
    medium: 'Mixed media on canvas',
    dimensions: '155 x 170 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Disconnected tiling, old and modern 1997, 155 x 170 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '13',
    title: 'Division of the Plane with Unequal Units',
    slug: 'division-of-the-plane-with-unequal-units',
    year: 1996,
    description: 'An exploration of spatial division using unequal geometric units, creating a dynamic tension between symmetry and asymmetry across the composition.',
    medium: 'Mixed media on canvas',
    dimensions: '180 x 180 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Division of the plane with unequal units 1996, 180 x 180 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '14',
    title: 'Tiling with Handwritings',
    slug: 'tiling-with-handwritings',
    year: 1997,
    description: 'A composition that integrates calligraphic elements with geometric tiling patterns, exploring the relationship between written language and abstract visual form.',
    medium: 'Mixed media on canvas',
    dimensions: '135 x 145 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Tiling with handwritings 1997, 135 x 145 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '15',
    title: 'Changing Pattern Variations',
    slug: 'changing-pattern-variations',
    year: 1991,
    description: 'A study of pattern transformations across a defined field, with subtle variations in color and form creating a sense of visual rhythm and progression.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 150 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Changing pattern variations 1991, 150 x 150 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '16',
    title: 'Changing Pattern with Opening I',
    slug: 'changing-pattern-with-opening-i',
    year: 1990,
    description: 'A geometric composition featuring a central opening that interrupts an evolving pattern, creating a focal point that draws the viewer into the composition.',
    medium: 'Mixed media on canvas',
    dimensions: '90 x 95 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '17',
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
  {
    id: '18',
    title: 'Composition with Matches',
    slug: 'composition-with-matches',
    year: 2022,
    description: 'An experimental work using match sticks as a primary material, arranged in a careful composition that explores the relationship between industrial objects and artistic form.',
    medium: 'Matches on panel',
    dimensions: '30 x 40 cm',
    imagePath: '/2022/10/Nieuw-werk-lucifers-resten-JG-2022-30x40cm-scaled.jpg',
    featured: false,
    category: 'others'
  },
  {
    id: '19',
    title: 'Changing Pattern with Opening II',
    slug: 'changing-pattern-with-opening-ii',
    year: 1991,
    description: 'A continuation of the artist\'s exploration of pattern interruption, with a more complex arrangement of forms and a larger scale that creates a more immersive viewing experience.',
    medium: 'Mixed media on canvas',
    dimensions: '150 x 200 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Changing pattern with opening II 1991, 150 x 200 cm.jpg',
    featured: false,
    category: 'abstract'
  },
  {
    id: '20',
    title: 'Changing Pattern with Relief II',
    slug: 'changing-pattern-with-relief-ii',
    year: 1990,
    description: 'A larger-scale exploration of textured pattern variations, with more complex relief elements creating a richer interplay of light and shadow across the composition.',
    medium: 'Mixed media on panel',
    dimensions: '150 x 150 cm',
    imagePath: '/Large abstract Artworks 1990 - 20/Changing pattern with relief II 1990, 150 x 150 cm.jpg',
    featured: false,
    category: 'abstract'
  },

  // Old stock paper Artworks 2005 - Present
  {
    id: '21',
    title: 'Chemin de Fer Lung Tsing U Hai',
    slug: 'chemin-de-fer',
    year: 2005,
    description: 'A mixed media composition integrating archival materials with contemporary artistic elements, exploring themes of travel, cultural exchange, and historical memory.',
    medium: 'Mixed media collage',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Chemin de Fer Lung-Tsing-U-Haï 2005, 40 x 50 cm.jpg',
    featured: true,
    category: 'paper'
  },
  {
    id: '22',
    title: 'Les Tramways d\'Iekaterinoslaw',
    slug: 'tramways-iekaterinoslaw',
    year: 2013,
    description: 'Part of the tram series, this work documents and artistically interprets the historic tram systems of Eastern Europe, combining documentary and aesthetic approaches.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Les Tramways d\'Iékaterinoslaw 2013, 40 x 50 cm.jpg',
    featured: true,
    category: 'paper'
  },
  {
    id: '23',
    title: 'Fabrication des Bouteilles à Odessa',
    slug: 'fabrication-bouteilles-odessa',
    year: 2005,
    description: 'A mixed media work that explores industrial heritage and manufacturing processes in Odessa, combining historical documentation with artistic interpretation.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Fabrication des Bouteilles à Odessa I 2005, 40 x 50 cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '24',
    title: 'Les Tramways de Kiew',
    slug: 'les-tramways-de-kiev',
    year: 2013,
    description: 'Part of the urban transit documentation series, this work captures the iconic tram systems of Kiev through a combination of historical documents and artistic interpretation.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Les Tramways de Kiew 2013, 40 x 50 cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '25',
    title: 'Tramways d\'Odessa',
    slug: 'tramways-d-odessa',
    year: 2008,
    description: 'A mixed media composition documenting the historic tram system of Odessa, integrating historical imagery with contemporary artistic expression.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Tramways d\'Odessa II 2008, 40 x 50 cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '26',
    title: 'Chemin de Fer Lung-Tsing-U-Haï No. 2',
    slug: 'chemin-de-fer-no-2',
    year: 2014,
    description: 'A continuation of the artist\'s exploration of historical railway documentation, with a more complex integration of archival materials and contemporary artistic elements.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Chemin de Fer Lung-Tsing-U-Haï No. 2 2014, 40 x 50 cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '27',
    title: 'Chemin de Fer-Lung-Tsing-U-Haï No. 3',
    slug: 'chemin-de-fer-no-3',
    year: 2018,
    description: 'The third in a series exploring historical railway documentation, with a more abstract approach to the integration of archival materials and contemporary artistic elements.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Chemin de Fer-Lung-Tsing-U-Haï No. 3 2018, 40 x 50 cm.jpg',
    featured: true,
    category: 'paper'
  },
  {
    id: '28',
    title: 'Société d\'Électricité d\'Odessa',
    slug: 'societe-electricite-odessa',
    year: 2006,
    description: 'A mixed media work exploring the industrial heritage of Odessa through historical documentation of its electrical infrastructure, combining archival materials with contemporary artistic expression.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Société d\'Électricité d\'Odessa 2006, 40 x 50 cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '29',
    title: 'Société d\'Etudes des Entreprises Russes',
    slug: 'societe-etudes-entreprises-russes',
    year: 2007,
    description: 'A mixed media composition exploring the history of Russian industrial enterprises through archival documentation, combining historical materials with contemporary artistic interpretation.',
    medium: 'Mixed media on paper',
    dimensions: '40 x 50 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Société d\'Etudes des Entreprises Russes 2007, 40 x 50 cm.jpg',
    featured: false,
    category: 'paper'
  },
  {
    id: '30',
    title: 'Société Minière & Industrielle du Tamega',
    slug: 'societe-miniere-industrielle-tamega',
    year: 2017,
    description: 'A mixed media work exploring the industrial heritage of mining operations through historical documentation, combining archival materials with contemporary artistic expression.',
    medium: 'Mixed media on paper',
    dimensions: '20.4 x 27.8 cm',
    imagePath: '/Old stock paper Artworks 2005 - 20/Société Minière & Industrielle du Tamega 2017, 20.4 x 27.8 cm.png',
    featured: true,
    category: 'paper'
  },

  // Figurative Artworks 1980-1989
  {
    id: '31',
    title: 'Egyptian Scene with Depth',
    slug: 'egyptian-scene-with-depth',
    year: 1985,
    description: 'A composition inspired by Egyptian artistic conventions but reinterpreted with spatial depth and dimensional perspective. This work represents an early exploration of how traditional visual languages can be reinterpreted through contemporary approaches.',
    medium: 'Oil on canvas',
    dimensions: '125 x 90 cm',
    imagePath: '/Figurative Artworks 1980 -1989/Egyptian scene, with depth 1985, 125 x 90 cm.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '32',
    title: 'Egyptian Scene Flat',
    slug: 'egyptian-scene-flat',
    year: 1984,
    description: 'A study of Egyptian visual language that maintains the traditional flatness of Egyptian art while introducing contemporary elements. This work reflects the artist\'s early interest in ancient aesthetic systems and their potential for contemporary expression.',
    medium: 'Oil on canvas',
    dimensions: '120 x 85 cm',
    imagePath: '/Figurative Artworks 1980 -1989/Egyptian scene, flat 1984, 120 x 85 cm.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '33',
    title: 'Longing to the Lord',
    slug: 'longing-to-the-lord',
    year: 1980,
    description: 'An early figurative work that explores spiritual themes through a fusion of representational and symbolic elements, created during the artist\'s formative period.',
    medium: 'Oil on carton',
    dimensions: '60 x 80 cm',
    imagePath: '/Youth Artworks/Lnging to the Lord 1980 oil on carton.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '34',
    title: 'The Hungry Bridegroom',
    slug: 'the-hungry-bridegroom',
    year: 1980,
    description: 'A figurative oil painting that combines narrative and symbolic elements, reflecting the artist\'s early interest in storytelling through visual imagery.',
    medium: 'Oil on carton',
    dimensions: '60 x 80 cm',
    imagePath: '/Youth Artworks/The hungry bridegroom 1980 oil painting on carton.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '35',
    title: 'Portrait of Mondrian',
    slug: 'portrait-of-mondrian',
    year: 1985,
    description: 'A portrait that reinterprets the iconic Dutch modernist through a contemporary lens, exploring the relationship between figuration and abstraction that characterized Mondrian\'s own artistic journey.',
    medium: 'Oil on canvas',
    dimensions: '100 x 100 cm',
    imagePath: '/Figurative Artworks 1980 -1989/Portrait of Mondrian 1985, 100 x 100 cm.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '36',
    title: 'Mondrian Skies',
    slug: 'mondrian-skies',
    year: 1985,
    description: 'A landscape-inspired composition that applies Mondrian\'s geometric principles to atmospheric phenomena, creating a dialogue between natural forms and abstract structural elements.',
    medium: 'Oil on canvas',
    dimensions: '150 x 200 cm',
    imagePath: '/Figurative Artworks 1980 -1989/Mondrian skies 1985, 150 x 200 cm.jpg',
    featured: false,
    category: 'figurative'
  },
  {
    id: '37',
    title: 'Egyptian Klee Girl',
    slug: 'egyptian-klee-girl',
    year: 1985,
    description: 'A figurative work that combines Egyptian visual conventions with the playful linear approach of Paul Klee, creating a cross-cultural dialogue between ancient and modern artistic languages.',
    medium: 'Oil on canvas',
    dimensions: '140 x 60 cm',
    imagePath: '/Figurative Artworks 1980 -1989/Egyptian Klee girl 1985, 140 x 60 cm.jpg',
    featured: false,
    category: 'figurative'
  },

  // Porcupine Artworks (additional category)
  {
    id: '38',
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
    id: '39',
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
    id: '40',
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

  // James Joyce Artworks
  {
    id: '41',
    title: 'James Joyce',
    slug: 'james-joyce',
    year: 2004,
    description: 'A portrait of the iconic modernist writer that explores the relationship between visual and literary expression, capturing Joyce\'s innovative approach to language and narrative.',
    medium: 'Mixed media',
    dimensions: '41 x 20 cm',
    imagePath: '/James Joyce Artworks/James Joyce 2004, 41 x 20 cm.jpg',
    featured: false,
    category: 'joyce'
  },
  {
    id: '42',
    title: 'James Joyce & Dublin',
    slug: 'james-joyce-dublin',
    year: 2007,
    description: 'A work that explores the relationship between Joyce and his native city, capturing the urban environment that played such a crucial role in the writer\'s literary imagination.',
    medium: 'Mixed media',
    dimensions: '41 x 29 cm',
    imagePath: '/James Joyce Artworks/James-Joyce-&-Dublin-2007,-41-x-29-cm.jpg',
    featured: false,
    category: 'joyce'
  },
  {
    id: '43',
    title: 'Portrait of James Joyce',
    slug: 'portrait-of-james-joyce',
    year: 1998,
    description: 'A portrait that captures the writer\'s distinctive features while also suggesting the complex interior world of his literary imagination.',
    medium: 'Mixed media',
    dimensions: '40 x 50 cm',
    imagePath: '/James Joyce Artworks/Portrait of James Joyce 1998, 40 x 50 cm.jpg',
    featured: false,
    category: 'joyce'
  },
  {
    id: '44',
    title: 'Portret of James Joyce',
    slug: 'portret-of-james-joyce',
    year: 1985,
    description: 'An early portrait of the writer that demonstrates the artist\'s longstanding interest in Joyce\'s literary innovations and their potential relationship to visual art.',
    medium: 'Mixed media',
    dimensions: '22 x 29 cm',
    imagePath: '/James Joyce Artworks/Portret of James Joyce 1985, 22 x 29 cm.jpg',
    featured: false,
    category: 'joyce'
  }
];

// Import existing exhibitions, photographs, etc. from placeholder-data.ts
// This ensures we don't lose any existing data
import { exhibitions, photographs, atelierInfo, biographyContent, artistStatement, processDescription, ethnographicInfluence } from './placeholder-data';
export { exhibitions, photographs, atelierInfo, biographyContent, artistStatement, processDescription, ethnographicInfluence };
