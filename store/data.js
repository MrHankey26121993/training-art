export const state = () => ({
  obj: [{
      type: "second",
      name: "Kirstie van Noort",
      contry: "Netherlands",
      photoBy: "photo BY Kenta Hasegawa",
      photoPeople: "",
      mainPhoto: "",
    },
    {
      type: "second",
      name: "Tomás Alonso",
      contry: "SPAIN",
      photoBy: "photo BY Kenta Hasegawa",
      photoPeople: "",
      mainPhoto: "",
    },
    {
      type: "second",
      name: "Stefan Diez",
      contry: "Germany",
      photoBy: "photo BY Kenta Hasegawa",
      photoPeople: "",
      mainPhoto: "",
    },
    {
      type: "second",
      name: "Teruhiro Yanagihara",
      contry: "Japan",
      photoBy: "photo BY Kenta Hasegawa",
      photoPeople: "",
      mainPhoto: "",
    },
    {
      type: "second",
      name: "Leon Ransmeier",
      contry: "New York, USA",
      photoBy: "photo BY Kenta Hasegawa",
      photoPeople: "",
      mainPhoto: "",
    },
    {
      type: "main",
      name: "Teruhiro Yanagihara",
      contry: "Japan",
      photoPeople: "",
      descPhotoPpl: "Teruhiro Yanagihara established his company in 2002 to develop his own, identifiable design vision. Ever since, he has been creating 'borderless' designs for Japanese and international clients.",
      mainPhoto: "",
      descPhotoMain: "Since 2002, Yanagihara has been active in many areas of design; He is a product designer for international clients such as Offecct, Pallucco, Landscape Forms, Wallpaper*, Kimura Glass and an interior designer for Sergio Rossi, and the Less Is More group in Japan, amongst others."
    },
  ]
})

export const mutations = {
  setObj(state, val) {
    state.obj = val;
  },
}

export const actions = {}

export const getters = {

  obj: state => state.obj,

}
