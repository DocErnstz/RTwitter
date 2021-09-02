module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen-almost": "88vh",
        "screen-80": "80vh",
      }),
      gridTemplateColumns: {
        profileAd: "68px 1fr 1fr",
        tweet: "68px 1fr 1fr 1fr 1fr",
      },
      gridTemplateRows: {
        tweetAd: "1fr 74px",
      },
    },
    fontFamily: {
      Noto: ["Noto Sans, sans-serif"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
      fontSize: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
