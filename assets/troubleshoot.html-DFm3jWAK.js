import{_ as s,c as n,b as t,o as i}from"./app-DYVbsdjj.js";const o={};function a(r,e){return i(),n("div",null,e[0]||(e[0]=[t(`<h1 id="troubleshoot" tabindex="-1"><a class="header-anchor" href="#troubleshoot"><span>Troubleshoot</span></a></h1><p><em>Hints for dealing with the issues arrising in the current coding environment.</em></p><h2 id="gems" tabindex="-1"><a class="header-anchor" href="#gems"><span>Gems</span></a></h2><ul><li>Puma 6.4 fails to install (SSL related errors)</li><li>Ensure Ruby is installed with reference to openssl@3 (see below)</li></ul><h2 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby"><span>Ruby</span></a></h2><ul><li>RVM fails to install version on Mac (M1) with an openssl related error</li><li><code>rvm install ruby-3.2.2 --reconfigure --with-openssl-dir=$(brew --prefix openssl@3)1</code></li></ul><h2 id="postgis-mac" tabindex="-1"><a class="header-anchor" href="#postgis-mac"><span>Postgis (Mac)</span></a></h2><p>If you install from Postgres app (recommended) then you can configure your pg gem with:</p><p>TODO</p><h2 id="postgresql-settings-to-speed-up-testing" tabindex="-1"><a class="header-anchor" href="#postgresql-settings-to-speed-up-testing"><span>PostgreSQL settings to speed up testing</span></a></h2><p>These setttings makes running the specs suite faster. They basically trade database integrity in case of failures for speed. <strong>This shouldn&#39;t be done for production databases.</strong></p><p>Edit your <code>postgresql.conf</code> file, in Ubuntu it can be found here at <code>/etc/postgresql/{your installed version here}/main/postgresql.conf</code>.</p><p>Locate the following settings and change their values to match the ones here</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">fsync = off                             # turns forced synchronization on or off</span>
<span class="line">synchronous_commit = off                # synchronization level; on, off, or local</span>
<span class="line">full_page_writes = off                  # recover from partial page writes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s it. Tests should go faster.</p><h2 id="on-os-x-system-updates" tabindex="-1"><a class="header-anchor" href="#on-os-x-system-updates"><span>On OS X system updates</span></a></h2><ul><li>review your Ruby configuration</li><li>agree to the new XCode terms of service</li></ul><h2 id="on-ruby-version-bumps" tabindex="-1"><a class="header-anchor" href="#on-ruby-version-bumps"><span>On Ruby version bumps</span></a></h2><ul><li>check that you&#39;re running the required Ruby <code>which ruby</code></li><li>reinstall Ruby as per instructions</li><li>reinstall your ruby gems</li></ul><h2 id="when-you-switch-between-docker-and-native-environments" tabindex="-1"><a class="header-anchor" href="#when-you-switch-between-docker-and-native-environments"><span>When you switch between docker and native environments</span></a></h2><ul><li>nuke node modules <code>rm -rf node_modules</code></li><li>redo <code>npm install</code></li></ul><p>Tip: If you&#39;re using the Docker development environment you&#39;ll want to replace calls to <code>rails</code> below with <code>bin/rails</code>.</p>`,22)]))}const d=s(o,[["render",a],["__file","troubleshoot.html.vue"]]),c=JSON.parse('{"path":"/develop/Code/troubleshoot.html","title":"Troubleshoot","lang":"en-US","frontmatter":{"sidebarPosition":40},"headers":[{"level":2,"title":"Gems","slug":"gems","link":"#gems","children":[]},{"level":2,"title":"Ruby","slug":"ruby","link":"#ruby","children":[]},{"level":2,"title":"Postgis (Mac)","slug":"postgis-mac","link":"#postgis-mac","children":[]},{"level":2,"title":"PostgreSQL settings to speed up testing","slug":"postgresql-settings-to-speed-up-testing","link":"#postgresql-settings-to-speed-up-testing","children":[]},{"level":2,"title":"On OS X system updates","slug":"on-os-x-system-updates","link":"#on-os-x-system-updates","children":[]},{"level":2,"title":"On Ruby version bumps","slug":"on-ruby-version-bumps","link":"#on-ruby-version-bumps","children":[]},{"level":2,"title":"When you switch between docker and native environments","slug":"when-you-switch-between-docker-and-native-environments","link":"#when-you-switch-between-docker-and-native-environments","children":[]}],"git":{"updatedTime":1730999958000,"contributors":[{"name":"mjy","email":"diapriid@gmail.com","commits":1,"url":"https://github.com/mjy"}]},"filePathRelative":"develop/Code/troubleshoot.md"}');export{d as comp,c as data};