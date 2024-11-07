---
sidebarPosition: 2 
sidebarParentPosition: 2
---

# Overview 

::: warning 
These are not comprehensive instructions, at present the are intended to only trigger memory.
:::

## Production tools
The [SFG](https://speciesfilegroup.org) deploys TaxonWorks using:
* Ansible
* Docker, our images at docker are at [https://hub.docker.com/r/sfgrp/taxonworks/](https://hub.docker.com/r/sfgrp/taxonworks/).
* Kubernetes
* Passenger
* Nginx
* Ubuntu 22.x

## Cheatsheet

* [Cheatsheet](https://kubernetes.io/docs/user-guide/kubectl-cheatsheet/)

## Client

* `config` is typically in something like `~/.kube`

## TaxonWorks configuration

* At [/k8s](https://github.com/SpeciesFileGroup/taxonworks/tree/development/k8s)

## Startup

* Apply specific settings. Files looking like [this](https://github.com/SpeciesFileGroup/taxonworks/tree/development/k8s/dev), namespace first, then  `kubectl apply -f .`
* Apply [application settings](https://github.com/SpeciesFileGroup/taxonworks/tree/development/k8s)

## Frequently used

* `kubectl get pod`
* `kubectl apply -f .` (start everything, but not recursively)
* `kubectl exec -it taxonworks-####-##### bash`
* `kubectl logs taxonworks-1122781372-5hm4z`
* `kubectl delete -f .`
* `kubectl get service` (get port for service)
* `kubectl proxy` (localhost:8001), then in browser: `http://127.0.0.1:8001/ui` (don't forget the /ui)

## Minikube (test in development)

* Switch context (change `config` in ~/.kube)
* `minikube ip` (get IP for minikube, stable, shouldn't change)

### Set context/onetime setup

* Create namespace for tw in minikube `kubectl create namespace tw`
* Set context: (run once, OS X version):

```bash
#!/bin/bash
export CONTEXT=$(kubectl config view | awk '/current-context/ {print $2}')
kubectl config set-context $CONTEXT --namespace=tw
```

## Docker 

### Rebuilding production

The docker build uses `Dockerfile`.  Ultimately it will track the [master branch](https://github.com/SpeciesFileGroup/taxonworks/tree/master).

Containers are found at [https://hub.docker.com/u/sfgrp/](https://hub.docker.com/u/sfgrp/). At present numerically tagged versions are production, and :latest is the development snapshot.

* `docker build --rm -t sfgrp/taxonworks:0.14.x .` 
* `docker push sfgrp/taxonworks:0.14.x`
