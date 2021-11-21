# TaxonWorks Documentation


## Content
This repository documents [TaxonWorks](https://taxonworks.org) for both users and developers. It is the source for the [https://docs.taxonworks.org](TaxonWorks Documentation). 

Content is being migrated from and/or also available from various other locations. You might also see:

* The 'main' branch of this repository
* [install_taxonworks](https://github.com/SpeciesFileGroup/install_taxonworks)
* [Code documentation](https://rdoc.taxonworks.org/)

## Building

Use the `development branch`

Install packages.
```
npm install
```

Start a development server at `http://localhost:8080`.  Changes to files will be detected automatically. _Adding/removing files may require restart._
```
npm run docs:dev
```

While not needed because it is handled by continunous integration (CI) you can build the docs locally with:
```
npm run docs:build 
```

_Tired of reading all this stuff? Can't find what you are looking for? Talk to a human, [![Gitter][1]][2]_.

[1]: https://badges.gitter.im/SpeciesFileGroup/taxonworks.svg
[2]: https://gitter.im/SpeciesFileGroup/taxonworks?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
