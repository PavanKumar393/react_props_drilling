import Section from "./components/Section";

const App = () => {
  const demonSlayerCharacters = [
    {
      image:
        "https://imgs.search.brave.com/gWHaNIAR8yjY28-IfsbXskFG0dKKWdvP3yhIBG6DyGE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMTAvNGst/VGFuamlyby1LYW1h/ZG8tV2FsbHBhcGVy/LUZvci1Nb2JpbGUu/anBn",
      name: "Tanjiro Kamado",
      description: "Kind hearted swordsman fighting demons to save his sister",
    },
    {
      image:
        "https://imgs.search.brave.com/yNFfo1lNxBnAyIUwE6xcysD1vLMkuVY-9KTQx-MhaUk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMTAvTmV6/dWtvLUthbWFkby00/ay1XYWxscGFwZXIt/Rm9yLVBob25lLmpw/Zw",
      name: "Nezuko Kamado",
      description: "Demon girl with strong will protecting humans silently",
    },
    {
      image:
        "https://imgs.search.brave.com/cWGFPN2ecp59hakRTasA-nVZ0vxRHZuIiRkF0zRQx1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2Q4/LzRkL2U2ZDg0ZDQ2/NjQ5YjI1NDk5YjNi/OTUyNWJiMTQyOTkx/LmpwZw",
      name: "Zenitsu Agatsuma",
      description:
        "Cowardly yet powerful lightning breathing swordsman in battle",
    },
    {
      image:
        "https://imgs.search.brave.com/dET_BNXI5I4dt1NeaJ2k4eys1K-fMiSj2XhjtIG8wkg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDUvSW5v/c3VrZS1IYXNoaWJp/cmEtTW9iaWxlLVdh/bGxwYXBlci1GdWxs/LUhELmpwZw",
      name: "Inosuke Hashibira",
      description:
        "Wild boar headed fighter with aggressive unpredictable attacks",
    },
    {
      image:
        "https://imgs.search.brave.com/7v2wKzJEYcNkALliviT3ReSDeTHRY-mWo1O0v7YKyWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBhLzNm/LzY1LzBhM2Y2NTkw/ZTlhODYyMDllNTQx/MzIxMzVhNTVkZWVm/LmpwZw",
      name: "Giyu Tomioka",
      description: "Calm water hashira with strong morals and silent strength",
    },
    {
      image:
        "https://imgs.search.brave.com/-CdVBiyPWF96yntaJbPps8v0XNTmO8udG47bvFrciok/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Zm9uZGVjcmFudmlw/LmNvbS8yMDI1LzA3/L0FManRmWWZlLWZv/bmQtZGVjcmFuLVJl/bmdva3UtS3lvdWp1/cm91LTUzLndlYnA",
      name: "Rengoku Kyojuro",
      description:
        "Flame hashira inspiring courage passion and unwavering determination",
    },
    {
      image:
        "https://imgs.search.brave.com/i10HmAUusSpTYJT5liYka9j3J1da--G6zwtjrWsJaZs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNTIwMDQx/LmpwZw",
      name: "Shinobu Kocho",
      description:
        "Insect hashira using poison intelligence and graceful combat",
    },
    {
      image:
        "https://imgs.search.brave.com/2KgRSgjikY6yQjEbcd35NRRoO8HvCHNw0M7aXiWQrY0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDUvVGVu/Z2VuLVV6dWktNGst/QmFja2dyb3VuZC5q/cGc",
      name: "Tengen Uzui",
      description:
        "Flashy sound hashira loving extravagance and powerful techniques",
    },
    {
      image:
        "https://imgs.search.brave.com/tlv1qYrhR4yWu0qt2MD0XT-TI3mmo97WFvyFKu1dxkI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXJl/LWdhbGxlcnkuY29t/L3VwbG9hZHMvcG9z/dHMvMzI4MDM5LU11/aWNoaXJvLVRva2l0/by1LaW1ldHN1LW5v/LVlhaWJhLUhhc2hp/cmEtNEstaXBob25l/LXdhbGxwYXBlci5q/cGc",
      name: "Muichiro Tokito",
      description:
        "Mist hashira young genius with emotionless deadly swordsmanship",
    },
    {
      image:
        "https://imgs.search.brave.com/e2ZPIEUYdGqWHTAXxiJcI3VMaOaYTpKb-JRiCxhZdPg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE0NTA5/MDM3LmpwZw",
      name: "Sanemi Shinazugawa",
      description:
        "Wind hashira aggressive personality hiding deep emotional pain",
    },
  ];

  return (
    <div>
      <Section cardObj={demonSlayerCharacters} />
    </div>
  );
};

export default App;
