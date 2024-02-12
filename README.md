# A tiny & highly configurable library that returns a custom Signale instance

> **TODO**

## Setup

> **TODO**

### Building Sources and Documentation

Three npm scripts are provided to build
[**`TypeScript`**][typescript-url] sources and generate documentation with
[**`TypeDoc`**][typedoc-url]:

- **`build`** -- runs both **`build:ts`** and **`build:docs`**.
- **`build:ts`** -- builds [**`TypeScript`**][typescript-url] sources from
    [**`./src`**](/src) to native JavaScript files in [**`./dist`**](/dist).
- **`build:docs`** -- builds documentation with
    [**`TypeDoc`**][typedoc-url] in [**`./docs`**](/docs). Both
    [**`LICENSE.md`**](/LICENSE.md) and [**`CHANGELOG.md`**](/CHANGELOG.md) are
    copied into [**`./docs`**](/docs).

#### Viewing Documentation Site

After building the static HTML documentation with **`build:docs`**,
run `pnpm serve:docs` or `http-server docs` and navigate to
[**`localhost:8080`**](http://localhost:8080).

### Deploy Documentation On GitHub Pages

To enable GitHub Pages, access the repository settings and configure the Pages
settings to use the `main` (or `master`) branch and the `./docs` folder.

## Release History

See [**`CHANGELOG.md`**](./CHANGELOG.md) for more information.

## License

Distributed under the **MIT** license. See [**`LICENSE.md`**](./LICENSE.md)
for more information.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

[typescript-url]: https://www.typescriptlang.org/
[typedoc-url]: https://typedoc.org/
