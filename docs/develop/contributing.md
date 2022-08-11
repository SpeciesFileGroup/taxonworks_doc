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
This software and workflow together make it possible for all to contribute to TaxonWorks Doc. Note all the pages here in docs.taxonworks.org have an "edit this page" feature. Scroll down to bottom of this page to see it.
### Add / edit documentation
To add / edit to this resource (brief instructions for existing content):
- click "edit this page" where you see a need
- add the desired text using markdown syntax (very easy!)
- if there are relevant screenshots to include then,
  - ask to become a member of the [TaxonWorks Meta Project](https://sfg.taxonworks.org/projects/7/select)
  - upload the images in TaxonWorks Meta (details to be added)
  - use the Meta image links to the large image as your screenshot link (see markdown format for links)
  - click to submit a "pull request."
  - a [TaxonWorks Docs GitHub repository](https://github.com/SpeciesFileGroup/taxonworks_doc) team member will review, make edits, ping you with questions if needed, and then accept the pull request to "merge" this into the live documentation.

NOTE: Using this method also ensures everyone gets contribution credit and recognition along with the ability to generate metrics and track this work.

### Ordering Sidebar content
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
#A is the first letter of this title
```


Filename: bar.md
```
#B is the first letter of this title
```

##### Sidebar result:

##### My folder example
- B is the first letter of this title
- A is the first letter of this title

#### Order by sidebarPosition variable

`sidebarPosition` allows you to change the order of the sidebar _regardless of the alphabetical order of the files_.
Let's take the example above, but now we're going to add sidebarPosition in each file to change the order

Filename: foo.md
```
---
sidebarPosition: 100
---
#A is the first letter of this title
```


Filename: bar.md
```
---
sidebarPosition: 200
---
#B is the first letter of this title
```

##### Sidebar result:

##### My folder example
- A is the first letter of this title
- B is the first letter of this title

#### Order Directories (aka folders)
To order (and name?) folders in the sidebar, each directory will need a README.md file. In that file, at the top in the "front-matter" the property of **sidebarPosition** needs to be added and a numeric value provided (as described above). The numeric values will order the Directories (else they will be alphabetical).

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

Figures can make use of the HTML figure element, and its corresponding figcaption:

```html
 <figure>
  <img src="https://sfg.taxonworks.org/s/rdc03q" alt="Sample image" style="width:100%">
  <figcaption>Fig.1 - A TaxonWorks Interface</figcaption>
</figure>
``` 







## Project management

### Categorize an Issue on Github
_Not everyone has permissions to label issues._
[See their descriptions.](https://github.com/SpeciesFileGroup/taxonworks/labels)

