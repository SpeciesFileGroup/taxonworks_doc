---
sidebarPosition: 125 
---

# Contributing

_Contributions are possible in many different ways, not all technical. How do I contribute? You can always [contact us](/about/contact) with questions._

## Report a bug

Where to file an issue:  
* TaxonWorks the software - [issue tracker here](https://github.com/SpeciesFileGroup/taxonworks/issues)
* TaxonWorks Docs (these pages) - [issue tracker is here](https://github.com/SpeciesFileGroup/taxonworks_docs/issues)
* TaxonWorks API - [issue tracker is here](https://github.com/SpeciesFileGroup/taxonworks_api/issues)

Before you file an issue:
* Check to see that the issue is indeed new by carefully reviewing the existing issues.

While filing your issue:
* Use a issue template if available, this categorizes your insights into more actionable items for those seeking to address it
* Tell a story! Give us enough background so that we can replicate exactly what you did. 
* Include a success criterion. How do we know we've succeeded in addressing the issues without contacting you again?
* Err on providing more, rather than less information.
* Provide a meaningful title that identifies your role, and what you seek to accomplish, e.g. `As an X I need Y to do Z`
* Provide links/URLs to the scenarios in question, particularly if referencing a specific data point
* Consider adding Screenshots for context.

## Ideas, feature requests

### Provide an interface or workflow idea

First, thanks, this is complicated stuff. Interface (e.g. forms, reports, searches) mockups are graphical ways of asking for new features. We love to see them. To create a mock-up you can use tools like Illustrator, Photoshop, or more technical design tools like Balsamiq or Sketch, or just draw them on paper and take a picture with your phone. The issue templates have inputs for handling images, just drag and drop them there. Add a little story, or multiple pictures to help describe how you might use the interface.

:::tip
Use the prefix `Task -` in the issue name to indicate the request for a new or improved task.
:::

### Provide a suggestion for a feature or improvement via a video

Send! It is super useful for you to record your screen, or position a video camera to capture your work on-screen and around you. This way we see exactly how you work. You can send us big videos through file sharing services like [http://www.dropsend.com/](http://www.dropsend.com/). Find ways to [Contact us here](/about/Contact).

## Code

See [Code](Code/).

## Documentation

_This software and workflow together make it possible for all to contribute to TaxonWorks Doc. Note all the pages here in docs.taxonworks.org have an "edit this page" feature. Scroll down to bottom of this page to see it._

### Editing

_You can edit files offline, on your own local computer, or online within the browser._

You will need a [Github](http://github.com) account.

NOTE: Using this method also ensures everyone gets contribution credit and recognition along with the ability to generate metrics and track this work.

#### Online

_A brief summary of the steps._

- Login to your [Github](https://github.com/login) account.
- Return to [docs.taxonworks.org](https://docs.taxonworks.org)
- On any given document, scroll to the bottom, and click `Edit this page` where you see a need.
- Add or edit your text.
- Ensure your edits follow the [style conventions](#style-conventions). We use [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github) to style text.
- If you need to add an image see [including a screenshot](#including-screenshots-or-images).
- Click `Commit changes` to submit a "pull request."
- In the form that pops up:
  - Add a (very) brief description of your change in the field that has `Update README.md` in muted colors
  - Add a longer optional description in the bigger box, if you want
  - In your message do not use words like "Changed, tweaked, updated", describe _what_ was done
  - Choose the second option `Create a new branch ...`. There is an exception to this, if your changes are small, and ready to go directly to the public site, then you can commit to the `development` branch.
- Click `Commit changes` again

A [TaxonWorks Docs GitHub repository](https://github.com/SpeciesFileGroup/taxonworks_doc) team member will review, make edits, ping you with questions if needed, and then ultimately accept the pull request to "merge" this into our documentation.

##### What branch should I use?

In deciding which branch to make a change on start by asking the question: "Is my change ready to go live, right now?" If the answer is _yes_ (and you have permissions) then you can _commit to the development branch_. If the answer is _no_ (e.g. you want to further refine your text), then you should commit to a new branch.

In addition:

- The _development_ branch is the staging ground for the _main_ branch.
- You should always assume that _development_ branch changes will go live at any time.
- _Development_ changes may accumulate before moving to _main_.
- The _main_ branch must never be committed to directly. Changes to _main_ happen when _development_ is merged into it.
- It is always safest, and OK, to start a new branch.
- It's best to limit the scope of your changes on each new branch.
- If you have large/ongoing changes to your branch it's useful to start your editing session by merging _development_ into _your branch_. This keeps the differences between _development_ and _your branch_ minimal.
- If you are editing locally, make sure you syncronize your changes with those on the remote server (`git pull`) before you start your editing session.

#### Offline

_Offline editing follows a typical Git-based workflow that are detailed on Github and many other places online._

- Fork the repository
- Clone the fork onto your local machine
- Make a new feature branch
- Edit, and commit to the branch
- Push your local edits to your Github fork
- Make a pull request

### Including images

In adding documentation, you will note that on any page at [docs.taxonworks.org](https://docs.taxonworks.org) you can click the **Edit pencil icon** to add / edit text. To manage the image files, for example screenshots, we add to the documentation, we use `TaxonWorks Meta Project` hosted on [https://sfg.taxonworks.org](sfg.taxonworks.org). To add screenshots to this documentation, you'll need to become a member of that `TaxonWorks Meta Project`. Let us know you want to be added (e.g. send dlpaul AT illinois DOT edu an email, or ping us in [Element](https://matrix.to/#/#taxonworks:gitter.im) or [Slack](https://join.slack.com/t/taxonworks/shared_invite/zt-1pnnvq3dc-4b685~M8gssOCR2Yk956Ng)). When taking screenshots, note the resolution of your computer's monitor makes a difference if these images are sharp and clear or out of focus.

- Take the desired screenshots.
- Upload these images (in bulk or one-at-a-time) to the `TaxonWorks Meta Project` using the `New Image` task.

In TaxonWorks, find the generated image link URLs, using the `Filter Image` task. Try `Filter Image` using the `Housekeeping` filter to limit your result set to only images uploaded by you.

- In the resulting set, click on the desired image, then
- Click the `Navigate radial` under the image and select `Show`.
- From `Attributes` copy the `short URL to orginal` URL link.
- Return to editing documentation and use the Markdown format or HTML format below to insert image URLs (examples next).
  - Note that both methods allow you to specify the image size.

#### Image caption markdown (writing docs)

Examples here show the markdown (md) format for adding a **caption** to an image.

- Select one of the four options below for your caption. Put that text string into the documentation as described next.
- With the `position` option, choose `left`, `center`, or `right` which aligns your caption text according to what you pick.
- Enter the text of your choice in-between the brackets `[caption text goes here]`.
- Paste in the `short URL to orginal` URL link (from `Filter Image` > `Navigate radial` > `Show` > `Attributes`).
- Add `alt` text in-between brackets. It is best practice to include this for accessibility.
- (Optional) Declare the width or height or both of the image to control the size displayed.
  - The default sizes works well. Sometimes, depending on the screenshot, it might appear too large and then this option gives you the ability to modify the size.

```
#position[caption text goes here](link [alt text if you want it])
#position[caption text goes here](link [alt text if you want it] w{60%})
#position[caption text goes here](link [alt text if you want it] h{50%})
#position[caption text goes here](link [alt text if you want it] w{80%} h{50%})
```

#### HTML for image with caption

```html
<figure>
  <img
    src="https://sfg.taxonworks.org/s/rdc03q"
    alt="Sample image"
    style="width:100%"
  />
  <figcaption>Fig.1 - A TaxonWorks Interface</figcaption>
</figure>
```

### Adding a file

- After you fork the repository you can use Github [directly to add a new file](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
  . You can also add a new file within the Github interface

### Ordering sidebar content

In brief this is controlled alphabetically, or it can be over-written via 2 frontmatter parameters, `sidebarPosition` and `sidebarParentPosition`.

#### sidebarPosition

Where: In _any_ (README.md or other) documentation file. When: You want to position the _content of that document_ within the context of the other files within that directory.

#### sidebarParentPosition

Where: Only in a README.md. When: You want to position the name of the _directory_ within the context of other directories _and_ files at the level of that directory.

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

We use Markdown. Many guides exist, for example on [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).

- Bold - ?
- Italics - As typically used in English writing, to add emphasis, or draw attention.
- "Double quotes" - follow typical English use.
- 'Single quoted words' are literal values to be input or observed
- Bullets - Actions we are instructing the user to take. Do this now.
- Numbered bullets - Unused?
- Backticks ` are used to wrap text. See next.
- `Highlighted words` (surrounded by backticks) refer to, typically literal, text or elements in the application, that are generally part of the user interface (as opposed to dynamic data being displayed). For example they might be on button or field names like "Notice the `Data`, `Tasks`, `Favourite` tabs".
- Inline quotes - ?? (use "> ")
  > this is an inline quote
- Triple-tick blocks - use these for literal examples. Put 3 backtick marks ``` before the text block and 3 backtick marks after the text. This results in the following block in documentation.

```
Some code, or literal example.
```
