---
sidebarParentPosition: 3
sidebarPosition: 1
---

# Overview

_TaxonWorks developers are committed to helping solve deployment strategies. If you need help, or want to explore alternative approaches reach out._

Three approaches to deploying TaxonWorks for production (use) have been used to date:

1. Docker/[Kubernetes](Kubernetes/) - A more advanced approach that add redundancy and ability to eliminate down-time on new deploys. The approach currently used by the [SpeciesFileGroup](https://speciesfilegroup.org).
2. Docker/Local network - Running the Dockerzed version of TaxonWorks on your local network is possible and is useful when use is scoped to a smaller number of projects, or to a specific organization
3. [Capistrano](Capistranon/) - A deploy library used to run on standard servers, without containers. No longer maintained. Lightweight, should still be possible if you don't want to use Docker, contact us.
