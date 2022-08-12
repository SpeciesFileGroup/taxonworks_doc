---
sidebarPosition: 500
---

# Contributing Now
_Contributions can come in many different ways, not all are technical. How do I contribute? You can always [contact us](/about/Contact) with questions._

## Ideas, feature requests

### Provide an interface or workflow idea
First, thanks, this is complicated stuff.  Interface (e.g. forms, reports, searches) mockups are graphical ways of asking for new features. We love to see them. To create a mock-up you can use tools like Illustrator, Photoshop, or more technical design tools like Balsamiq or Sketch, or just draw them on paper and take a picture with your phone. The issue templates have inputs for handling images, just drag and drop them there. Add a little story, or multiple pictures to help describe how you might use the interface.

### Provide a suggestion for a feature or improvement via a video
Send! It is super useful for you to record your screen, or position a video camera to capture your work on-screen and arround you. This way we see exactly how you work. You can send us big videos through file sharing services like [http://www.dropsend.com/](http://www.dropsend.com/). Find ways to [Contact us here](/about/Contact).

## Code

### Follow TaxonWorks code conventions
* Various README.md files exist in the code-base.
* We have code linter (Rubocop), but it is not heavily used. With growth this may change.

### Submit changes to the code base or repository 
* [Fork](https://help.github.com/articles/fork-a-repo/) the repository on Github
* Make a new branch off of the development branch
  - It helps if the branch tracks an issue number, like `1234_my_feature_request`
* If you have experience, rebase your branch against development before making a [pull request](/about/Glossary#Pull-request) 
* From your repository on Github select your branch, and use buttons there to make a [pull request](/about/Glossary#Pull-request).

### Document the code?
TaxonWorks code [documentation](http://rdoc.taxonworks.org) is done inline with [Yard tags](http://rdoc.info/gems/yard/file/docs/Tags.md). 

## Documentation
_This software and workflow together make it possible for all to contribute to TaxonWorks Doc. Note all the pages here in docs.taxonworks.org have an "edit this page" feature. Scroll down to bottom of this page to see it._

### Editing 
_You can edit files offline, on your own local computer, or online within the browser._

You will need a [Github](http://github.com) account.

NOTE: Using this method also ensures everyone gets contribution credit and recognition along with the ability to generate metrics and track this work.

#### Online 
_A brief summary of the steps._

* Login to your [Github](https://github.com/login) account.
* While browsing these documents click `Edit this page` where you see a need.
* Add or edit the desired text. Use [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github). 
* Ensure your edits follow the [style conventions](#style-conventions).
* If you need to add an image see [including a screenshot](#including-screenshots-or-images).
* Click `<something>` to submit a "pull request."

A [TaxonWorks Docs GitHub repository](https://github.com/SpeciesFileGroup/taxonworks_doc) team member will review, make edits, ping you with questions if needed, and then accept the pull request to "merge" this into the live documentation.

#### Offline

_Offline editing follows a typical Git-based workflow that are detailed on Github and many other places online._

* Fork the repository
* Clone the fork your local machine
* Make a new feature branch 
* Edit, and commit to the branch
* Push your local edits to your Github fork
* Make a pull request 

### Including screenshots or images
* Ask to become a member of the [TaxonWorks Meta Project](https://sfg.taxonworks.org/projects/7/select)
* Upload the images to that project 
* In TaxonWorks find the generated image link, use the `large` format, and copy it
* Return to editing and use the Markdown format to insert images.

You can also use HTML to insert the image as a figure, this allows you to include a caption:

```html
 <figure>
  <img src="https://sfg.taxonworks.org/s/rdc03q" alt="Sample image" style="width:100%">
  <figcaption>Fig.1 - A TaxonWorks Interface</figcaption>
</figure>
``` 

### Adding a file
* After you fork the repository you can use Github [directly to add a new file](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
. You can also add a new file within the Github interface

### Ordering sidebar content
In brief this is controlled alphabetically, or it can be over-written via 2 frontmatter parameters, `sidebarPosition` and `sidebarParentPosition`.  

#### sidebarPosition
Where: In _any_ (README.md or other) documentation file.  When: You want to position the _content of that document_ within the context of the other files within that directory.

#### sidebarParentPosition
Where: Only in a README.md.  When: You want to position the name of the _directory_ within the context of other directories _and_ files at the level of that directory.

#### Order by filename
First, the system will take the files within the directory in alphabetical order of the filenames to generate the sidebar. For example:

Folder structure:

```
-- My folder example
---- bar.md
---- foo.md
```

Filename: foo.md
```
# A is the first letter of this title
```

Filename: bar.md
```
# B is the first letter of this title
```

##### Sidebar result:

```
My folder example
  B is the first letter of this title
  A is the first letter of this title
```

#### Order by sidebarPosition variable

`sidebarPosition` allows you to change the order of the sidebar _regardless of the alphabetical order of the files_.
Let's take the example above, but now we're going to add `sidebarPosition` in each file to change the order:

Filename: foo.md
```
---
sidebarPosition: 200
---
# A is the first letter of this title
```

Filename: bar.md
```
---
sidebarPosition: 100
---
# B is the first letter of this title
```

##### Sidebar result:

```
My folder example
  B is the first letter of this title
  A is the first letter of this title
```

### Style conventions

We use Markdown.  Many guides exist, for example on [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).

* Bold - ?
* Italics - As typically used in English writing, to add emphasis, or draw attention.
* "Double quotes" - follow typical English use.
* 'Single quoted words' are literal values to be input or observed 
* Bullets - Actions we are instructing the user to take.  Do this now.
* Numbered bullets - Unused?
* `Highlighted words` (surrounded by backticks) refer to, typically literal, text or elements in the application, that are generally part of the user interface (as opposed to dynamic data being displayed). For example they might be on button or field names like "Notice the `Data`, `Tasks` `Favourite` tabs".
* Inline quotes - ?? (use "> ")
> this is an inline quote
* Tripple-tick blocks - literal examples 

```
Some code, or literal example.
```


## Project management
_How to issues are triaged, prioritized, and discussed._

### Categorize an Issue on Github
_Not everyone has permissions to label issues._
[See their descriptions.](https://github.com/SpeciesFileGroup/taxonworks/labels)