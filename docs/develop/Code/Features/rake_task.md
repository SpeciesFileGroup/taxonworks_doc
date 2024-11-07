---
sidebarPosition: 20
---

# Rake task

_Access and/or update via scripts that utilize TaxonWork's envirnoment._

::: warning
TODO: Integrate [taxonworks_api_scripts](https://github.com/SpeciesFileGroup/taxonworks_api_scripts)
::: 

Code here makes use of Ruby's [Rake](https://ruby-doc.org/3.3.0/gems/rake/rake-13_1_0/doc/rakefile_rdoc.html) (like `make` in other languages). It loads the TaxonWorks environment so you have access to all the underlying logic and code used inside TaxonWorks. 

## Environment

Assumes:
* Ruby is installed

Create a `Gemfile`:

```ruby
ruby '3.3.0'

# Coming from TW
# gem 'rake'
# gem 'byebug'
# gem 'rainbow'

gem 'require_all'

if ENV['TW_PATH'] && (ENV['TW_PATH'].length != 0)
  if !Dir.exist?(ENV['TW_PATH']) 
    puts "Can not find" + ENV['TW_PATH']
  else
    eval_gemfile(ENV['TW_PATH'] + '/Gemfile')
  end
else
  puts "ENV variable 'TW_PATH' not set, do `TW_PATH=/path/to/taxonworks && export TW_PATH`."
  exit
end
```

Create a `Rakefile`:

```ruby
require 'rake'
require 'byebug'
require 'rainbow'
require 'require_all'

Rake.add_rakelib './tasks' # Doesn't detect subdirectories?
Dir.glob('tasks/**/*.rake').each { |r| load r }

if p = ENV['TW_PATH']
  a = File.join(p, '/config/environment')
  if true # Dir.exists?(a)
    puts Rainbow("TaxonWorks found at #{a}").green
    require_relative a
    true
  else
    puts Rainbow("TaxonWorks NOT found at #{a}").red
    exit
  end 
else
  puts Rainbow("ENV variable 'TW_PATH' not set, do `TW_PATH=/path/to/taxonworks && export TW_PATH`.").red
  exit 
end

desc 'default'
task :default do
  puts Rainbow("Configuration successful.").purple
end
```

Setup

```shell
bundle install 
```

Set a TW_PATH. 

Temporarily (or see your OS for adding it to your PATH):

```
export TW_PATH=/path/to/taxonworks
```

Test the configuration
```shell
rake 
```

If you see `Configuration successful`

At this point you are able to create [Rake tasks](https://github.com/ruby/rake) that access TaxonWork's environment.

