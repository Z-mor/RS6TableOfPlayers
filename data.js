
var Players = [];
for (let index = 0; index < 5; index++) {
  var player = {
    name: '',
    attackopers: [
      {
        id: -1
      },
      {
        id: -1
      },
      {
        id: -1
      },
      {
        id: -1
      },
      {
        id: -1
      },
    ],
    defenceopers: [
      {
        id: -1
      },
      {
        id: -1
      },
      {
        id: -1
      },
      {
        id: -1
      },
      {
        id: -1
      },
    ]

  }
  Players.push(player);
}

var Opers = [
  // ШТУРМОТРЯД -------------------------------
  {
    side: "ШТУРМОТРЯД",
    id: 0,
    name: "sledge",
    imgurl: '/images/opers/sledge.webp',
    iconurl: '/images/opers/sledgeicon.webp',

  },
  {
    side: "ШТУРМОТРЯД",
    id: 1,
    name: "thatcher",
    imgurl: '/images/opers/thatcher.webp',
    iconurl: '/images/opers/thatchericon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 2,
    name: "ash",
    imgurl: '/images/opers/ash.webp',
    iconurl: '/images/opers/ashicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 3,
    name: "thermite",
    imgurl: '/images/opers/thermite.webp',
    iconurl: '/images/opers/thermiteicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 4,
    name: "twitch",
    imgurl: '/images/opers/twitch.webp',
    iconurl: '/images/opers/twitchicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 5,
    name: "montagne",
    imgurl: '/images/opers/montagne.webp',
    iconurl: '/images/opers/montagneicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 6,
    name: "glaz",
    imgurl: '/images/opers/glaz.webp',
    iconurl: '/images/opers/glazicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 7,
    name: "fuze",
    imgurl: '/images/opers/fuze.webp',
    iconurl: '/images/opers/fuzeicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 8,
    name: "blitz",
    imgurl: '/images/opers/blitz.webp',
    iconurl: '/images/opers/blitzicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 9,
    name: "iq",
    imgurl: '/images/opers/iq.webp',
    iconurl: '/images/opers/iqicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 10,
    name: "buck",
    imgurl: '/images/opers/buck.webp',
    iconurl: '/images/opers/buckicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 11,
    name: "blackbeard",
    imgurl: '/images/opers/blackbeard.webp',
    iconurl: '/images/opers/blackbeardicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 12,
    name: "capitao",
    imgurl: '/images/opers/capitao.webp',
    iconurl: '/images/opers/capitaoicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 13,
    name: "hibana",
    imgurl: '/images/opers/hibana.webp',
    iconurl: '/images/opers/hibanaicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 14,
    name: "jackal",
    imgurl: '/images/opers/jackal.webp',
    iconurl: '/images/opers/jackalicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 15,
    name: "ying",
    imgurl: '/images/opers/ying.webp',
    iconurl: '/images/opers/yingicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 16,
    name: "zofia",
    imgurl: '/images/opers/zofia.webp',
    iconurl: '/images/opers/zofiaicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 17,
    name: "dokkaebi",
    imgurl: '/images/opers/dokkaebi.webp',
    iconurl: '/images/opers/dokkaebiicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 18,
    name: "lion",
    imgurl: '/images/opers/lion.webp',
    iconurl: '/images/opers/lionicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 19,
    name: "finka",
    imgurl: '/images/opers/finka.webp',
    iconurl: '/images/opers/finkaicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 20,
    name: "maverick",
    imgurl: '/images/opers/maverick.webp',
    iconurl: '/images/opers/maverickicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 21,
    name: "nomad",
    imgurl: '/images/opers/nomad.webp',
    iconurl: '/images/opers/nomadicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 22,
    name: "gridlock",
    imgurl: '/images/opers/gridlock.webp',
    iconurl: '/images/opers/gridlockicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 23,
    name: "nokk",
    imgurl: '/images/opers/nokk.webp',
    iconurl: '/images/opers/nokkicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 24,
    name: "amaru",
    imgurl: '/images/opers/amaru.webp',
    iconurl: '/images/opers/amaruicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 25,
    name: "kali",
    imgurl: '/images/opers/kali.webp',
    iconurl: '/images/opers/kaliicon.webp',
  },
  {
    side: "ШТУРМОТРЯД",
    id: 26,
    name: "iana",
    imgurl: '/images/opers/iana.webp',
    iconurl: '/images/opers/ianaicon.webp',
  },


  // ЗАЩИТНИКИ -------------------------------

  {
    side: "ЗАЩИТНИКИ",
    id: 50,
    name: "smoke",
    imgurl: '/images/opers/smoke.webp',
    iconurl: '/images/opers/smokeicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 51,
    name: "mute",
    imgurl: '/images/opers/mute.webp',
    iconurl: '/images/opers/muteicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 52,
    name: "castle",
    imgurl: '/images/opers/castle.webp',
    iconurl: '/images/opers/castleicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 53,
    name: "pulse",
    imgurl: '/images/opers/pulse.webp',
    iconurl: '/images/opers/pulseicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 54,
    name: "doc",
    imgurl: '/images/opers/doc.webp',
    iconurl: '/images/opers/docicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 55,
    name: "rook",
    imgurl: '/images/opers/rook.webp',
    iconurl: '/images/opers/rookicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 56,
    name: "kapkan",
    imgurl: '/images/opers/kapkan.webp',
    iconurl: '/images/opers/kapkanicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 57,
    name: "tachanka",
    imgurl: '/images/opers/tachanka.webp',
    iconurl: '/images/opers/tachankaicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 58,
    name: "jager",
    imgurl: '/images/opers/jager.webp',
    iconurl: '/images/opers/jagericon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 59,
    name: "bandit",
    imgurl: '/images/opers/bandit.webp',
    iconurl: '/images/opers/banditicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 60,
    name: "frost",
    imgurl: '/images/opers/frost.webp',
    iconurl: '/images/opers/frosticon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 61,
    name: "valkyrie",
    imgurl: '/images/opers/valkyrie.webp',
    iconurl: '/images/opers/valkyrieicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 62,
    name: "caveira",
    imgurl: '/images/opers/caveira.webp',
    iconurl: '/images/opers/caveiraicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 63,
    name: "echo",
    imgurl: '/images/opers/echo.webp',
    iconurl: '/images/opers/echoicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 64,
    name: "mira",
    imgurl: '/images/opers/mira.webp',
    iconurl: '/images/opers/miraicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 65,
    name: "lesion",
    imgurl: '/images/opers/lesion.webp',
    iconurl: '/images/opers/lesionicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 67,
    name: "ela",
    imgurl: '/images/opers/ela.webp',
    iconurl: '/images/opers/elaicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 68,
    name: "vigil",
    imgurl: '/images/opers/vigil.webp',
    iconurl: '/images/opers/vigilicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 69,
    name: "maestro",
    imgurl: '/images/opers/maestro.webp',
    iconurl: '/images/opers/maestroicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 70,
    name: "alibi",
    imgurl: '/images/opers/alibi.webp',
    iconurl: '/images/opers/alibiicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 71,
    name: "clash",
    imgurl: '/images/opers/clash.webp',
    iconurl: '/images/opers/clashicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 72,
    name: "kaid",
    imgurl: '/images/opers/kaid.webp',
    iconurl: '/images/opers/kaidicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 73,
    name: "mozzie",
    imgurl: '/images/opers/mozzie.webp',
    iconurl: '/images/opers/mozzieicon.png',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 74,
    name: "warden",
    imgurl: '/images/opers/warden.webp',
    iconurl: '/images/opers/wardenicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 75,
    name: "goyo",
    imgurl: '/images/opers/goyo.webp',
    iconurl: '/images/opers/goyoicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 76,
    name: "wamai",
    imgurl: '/images/opers/wamai.webp',
    iconurl: '/images/opers/wamaiicon.webp',
  },
  {
    side: "ЗАЩИТНИКИ",
    id: 77,
    name: "wamai",
    imgurl: '/images/opers/oryx.webp',
    iconurl: '/images/opers/oryxicon.webp',
  },
];
module.exports.Opers = Opers;
module.exports.Players = Players
