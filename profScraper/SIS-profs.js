const SIS_PROFS = [
    "Abdella, Beth",
    "Adhikari, Prabal",
    "Adolph, Alden",
    "Akimoto, Hiroe",
    "Al Atiyat, Ibtesam",
    "Alderks, Elisabeth",
    "Allister, Mark",
    "Amundson, Steven",
    "Ananda-Owens, Kathryn",
    "Anderegg, Francesca",
    "Anderson, Joshua",
    "Anderson, Scott",
    "Angell, Diane",
    "Armstrong, Anton",
    "Atzinger, Christopher",
    "Bader, Jennifer",
    "Bansah, Marcus",
    "Barbosa-Jerez, Mary",
    "Barjasteh, Jolene",
    "Barnes-Karol, Gwendolyn",
    "Bateza, Anthony",
    "Becker, Anthony",
    "Beckman, Patricia",
    "Beld, Jo",
    "Benson, Jessica",
    "Benson, Kristell",
    "Berliner, Adam",
    "Berry, Anne",
    "Beussman, Douglas",
    "Bi, Hui",
    "Billingsley, Tyler",
    "Binder, Seth",
    "Bjorklund, Brian",
    "Bobb, James",
    "Boehm, Laura",
    "Bolis, Amy",
    "Book, Cynthia",
    "Borovsky, Brian",
    "Bosch, Kelsey",
    "Bostwick, Christi",
    "Bouxsein, Hilary",
    "Bowers, Lisa",
    "Brandon, Miranda",
    "Brandwein, Rachel",
    "Bransford, Margaret",
    "Breckbill, Anne",
    "Brentrup, Jennifer",
    "Bretscher, Kathryn",
    "Brochman, Kevin",
    "Broner, Maggie",
    "Brown, Richard",
    "Bucciaglia, Nicolette",
    "Burk, Sarah",
    "Buzza, Timothy",
    "Cahoon, Kirsten",
    "Campbell, Heather",
    "Carlsen, Mary",
    "Carlson, Susan",
    "Carmes, Megan",
    "Carter, David",
    "Casson, Douglas",
    "Castro, David",
    "Chamseddine, Ali",
    "Chapp, Christopher",
    "Charlton, Norma",
    "Cherewatuk, Karen",
    "Chiappari, Christopher",
    "Cho, Grace",
    "Choi, Vivian",
    "Christie, Sian",
    "Cilizoglu, Menevis",
    "Cisar, Mary",
    "Claussen, Kurt",
    "Clift, Anna",
    "Clifton, Sara",
    "Cole, Eric",
    "Cole, Steven",
    "Conger, Andrea",
    "Coughlin, Jenna",
    "Crisp, Kevin",
    "Cropsey, Kris",
    "Cunningham, Arthur",
    "David, Marc",
    "Davila, Jaime",
    "DeFries, Brett",
    "Dell, Irve",
    "Demas, James",
    "Dickinson, Shelly",
    "Dietz, Jill",
    "Dixon, Jeffrey",
    "Dorer, Kari",
    "Dougherty, Ann",
    "Dowd, Adam",
    "Draxler, Bridget",
    "Dressen, Dan",
    "Dulkin, Ryan",
    "Dworsky, Shoshana",
    "Edwards, Paul",
    "Edwards, Todd",
    "Eichberger, Ryan",
    "Elhard, Julie",
    "Elias, Christopher",
    "Elsaesser, Carl",
    "Engbrecht, Jason",
    "Engleman, Tracey",
    "Epstein, Louis",
    "Epstein, Maglen",
    "Erickson, Anna",
    "Estenson, Kristine",
    "Feldt, Alison",
    "Figueroa-Ray, Kelly",
    "Fisher, Kathryne",
    "Fitzgerald, Michael",
    "Fleming, Justin",
    "Foster, Veronica",
    "Frary, Whitney",
    "Freedberg, Steven",
    "Fretland, Daniel",
    "Fruehling, Sara",
    "Fuerstein, Michael",
    "Fure-Slocum, Eric",
    "Fyfe, Charles",
    "Gallego, Carlos",
    "Garner, Leigh Ann",
    "Garrett, Kristina",
    "Giannini, John",
    "Gittins, Peter",
    "Glampe, Kathy",
    "Goedde, Richard",
    "Gonzalez, Wendy",
    "Goodwin, Tracy",
    "Gothmann, Anne",
    "Granquist, Kathy",
    "Grassle, Jenele",
    "Gray, Charles",
    "Greening, Brian",
    "Grenberg, Jeanine",
    "Gross, Dana",
    "Groth, Thea",
    "Groton, Anne",
    "Haecker, Arthur",
    "Hagen, Chloe",
    "Hahn, Steven",
    "Hakim Javadi, Nooshin",
    "Hall-Holt, Olaf",
    "Hansen, Peter",
    "Hanson, Bruce",
    "Hanson, James",
    "Hanson, Marit",
    "Hanson, Robert",
    "Harris, Colin",
    "Hatting, Kayla",
    "Hauck, Robert",
    "Hawkins, Christie",
    "Hazlett, Emily",
    "Hazlett, Eric",
    "Heath, Theresa",
    "Heidgerken, Benjamin",
    "Helms, Kyle",
    "Hensrud, Tammy",
    "Hepburn, Joan",
    "Hey, Philip",
    "Hibbard, Therees",
    "Hill Cosimini,",
    "Hodel, Martin",
    "Hodgson, Ashley",
    "Hofrenning, Daniel",
    "Holbein, Jennifer",
    "Holt, Ketty",
    "Howe, Timothy",
    "Huehn, Susan",
    "Huff, Charles",
    "Hughes, Kathleen",
    "Humke, Paul",
    "Humm, Courtney",
    "Hupton, Tara",
    "Iddrisu, Abdulai",
    "Isomura, Eri",
    "Ito, Rika",
    "Jackson, Paul",
    "Jacobi, Nathan",
    "Jensen, Elizabeth",
    "Jessup, David",
    "Johnson, Ida",
    "Johnson, Kenneth",
    "Johnson, Susie",
    "Johnston, PJ",
    "Joiner, Cassandra",
    "Jorgenson, Kiara",
    "Jothen, Peder",
    "Judge, Rebecca",
    "Kandl, Kimberly",
    "Kanewischer, Erica",
    "Kehrwald, Kristi",
    "Kheshgi, Rehanna",
    "Killackey, Sean",
    "Kim, April",
    "King, Bruce",
    "Klopchin, Heather",
    "Knobel-Piehl, Laura",
    "Kolan, Amy",
    "Kosmoski, Daniel",
    "Kruse, Dale",
    "Kucera, Karil",
    "Kuehn, Mary",
    "Kumagai, Natsuki",
    "Kunene, Thando",
    "Kutulas, Judy",
    "Kuxhausen, Anna",
    "Kwon Dobbs, Jennifer",
    "LaFond-Hudson, Sophia",
    "Lagerquist, L. DeAne",
    "Lane-Getaz, Sharon",
    "Larsen, Amy",
    "Lazaro Trujillo, Maria Nayeli",
    "LeBlanc, Diane",
    "Lee, Jerry",
    "Lee, Norman",
    "Leer, Elizabeth",
    "Lehmann, Carl",
    "Leonard, Courtney",
    "Lindley, Stephen",
    "Listenberger, Laura",
    "Loebach, Jeremy",
    "Longwich, Stacey",
    "Lott, Anthony",
    "Luckraft, Katie",
    "Luedtke, Allison",
    "Maeda, Dana",
    "Mahr, Jill",
    "Mahr, Timothy",
    "Malmgren, Jodi",
    "Marahatta, Ram",
    "Marino, Gordon",
    "Marlier, Elodie",
    "Marsalek, Karen",
    "Marsh, Jason",
    "Martagon-Geiger, Melody",
    "Martin, Connie",
    "Martinson, Kirk",
    "Math, Jonna",
    "Matsuura, Ryota",
    "Mbele, Joseph",
    "McBride-Harris, Jenna",
    "McClung, James",
    "McClure, Robert",
    "McComb, Sophia",
    "McCullough, Colleen",
    "McDonald, Matthew",
    "McKeel, James",
    "McKelvey, Steven",
    "McMillan, Donna",
    "Medina-Vilarino, Kristina",
    "Melby, Alyssa",
    "Mendez, Melissa",
    "Merritt, Adrienne",
    "Merritt, Justin",
    "Moeller, Johnathan",
    "Mohl, Emily",
    "Mokdad, Linda",
    "Montgomery, Stephanie",
    "Moore, Leslie",
    "Mooy, Anna",
    "Moreno-Diaz, Maria",
    "Morisette, Sandra",
    "Mugabe, Douglas",
    "Muir, Gary",
    "Munoz-Hutchinson, Danny",
    "Muth, Gregory",
    "Nagamatsu, Jeremy",
    "Naito, Jonathan",
    "Narvaez, Leon",
    "Neal, Diana",
    "Nelson, Daniel",
    "Nelson, Jane",
    "Nelson, Peter",
    "Nesbit, Scott",
    "Nordfjord, Bjorn",
    "O'Conner, Jonathan",
    "Odell, Margaret",
    "Ousley, Paul",
    "Paddleford, Nancy",
    "Pate, SooJin",
    "Patterson, Juliet",
    "Paul, Jason",
    "Pearce, Anna",
    "Perron, Kristen",
    "Peterson, Ericka",
    "Petok, Jessica",
    "Pettitt, Beth",
    "Pfarr-Baker, Rosemary",
    "Pinto-Handler, Sergio",
    "Plemons, Don",
    "Pollard, Vernon",
    "Porterfield, Jean",
    "Prehall, Andrew",
    "Quimby, Joanne",
    "Rainey, Timothy",
    "Rambachan, Anantanand",
    "Ramirez, Catherine",
    "Randall, Amanda",
    "Reece, Steve",
    "Reed, Barbara",
    "Richardson, Brandt",
    "Richey, Matthew",
    "Ripley, Jason",
    "Rives, Hawken",
    "Roback, Paul",
    "Roberts, Anthony",
    "Roberts, Janice",
    "Roberts, William",
    "Robinson, Marc",
    "Rodland, Catherine",
    "Roith, Joseph",
    "Rudd, Anthony",
    "Ryan, Hannah",
    "Sanchez Gonzalez, Rodrigo",
    "Sanford, James",
    "Sannes, Paula",
    "Santurri, Edmund",
    "Saurer, John",
    "Schalliol, David",
    "Schillinger, Jamie",
    "Schmid, Caitlin",
    "Schmidt, Bryan",
    "Scholz-Carlson, Miriam",
    "Schroeder, Nanette",
    "Schwehn, Kaethe",
    "Schwinefus, Jeffrey",
    "Scopatz, Dana",
    "Selinsky, Peter",
    "Shaiman, Jennifer",
    "Shea, Kathleen",
    "Shealer, Bryan",
    "Sheppard, Ryan",
    "Shih, Hsiang-Lin",
    "Shimota, Eileen",
    "Shows Jr.,",
    "Smalling, Susan",
    "Smith, Kay",
    "Sonnega, William",
    "Sortor, Marci",
    "Sparks, Jillian",
    "Spiker, Christina",
    "Steed, Kathryn",
    "Stephens, Emery",
    "Strichartz, Ariel",
    "Sundby, Mark",
    "Svynarenko, Anton",
    "Swain, Corliss",
    "Swanson, Kathryn",
    "Swedin, Rachel",
    "Taliaferro, Charles",
    "Tanksley, Jason",
    "Tcacenco, Andrei",
    "Tegtmeyer Pak,",
    "Tegtmeyer, Judith",
    "Thalhammer, Kristina",
    "Thompson, Nancy",
    "Thresher, Tanya",
    "Titus, Mary",
    "Trull, Mary",
    "Tuley, Katherine",
    "Umbanhowar, Charles",
    "Veltri, Carlo",
    "Vendetti, Maria",
    "von Bibra, Anne",
    "Vosburg, Nora",
    "Walczak, Mary",
    "Wall, Travis",
    "Walmsley, David",
    "Walter, Anne",
    "Walter, Gregory",
    "Wambheim, Bruce",
    "Ward, Sean",
    "Watson, Jill",
    "Weeks, Michon",
    "Wells, Colin",
    "Westler, Brendon",
    "Whitman, Peter",
    "Wilkerson, Karen",
    "Williams, Arneshia",
    "Williamson, Thomas",
    "Wilson, Charles",
    "Wilson, Karen",
    "Woida, Charles",
    "Wondemagegnehu, Tesfa",
    "Wong, Ka",
    "Wood, Adam",
    "Wright, Matthew",
    "Wright, Robin",
    "Yoshioka-Maxwell, Olivia",
    "Zhou, Ying",
    "Ziegler, Kathryn",
];
module.exports = SIS_PROFS;
