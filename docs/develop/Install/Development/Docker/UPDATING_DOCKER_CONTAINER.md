

# Build and push the development container to Docker

_Will deprecate once CI is setup_

Containers are [here](https://hub.docker.com/r/sfgrp/taxonworks/)

* `docker build --rm -f Dockerfile.development . -t sfgrp/taxonworks:dev`
* `docker push sfgrp/taxonworks:dev`    
