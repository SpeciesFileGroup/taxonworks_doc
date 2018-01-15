
# Developers tips

##  The console

Use `rails c` to load the TaxonWorks environment and play with the data directly from a console.

### Housekeeping

There are two very low level globals that need to be set on the console for most write operations in the console.

`$user_id` and `$project_id`.

_You should never reference these variables directly in the taxonworks code base (including tests)._ They are set and handled in the GUI and test framework by the codebase.

### Finding some records

Use awesome_print with  `.collect{}` to quickly see some record metadata:

`ap Project.all.collect{|p| [p.id, p.name]}`

### Creating a user with administrator access

`User.create(email: 'user@example.com', password: 'yourpassword', name: 'Jane Smith', password_confirmation: 'yourpassword', self_created: true, is_administrator: true)`

## Seeding data

Use a seed task `rake --tasks | grep seed` to spin up users, projects, and other data in you instance.
