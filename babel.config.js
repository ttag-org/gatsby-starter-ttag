module.exports = {
  "presets": [
    [
      "babel-preset-gatsby",
    ],
  ],
  "plugins": [
    [
      "babel-plugin-ttag",
      {
        "resolve": {
          "translations": process.env.LOCALE === "es" ? "es.po" : "default",
        },
      },
    ],
  ],
}
