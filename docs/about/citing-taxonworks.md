---
sidebarPosition: 40 
---

# Citing TaxonWorks

_There are various ways to cite TaxonWorks, products derived from the software, and communities supporting the software. Here we offer general guidelines and some specific examples._

## Software

### Collective code, documentation and API related material
TaxonWorks Community. 2022. Taxonworks [software and supporting resources], https://taxonworks.org. Species File Group (maintainers, https://speciesfilegroup.org). Accessible at: https://github.com/SpeciesFileGroup/taxonworks.

``` bibtex
misc{taxonworks_software_and_related,
  author = {{TaxonWorks Community}},
  organization = {Species File Group (maintainers, https://speciesfilegroup.org)},
  title = {TaxonWorks [software and supporting resources], https://taxonworks.org},
  year = {2022},
  url = {https://github.com/SpeciesFileGroup/taxonworks},
}
```

### Code (version free)
TaxonWorks Community (2022) TaxonWorks [software]. Species File Group (maintainers, https://speciesfilegroup.org). Accessible at: https://github.com/SpeciesFileGroup/taxonworks

``` bibtex
misc{taxonworks_software,
  author = {{TaxonWorks Community}},
  organization = {Species File Group (maintainers, https://speciesfilegroup.org)},
  title = {TaxonWorks [software]},
  year = {2022},
  url = {https://github.com/SpeciesFileGroup/taxonworks},
}
```

### Code at a specific version 
TaxonWorks Community (2022) TaxonWorks [software, Version 0.29.0]. Species File Group (maintainers, https://speciesfilegroup.org). Accessible at https://github.com/SpeciesFileGroup/taxonworks/tree/v0.29.0

``` bibtex
misc{taxonworks_software_version_29,
  author = {{TaxonWorks Community}},
  organization = {Species File Group (maintainers, https://speciesfilegroup.org)},
  title = {TaxonWorks [software, Version 0.29.0]},
  year = {2022},
  url = {https://github.com/SpeciesFileGroup/taxonworks/tree/v0.29.0},
}
```

### Documentation (these pages)
TaxonWorks Community (2022) TaxonWorks [documentation]. Species File Group (maintainers, https://speciesfilegroup.org). [Accessed yyyy/mm/dd] Accessible at https://docs.taxonworks.org

``` bibtex
misc{taxonworks_documentation,
  author = {{TaxonWorks Community}},
  organization = {Species File Group (maintainers, https://speciesfilegroup.org)},
  title = {TaxonWorks [documentation]},
  year = {2022},
  url = {https://docs.taxonworks.org},
  note = {Accessed 2022/1/1}
}
```

### Other
Additional citations, referencing other specific aspects of the project, are concievable, they should follow the examples above.  For example they might reference:  
*  The non-code, but digital (captured and available somewhere, e.g. Issue tracker), contributions to the TaxonWorks community (e.g. opening issues, adding help documentation, etc.)
*  The non-code, and not digital, contributions, e.g. people we talked with that gave us ideas (has to be captured somewhere, e.g. personal communications)

## Data
### General citation guidance
A generalized data citation looks like:

`<who, "community" or "individuals>`. `<year>`. `<project title, as seen in TW>` curated in TaxonWorks [software]. `<optional maintainer statement>`. Retrieved `<date>` at `<url, e.g. https://sfg.taxonworks.org/api/v1>`.

``` bibtex
misc{my_data_in_taxonworks,
  author = {{TaxonWorks Community}},
  organization = {Species File Group (maintainers, https://speciesfilegroup.org)},
  title = {<Project title as seen in TW> curated in TaxonWorks [software]},
  year = {2022},
  note = {Retrieved <timestamp> at <url>}
}
```

### Other
Additional citation might follow this pattern, and include:
* Citing data in any instance of TaxonWorks, ever, destroyed or not (cross project)  
* Citing data in a single instance of TaxonWorks (many projects, e.g. https://sfg.taxonworks.org)

## Other guidelines
* We recommend treating all contributors as authors rather than dividing up roles in the citation.
* Reference DOI or other identifier if the data is published and one is available
* Reference a HASH of the data if the data is upublished

Resolving these questions might help to provide additional context:
* Are you citing a) some or b) all of the data (what)?
* Was the data retrieved in a) real time or b) via an "archive" (when)?
* Was the data retrieved a) via an API (e.g. a resource described by https://api.taxonworks.org), b) some public interface (e.g. a portal that uses https://github.com/SpeciesFileGroup/taxonpages) c) within a private version of TaxonWorks (best to archive these publically!) or d) in a post-publication archive (e.g. Zenodo) (how)?

## Additional examples
- McElrath TC, Thomas MC, & Yoshida T. 2021. Nomenclature of family Laemophloeidae extracted from Cucujoidea World Catalog curated in TaxonWorks [software]. Retrieved Oct 26, 2021 at https://sfg.taxonworks.org/api/v1/.
- McElrath TC, Thomas MC, & Yoshida T. 2021. Nomenclature of family Laemophloeidae extracted from Cucujoidea World Catalog curated in TaxonWorks [software]. Retrieved Oct 26, 2021 at https://sfg.taxonworks.org/api/v1/.
- Universal Chalcidoidea Database Curators. 2022. Universal Chalcidoidea Database (UCD) curated in TaxonWorks [software]. Accessed on Oct 26, 2021 at https://sfg.taxonworks.org/api/v1/.
- Heraty, John; Woolley, Jim, et al. 2022. Universal Chalcidoidea Database (UCD) curated in TaxonWorks [software]. Accessed on Oct 26, 2021 at https://sfg.taxonworks.org/api/v1/.
- Heraty, John; Woolley, Jim, et al. 2022. Universal Chalcidoidea Database (UCD) curated in TaxonWorks [software]. Species File Group (maintainers, https://speciesfilegroup.org). Retrieved Oct 26, 2021 at https://sfg.taxonworks.org/api/v1/.
