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

## Supporting search at docs.taxonworks.org
TaxonWorks documentation uses VuePress v2 with local search. 

Search indexes page titles, headers, and visible body text at build time (inline code like `` `...` `` and code blocks like ```` ```...``` ```` are *not* indexed). That means any words in those places should be found if the user searches for them - more on that below.

For terms you think the user may search on that *aren't* naturally found in those places, you can use the front matter `search.keywords` mechanism supported by vuepress.

Front matter must appear at the very top of the file (other data may be included between the dashes as well) - here we add 3 new terms the user can now get a matching search to the top of this page for:

---
search:
  keywords:
    - cvts
    - controlled vocabs
    - attribute types
---

Search matches user queries against _any **substring**_ of indexed text. Because of this, plural headers (e.g. “Predicates”, “Confidences”, “CVTs”) already match singular searches, which is why all of the keywords above are pluralized.

Multi-word user searches are split into tokens and matched independently. Word order and phrases _do not matter_: a search for `biocuration class` returns the same results as `class biocuration`. Pages matching more tokens rank higher.

Use `search.keywords` sparingly and only for terms that headers and existing text cannot already match.


## Contributing

Documentation is community built. [Instructions.](https://docs.taxonworks.org/develop/contributing.html).
