# Hello World

_Assumes you have [installed]( ) and successfully [ran the test suite] and have an otherwise blank database._

## Quick start (console)

```
cd taxonworks
rails c

User.create!(name: 'Pat', email: 'my@email.com', password: 'abc123def', password_confirmation: 'abc123def', is_administrator: true, self_created: true) 
Current.user_id = User.first.id

Project.create!(name: 'Hello World')
Project.last.users << User.last

Current.project_id = Project.last

Specimen.create!
CollectionObject.count

```

## What's happening?

* You've loaded the full TaxonWorks environment into a Ruby shell console
* TaxonWorks uses two (and only two) variables that are "global" in scope and related to data creation, `Current.user_id = <id>` and `Current.project_id = <id>`.  These are used for housekeeping (updator, creator), and to automatically add records to their pertinent projects.  In production these variables are set on each request.  In the shell we can set these once, or dynamically as needed.

