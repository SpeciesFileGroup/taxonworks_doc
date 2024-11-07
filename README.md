# TaxonWorks Documentation

## Content
This repository documents [TaxonWorks](https://taxonworks.org) for both users and developers. It is the source for the [TaxonWorks Docs](https://docs.taxonworks.org).

Content is being migrated from and/or also available from various other locations. You might also see:

* The 'main' branch of this repository
* [Code documentation](https://rdoc.taxonworks.org/)

## Building

Use the `development` branch

Install packages.
```
npm install
```

Start a development server at `http://localhost:8080`. Changes to files will be detected automatically. _Adding/removing files may require restart._
```
npm run docs:dev
```

While not needed because it is handled by continunous integration (CI) you can build the docs locally with:
```
npm run docs:build 
```

Docs are built using [VuePress](https://vuepress.vuejs.org/) and served on Github pages.

_Tired of reading all this stuff? Can't find what you are looking for? Talk to a human, [![Chat on Matrix](https://img.shields.io/matrix/TaxonWorks:gitter.im?label=chat&server_fqdn=matrix.org)](https://app.gitter.im/#/room/#SpeciesFileGroup_taxonworks:gitter.im)_

## Contributing

Documentation is community built. [Instructions.](https://docs.taxonworks.org/develop/contributing.html).
