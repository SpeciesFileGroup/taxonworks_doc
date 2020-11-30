# Hello World

_A "Hello World" exercise is a little test to see that everything is working. It often involves a simple exercise to get the user started by printing the words "Hello World". Read [more at Wikipedia](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)"._

## Goals
* Build a trivial new Task card
* Demonstrate some Git basics
* Discuss next steps, caveats
  
## Pre-requisites
_Each of these steps has their own pre-requisites that are not repeated here. _

* [A working development environment](https://github.com/SpeciesFileGroup/install_taxonworks)
* A text editor, anything will do. Try [Visual Studio Code](https://code.visualstudio.com/).
* TaxonWorks up and running locally. If you [see the login window in your browser you're set](http://127.0.0.1:3000).
* Created a user and project in your _local_ instance (see step 0)

_Note that if you finished these things then you have some familiarity with using a terminal to enter commands._
  
## 0 - Before we get started - a user and project

[See the How-Tos to create a user and project](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/master/development/HOW-TO.md#seed-a-project-users-and-some-data-from-the-command-line)

## 1 - A Hello World Task 

### 1.a - Stub the task

_In TaxonWorks "Tasks" are purposeful interfaces that support a specific workflow. Each Task gets its own card on the Hub._

* [Enter the app shell](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/master/development/HOW-TO.md#enter-the-app-shell) 

We have a custom-built generator that scaffolds/stubs the bits we need to start a new task. You can see the parameters for that generator like this:

```
rails generate taxonworks:task -h
```

You can practice running the generator with the `-p` flag:

```
rails generate taxonworks:task hello_world twt/ index:get:hello_world -p
```

Notice that four lines are printed, these are the things that will be done:

```
insert  config/routes/tasks.rb
append  config/interface/hub/user_tasks.yml
create  app/controllers/tasks/twt/hello_world_controller.rb
create  app/views/tasks/twt/hello_world/index.html.erb
``` 

Now without the `-p`:

```
rails generate taxonworks:task hello_world twt/ index:get:hello_world
```

Try a git command to see what happend. A `---` references the file changed, a line starting with `+` is a new line, and `-` is a changed line.

```
git diff
```

* In your browser logon to a project, then go to the `Tasks` list.
* In the Filter section type 'TODO'.
* See and click the `TODO: Task name` card.  You should get a blank page.

### 1.b - Content!

* In a text editor, open the index file that was created in the scaffolding: `app/views/tasks/twt/hello_world/index.html.erb`.
* Type `Hello world` at the top.
* Save the file.
* Back in your browser, click 'Reload' (also, faster, shift-command/ctrl-r).  We're done!  Nothing more to see!

The basic ways to update the template are to use HTML or Ruby code.  

#### 1.b HTML

Just type the HTML you want to use.  Try:

`<b>Hello</b> <i>World</i>`

#### 1.b Ruby

Ruby code is run when placed between `<%= %>` tags. Try:

`<%= puts "Hello World".capitalize %>`

### 1.c - TaxonWorks content

Very briefly, let's produce a report of the count of some things in the project:

`Collection objects: <%= CollectionObject.where(project_id: sessions_current_project_id).count -%>`

and

`OTUs: <%= Otu.where(project_id: sessions_current_project_id).count -%>`

and

`CollectingEvent: <%= CollectingEvent.where(project_id: sessions_current_project_id).count -%>`

_Try to put this in a 2 column table using HTML tags_

Below our table let's inspect the first CollectingEvent: 

```
<pre>
<%= ap(TaxonName.where(project_id: sessions_current_project_id).first).html_safe -%>
</pre>
```

The `ap` is an "amazing print" plugin.  The `<pre>` tag is HTML telling the browser to not collapse white-space.

### Next steps to consider/discuss

* Edit the task index (`user_tasks.yml`) to describe our task
* `content_for :head do`
* Describe `object_tag()`, illustrate where views are found
* What about Javascript?
  * Vanilla
  * Vue.js 

## Addendum
### Some Git basics with reference to TaxonWorks

There are *many*, *many* tutorials out there. There are 2 approaches to using `git`:
* 1) Via the command line 
* 2) Integrated or app based 

One is (very) strongly encouraged to learning 1 rather than 2:
* This approach is universal across all operating systems and software development (Unix, Mac, PC)
* Reports and status checks are cleaner and easier to see, and ultimately easier to interpret
* There are many things that apps or integrations do that you will rarely ever use
* It re-enforces that using git eliminates many of your fears that you will "screw things up"

#### `status`

#### `pull`

#### `log`

#### `add`

#### `commit`

#### `push`

### Setting up SSH to share code

## Next steps

* [Ask for help](https://gitter.im/SpeciesFileGroup/taxonworks)

* Learn HTML
* Learn Ruby
* Learn Rails
* Learn Vue.js
* 
* Explore the TaxonWorks models


- hack on a task together


- add a header
- add some data
- a param 

- 5 basic model bits into to some basical models

Where to next
* Rails manual
* Interaction


Git, branches

