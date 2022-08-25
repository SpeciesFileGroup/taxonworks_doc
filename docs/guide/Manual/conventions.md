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


### Logging in
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

### Administration
Next, for any given Project you select, notice the UI changes once you click `Administration` for that Project. In the Administration module you can, for example: see/add project members, and control permissions. Detailed UI overviews follow this general view.

#left[**Legend**: The TaxonWorks Project Administration UI. See options explained next.](https://sfg.taxonworks.org/s/j3zdyy [screenshot of the TaxonWorks Adminstration Interface options])

In the main section under `Projects` you can click to create a `New` Project or use `Projects overview` to find a Project and add a current TW user as a member.

From the `Users` section, you have options to add a `New` user, add multiple users using `Batch add new`, `List` all users, and see the `Activity` for all Projects and Users.

Under the `Data` topic, using `Overview` you can create specific reports for different data types and projects. With `Health` you find any data issues that the TW software has detected. `Reindex` opens an option for you to create Darwin Core (standard) occurrence records.

#### Add a New Project
#left[**Legend**: Add New Project UI ](https://sfg.taxonworks.org/s/y40u6c [screenshot of the TaxonWorks Add New Project UI])]
- To create a `New` Project, under `Projects`
  - Click `New`
  - Enter the desired `Name` in the field provided
  - You are a member by default.
  - For the `API access token` you click
    - `Generate new token` if you want to be able to access your data programatically
    - `clear api access token` if you need / want to stop all public access to your data.
  - Click `Create Project`.

As a result, your `Dashboard` list will include the new Project. If for some reason you find you need to edit the name of your project, it's also editable after creation.

### Try it
1. For your project, add a member.
[STEPS here]

## Inside a Project
Note that once you log into a given project, you see 3 options for interacting with others and data. See the **Tasks**, **Data**, and **Favorites** tabs. 

The **Tasks** provide you with one-click access to working on a specific goal such as _Filter Sources_ or _Comprehensive Digitization_. 
- currently [number of] tasks exist in TW
- tasks can be customized
- new tasks can be written
- you can search tasks
- tasks are associated with given global concepts (e.g. Nomenclature, Sources, Digitiation, etc.)

With the **Favorites** tab feature, you can store your most-used tasks (aka activities) for quick access to what you do most often.

The **Data** tab provides you with more of a traditional _table_ view of information as stored in TW. Here you begin to get a sense of how the data are structured and related in TW. 

If you would like more details about the TW Data Model, see the [Data](https://docs.taxonworks.org/develop/Data/) section of docs.taxonworks.org

### Try it

With your knowledge of the **Tasks**, **Data**, and **Favorites** structure you can try these actions.

1. Find a **Task** of interest, click on the _star_ and then click on the **Favorites** tab. You'll see this task listed now for easy access.

2. ...

## Did you know
- As of this writing, you can only be logged into one instance (one project) of TW at-a-time.
- You can write your own tasks in TW? Ask us how.
