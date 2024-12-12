---
sidebarPosition: 5
---


# Scaffolding

_Scaffolding is an automated process to generate a model's code and basic infrastructure. If you are adding a new model at the level of TaxonWorks "Data" cards, you'll start here._

Scaffolding is a [well documented](https://guides.rubyonrails.org/command_line.html#rails-generate) Rails convention. In TaxonWorks we use the scaffolding process whenever we add a new [data model](/develop/Data/models) that becomes the basis for a wide range of new features. This gives us the basic infrastucture to both see the class of data, and to populate TaxonWorks conventions in preparation for adding more advanced interfaces and utility, such as a TaxonWorks Task.

:::tip
Scaffolding creates the code that will create the database table and the model that sits on top of it, builds basic views, and creates the various supporting conventions' files (controllers, views, test files). It's a quick way to do a lot of basic housekeeping work. 
:::

:::warning
Within TaxonWorks scaffolding is now used infrequently. It is much more common to `generate` [a new Task]().
:::

Here is a brief overview of a TaxonWorks flavoured scaffold, in this case extending our data model to include Organizations (this has already been done, with some important differences). Our intention here is to further draw attention to TaxonWorks-specific steps.

## Using `generate scaffold`

Run the commands within the TaxonWorks directory in a shell. See Rails docs for a full explation, `rails generate scaffold --help` is also very useful.

`rails generate scaffold Organization name:text description:text address:text project:references created_by_id:integer updated_by_id:integer --no-helper-specs --no-routing-specs --no-view-specs --no-request-specs -fixture -p`

:::tip
Always start with the `-p` flag, for "practice". This will display what will happen without actually creating the files. Run generate with this flag as many times as you need.
:::

After file generation you'll make some edits.

## Migration

Scaffolding creates a database migration that will create the databse table. This file is added to `db/migrate/`. 

You'll need to add a couple things to the file that looks like `db/migrate/20241207211545_create_organization`.

On creation your file looks somethihng like this:
```Ruby
class CreateOrganizations < ActiveRecord::Migration[7.2]
  def change
    create_table :organizations do |t|
      t.text :name
      t.text :description
      t.text :address
      t.references :project, null: false, foreign_key: true
      t.integer :created_by_id
      t.integer :updated_by_id

      t.timestamps
    end
  end
end
```

There are some TaxonWorks specific tweaks to make:
* Add `null: false` and `index: true` to the created/updated fields
* _After_ the `create_table`foreign key references to User like `add_foreign_key :organizations, :users, column: :updated_by_id`

After these editions your file looks something like this:

```Ruby
class CreateOrganizations < ActiveRecord::Migration[7.2]
  def change
    create_table :organizations do |t|
      t.text :name
      t.text :description
      t.text :address
      t.references :project, null: false, foreign_key: true
      t.integer :created_by_id, null: false, index: true
      t.integer :updated_by_id, null: false, index: true

      t.timestamps
    end
  end

  add_foreign_key :organizations, :users, column: :created_by_id
  add_foreign_key :organizations, :users, column: :updated_by_id

end
```

To test you migration run it against the `test` database:

`rake db:migrate RAILS_ENV=test`

Refer to [Rails migration documentation](https://guides.rubyonrails.org/active_record_migrations.html) for further options.

## Routes

Within `config/routes/data.rb` find the `resource:` block for your new model (e.g. search for `organizations`) then:

* Ensure the `resources:` block is present if it wasn't scaffolded
* Include `concerns [:data_routes]`
* Move the code block into alphabetic order within the file

Your block should look like:
```Ruby
  resources :organizations do
    concerns [:data_routes]
  end
```

## Factory

See factory [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/spec/factories/README.md).

## Model

In `app/models/organization.rb`:

* Document the models attributes with `@!attribute` statements, see any model for examples.  Note that as implemented Organization in TaxonWorks is 1:1 with another schema.* Add Concerns (extensions) to the model.  All data models require `Shared::IsData` _usually as the last concern_
    * If the model has a `project_id` (is project specific) this will look like:
```Ruby
  include Housekeeping
  # ... others
  include Shared::IsData
```
    * You'll need to remove `belongs_to :project_id` if present, it's convered in the `Housekeeping`
    * If the model is community:
```Ruby
  include Housekeeping::Users
  include Housekeeping::Timestamps
  # ... others
  include Shared::IsData
```
* If the model as a `project_id` register it in the `MANIFEST` constant in [`app/models/project.rb`](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/models/project.rb)
* Add at least 1-2 model tests (e.g. in `spec/models/organization_spec.rb`)


:::tip
At this point when you restart the server you should see a clickable card on `Data`
:::

## Config

* Register the model in [`config/interface/hub/data.yml`](https://github.com/SpeciesFileGroup/taxonworks/blob/development/config/interface/hub/data.yml). See details therein.

## Controller

Controllers are at `app/controller/`, for example `app/controllers/organizations_controller.rb`.  See the `otus_controller.rb` for example patterns.

:::tip
Rails has naming conventions for pluralization. Models are singular, controllers are plural.
::: 

* Add Concerns
  * If the model has a `project_id`:
```Ruby
class OrganizationsController < ApplicationController
  include DataControllerConfiguration::ProjectDataControllerConfiguration
```
  * If it is community (without `project_id`):
```Ruby
  include DataControllerConfiguration::SharedDataControllerConfiguration
```
* Add the pagination `after_action` pattern if required
* Update `def index` to stub in some variables for an html and json response  (these become more sophisticated down the road):
  * Use `@recent_objects` in the html response
  * Use `@organizations` (or the model name) in the json response
  * Together it will look something like this:
```Ruby
  def index
    respond_to do |format|
      format.html do
        @recent_objects = Organization.where(project_id: sessions_current_project_id).order(updated_at: :desc).limit(10)
        render '/shared/data/all/index'
      end
      format.json {
        @sounds = Organization.where(project_id: sessions_current_project_id)
          .page(params[:page])
          .per(params[:per])
      }
    end
  end
```
  
* Ensure `.permit()` calls permit writable attributes
* Add an`autocomplete` action (method)
* Add a`list` action

:::tip
At the point of updating the controller running the application and clicking through the model's card will raise errors on things missed or stubbed in error above.
:::

### Controller tests

_We do not add new controller specs, but the generated specs are easily modified to work, so we typically modify them to follow an overall pattern, then leave them alone. The pattern has variously evolved, but generally it follows something like that below._

Add the logon to the spec:
```
  before(:each) {
    sign_in
  }
```

Use the corresponding factory to provide valid attributes:
```
  let(:valid_attributes) { strip_housekeeping_attributes(FactoryBot.build(:valid_organization).attributes) }
```

We don't use `invalid_attributes`.

Modify the `#index` call to reference @recent_objects:
```
  describe "GET #index" do
    it "assigns organizations to @recent_objects" do
      o = Organization.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(assigns(:recent_objects)).to include(o)
    end
  end
```

Add a `#list` spec:
```
  describe 'GET list' do
    it 'with no other parameters, assigns a page of @organizations' do
      o = Organization.create! valid_attributes
      get :list, params: {}, session: valid_session
      expect(assigns(:organizations)).to include(o)
    end

    it 'renders the list template' do
      get :list, params: {}, session: valid_session
      expect(response).to render_template('list')
    end
  end
```

* Supply invalid_attributes where needed (the model validation rules will help determiner invalid values)
* Run the controller spec and correct as necessary.

## Views

Reference existing patterns in `app/views/otus/` for details.

* Delete `index.html.erb`
* Follow Rails conventions for `_form.html.erb`. See any other `_form.html.erb` for TaxonWorks conventions and markup. Replace the partials as needed (e.g. `/shared/errors`)
* Ensure you have JSON responses for `show` and `index` actions
  * Rename the `_organization.json.jbuilder` partial to `_attributes.json.jbuilder`
* Most models can use an autocomplete, add `autocomplete.json.jbuilder`.
* Update `show.html.erb` to use a shared view replacing everything with `<%= render(partial: 'shared/data/project/show', locals: {object: @organization}) -%>`
* Add `_attributes.html.erb` so that shared view can render attributes
* Add a `list.html.erb`

### View specs

We do not use view specs, remove if you missed applying the flag in the `generate scaffold` commnd.

## Queries

* You may want/need to add a filter or autocomplete query for the model.  See [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/queries/README.md)

## Helpers

* There are some must-do here, see [helper README](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/helpers/README.md)
