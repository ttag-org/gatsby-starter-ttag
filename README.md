# Gatsby Starter with `ttag` for Internationalization

This is just a bare-bones demo gatsby starter with the minimum required to
demonstrate using [ttag](https://ttag.js.org/) for _precompiled_ internationalization with
[gatsby](https://www.gatsbyjs.org/).

## Scripts

Developing or building in either _English_ or _Spanish_ is accomplished by passing
the environment variable `LOCALE` to the respective gatsby commands.
These are added as scripts in the `packages.json` for convenience:

```JSON
{
  "scripts": {
    "build:en": "LOCALE=en gatsby build",
    "develop:en": "LOCALE=en gatsby develop",
    "build:es": "LOCALE=es gatsby build",
    "develop:es": "LOCALE=es gatsby develop"
  }
}
```

## Babel Config

Precompiling is then handeled by the `babel-plugin-ttag` babel plugin, using `process.env.LOCALE`
to pass build-time information to the babel configuration. The `babel.config.js` is shown here:

```JS
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

```
