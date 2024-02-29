---
sidebarPosition: 20
---

# The User Interface

_TaxonWorks offers conventions via a unique user interface building in forward-aware methods like automated data validation to aid navigation and data fitness._

## Philosophy

- TW seeks to offer a user interface (UI) that is as intuitive as possible that supports elegant software features to improve both the experience and the data products.
- This guide and manual exemplify one way in which the Species File Group and TaxonWorks endeavor to build a sustainable, open, transparent community. The software and process for building and maintaining the content here were selected specifically for ease of community curation of this resource.
- The structure, tasks, and features of TW focus on addressing specifically-stated needs of those using the product. We use an agile, "epic story" approach that can be summarized as: _As a [your role], I want to do [your task], in order to accomplish [some product]._
- Note color conventions used in the TW UI offer information to orient the observer to more information (e.g. this task is still under development, or these data are shared across projects).


## Logging in
This screenshot provides a quick overview of the TW User Interface after log in. In the caption, you will find brief descriptions of each highlighted feature. If you have an account, please log in and click to try header menu options.


#left[**Legend**: The TaxonWorks User Interface after signin. See items explained next](https://sfg.taxonworks.org/s/ax1ccw [screenshot of the TaxonWorks User Interface options after logging in])

- In the header menu (left-to-right), click
  - `TaxonWorks` to return to this `Dashboard` view
  - (copy) `software version number` (e.g. v0.28.0)
  - `Issues` to submit an idea or issue to GitHub
  - `Project` to manage a specific project
  - `Administration` to see/access all projects you administer
  - `Account` to access your own account information
  - `Sign out`/in

In the main section (left-to-right): click items under the headers. Options under `Projects` give you access to all your projects. With `Data` you can view `recently created` data added for that project. With `Preferences` you can order the User Interface hub options `Tasks`, `Data`, and `Favorites`.

- On the far bottom right, note the four icons (top to bottom).
  - Click a half-circle icon on the right side to open a panel

The red circle opens the `PDF Document viewer`. The green circle gives you a `Pinboard` to access frequently used items like source PDFs. With the blue circle, you get a `Clipboard` for frequently used text. The orange circle provides built-in context-dependent `Help`.

## Administration
Next, for any given Project you select, notice the UI changes once you click `Administration` for that Project. In the Administration module you can, for example: see/add project members, and control permissions. In any TW sandbox, you can add yourself to other projects using the `Administration` link. See next for more about the `Administraion` tools.

#left[**Legend**: The TaxonWorks Project Administration UI. See options explained next.](https://sfg.taxonworks.org/s/j3zdyy [screenshot of the TaxonWorks Adminstration Interface options])

In the main section under `Projects` you can click to create a `New` Project or use `Projects overview` to find a Project and add a current TW user as a member.

From the `Users` section, you have options to add a `New` user, add multiple users using `Batch add new`, `List` all users, and see the `Activity` for all Projects and Users.

Under the `Data` topic, using `Overview` you can create specific reports for different data types and projects. With `Health` you find any data issues that the TW software has detected. `Reindex` opens an option for you to create Darwin Core (standard) occurrence records.

### Add New Project
#left[**Legend**: Add New Project UI](https://sfg.taxonworks.org/s/y40u6c [screenshot of the TaxonWorks Add New Project UI] w{60%})
- To create a `New` Project
  - Click `Administration` in the header menu,
  - then under `Projects` click `New`
  - Enter the desired `Name` in the field provided
  - You are a member by default.
    - Uncheck if creating for others.
  - For the `API access token` you select
    - `Generate new token` if you want to be able to access your data programatically
    - `clear api access token` if you need / want to stop all public programatic access to your data.
  - Click `Create Project`.

As a result, your `Dashboard` list will include the new Project. If for some reason you find you need to edit the name of your project, it's also editable after creation.

### Adding folks to projects
`Users` need to be added to TW before they can become `Project members`. Once a user, they can be added as members, to any project desired. If you are flagged as an administrator you can do everything in the workbench. As an admin, you see the `Adminstration` link in the header menu. **Feel free to add users to your sandbox through the `Administration` link. If you do, please provide them a link to this [Terms of Use Page](https://speciesfilegroup.org/docs/taxonworks_sandboxes_at_sfg.html) and our [Collaboration Understanding](https://speciesfilegroup.org/docs/taxonworks_in_production_at_sfg.html).**

Sandbox Only: Feel free to **add yourself to projects that are currently not visible to you**. Steps to do this:
- Click `Administration` (top right)
- Click `Projects overview` (on left)
- Click `List`
- Review the list, select one using **Double click** for that `row`
- Click `Add project member`, find your name
- Click `Create Project member`

### Add New User

Before adding anyone to the list of TW `Users`, please check the list as someone may already be in the TW Community through another project. In this case, you'll need to add them to your project as a new member. If they do need a `User` account, see the following steps.

- Signin to TaxonWorks
- Select the `Project` of interest
- Click `Administration` in the header menu
- Then under `Users`, click list to search existing list.
- If you do not find the name / email you are looking for, go back one step to `Users` and click `New` and fill out the form.
  - Type their `Name`
  - Enter their `Email`
  - Provide a `Password` (It will be temporary, they will need to reset it).
  - Retype the `Password`
  - (Optional) select `Is administrator` if you want them to have this role.
  - (Optional) select the matching `Person` if they are in TaxonWorks.
  - (Optional) select `Generate new api access token` if desired for a `User` that wants to query the TW Project database programmatically.
- Send the new `User` (and soon-to-be `Project member`) an email with instructions to read the [Terms of Use Page](https://speciesfilegroup.org/docs/taxonworks_sandboxes_at_sfg.html) and our [Collaboration Understanding](https://speciesfilegroup.org/docs/taxonworks_in_production_at_sfg.html). They will also need to `reset password.`

Note: you can also go to `Batch add new` to add many `users` at one time (see under `Administration` > `Users` > `Batch add new`) and you will need their email and name string for each new user.

Note: in TaxonWorks a `Person` differs from a `User`. To be a `Person` in TaxonWorks, you have been vetted and with best practice, you have a globally unique identifier (e.g. an ORCiD or Wikidata Q number).

### Add Project Member

When you want to add an existing TW `User` to a `Project`see these steps:
- After signin, select the desired `Project`
- Then click `Project` in the header menu
- Under `Members` click `Add project member`
- Search the `User` and once found, click to select
- (Optional) select `Is administrator` if desired
- Click `Create Project member`
- (Optional) you may want to send the new `Project members` an email if need be with a link to the new project.

If you need to add many folks at one time, use the `Add many project members` option instead. (See `Project` > `Members` > `Add many project members`) and select the desired individuals and click `Create project members`.

### Inside a Project
Note that once you log into a given project, you see 3 options for interacting with others and data. See the `Tasks`, `Data`, and `Favorites` tabs.

The `Tasks` provide you with one-click access to working on a specific activity such as `Filter Sources` for the ones you seek or `Comprehensive Digitization` of specimen data.
- currently 80 tasks exist in TW
- tasks can be customized
- new tasks can be written
- you can search tasks
- tasks are associated with given global concepts (e.g. `Nomenclature`, `Source`, `Biology`, `Collection object`, `Collecting event`, `Image`, `Matrix`, `dna`, etc.)

With the `Favorites` tab, you can store your most-used tasks (aka activities) for quick access to what you do most often.
- To add a task to appear in your `Favorites` tab, click the 'star' on the task card.

The `Data` tab provides you with more of a traditional _table_ view of information as stored in TW. Here you begin to get a sense of how the data are structured and related in TW.

If you would like more details about the TW Data Model, see the [Data](https://docs.taxonworks.org/develop/Data/) section of docs.taxonworks.org

## Explore TW Tasks

With your knowledge of the `Tasks`, `Data`, and `Favorites` structure you can try these actions.

1. Find a `Task` of interest, click on the _star_ and then click on the `Favorites` tab. You'll see this task listed now for easy access.

2. ...

## Icons in TaxonWorks
Some icons in TaxonWorks help you move around (i.e. "navigate") in the software. Other icons _touch the database_, providing you with functions to add data or delete something. In TaxonWorks, icon button colors convey this idea.
- Green buttons = write to the database
- Red buttons = delete from the database
- Blue buttons = activate something in the interface

Note also, all icons with a blue circle and white middle are `Radials` and serve to help you add information to (i. e. to `annotate`) the object you are looking at (e. g. the `Source` publication record, the `CollectionObject` record, the `Collecting Event` record, the `TaxonName` record, etc). In other words, a tool found many places in TW, that integrates commonly used functions or tasks for annotating things (adding related information) in one place.  The particular functions found after click are context dependent.

| Icon   | Icon Name      | Purpose of Icon
|:----------|:-----------------|----------------------------------------|
||**Radial Icons in TaxonWorks**   | use these to add information to the current object of interest, move to a different area in TW, or select objects of interest. The particular functions found after click show you what types of information you can add or actions you can take. |
|<img src="https://sfg.taxonworks.org/s/o70iza"> |Annotate Radial    | use this to add information to the current object of interest. The particular functions found after click show you what types of information you can add. |
|<img src="https://sfg.taxonworks.org/s/59mm5b"> |Navigate Radial     | use this icon to move across to different areas in TaxonWorks  |
|<img src="https://sfg.taxonworks.org/s/ybfj5n"> |Mass Annotate Radial     | use this icon to add information to many records at once in TaxonWorks  |
|<img src="https://sfg.taxonworks.org/s/l80fse"> |Filter Radial     | use this icon to select a set of records from a search in TaxonWorks using the `Filter` task (e. g. `Filter Nomenclature`, `Filter Sources`, `Filter Collection Objects`, etc.)|
|<img src="https://sfg.taxonworks.org/s/0h1xe6">|Quick Forms Radial        | use this to bring up commonly used forms associated with OTUs, such as `Asserted distributions` or `Biological Associations`|
|<img src="https://sfg.taxonworks.org/s/swrp57">|Label Radial        | use this to create labels|
|<img src="https://sfg.taxonworks.org/s/tncxw5">|Linker Radial        | use this to send selected results from a filtered search to another Task in TaxonWorks to further refine your data subset |
|<img src="https://sfg.taxonworks.org/s/up6vns">|Loan Radial        | select objects to loan or that are being returned |
||||
| <img src="https://sfg.taxonworks.org/s/y3pdwu">|Browse Taxa         | moves you from a taxon name to its associated OTU |
| <img src="https://sfg.taxonworks.org/s/6kzyps"> |Browse Nomenclature | takes you from an OTU to its associated taxonomic name |
| <img src="https://sfg.taxonworks.org/s/ge5g3e">|Pinboard            | Add (if green) or Remove (if red) an item from your Pinboard. If the icon is blue, the item has been selected as the default in your pinboard and you can add it to a field automatically, for example, with literature citations.     |
| <img src="https://sfg.taxonworks.org/s/fw8tpm">|Edit | With this icon, you may edit a given item. For example, from the `Browse nomenclature` page, this icon takes you to the `Edit taxon name` page associated with the taxon.
| <img src="https://sfg.taxonworks.org/s/piaoh5">|Trashcan            | Use this to remove the current record from the database                                |


## Did you know
- As of this writing, you can only be logged into one instance (one project) of TW at-a-time.
- You can write your own tasks in TW? See [the docs](https://docs.taxonworks.org/develop/coding.html#creating_a_new_taxonworks_task) or ask for more details.
