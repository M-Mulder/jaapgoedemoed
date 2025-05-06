# PowerShell script to rename artwork files to simpler names

# Create directories if they don't exist
$artworkDirs = @(
    "public/artworks/abstract",
    "public/artworks/paper",
    "public/artworks/figurative",
    "public/artworks/joyce",
    "public/artworks/porcupine",
    "public/artworks/youth"
)

foreach ($dir in $artworkDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Rename and copy files with complex names to simpler names
# Abstract artworks
Copy-Item "public/Large abstract Artworks 1990 - 20/Composition 2014, 100 x 100 cm.jpg" "public/artworks/abstract/composition-2014.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Composition-2017, 150 x150 slider.jpg" "public/artworks/abstract/composition-2017.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Changing pattern with relief I 1990, 100 x 100 cm.jpg" "public/artworks/abstract/changing-pattern-relief-1990.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png" "public/artworks/abstract/changing-tiling-wooden-plank-1990.png" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg" "public/artworks/abstract/division-plane-elements-1997.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Tuscan tiling I 1994, 165 x 165 cm.jpg" "public/artworks/abstract/tuscan-tiling-1994.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Composition with fixed center 1998, 100 x 100 cm.jpg" "public/artworks/abstract/composition-fixed-center-1998.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Composition 2018, 100x100 cm.jpg" "public/artworks/abstract/composition-2018.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg" "public/artworks/abstract/composition-open-structure-1999.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Disconnected Coptic tiling 1996, 150 x 150 cm.jpg" "public/artworks/abstract/disconnected-coptic-tiling-1996.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Disconnected tiling, old and modern 1997, 155 x 170 cm.jpg" "public/artworks/abstract/disconnected-tiling-old-modern-1997.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Division of the plane with unequal units 1996, 180 x 180 cm.jpg" "public/artworks/abstract/division-plane-unequal-units-1996.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Tiling with handwritings 1997, 135 x 145 cm.jpg" "public/artworks/abstract/tiling-handwritings-1997.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Changing pattern variations 1991, 150 x 150 cm.jpg" "public/artworks/abstract/changing-pattern-variations-1991.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg" "public/artworks/abstract/changing-pattern-opening-1990.jpg" -Force
Copy-Item "public/2022/10/Composition-no.2-29-sept-2022-om-14-1-scaled.jpg" "public/artworks/abstract/composition-no2-2022.jpg" -Force
Copy-Item "public/2022/10/Nieuw-werk-lucifers-resten-JG-2022-30x40cm-scaled.jpg" "public/artworks/abstract/composition-matches-2022.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Changing pattern with opening II 1991, 150 x 200 cm.jpg" "public/artworks/abstract/changing-pattern-opening-2-1991.jpg" -Force
Copy-Item "public/Large abstract Artworks 1990 - 20/Changing pattern with relief II 1990, 150 x 150 cm.jpg" "public/artworks/abstract/changing-pattern-relief-2-1990.jpg" -Force

# Paper artworks
Copy-Item "public/Old stock paper Artworks 2005 - 20/Chemin de Fer Lung-Tsing-U-Haï 2005, 40 x 50 cm.jpg" "public/artworks/paper/chemin-de-fer-2005.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm.jpg" "public/artworks/paper/tramways-iekaterinoslaw-2013.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Fabrication des Bouteilles à Odessa I 2005, 40 x 50 cm.jpg" "public/artworks/paper/fabrication-bouteilles-odessa-2005.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Les Tramways de Kiew 2013, 40 x 50 cm.jpg" "public/artworks/paper/tramways-kiew-2013.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Tramways d'Odessa II 2008, 40 x 50 cm.jpg" "public/artworks/paper/tramways-odessa-2008.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Chemin de Fer Lung-Tsing-U-Haï No. 2 2014, 40 x 50 cm.jpg" "public/artworks/paper/chemin-de-fer-2-2014.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Chemin de Fer-Lung-Tsing-U-Haï No. 3 2018, 40 x 50 cm.jpg" "public/artworks/paper/chemin-de-fer-3-2018.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Société d'Électricité d'Odessa 2006, 40 x 50 cm.jpg" "public/artworks/paper/societe-electricite-odessa-2006.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Société d'Etudes des Entreprises Russes 2007, 40 x 50 cm.jpg" "public/artworks/paper/societe-etudes-russes-2007.jpg" -Force
Copy-Item "public/Old stock paper Artworks 2005 - 20/Société Minière & Industrielle du Tamega 2017, 20.4 x 27.8 cm.png" "public/artworks/paper/societe-miniere-tamega-2017.png" -Force

# Figurative artworks
Copy-Item "public/Figurative Artworks 1980 -1989/Egyptian scene, with depth 1985, 125 x 90 cm.jpg" "public/artworks/figurative/egyptian-scene-depth-1985.jpg" -Force
Copy-Item "public/Figurative Artworks 1980 -1989/Egyptian scene, flat 1984, 120 x 85 cm.jpg" "public/artworks/figurative/egyptian-scene-flat-1984.jpg" -Force
Copy-Item "public/Youth Artworks/Lnging to the Lord 1980 oil on carton.jpg" "public/artworks/youth/longing-lord-1980.jpg" -Force
Copy-Item "public/Youth Artworks/The hungry bridegroom 1980 oil painting on carton.jpg" "public/artworks/youth/hungry-bridegroom-1980.jpg" -Force
Copy-Item "public/Figurative Artworks 1980 -1989/Portrait of Mondrian 1985, 100 x 100 cm.jpg" "public/artworks/figurative/portrait-mondrian-1985.jpg" -Force
Copy-Item "public/Figurative Artworks 1980 -1989/Mondrian skies 1985, 150 x 200 cm.jpg" "public/artworks/figurative/mondrian-skies-1985.jpg" -Force
Copy-Item "public/Figurative Artworks 1980 -1989/Egyptian Klee girl 1985, 140 x 60 cm.jpg" "public/artworks/figurative/egyptian-klee-girl-1985.jpg" -Force

# Porcupine artworks
Copy-Item "public/2022/03/Porcupine-I-5-March-2021-finale-werk-2048x2039.jpg" "public/artworks/porcupine/porcupine-1-2021.jpg" -Force
Copy-Item "public/2022/03/Porcupine-II-23-December-2021-2048x2048.jpg" "public/artworks/porcupine/porcupine-2-2021.jpg" -Force
Copy-Item "public/2022/03/Composition-2022-Procupine-Boogie-Woogie-II-scaled.jpg" "public/artworks/porcupine/porcupine-boogie-woogie-2022.jpg" -Force

# James Joyce artworks
Copy-Item "public/James Joyce Artworks/James Joyce 2004, 41 x 20 cm.jpg" "public/artworks/joyce/james-joyce-2004.jpg" -Force
Copy-Item "public/James Joyce Artworks/James-Joyce-&-Dublin-2007,-41-x-29-cm.jpg" "public/artworks/joyce/james-joyce-dublin-2007.jpg" -Force
Copy-Item "public/James Joyce Artworks/Portrait of James Joyce 1998, 40 x 50 cm.jpg" "public/artworks/joyce/portrait-james-joyce-1998.jpg" -Force
Copy-Item "public/James Joyce Artworks/Portret of James Joyce 1985, 22 x 29 cm.jpg" "public/artworks/joyce/portret-james-joyce-1985.jpg" -Force

Write-Host "Files renamed and copied to simplified structure in public/artworks/"
