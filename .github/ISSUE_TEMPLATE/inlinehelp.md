---
name: Inline help by screenshot
about: Template for inline help feature
title: ''
labels: ''
assignees: ''

---

# How to add inline help

TaxonWorks **inline help** uses a orange **question mark** icon. When you hover over the question mark, **hover text** help appears. If you note an area or feature where you need this type of help, please follow the steps below to add a new question mark and associated hover text where needed.

HINT: In the given steps below, where it makes sense to do so, you may delete text and replace with the requested information (example: For step one, the URL. Once you put the URL in you can just delete the text asking you to provide it. Do leave the header text that says Step One).

## Step Zero.
You've discovered a place or places where you need help to be offered in your TW instance. 
  - Go to the [TaxonWorks Issues](https://github.com/SpeciesFileGroup/taxonworks_doc/issues) section of the TaxonWorks GitHub Repository
  - Click on **New Issue**
  - Click on the **[Get Started](https://github.com/SpeciesFileGroup/taxonworks_doc/issues/new?assignees=&labels=&template=inlinehelp.md&title=)** button for **Inline help by screenshot** and follow the resulting steps below.  
    <img src="https://user-images.githubusercontent.com/2990155/115447410-1a3dc700-a1de-11eb-9ba4-98423304f3a7.png" width=400px>

## Step One. The URL
Please provide the URL for the relevant page from your TW instance. Example:  
  - https://sandworm.taxonworks.org/tasks/accessions/comprehensive  
## Step Two. The Annotated Screenshot
a) Take a screenshot (see example)  
<img src="https://user-images.githubusercontent.com/2990155/115445653-c16d2f00-a1db-11eb-8686-b9dd6d7221b6.png" width="400px">  
b) Mark the place or places on the screenshot where you would like a "question mark icon" to appear.  

<img src="https://user-images.githubusercontent.com/2990155/115445912-16a94080-a1dc-11eb-8da2-10562d41c2bd.png" width="400px">  

Please drag and drop your annotated screenshot into this ticket. You'll see a note at the botton of the ticket that says  
![image](https://user-images.githubusercontent.com/2990155/115448430-50c81180-a1df-11eb-999a-a75d74d52d96.png)  

OR simply paste the image into the ticket right here which will create the necessary image file in this spot in the ticket.  

## Step Three. Your questions
Please share
  - the specific questions you want to address for each marked area and 
  - the languages you want to include

## Step Four. Click **Submit New Issue**

## Step Five. Community Liasion tagging
Once submitted, the Community Liaison or other Tech staff adds the relevant language tags to the submitted ticket.

## Step Six. The Developer's turn
  - Developer adds **anchor/s ids** to relevant pages
  - Via a URL and your github name, the developer returns a .js file to you for each language, to add relevant text for each question mark.
[SCREENSHOT]

## Step Seven. The Hover text (in one or more languages)
  - Click the URL/s and edit the file (which will look like the above screenshot)
  - Each spot will have an **id** assigned to associate with the text you write.
  - For each spot you marked, enter the text you want to appear with it.
  - If for each spot, the hover text is to be provided in multiple languages, you will need to add the relevant text to each .js file (one for each language).

## Step Eight. Note ids done
In the ticket created by you filling out this form, please enter the ids you have completed.

## Step Nine. Tech team validates and closes

# Summary steps
- [ ] Create **Inline help by screenshot** issue
- [ ] URL
- [ ] Annotated Screenshot
- [ ] Your questions and languages
- [ ] Submit new issue
- [ ] Issue tagging
- [ ] Developer adds anchor/s ids where needed
- [ ] Developer posts the .js file to (?github) for editing via URL
- [ ] Github issue is linked to this ticket (via a label? or handle?)
- [ ] Submitter of this ticket is pinged (.js file ready to edit)
- [ ] Submitter edits to add text
- [ ] Submitter indicates edits complete (via label?)
- [ ] Review by dev team
- [ ] Accept changes and close ticket
