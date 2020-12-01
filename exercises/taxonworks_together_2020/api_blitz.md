# API session

## Goals

(Very) briefly discuss the following concepts:

* What happens in the UI, comes from the API
  * Adding `.json` to your requests
* Generating examples from filters
* API documentation 
  * Endpoints (resources)
  * Parameters
* Authentication tokens (`token`, and `project_token`)
  * Creating, and revoking tokens
    * For projects
    * For you (a user) 
* Types of endpoints
  * REST
  * Services 
* API calls from local machines

With this background document as many proof-of-concept integrations as possible in the remaining time frame, let's see if we can hit 10.
  
## Pre-requisites
_Each of these steps has their own pre-requisites that are not repeated here. _

* Account access to one or more TaxonWorks projects
  * Projects must have API token "open"
* Your user TOKEN
* Software that sends and receives requests
* Software that reads and outputs JSON 

## Process

### 0 - Setup
* Should we all spam data into [https://sandstone.taxonworks.org](https://sandstone.taxonworks.org)

### 1 Strategy
* Identify and copy the necessary API tokens
* Identify the endpoint
* Compose the request
  * A one-off
  * As part of some script, with variables, etc.
* Test the request with `curl`, a scripting language, POSTMAN. Tweak/fix, and repeat.
* With tested request use that URL in another application or tool.

## Links
* [API intro poster](https://static.tdwg.org/conferences/2020/posters/ps_59170_yoder.pdf)
* [jq](https://stedolan.github.io/jq/) a command line processor
* [POSTMAN](https://www.postman.com/) an API development/experiment tool
* [curl manual](https://curl.se/docs/manual.html)

## Suggested integrations

Refine
Bash
Ruby
R
Python
Word
Excel
Google sheets
... others

