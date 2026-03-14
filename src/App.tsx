import { useState, useMemo, useRef, useEffect, useCallback } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────
const BRANCHES = [
  {
    id: "b1",
    name: "Ipapo Enoh Okagbare",
    late: true,
    children: [
      {
        id: "b1c1",
        name: "Queen Onome Osakuni",
        children: [{ id: "b1c1g1", name: "Efe Jnr Eyefia" }],
      },
    ],
  },
  {
    id: "b2",
    name: "Ipapo Atsebinoma Ogefere",
    late: true,
    children: [
      {
        id: "b2c1",
        name: "Comfort Ukueku",
        late: true,
        children: [
          {
            id: "b2c1g1",
            name: "Victoria Eduiyovwiri",
            children: [
              { id: "b2c1g1a", name: "Adeiza Eduiyovwiri" },
              { id: "b2c1g1b", name: "Oghenueruona Ediyovwiri" },
              { id: "b2c1g1c", name: "Oghenetega Ediyovwiri" },
              { id: "b2c1g1d", name: "Akpobo Ediyovwiri" },
              { id: "b2c1g1e", name: "Jakpo Eduiyovwiri" },
            ],
          },
          { id: "b2c1g2", name: "Peters Oghenejobo" },
          { id: "b2c1g3", name: "Joyce Oghenejobo" },
          {
            id: "b2c1g4",
            name: "Marian Abraham",
            children: [
              { id: "b2c1g4a", name: "Oghenetega Abraham" },
              { id: "b2c1g4b", name: "Timmy Abraham" },
              { id: "b2c1g4c", name: "Tare Abraham" },
            ],
          },
          {
            id: "b2c1g5",
            name: "Nyerhovwo Ukueku",
            children: [
              { id: "b2c1g5a", name: "Bernice Ukueku" },
              { id: "b2c1g5b", name: "Olivia Ukueku" },
              { id: "b2c1g5c", name: "Benjamin Ukueku" },
              { id: "b2c1g5d", name: "Ejiro Ukueku" },
              { id: "b2c1g5e", name: "Lucie Ukueku" },
            ],
          },
          {
            id: "b2c1g6",
            name: "Kevwe Lucky Ukueku",
            children: [
              { id: "b2c1g6a", name: "Movie Ukueku" },
              { id: "b2c1g6b", name: "Eguono Ukueku" },
              { id: "b2c1g6c", name: "Nayoma Ukueku" },
              { id: "b2c1g6d", name: "Mira Ukueku" },
              { id: "b2c1g6e", name: "Nomare Ukueku" },
              { id: "b2c1g6f", name: "Jermayne Ukueku" },
              { id: "b2c1g6g", name: "Daniel Ukueku" },
              { id: "b2c1g6h", name: "Gideon Ukueku" },
            ],
          },
          { id: "b2c1g7", name: "Rhoro Ukueku" },
          { id: "b2c1g8", name: "Efe Ukueku" },
        ],
      },
      {
        id: "b2c2",
        name: "Otovwe Ozizi",
        children: [
          { id: "b2c2a", name: "Veanna Ozizi" },
          { id: "b2c2b", name: "Jasmine Ozizi" },
          { id: "b2c2c", name: "Jayna Ozizi" },
        ],
      },
      {
        id: "b2c3",
        name: "Wilson Ogefere",
        children: [
          {
            id: "b2c3a",
            name: "Obukohwo Ogefere",
            children: [{ id: "b2c3aa", name: "Oghenerhona Ogefere" }],
          },
          {
            id: "b2c3b",
            name: "Frances Ogefere-Dell",
            children: [{ id: "b2c3ba", name: "Oghenekevwe Dell" }],
          },
          {
            id: "b2c3c",
            name: "Atare Alexander",
            children: [
              { id: "b2c3ca", name: "Ofori Alexander" },
              { id: "b2c3cb", name: "Erhiere Alexander" },
            ],
          },
          {
            id: "b2c3d",
            name: "Odjuvwuederie Ogefere",
            children: [
              { id: "b2c3da", name: "Orho Simon" },
              { id: "b2c3db", name: "Igho Simon" },
              { id: "b2c3dc", name: "Isio Simon" },
              { id: "b2c3dd", name: "Tefetemo" },
            ],
          },
          { id: "b2c3e", name: "Ufuoma Ogefere" },
          { id: "b2c3f", name: "Pricillia Ogefere" },
          { id: "b2c3g", name: "Rocksea Ogefere" },
        ],
      },
      {
        id: "b2c4",
        name: "Ovomairaini Oteri",
        children: [
          {
            id: "b2c4a",
            name: "Oghenovo Akpomeimei",
            children: [{ id: "b2c4aa", name: "Efeoghene Akpomeimiei" }],
          },
          { id: "b2c4b", name: "Ogheneruemu Oteri" },
          {
            id: "b2c4c",
            name: "Onoriode Abiola",
            children: [
              { id: "b2c4ca", name: "Ogheneochuko Abiola" },
              { id: "b2c4cb", name: "Taiwo Abiola" },
              { id: "b2c4cc", name: "Kehinde Abiola" },
              { id: "b2c4cd", name: "Idowu Abiola" },
            ],
          },
          { id: "b2c4d", name: "Mudiaga Oteri" },
          { id: "b2c4e", name: "Onajite Oteri" },
          { id: "b2c4f", name: "Ejiro Oteri" },
          { id: "b2c4g", name: "Ebuobosa Oteri" },
          { id: "b2c4h", name: "Akpobome Oteri" },
        ],
      },
      {
        id: "b2c5",
        name: "Stephen Ogefere",
        late: true,
        children: [
          {
            id: "b2c5a",
            name: "Cynthia Edejoro",
            children: [
              { id: "b2c5aa", name: "Eguono" },
              { id: "b2c5ab", name: "Aghogho" },
              { id: "b2c5ac", name: "Oghenegara Edejoro" },
              { id: "b2c5ad", name: "Oghenesuvwe Edejoro" },
              { id: "b2c5ae", name: "Ogheneyoma Edejoro" },
            ],
          },
          {
            id: "b2c5b",
            name: "Sandra Edoja",
            children: [
              { id: "b2c5ba", name: "Ogheneruona Edoja" },
              { id: "b2c5bb", name: "Baby 1" },
              { id: "b2c5bc", name: "Baby 2" },
            ],
          },
          { id: "b2c5c", name: "Precious Ogefere" },
          { id: "b2c5d", name: "George Ogefere" },
          { id: "b2c5e", name: "Princess Ogefere" },
          { id: "b2c5f", name: "Sylvester Ogefere" },
        ],
      },
      {
        id: "b2c6",
        name: "Arigho Eyetan",
        children: [
          {
            id: "b2c6a",
            name: "Henry Affun",
            late: true,
            children: [
              { id: "b2c6aa", name: "Oghenebrume Affun" },
              { id: "b2c6ab", name: "Ogheneruna Affun" },
              { id: "b2c6ac", name: "Oghenevwegba Affun" },
              { id: "b2c6ad", name: "Ogheneobukome Affun" },
            ],
          },
          {
            id: "b2c6b",
            name: "Juliette Osiowho",
            children: [
              { id: "b2c6ba", name: "Oghenemaro Osiowho" },
              { id: "b2c6bb", name: "Oghenetejiri Osiowho" },
              { id: "b2c6bc", name: "Jesuome Osiowho" },
              { id: "b2c6bd", name: "Jesufome Osiowho" },
            ],
          },
          {
            id: "b2c6c",
            name: "Ogheneriobororuo Ebriere",
            children: [
              { id: "b2c6ca", name: "Ogheneyoma Ebirere" },
              { id: "b2c6cb", name: "Onome Ebirere" },
              { id: "b2c6cc", name: "Obaro Ebirere" },
            ],
          },
          {
            id: "b2c6d",
            name: "Emuejevoke Eyetan",
            children: [
              { id: "b2c6da", name: "Efemena Eyetan" },
              { id: "b2c6db", name: "Efe Eyetan" },
              { id: "b2c6dc", name: "Limuel Eyetan" },
              { id: "b2c6dd", name: "Merry Eyetan" },
              { id: "b2c6de", name: "Aghogho Eyetan" },
            ],
          },
          { id: "b2c6e", name: "Oghenetega Eyetan" },
        ],
      },
      {
        id: "b2c7",
        name: "Edward Ogefere",
        children: [
          { id: "b2c7a", name: "Erhime Oghefere" },
          { id: "b2c7b", name: "Igho Ogefere" },
          {
            id: "b2c7c",
            name: "Oghenevwarho Awhotu",
            children: [{ id: "b2c7ca", name: "Kyan Awhotu" }],
          },
          { id: "b2c7d", name: "Uvie Ogefere" },
          { id: "b2c7e", name: "Astebinoma Ogefere" },
        ],
      },
      {
        id: "b2c8",
        name: "Odiverere Money",
        children: [
          { id: "b2c8a", name: "Aghogho Money" },
          { id: "b2c8b", name: "Efeturi Money" },
          { id: "b2c8c", name: "Oghenekohwo Money" },
          { id: "b2c8d", name: "Oghenesuvwe Money" },
          { id: "b2c8e", name: "Avwerosuoghene Money" },
        ],
      },
      {
        id: "b2c9",
        name: "Godspower Ogefere",
        late: true,
        children: [
          { id: "b2c9a", name: "Jessie Ogefere" },
          { id: "b2c9b", name: "Jermaine Ogefere" },
          { id: "b2c9c", name: "Jennifer Ogefere" },
        ],
      },
    ],
  },
  {
    id: "b3",
    name: "Ipapo Oke Agnes",
    late: true,
    children: [
      {
        id: "b3c1",
        name: "Martin Ashegba-Edewor",
        children: [
          {
            id: "b3c1a",
            name: "Tony Ashegba-Edewor",
            late: true,
            children: [
              { id: "b3c1aa", name: "Vuriri Ashegba-Edewor" },
              { id: "b3c1ab", name: "Great Ashegba-Edewor" },
              { id: "b3c1ac", name: "Stephanie Ashegba-Edewor" },
              { id: "b3c1ad", name: "Edjime Ashegba-Edewor" },
            ],
          },
          { id: "b3c1b", name: "Eguono Ashegba-Edewor" },
          { id: "b3c1c", name: "Derie Ashegba-Edewor" },
          { id: "b3c1d", name: "Owhobeno Ashegba-Edewor" },
          { id: "b3c1e", name: "Obe" },
          { id: "b3c1f", name: "Onoriode" },
        ],
      },
      { id: "b3c2", name: "Oberhiri Ashegba-Edewor" },
      { id: "b3c3", name: "Onoriode Ashegba-Edewor" },
      { id: "b3c4", name: "Ogaga Ashegba-Edewor" },
      {
        id: "b3c5",
        name: "Godwin Agege",
        late: true,
        children: [
          {
            id: "b3c5a",
            name: "Ufuoma Gift Isiakpere",
            children: [
              { id: "b3c5aa", name: "Isio Agege" },
              { id: "b3c5ab", name: "Eseoghene Agege" },
            ],
          },
          { id: "b3c5b", name: "Odibo Agege" },
          { id: "b3c5c", name: "Sylvester Agege" },
          { id: "b3c5d", name: "Emuobo Agege" },
          { id: "b3c5e", name: "Voke Agege" },
          { id: "b3c5f", name: "Onoriode Agege" },
          { id: "b3c5g", name: "Edesiri Agege" },
        ],
      },
      {
        id: "b3c6",
        name: "Francis Omo-Agege",
        children: [
          {
            id: "b3c6a",
            name: "Precious Omo-Agege",
            children: [
              { id: "b3c6aa", name: "Thekla Omo-Agege" },
              { id: "b3c6ab", name: "Thelma Omo-Agege" },
              { id: "b3c6ac", name: "Leslie Omo-Agege" },
              { id: "b3c6ad", name: "Tehila Omo-Agege" },
            ],
          },
          { id: "b3c6b", name: "Hwive Progress Omo-Agege" },
          { id: "b3c6c", name: "Solomon Agege" },
          { id: "b3c6d", name: "Avwerosuoghene Omo-Agege" },
          { id: "b3c6e", name: "Oghenevwogaga Omo-Agege" },
          { id: "b3c6f", name: "Dearest Omo-Agege" },
        ],
      },
      {
        id: "b3c7",
        name: "Patience Ebun Enaworu",
        children: [
          { id: "b3c7a", name: "Sylvester Agege" },
          { id: "b3c7b", name: "Oghenefejiro Enaworu" },
          { id: "b3c7c", name: "Ochuko Enaworu" },
          { id: "b3c7d", name: "Otega Enaworu" },
          { id: "b3c7e", name: "Oghenemine Enaworu" },
          { id: "b3c7f", name: "Oghenevuewero Enaworu" },
        ],
      },
      { id: "b3c8", name: "Senior Owe" },
      { id: "b3c9", name: "Junior Kehinde Owe" },
      {
        id: "b3c10",
        name: "Florence Enajero",
        children: [
          { id: "b3c10a", name: "Emovigho Enajero" },
          { id: "b3c10b", name: "Oghenerukevwe Enajero" },
          { id: "b3c10c", name: "Deborah Enajero" },
          { id: "b3c10d", name: "Issachra Enajero" },
        ],
      },
      { id: "b3c11", name: "Patricia Owe" },
    ],
  },
  {
    id: "b4",
    name: "Ipapo Otemu James Omo-Agege",
    children: [
      {
        id: "b4c1",
        name: "Edith Shittu",
        children: [
          { id: "b4c1a", name: "Rhona" },
          {
            id: "b4c1b",
            name: "Ogheneovo Akakabota",
            children: [{ id: "b4c1ba", name: "Keilah Akakabota" }],
          },
          { id: "b4c1c", name: "Oghenekevwe Akakabota" },
          {
            id: "b4c1d",
            name: "Ovigwe Momoh",
            children: [
              { id: "b4c1da", name: "Kikachukwu Momoh" },
              { id: "b4c1db", name: "Kiyichukwu Momoh" },
            ],
          },
          { id: "b4c1e", name: "Oghenegare" },
          {
            id: "b4c1f",
            name: "Oghenemine John",
            children: [
              { id: "b4c1fa", name: "Christina John" },
              { id: "b4c1fb", name: "Christobel John" },
              { id: "b4c1fc", name: "Chrisa John" },
              { id: "b4c1fd", name: "John Jnr" },
              { id: "b4c1fe", name: "Joel John" },
            ],
          },
          { id: "b4c1g", name: "Juwe Shittu" },
        ],
      },
      {
        id: "b4c2",
        name: "Regina Omo-Agege",
        children: [
          {
            id: "b4c2a",
            name: "Jennifer Kporharor",
            children: [
              { id: "b4c2aa", name: "Oghenemine Kporharor" },
              { id: "b4c2ab", name: "Muyiwa Agbebi" },
              { id: "b4c2ac", name: "Fejiro Amam" },
            ],
          },
          {
            id: "b4c2b",
            name: "Eruvwu Oghenejode",
            children: [{ id: "b4c2ba", name: "Emeoghene Kome-Messiri" }],
          },
          {
            id: "b4c2c",
            name: "Mavueya Onamusi",
            children: [
              { id: "b4c2ca", name: "Boladele Onamusi" },
              { id: "b4c2cb", name: "Temiola Onamusi" },
              { id: "b4c2cc", name: "Eyiola Onamusi" },
              { id: "b4c2cd", name: "Erin" },
            ],
          },
        ],
      },
      {
        id: "b4c3",
        name: "Charles Omo-Agege",
        children: [
          { id: "b4c3a", name: "Efe Omo-Agege" },
          { id: "b4c3b", name: "Ejiro Omo-Agege" },
          { id: "b4c3c", name: "Ese Omo-Agege" },
        ],
      },
      {
        id: "b4c4",
        name: "Esther Agbonifo",
        children: [
          {
            id: "b4c4a",
            name: "Oghenerhona Agbonifo",
            children: [
              { id: "b4c4aa", name: "Aghogho Agbonifo" },
              { id: "b4c4ab", name: "Oghenemega Agbonifo" },
              { id: "b4c4ac", name: "Isio Agbonifo" },
            ],
          },
          { id: "b4c4b", name: "Oghenero Agbonifo" },
        ],
      },
      {
        id: "b4c5",
        name: "Ovie Omo-Agege",
        children: [
          {
            id: "b4c5a",
            name: "Ufuoma Omo-Agege",
            children: [
              { id: "b4c5aa", name: "Zaniyah Omo-Agege" },
              { id: "b4c5ab", name: "Makayla Omo-Agege" },
              { id: "b4c5ac", name: "Madison Omo-Agege" },
            ],
          },
          { id: "b4c5b", name: "Ovie Jnr Omo-Agege" },
          { id: "b4c5c", name: "Ese Omo-Agege" },
          { id: "b4c5d", name: "Micheal Omo-Agege" },
          { id: "b4c5e", name: "Tega Omo-Agege" },
        ],
      },
      {
        id: "b4c6",
        name: "Victor Omo-Agege",
        children: [
          { id: "b4c6a", name: "Chedaria Omo-Agege" },
          { id: "b4c6b", name: "John Omo-Agege" },
          { id: "b4c6c", name: "Siera Omo-Agege" },
        ],
      },
      {
        id: "b4c7",
        name: "Azania Omo-Agege",
        children: [
          { id: "b4c7a", name: "Azania Girl" },
          { id: "b4c7b", name: "Cecilia Omo-Agege" },
        ],
      },
      {
        id: "b4c8",
        name: "Jimmy Omo-Agege",
        children: [
          { id: "b4c8a", name: "Zane Omo-Agege" },
          { id: "b4c8b", name: "Asher Omo-Agege" },
        ],
      },
    ],
  },
  {
    id: "b5",
    name: "Igwebere Odemerho",
    children: [
      {
        id: "b5c1",
        name: "Helen Odiete",
        children: [
          {
            id: "b5c1a",
            name: "Faith Zebu",
            children: [{ id: "b5c1aa", name: "Adele Zebu" }],
          },
          {
            id: "b5c1b",
            name: "Efe Aghojare",
            children: [
              { id: "b5c1ba", name: "Kevin Aghojare" },
              { id: "b5c1bb", name: "Daniel Aghojare" },
            ],
          },
          { id: "b5c1c", name: "Kingsley Aghojare" },
          { id: "b5c1d", name: "Blessing Aghojare" },
          { id: "b5c1e", name: "Gloria Abimbola" },
          {
            id: "b5c1f",
            name: "Lovette Okomaraye",
            children: [{ id: "b5c1fa", name: "Nadia Okomaraye" }],
          },
        ],
      },
      {
        id: "b5c2",
        name: "Felicia Odiete",
        children: [{ id: "b5c2a", name: "Odia Ayewo" }],
      },
      {
        id: "b5c3",
        name: "Mercy Inikori",
        children: [
          { id: "b5c3a", name: "Tejiri Nikoro" },
          { id: "b5c3b", name: "Avwerosuo Nikoro" },
        ],
      },
      {
        id: "b5c4",
        name: "Jesurukevwe Tina",
        children: [
          { id: "b5c4a", name: "Oghogho Odige" },
          { id: "b5c4b", name: "Osasovwen Odige" },
          { id: "b5c4c", name: "Jnr Odige" },
        ],
      },
      {
        id: "b5c5",
        name: "Onoghereme Akpojotor",
        children: [{ id: "b5c5a", name: "Joke Akpojotor" }],
      },
      {
        id: "b5c6",
        name: "Onajite Erhiyamremu",
        children: [
          { id: "b5c6a", name: "Fejiro Eriyamramu" },
          { id: "b5c6b", name: "Oghenenyewhro Eriyamramu" },
          { id: "b5c6c", name: "Angel Eriyamramu" },
        ],
      },
    ],
  },
  {
    id: "b6",
    name: "Ipapo Daniel Edemayibo",
    children: [
      {
        id: "b6c1",
        name: "Clement Ede-Agege",
        children: [
          { id: "b6c1a", name: "Oteheri Ede-Agege" },
          { id: "b6c1b", name: "Rukevwe Ede-Agege" },
          { id: "b6c1c", name: "Sandra Ede-Agege" },
        ],
      },
      { id: "b6c2", name: "Imoni Agege" },
      {
        id: "b6c3",
        name: "Oghenovo Agege",
        children: [
          { id: "b6c3a", name: "Oghenetejiri Agege" },
          { id: "b6c3b", name: "Oghenovo Agege" },
        ],
      },
      {
        id: "b6c4",
        name: "Osevwe Sampson",
        children: [
          { id: "b6c4a", name: "Jesse Dugbo" },
          { id: "b6c4b", name: "Megan Dugbo" },
          { id: "b6c4c", name: "Daniel Sampson" },
          { id: "b6c4d", name: "Declan Sampson" },
        ],
      },
      {
        id: "b6c5",
        name: "Emmanuel Agege",
        children: [{ id: "b6c5a", name: "Alice Agege" }],
      },
      {
        id: "b6c6",
        name: "Erhisue Agege",
        children: [
          { id: "b6c6a", name: "King Agege" },
          { id: "b6c6b", name: "Otivere Agege" },
          { id: "b6c6c", name: "Boy" },
          { id: "b6c6d", name: "Tony Agege" },
        ],
      },
      {
        id: "b6c7",
        name: "Lovette Okotete",
        children: [
          { id: "b6c7a", name: "Blessing Esiri-Okotete" },
          { id: "b6c7b", name: "Oghenerukevwe Esiri-Okotete" },
        ],
      },
      {
        id: "b6c8",
        name: "Micheal Ede-Agege",
        children: [
          {
            id: "b6c8a",
            name: "Maro",
            children: [
              { id: "b6c8aa", name: "Maro" },
              { id: "b6c8ab", name: "Tejiri" },
              { id: "b6c8ac", name: "Ochuko" },
            ],
          },
          { id: "b6c8b", name: "Girl" },
        ],
      },
      {
        id: "b6c9",
        name: "Collins Ede-Agege",
        children: [
          {
            id: "b6c9a",
            name: "Oyovwe-Abigail",
            children: [{ id: "b6c9aa", name: "Girl" }],
          },
          { id: "b6c9b", name: "Ruona" },
        ],
      },
      {
        id: "b6c10",
        name: "Yoma Ede-Agege",
        children: [{ id: "b6c10a", name: "Chasim" }],
      },
      { id: "b6c11", name: "Vwede Ede-Agege" },
      { id: "b6c12", name: "Ipapo Ede-Agege" },
    ],
  },
  {
    id: "b7",
    name: "Igwebere George",
    children: [
      {
        id: "b7c1",
        name: "Ese Dupe Adegbile",
        children: [
          { id: "b7c1a", name: "Jide Adegbile" },
          { id: "b7c1b", name: "Micheal Adegbile" },
          { id: "b7c1c", name: "Maria Ogunbode" },
          { id: "b7c1d", name: "Dele Adegbile" },
          { id: "b7c1e", name: "Joseph Adegbile" },
          { id: "b7c1f", name: "Tope Adegbile" },
        ],
      },
      {
        id: "b7c2",
        name: "Chief Georgeson Agege",
        children: [
          { id: "b7c2a", name: "Oghenetega Agege" },
          { id: "b7c2b", name: "Ogheneyoma Agege" },
          { id: "b7c2c", name: "Aghogho Agege" },
          { id: "b7c2d", name: "Yajo Agege" },
        ],
      },
      {
        id: "b7c3",
        name: "Omonigho Robert Agege",
        children: [
          { id: "b7c3a", name: "Kevwe Agege" },
          { id: "b7c3b", name: "Mine Agege" },
          { id: "b7c3c", name: "Sarah Agege" },
        ],
      },
      {
        id: "b7c4",
        name: "Oberhiri Odubayo",
        children: [
          { id: "b7c4a", name: "Bolu Odubayo" },
          { id: "b7c4b", name: "Busola Odubayo" },
          { id: "b7c4c", name: "Bunmi Odubayo" },
          { id: "b7c4d", name: "Bami Odubayo" },
        ],
      },
      {
        id: "b7c5",
        name: "Tobore Ojumah",
        children: [
          {
            id: "b7c5a",
            name: "Oghenerukevwe Ojumah",
            children: [
              { id: "b7c5aa", name: "Danielle Ojumah" },
              { id: "b7c5ab", name: "Minne Ojumah" },
              { id: "b7c5ac", name: "Jason Ojumah" },
              { id: "b7c5ad", name: "Emery Ojumah" },
            ],
          },
          { id: "b7c5b", name: "Ufuomah Ojumah" },
          {
            id: "b7c5c",
            name: "Naomi Eferakeya",
            children: [{ id: "b7c5ca", name: "Ujiro Eferakeya" }],
          },
          { id: "b7c5d", name: "Esther Ojumah" },
          { id: "b7c5e", name: "David Ojumah" },
        ],
      },
      {
        id: "b7c6",
        name: "Evelyn Ojiofor",
        children: [
          {
            id: "b7c6a",
            name: "Ebele Ejiofor",
            children: [{ id: "b7c6aa", name: "Munachimso Ejiofor" }],
          },
          { id: "b7c6b", name: "Tobechukwu Ejiofor" },
          { id: "b7c6c", name: "Sopulu Ejiofor" },
          { id: "b7c6d", name: "Raluchi Ejiofor" },
        ],
      },
      {
        id: "b7c7",
        name: "Roseline Giwa-Osagie",
        children: [
          { id: "b7c7a", name: "Osamudiame Giwa-Osagie" },
          { id: "b7c7b", name: "Osayanmo Giwa-Osagie" },
          { id: "b7c7c", name: "Imuetinyan Giwa-Osagie" },
        ],
      },
      {
        id: "b7c8",
        name: "Vivian Sota",
        children: [
          {
            id: "b7c8a",
            name: "Akpevweoghene Sota",
            children: [
              { id: "b7c8aa", name: "Denning Agge" },
              { id: "b7c8ab", name: "Denzerel Agge" },
            ],
          },
          { id: "b7c8b", name: "Oghenetejiri Agge" },
          { id: "b7c8c", name: "Oghenemaro Sota" },
          { id: "b7c8d", name: "Oghenerukevwe Sota" },
          { id: "b7c8e", name: "Eseoghene Sota" },
        ],
      },
      {
        id: "b7c9",
        name: "Efetobo Emo-Agege",
        children: [
          { id: "b7c9a", name: "Jayla Emo-Agege" },
          { id: "b7c9b", name: "Aaron Emo-Agege" },
          { id: "b7c9c", name: "Uriri Emo-Agege" },
        ],
      },
      {
        id: "b7c10",
        name: "Obuks Emo-Agege",
        children: [{ id: "b7c10a", name: "Ogheneruona Emo-Agege" }],
      },
      {
        id: "b7c11",
        name: "Ejiro Emo-Agege",
        children: [
          { id: "b7c11a", name: "Avwerosuoghene Emo-Agege" },
          { id: "b7c11b", name: "Oghenevoke Emo-Agege" },
          { id: "b7c11c", name: "Omebu Emo-Agege" },
        ],
      },
    ],
  },
  {
    id: "b8",
    name: "Ipapo Alice Dora Ohwojeheri",
    children: [
      { id: "b8c1", name: "Orighomisan Ohwojeheri" },
      { id: "b8c2", name: "Ogheneyoma Peterson" },
      {
        id: "b8c3",
        name: "Ogho Akpochimoraa",
        late: true,
        children: [
          { id: "b8c3a", name: "Ese Akpochimoraa" },
          { id: "b8c3b", name: "Faith Akpochimoraa" },
          { id: "b8c3c", name: "Blessing Akpochimoraa" },
          { id: "b8c3d", name: "Grace Akpochimoraa" },
        ],
      },
      {
        id: "b8c4",
        name: "Jenny Owhojeheri",
        children: [
          { id: "b8c4a", name: "Oyedoh Ephrathah" },
          { id: "b8c4b", name: "Oghenemine Oyibo-Dudu" },
        ],
      },
      {
        id: "b8c5",
        name: "Nyerhowvo Owhojeheri",
        children: [{ id: "b8c5a", name: "Zoe Owhojeheri" }],
      },
    ],
  },
  {
    id: "b9",
    name: "Igwebere Obereko",
    children: [
      {
        id: "b9c1",
        name: "Tony Ejuvwekpokpo",
        children: [
          { id: "b9c1a", name: "Marcus Ejuvwekpokpo" },
          { id: "b9c1b", name: "Erere Ejuvwekpokpo" },
          { id: "b9c1c", name: "Erhirome Ejuvwekpokpo" },
          { id: "b9c1d", name: "Lordson Ejuvwekpokpo" },
          { id: "b9c1e", name: "Nieson Ejuvwekpokpo" },
          { id: "b9c1f", name: "Seedar Ejuvwekpokpo" },
          { id: "b9c1g", name: "Crown Ejuvwekpokpo" },
        ],
      },
      {
        id: "b9c2",
        name: "Peter Ejuvwekpokpo",
        children: [
          { id: "b9c2a", name: "Prince Ejuvwekpokpo" },
          { id: "b9c2b", name: "Oghenevwogaga Ejuvwekpokpo" },
        ],
      },
      {
        id: "b9c3",
        name: "Dafe Ejuvwekpokpo",
        children: [{ id: "b9c3a", name: "Isio Ejuvwekpokpo" }],
      },
      {
        id: "b9c4",
        name: "Caro Voke Ogbavwerha",
        children: [
          { id: "b9c4a", name: "Oghenefejiro" },
          { id: "b9c4b", name: "Oghenenyerhovwome" },
        ],
      },
      {
        id: "b9c5",
        name: "Sunday Ogbavwerha",
        children: [
          { id: "b9c5a", name: "Igho Ogbavwerha" },
          { id: "b9c5b", name: "Joshua Ogbavwerha" },
        ],
      },
    ],
  },
  {
    id: "b10",
    name: "Mami Ejomafuvwe",
    children: [
      {
        id: "b10c1",
        name: "Victoria Onovwakpo",
        children: [{ id: "b10c1a", name: "Ujiro Onovwakpo" }],
      },
      {
        id: "b10c2",
        name: "Macualey Inana",
        children: [
          { id: "b10c2a", name: "Akpevwoghene Inana" },
          { id: "b10c2b", name: "Evans Inana" },
          { id: "b10c2c", name: "Aghogho Inana" },
          { id: "b10c2d", name: "Chavwuko Inana" },
          { id: "b10c2e", name: "Voke Inana" },
        ],
      },
      {
        id: "b10c3",
        name: "Laurence Inana",
        children: [
          { id: "b10c3a", name: "Blessing Inana" },
          { id: "b10c3b", name: "Mayor Inana" },
          { id: "b10c3c", name: "Patience Inana" },
          { id: "b10c3d", name: "Onome Inana" },
          { id: "b10c3e", name: "Idowu Inana" },
          { id: "b10c3f", name: "Testimony Inana" },
        ],
      },
      {
        id: "b10c4",
        name: "Pius Inana",
        children: [
          { id: "b10c4a", name: "Ogheneochuko Inana" },
          { id: "b10c4b", name: "Otuyoma Inana" },
          { id: "b10c4c", name: "Akpesiri Inana" },
          { id: "b10c4d", name: "Imoniyoma Inana" },
        ],
      },
      {
        id: "b10c5",
        name: "Oke Inana",
        children: [
          { id: "b10c5a", name: "Obuefi Inana" },
          { id: "b10c5b", name: "Isio-Oghene Inana" },
        ],
      },
    ],
  },
];

const COLORS = [
  "#7c3aed",
  "#0ea5e9",
  "#16a34a",
  "#d97706",
  "#db2777",
  "#0891b2",
  "#65a30d",
  "#9333ea",
  "#b45309",
  "#0369a1",
];

// ─── Flatten for search ──────────────────────────────────────────────────────
function flattenAll(nodes, bi = null, parent = null, depth = 0) {
  const r = [];
  nodes.forEach((n, i) => {
    const myBi = depth === 0 ? i : bi;
    r.push({
      ...n,
      _bi: myBi,
      _parent: parent,
      _depth: depth,
      _color: COLORS[myBi % COLORS.length],
    });
    if (n.children) r.push(...flattenAll(n.children, myBi, n, depth + 1));
  });
  return r;
}
const ALL_NODES = flattenAll(BRANCHES);
function getNode(id) {
  return ALL_NODES.find((n) => n.id === id);
}
function getChildren(id) {
  return ALL_NODES.filter((n) => n._parent && n._parent.id === id);
}
function getSiblings(node) {
  return node._parent
    ? ALL_NODES.filter(
        (n) =>
          n._parent && n._parent.id === node._parent.id && n.id !== node.id,
      )
    : BRANCHES.filter((b) => b.id !== node.id).map((b) => ({
        ...b,
        _depth: 0,
        _bi: BRANCHES.findIndex((x) => x.id === b.id),
        _color:
          COLORS[BRANCHES.findIndex((x) => x.id === b.id) % COLORS.length],
      }));
}

function initials(name) {
  const p = name.trim().split(/\s+/);
  return p.length >= 2
    ? (p[0][0] + p[1][0]).toUpperCase()
    : p[0].slice(0, 2).toUpperCase();
}
function countDesc(n) {
  return (n.children || []).reduce((a, c) => a + 1 + countDesc(c), 0);
}

// ─── HTML Div Tree ───────────────────────────────────────────────────────────
function TreeNode({ node, color, onSelect, highlightId, depth = 0 }) {
  const hasKids = node.children && node.children.length > 0;
  const isHL = node.id === highlightId;
  const isRoot = depth === 0;
  const init = initials(node.name);
  const visibleKids = hasKids ? node.children : [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      {/* Node card */}
      <div
        onClick={() => onSelect(node.id)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 10px 7px 8px",
          borderRadius: 10,
          background: isRoot ? color : isHL ? `${color}18` : "#fff",
          border: isRoot
            ? "none"
            : `1.5px solid ${isHL ? color : color + "40"}`,
          boxShadow: isRoot ? `0 2px 10px ${color}40` : "0 1px 4px #0000000f",
          cursor: "pointer",
          userSelect: "none",
          position: "relative",
          minWidth: 160,
          maxWidth: 200,
          transition: "box-shadow 0.15s, border-color 0.15s",
        }}
        onMouseEnter={(e) => {
          if (!isRoot)
            e.currentTarget.style.boxShadow = `0 2px 10px ${color}30`;
        }}
        onMouseLeave={(e) => {
          if (!isRoot) e.currentTarget.style.boxShadow = "0 1px 4px #0000000f";
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            flexShrink: 0,
            background: isRoot ? "#ffffff30" : color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {init}
        </div>

        {/* Name */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: isRoot ? 700 : 500,
              color: isRoot ? "#fff" : isHL ? color : "#1e293b",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {node.name}
          </div>
          {node.late && (
            <div
              style={{ fontSize: 9, color: isRoot ? "#ffffff80" : "#94a3b8" }}
            >
              Deceased
            </div>
          )}
        </div>
      </div>

      {/* Connector + children */}
      {visibleKids.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Vertical stem down from parent */}
          <div style={{ width: 2, height: 20, background: `${color}50` }} />

          {/* Horizontal bar + drops */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            {/* The horizontal crossbar spans all children */}
            {visibleKids.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  right: "50%",
                  height: 2,
                  background: `${color}50`,
                  // we use a pseudo trick: set left/right based on child count via inline
                  // instead just let the children define the width via their flex container
                }}
              />
            )}
            {visibleKids.map((child, i) => (
              <div
                key={child.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* drop line from crossbar to child */}
                <div
                  style={{ width: 2, height: 20, background: `${color}50` }}
                />
                <TreeNode
                  node={child}
                  color={color}
                  onSelect={onSelect}
                  highlightId={highlightId}
                  depth={depth + 1}
                />
              </div>
            ))}
            {/* Horizontal crossbar overlay */}
            {visibleKids.length > 1 && (
              <HBar color={color} count={visibleKids.length} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Draws the horizontal crossbar across siblings using a ref to measure width
function HBar({ color, count }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const p = ref.current.parentElement;
      if (p) setW(p.offsetWidth);
    }
  });
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: `${color}50`,
        pointerEvents: "none",
      }}
    />
  );
}

function MiniTree({ branch, color, onSelect, highlightId }) {
  return (
    <div
      style={{
        overflowX: "auto",
        padding: "20px",
        background: "#f8fafc",
        borderRadius: 12,
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ display: "inline-block", minWidth: "100%" }}>
        <TreeNode
          node={branch}
          color={color}
          onSelect={onSelect}
          highlightId={highlightId}
          depth={0}
        />
      </div>
    </div>
  );
}

// ─── Avatar ──────────────────────────────────────────────────────────────────
function Avatar({ name, color, size = 48, active }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 700,
        fontSize: size * 0.28,
        border: active ? `3px solid ${color}` : "3px solid transparent",
        outline: active ? "2px solid white" : "none",
        boxShadow: active ? `0 0 0 4px ${color}40` : "0 2px 8px #0000001a",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {initials(name)}
    </div>
  );
}

function PersonCard({ node, onClick, active, size = "md" }) {
  const sz = size === "lg" ? 64 : size === "sm" ? 36 : 48;
  const kids = getChildren(node.id);
  return (
    <div
      onClick={() => onClick(node.id)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        padding: "8px 6px",
        borderRadius: 12,
        background: active ? `${node._color}12` : "transparent",
        border: active
          ? `1.5px solid ${node._color}40`
          : "1.5px solid transparent",
        transition: "all 0.15s",
        minWidth: sz + 16,
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = "#f1f5f9";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "transparent";
      }}
    >
      <Avatar name={node.name} color={node._color} size={sz} active={active} />
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: size === "sm" ? 10 : 12,
            fontWeight: 600,
            color: active ? node._color : "#1e293b",
            lineHeight: 1.3,
            maxWidth: 90,
            wordBreak: "break-word",
          }}
        >
          {node.name}
          {node.late ? " †" : ""}
        </div>
        {kids.length > 0 && (
          <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>
            {kids.length} child{kids.length !== 1 ? "ren" : ""}
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: "20px 24px",
        boxShadow: "0 1px 4px #0000000a",
        border: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {children}
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const selected = selectedId ? getNode(selectedId) : null;

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ALL_NODES.filter((n) => n.name.toLowerCase().includes(q)).slice(
      0,
      30,
    );
  }, [search]);

  function selectNode(id) {
    setSelectedId(id);
    setSearch("");
    setSearchOpen(false);
  }

  const selChildren = selected ? getChildren(selected.id) : [];
  const selSiblings = selected ? getSiblings(selected) : [];
  const selParent = selected?._parent ? getNode(selected._parent.id) : null;
  const selColor = selected?._color || "#7c3aed";

  // Walk up to find the depth-1 ancestor (grandparent level) to use as diagram root
  function getDepth1Ancestor(node) {
    if (!node) return null;
    if (node._depth === 0) return node; // branch root itself
    let cur = node;
    while (cur._depth > 1) {
      cur = getNode(cur._parent?.id);
      if (!cur) return null;
    }
    return cur;
  }
  const diagramRoot = selected ? getDepth1Ancestor(selected) : null;
  const diagramBranch = diagramRoot;
  const diagramBi = selected ? selected._bi : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        fontFamily: "'Inter','Segoe UI',sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1e1b4b",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          height: 60,
          boxShadow: "0 2px 8px #00000030",
        }}
      >
        <span style={{ fontSize: 22 }}>🌳</span>
        <span
          onClick={() => {
            setSelectedId(null);
            setBranchId("");
            setChildId("");
            setGrandId("");
          }}
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: 17,
            letterSpacing: "-0.3px",
            cursor: "pointer",
            borderBottom: "2px solid #6366f1",
            paddingBottom: 1,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#a5b4fc")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          Agege Family Tree
        </span>
        <span style={{ color: "#6366f1", fontSize: 12, marginLeft: 4 }}>
          415 members
        </span>
        {/* Header search */}
        <div
          style={{ marginLeft: "auto", position: "relative" }}
          onMouseLeave={() => {
            if (!search) setSearchOpen(false);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#ffffff14",
              border: `1px solid ${searchOpen ? "#a5b4fc" : "#ffffff20"}`,
              borderRadius: 8,
              padding: "0 12px",
              width: 260,
              transition: "border 0.15s",
            }}
          >
            <span style={{ color: "#a5b4fc", fontSize: 14, marginRight: 8 }}>
              ⌕
            </span>
            <input
              placeholder="Search any name…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: 13,
                padding: "8px 0",
              }}
            />
            {search && (
              <span
                onClick={() => {
                  setSearch("");
                  setSearchOpen(false);
                }}
                style={{
                  color: "#a5b4fc",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: "2px 4px",
                }}
              >
                ✕
              </span>
            )}
          </div>
          {searchOpen && search.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                right: 0,
                width: 320,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 12px 40px #00000025",
                zIndex: 200,
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              {searchResults.length === 0 ? (
                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#94a3b8",
                    fontSize: 13,
                  }}
                >
                  No results for "{search}"
                </div>
              ) : (
                <>
                  <div
                    style={{
                      padding: "10px 14px 6px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #f1f5f9",
                    }}
                  >
                    {searchResults.length} result
                    {searchResults.length !== 1 ? "s" : ""}
                  </div>
                  <div style={{ maxHeight: 340, overflowY: "auto" }}>
                    {searchResults.map((n) => {
                      const q = search.toLowerCase(),
                        idx = n.name.toLowerCase().indexOf(q);
                      const b = n.name.slice(0, idx),
                        m = n.name.slice(idx, idx + search.length),
                        a = n.name.slice(idx + search.length);
                      const gl = [
                        "Branch",
                        "Child",
                        "Grandchild",
                        "Gt. Grandchild",
                        "Gt.Gt. Grandchild",
                      ];
                      return (
                        <div
                          key={n.id}
                          onClick={() => selectNode(n.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "10px 14px",
                            cursor: "pointer",
                            borderBottom: "1px solid #f8fafc",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#f8fafc")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "#fff")
                          }
                        >
                          <Avatar name={n.name} color={n._color} size={36} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#1e293b",
                              }}
                            >
                              {b}
                              <span
                                style={{
                                  background: "#fef08a",
                                  color: "#92400e",
                                  borderRadius: 2,
                                }}
                              >
                                {m}
                              </span>
                              {a}
                              {n.late ? (
                                <span
                                  style={{ color: "#94a3b8", fontWeight: 400 }}
                                >
                                  {" "}
                                  †
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color: "#94a3b8",
                                marginTop: 2,
                                display: "flex",
                                gap: 6,
                              }}
                            >
                              <span
                                style={{
                                  background: `${n._color}18`,
                                  color: n._color,
                                  padding: "1px 6px",
                                  borderRadius: 8,
                                  fontWeight: 600,
                                }}
                              >
                                {gl[n._depth] || `Gen ${n._depth + 1}`}
                              </span>
                              <span
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {BRANCHES[n._bi]?.name}
                              </span>
                            </div>
                          </div>
                          <span style={{ color: "#cbd5e1", fontSize: 16 }}>
                            ›
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
        {/* Hero search */}
        <div
          style={{
            background: "linear-gradient(135deg,#1e1b4b,#4c1d95)",
            borderRadius: 16,
            padding: "28px 32px",
            marginBottom: 24,
            boxShadow: "0 4px 24px #7c3aed25",
          }}
        >
          <div
            style={{
              color: "#c4b5fd",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Search the family
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: 10,
                padding: "0 16px",
                boxShadow: "0 2px 12px #0000001a",
              }}
            >
              <span style={{ fontSize: 20, color: "#94a3b8", marginRight: 10 }}>
                ⌕
              </span>
              <input
                placeholder="Type any name to find them instantly…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 15,
                  padding: "14px 0",
                  color: "#1e293b",
                  background: "transparent",
                }}
              />
              {search && (
                <span
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                  style={{
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontSize: 18,
                    padding: "4px 6px",
                  }}
                >
                  ✕
                </span>
              )}
            </div>
            {searchOpen && search.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "110%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 12px 40px #00000025",
                  zIndex: 200,
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                }}
              >
                {searchResults.length === 0 ? (
                  <div
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      color: "#94a3b8",
                      fontSize: 13,
                    }}
                  >
                    No members found for "{search}"
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        padding: "10px 16px 6px",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#94a3b8",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      {searchResults.length} result
                      {searchResults.length !== 1 ? "s" : ""}
                    </div>
                    <div style={{ maxHeight: 380, overflowY: "auto" }}>
                      {searchResults.map((n) => {
                        const q = search.toLowerCase(),
                          idx = n.name.toLowerCase().indexOf(q);
                        const b = n.name.slice(0, idx),
                          m = n.name.slice(idx, idx + search.length),
                          a = n.name.slice(idx + search.length);
                        const gl = [
                          "Branch",
                          "Child",
                          "Grandchild",
                          "Gt. Grandchild",
                          "Gt.Gt. Grandchild",
                        ];
                        return (
                          <div
                            key={n.id}
                            onClick={() => selectNode(n.id)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "11px 16px",
                              cursor: "pointer",
                              borderBottom: "1px solid #f8fafc",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background = "#f8fafc")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background = "#fff")
                            }
                          >
                            <Avatar name={n.name} color={n._color} size={40} />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#1e293b",
                                }}
                              >
                                {b}
                                <span
                                  style={{
                                    background: "#fef08a",
                                    color: "#92400e",
                                    borderRadius: 2,
                                  }}
                                >
                                  {m}
                                </span>
                                {a}
                                {n.late ? (
                                  <span
                                    style={{
                                      color: "#94a3b8",
                                      fontWeight: 400,
                                    }}
                                  >
                                    {" "}
                                    †
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div
                                style={{
                                  fontSize: 11,
                                  color: "#94a3b8",
                                  marginTop: 2,
                                  display: "flex",
                                  gap: 6,
                                }}
                              >
                                <span
                                  style={{
                                    background: `${n._color}18`,
                                    color: n._color,
                                    padding: "1px 6px",
                                    borderRadius: 8,
                                    fontWeight: 600,
                                  }}
                                >
                                  {gl[n._depth] || `Gen ${n._depth + 1}`}
                                </span>
                                <span
                                  style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {BRANCHES[n._bi]?.name}
                                </span>
                              </div>
                            </div>
                            <span style={{ color: "#cbd5e1", fontSize: 16 }}>
                              ›
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main content */}
        {selected ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Profile */}
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "28px 32px",
                boxShadow: "0 1px 4px #0000000a",
                border: `1px solid ${selColor}30`,
                display: "flex",
                gap: 24,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Avatar name={selected.name} color={selColor} size={80} active />
              <div style={{ flex: 1, minWidth: 200 }}>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#0f172a",
                    letterSpacing: "-0.4px",
                  }}
                >
                  {selected.name}
                  {selected.late && (
                    <span
                      style={{
                        fontSize: 14,
                        color: "#94a3b8",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      † Deceased
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginTop: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: `${selColor}18`,
                      color: selColor,
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    Branch: {BRANCHES[selected._bi]?.name}
                  </span>
                  <span
                    style={{
                      background: "#f1f5f9",
                      color: "#64748b",
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    Generation {selected._depth + 1}
                  </span>
                  {selChildren.length > 0 && (
                    <span
                      style={{
                        background: "#f1f5f9",
                        color: "#64748b",
                        padding: "4px 12px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {selChildren.length} child
                      {selChildren.length !== 1 ? "ren" : ""}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Branch diagram */}
            {diagramBranch && (
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "20px 24px",
                  boxShadow: "0 1px 4px #0000000a",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: COLORS[diagramBi % COLORS.length],
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Family Tree — {diagramBranch.name}
                  {diagramBranch.late ? " †" : ""}
                </div>
                <MiniTree
                  branch={diagramBranch}
                  color={COLORS[diagramBi % COLORS.length]}
                  onSelect={selectNode}
                  highlightId={selectedId}
                />
              </div>
            )}

            {selParent && (
              <Section title="Parent" color={selColor}>
                <PersonCard node={selParent} onClick={selectNode} size="md" />
              </Section>
            )}
            {selChildren.length > 0 && (
              <Section
                title={`Children (${selChildren.length})`}
                color={selColor}
              >
                {selChildren.map((c) => (
                  <PersonCard
                    key={c.id}
                    node={c}
                    onClick={selectNode}
                    size="md"
                  />
                ))}
              </Section>
            )}
            {selSiblings.length > 0 && (
              <Section
                title={`Siblings (${selSiblings.length})`}
                color="#64748b"
              >
                {selSiblings.map((s) => (
                  <PersonCard
                    key={s.id}
                    node={s}
                    onClick={selectNode}
                    size="sm"
                  />
                ))}
              </Section>
            )}
          </div>
        ) : (
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#64748b",
                marginBottom: 16,
              }}
            >
              All Branches — click any to explore
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                gap: 16,
              }}
            >
              {BRANCHES.map((b, i) => {
                const col = COLORS[i % COLORS.length];
                const kids = getChildren(b.id);
                return (
                  <div
                    key={b.id}
                    onClick={() => selectNode(b.id)}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: "18px 20px",
                      cursor: "pointer",
                      border: `1.5px solid ${col}25`,
                      boxShadow: "0 1px 4px #0000000a",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 4px 16px ${col}25`;
                      e.currentTarget.style.borderColor = `${col}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 1px 4px #0000000a";
                      e.currentTarget.style.borderColor = `${col}25`;
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 14 }}
                    >
                      <Avatar name={b.name} color={col} size={52} />
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#0f172a",
                          }}
                        >
                          {b.name}
                          {b.late ? " †" : ""}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#94a3b8",
                            marginTop: 2,
                          }}
                        >
                          {kids.length} direct children
                        </div>
                      </div>
                      <span style={{ fontSize: 18, color: col }}>›</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginTop: 14,
                      }}
                    >
                      {kids.slice(0, 6).map((k) => (
                        <span
                          key={k.id}
                          style={{
                            background: `${col}12`,
                            color: col,
                            fontSize: 11,
                            padding: "3px 9px",
                            borderRadius: 10,
                            fontWeight: 500,
                          }}
                        >
                          {k.name.split(" ")[0]}
                        </span>
                      ))}
                      {kids.length > 6 && (
                        <span style={{ fontSize: 11, color: "#94a3b8" }}>
                          +{kids.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          height: 5,
          background: `linear-gradient(to right,${COLORS.join(",")})`,
          marginTop: 40,
        }}
      />
    </div>
  );
}
