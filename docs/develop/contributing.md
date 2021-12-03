---
sidebarPosition: 500
---

# Contributing
_Contributions can come in many different ways, not all are technical. How do I contribute? You can always [contact us](/about/Contact) with questions._

##  How do I report a bug or feature request?
Before you open an issue:
* Check to see that the issue is indeed new by carefully reviewing the existing issues.

While filing your issue:
* Use a issue template if available, this categorizes your insights into more actionable items for those seeking to address it
* Tell a story! Give us enough background so that we can replicate exactly what you did. 
* Include a success criterion.  How do we know we've succeeded in addressing the issues without contacting you again?
* Err on providing more, rather than less information.
* Provide a meaningful title that identifies your role, and what you seek to accomplish, e.g. `As an X I need Y to do Z`

Where to file your issue:
  * If your contribution regards TaxonWorks the software, use the [issue tracker here](https://github.com/SpeciesFileGroup/taxonworks/issues)
  * If your contribution regards TaxonWorks Docs (these pages), the [issue tracker is here](https://github.com/SpeciesFileGroup/taxonworks_docs/issues)
  * If your contribution regards documenting the TaxonWorks API the [issue tracker is here](https://github.com/SpeciesFileGroup/taxonworks_api/issues)

Some other conventions:
  * If you have the permissions, categorize your issue using a label.
  * Use the prefix "Task -" in the name to indicate the request for a new or improved task.

## How do I set up my development environment?
See the [install_taxonworks](https://github.com/SpeciesFileGroup/install_taxonworks) repository.

##  How do I submit changes to the code base or repository? 
* [Fork](https://help.github.com/articles/fork-a-repo/) the repository on Github
* Make a new branch off of the development branch
  - It helps if the branch tracks an issue number, like `1234_my_feature_request`
* If you have experience, rebase your branch against development before making a [pull request](/about/Glossary#Pull-request) 
* From your repository on Github select your branch, and use buttons there to make a [pull request](/about/Glossary#Pull-request).

## How do I categorize a Issue on Github?
_Not everyone has permissions to label issues._
[See their descriptions.](https://github.com/SpeciesFileGroup/taxonworks/labels)

## How do I follow TaxonWorks code conventions?
* Various README.md files exist in the code-base.
* We have code linter (Rubocop), but it is not heavily used. With growth this may change.

## How is TaxonWorks supporting developer contributions?
A project the nature of TaxonWorks needs contributions from many people to succeed over the long term. To that end we're working hard to build a foundation that permits and encourages anyone to contribute to the project. Highlights include:
* All elements of the project are open source.
* Example meta-projects exist, for example [taxonowrks_stats](https://github.com/SpeciesFileGroup/taxonworks_stats) ([demo](https://stats.taxonworks.org)) illustrating how to build an application off of the API 
* Code generators let you stub a new task view (core feature) or batch-loader in a single line.  
* TaxonWorks is built on Rails. The conventions there acts a wrapper around features that can be written in Ruby or other frameworks like [Vue](https://vuejs.org/), or other webpack supported frameworks.
* TaxonWorks is extensively unit tested.  This means you can code and contribute with a lot less fear of breaking things.
* TaxonWorks is deployed in production in [Kubernetes](https://kubernetes.io/), cutting edge application deployment and management software.
* The [Species File Group](https://speciesfilegroup.org) and its members have held hackathons and many in-house joint workshops. Contact them if you're interested in participating on site.  They are also interested in supporting visits to would-be developers, students, or others wishing to get a bootcamp in TaxonWorks development.
* Docker images let you build against the API in your own JavaScript framework with extremely minimal setup.

## How do I provide an interface or workflow idea?
  First, thanks, this is complicated stuff.  Interface (e.g. forms, reports, searches) mockups are graphical ways of asking for new features. We love to see them. To create a mock-up you can use tools like Illustrator, Photoshop, or more technical design tools like Balsamiq or Sketch, or just draw them on paper and take a picture with your phone. The issue templates have inputs for handling images, just drag and drop them there. Add a little story, or multiple pictures to help describe how you might use the interface.

## How do I show you in a video that my current tool is awesome, and how it works?
Send! It is super useful for you to record your screen, or position a video camera to capture your work on-screen and arround you. This way we see exactly how you work. You can send us big videos through file sharing services like [http://www.dropsend.com/](http://www.dropsend.com/). Find ways to [Contact us here](/about/Contact).

## How do I document the code?
TaxonWorks code [documentation](http://rdoc.taxonworks.org) is done inline with [Yard tags](http://rdoc.info/gems/yard/file/docs/Tags.md). 
