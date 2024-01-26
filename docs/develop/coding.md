---
sidebarPosition: 50
---

# Coding

_You **can** code (TaxonWorks). Here's where to learn how._


## Scaffolding

_This is not a comprehensive list for adding a new model, but rather some point by point reminders._

Adding a data model to TaxonWorks largely follows [Rails conventions for scaffolding](https://guides.rubyonrails.org/command_line.html#bin-rails-generate).  We won't describe how to add fields, etc., but rather point out some specifics to TaxonWorks that happen during the process.

You can exclude some files while generating the model:

`rails generate scaffold Organization --no-javascript --no-viewspecs --no-fixture --no-stylesheets --no-assets --no-scaffold-stylesheet -p`

Tip: Notice the `-p` for "practice" (or "preview"), this lets you preview what will be done without writing any files.

We do not use the following (TODO: update flags)

* spec/requests/\<model\>_spec.rb
* spec/views/\<model\>/

### Migration tips

_This is not comprehensive, see existing migrations for patterns._

* Add `null: false` to timestamps
* Add housekeeping:
```
t.integer :created_by_id, null: false, index: true
t.integer :updated_by_id, null: false, index: true
```
* If the model is specific to projects:
```
t.references :project, index: true, foreign_key: true
```

### Routes

Add the data_routes concern, and move the scaffolded resources line into alphabetic order in the data routes file.

```
  resources :organizations do
    concerns [:data_routes]
  end
```

### Spec Factory

See the factories [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/spec/factories/README.md).

### Model

* Document the attributes in the model (e.g. `app/models/organization.rb`)
* Add pertinent concerns: see `otu.rb` for project specific examples, and `source.rb` for community shared data; at minimum you'll need `Shared::IsData`
* Tweak the model test to add at least a couple unit tests (`spec/models`)
* If the model is project specific register it in `app/models/project.rb` `MANIFEST`
* Register the model in `config/interface/hub/data.yml` (see comments therein)

_At this point restarting the server should already show you a clickable card on `Data`._

### Controller

* !! Add the pertinent concerns to the controller (shared vs. project)
* Update `index` to load recent records
* Make sure to permit your attributes
* Check for an autcomplete action, follow patterns as seen in other controllers
* Add a `list` action

#### Controller spec

_We don't focus on controller specs, but the generated specs are easily modified to work, so we typically tweak them to follow an overall pattern, then leave them alone. Do that then leave them as is. The pattern has variously evolved, but generally it follows something like that below._

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

* Reference the model to directly supply invalid_attributes where needed (it's fine to use the spec stub as well).
* Follow the pending spec responses as necessary.

### Views

* Delete `index.html.erb`
* Follow Rails conventions for `_form.html.erb`. See any other `_form.html.erb` for TaxonWorks conventions and markup. Replace bits with partials as needed (e.g. `/shared/errors`)
* Ensure you have JSON responses for show and index, see `_attributes.json.jbuilder` pattern in most models
* Most models can use an autocomplete, add `autocomplete.json.jbuilder`, the action, and controller, see Queries below
* Update `show.html.erb` to use a shared view
* Add `_attributes.html.erb` so that the shared view can render attributes
* Add a `list.html.erb`

#### View specs

We do not use view specs, remove if you missed the flag.

### Queries

* You may want/need to add a filter or autocomplete query for the model.  See [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/queries/README.md)

### Helpers

* There are some must-dos here, see [helper README](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/helpers/README.md)


