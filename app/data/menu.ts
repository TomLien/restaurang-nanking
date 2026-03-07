export type MenuItem = {
  number: number;
  title: string;
  description: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "forratter",
    label: "Förrätter",
    items: [
      {
        number: 1,
        title: "Vårrulle",
        description: "Krispig vårrulle fylld med grönsaker och glasnudlar, serveras med sötsurkräm",
        price: 89,
      },
      {
        number: 2,
        title: "Räkdumplings (4 st)",
        description: "Ångkokta dumplings med tiger räkor, ingefära och salladslök",
        price: 115,
      },
      {
        number: 3,
        title: "Pekingankor (pannkakor)",
        description: "Klassisk Peking-and med tunna pannkakor, hoisinsås, gurka och vårlök",
        price: 145,
      },
      {
        number: 4,
        title: "Sesamtoast",
        description: "Friterat bröd toppat med räkfärs och sesamfrön, serveras med sötsursås",
        price: 95,
      },
      {
        number: 5,
        title: "Edamame",
        description: "Ångkokta edamamebönor med flingsalt och chili",
        price: 69,
      },
      {
        number: 6,
        title: "Kycklingsallad",
        description: "Strimlad kyckling med glasnudlar, koriander, jordnötter och sesamdressing",
        price: 105,
      },
      {
        number: 7,
        title: "Gyoza (6 st)",
        description: "Pankokta dumplings med fläsk och kål, serveras med dippsås",
        price: 99,
      },
      {
        number: 8,
        title: "Wonton friterade (6 st)",
        description: "Krispiga wontons fyllda med räk och fläskfärs, serveras med plomonsås",
        price: 99,
      },
    ],
  },
  {
    id: "soppor",
    label: "Soppor",
    items: [
      {
        number: 20,
        title: "Tom Yum Kung",
        description: "Kryddig thaisoppa med räkor, citrongräs, lime och galangal",
        price: 129,
      },
      {
        number: 21,
        title: "Wontonsoppa",
        description: "Klar kycklingbuljong med räk-wontons, pak choi och sesamolja",
        price: 115,
      },
      {
        number: 22,
        title: "Hot & Sour soppa",
        description: "Traditionell het och syrlig soppa med tofu, bambu och svamp",
        price: 109,
      },
      {
        number: 23,
        title: "Misosoppa med räkor",
        description: "Len misosoppa med tiger räkor, wakame och tofu",
        price: 119,
      },
      {
        number: 24,
        title: "Kyckling Laksa",
        description: "Kokosmjölksbaserad nudelsoppa med kyckling, böngroddor och basilika",
        price: 139,
      },
      {
        number: 25,
        title: "Pekingnudelsoppa",
        description: "Rikbuljong med handdragna nudlar, fläsk och syltad salladslök",
        price: 125,
      },
    ],
  },
  {
    id: "kyckling",
    label: "Kyckling",
    items: [
      {
        number: 40,
        title: "General Tso's Kyckling",
        description: "Krispig kyckling i sötstark sås med torkad chili och sesamfrön",
        price: 175,
      },
      {
        number: 41,
        title: "Kung Pao Kyckling",
        description: "Wokad kyckling med cashewnötter, paprika och sichuanpeppar",
        price: 169,
      },
      {
        number: 42,
        title: "Citronkyckling",
        description: "Panerad kyckling i syrlig lemonsås med färsk ingefära",
        price: 165,
      },
      {
        number: 43,
        title: "Hoisin Kyckling",
        description: "Mört kycklingbröst wokat med broccoli, pak choi och hoisinsås",
        price: 169,
      },
      {
        number: 44,
        title: "Sichuankyckling",
        description: "Kryddig kyckling med sichuanpeppar, vitlök, ingefära och grön paprika",
        price: 179,
      },
      {
        number: 45,
        title: "Stekt kyckling med cashew",
        description: "Wokad kycklingfilé med cashewnötter, paprika och ostronsås",
        price: 172,
      },
      {
        number: 46,
        title: "Kyckling med svamp",
        description: "Kycklingbröst med shitake- och ostronsvamp i lätt sojasås",
        price: 168,
      },
    ],
  },
  {
    id: "flask",
    label: "Fläsk",
    items: [
      {
        number: 55,
        title: "Sweet & Sour Fläsk",
        description: "Klassisk sötsurfläsk med ananas, paprika och lök i röd sötsursås",
        price: 169,
      },
      {
        number: 56,
        title: "Char Siu",
        description: "Kantonesiskt grillat fläsk marinerat i honung, sojasås och fem-kryddor",
        price: 179,
      },
      {
        number: 57,
        title: "Mapo Tofu med Fläsk",
        description: "Mjuk tofu med fläskfärs i het sichuansås med bönpasta",
        price: 165,
      },
      {
        number: 58,
        title: "Mu Shu Fläsk",
        description: "Strimlat fläsk med ägg, svamp och kål, serveras med tunna pannkakor",
        price: 172,
      },
      {
        number: 59,
        title: "Fläsk med svartbönssås",
        description: "Mört fläsk wokat med paprika och lök i klassisk svartbönssås",
        price: 169,
      },
      {
        number: 60,
        title: "Bubbelfläsk (dongpo)",
        description: "Kinesiskt ångkokt sidfläsk med hasselnötsbryn sojasås och bok choy",
        price: 189,
      },
    ],
  },
  {
    id: "notkott",
    label: "Nötkött",
    items: [
      {
        number: 70,
        title: "Mongolisk Biff",
        description: "Möra nötköttstrimlor wokade med lök och salladslök i söt sojasås",
        price: 189,
      },
      {
        number: 71,
        title: "Biff med broccoli",
        description: "Klassisk kantonesisk biff och broccoli i ostronsås",
        price: 185,
      },
      {
        number: 72,
        title: "Sichuanbiff",
        description: "Kryddig nötköttswok med sichuanpeppar, chili och grön paprika",
        price: 195,
      },
      {
        number: 73,
        title: "Black Pepper Biff",
        description: "Saftig biff med grovmalen svartpeppar, lök och paprika",
        price: 199,
      },
      {
        number: 74,
        title: "Nötkött med ostron och svamp",
        description: "Mört nötkött wokat med ostron- och shitakesvamp i ostronsås",
        price: 192,
      },
      {
        number: 75,
        title: "Tangerinbiff",
        description: "Krispig biff i sötstark mandarin-apelsinsås med torkad chili",
        price: 195,
      },
    ],
  },
  {
    id: "fisk",
    label: "Fisk & Skaldjur",
    items: [
      {
        number: 85,
        title: "Stir-fry Räkor",
        description: "Jumboräkor wokade med vitlök, ingefära och grönsaker i ostronsås",
        price: 199,
      },
      {
        number: 86,
        title: "Cantonese Ångkokt Fisk",
        description: "Hel ångad fisk med ingefära, salladslök och lätt sojasås",
        price: 225,
      },
      {
        number: 87,
        title: "Kung Pao Räkor",
        description: "Kryddiga räkor med cashewnötter, paprika och sichuanpeppar",
        price: 205,
      },
      {
        number: 88,
        title: "Krabba med Ingefära",
        description: "Stir-fry krabba med färsk ingefära, salladslök och sojasås",
        price: 245,
      },
      {
        number: 89,
        title: "Kokosmjölksgarnaler",
        description: "Räkor i krämig kokosmjölkssås med citrongräs och kaffirlimeblad",
        price: 209,
      },
      {
        number: 90,
        title: "Krispy Torsk",
        description: "Krispig torskfilé med sötstark sås och wokade pak choi",
        price: 195,
      },
      {
        number: 91,
        title: "Havskatt Sichuanstil",
        description: "Kryddig havskattsfilé med sichuanbönpasta, doubanjiang och sesamolja",
        price: 215,
      },
    ],
  },
  {
    id: "vegetariskt",
    label: "Vegetariskt",
    items: [
      {
        number: 100,
        title: "Mapo Tofu",
        description: "Mjuk tofu i het sichuansås med doubanjiang och sesamolja (vegansk)",
        price: 155,
      },
      {
        number: 101,
        title: "Wokad Pak Choi",
        description: "Pak choi med vitlök och ostronsås (kan göras vegansk)",
        price: 139,
      },
      {
        number: 102,
        title: "Buddha's Feast",
        description: "Blandade grönsaker och tofu wokat med hoisinsås och sesamfrön (vegansk)",
        price: 159,
      },
      {
        number: 103,
        title: "Stir-fry Champinjoner",
        description: "Shitake, ostron- och enokisvamp i svartbönssås med ingefära",
        price: 149,
      },
      {
        number: 104,
        title: "Gong Bao Tofu",
        description: "Stekt tofu med cashewnötter, paprika och sichuanpeppar (vegansk)",
        price: 155,
      },
      {
        number: 105,
        title: "Vegetarisk Dim Sum (8 st)",
        description: "Ångkokta dumplings med edamame, tofu och svamp (vegansk)",
        price: 139,
      },
      {
        number: 106,
        title: "Chili-Vitlök Aubergine",
        description: "Mjuk aubergine i het chilisås med vitlök och sesamolja (vegansk)",
        price: 149,
      },
    ],
  },
  {
    id: "ris-nudlar",
    label: "Ris & Nudlar",
    items: [
      {
        number: 115,
        title: "Yangzhou Stekt Ris",
        description: "Klassiskt kantonesiskt stekt ris med räkor, kyckling, ägg och grönsaker",
        price: 149,
      },
      {
        number: 116,
        title: "Pad Thai",
        description: "Risnudlar med räkor, tofu, ägg, böngroddor och jordnötter",
        price: 159,
      },
      {
        number: 117,
        title: "Lo Mein",
        description: "Mjuka äggdudlar wokade med kyckling, svamp och grönsaker",
        price: 155,
      },
      {
        number: 118,
        title: "Singapore Nudlar",
        description: "Tunna risnudlar med räkor, fläsk, ägg och currykryddor",
        price: 159,
      },
      {
        number: 119,
        title: "Vegetariskt Stekt Ris",
        description: "Wokat jasminris med tofu, grönsaker, ägg och sojasås (kan göras vegansk)",
        price: 139,
      },
      {
        number: 120,
        title: "Dan Dan Nudlar",
        description: "Sichuanska nudlar med fläskfärs, tahini, chiliolja och salladslök",
        price: 149,
      },
      {
        number: 121,
        title: "Chow Fun (Breda risnudlar)",
        description: "Wokade breda risnudlar med biff, böngroddor och sojasås",
        price: 165,
      },
      {
        number: 122,
        title: "Kokosmjölksris",
        description: "Ångat jasminris kokt i kokosmjölk (vegansk, sidorätt)",
        price: 49,
      },
    ],
  },
];
