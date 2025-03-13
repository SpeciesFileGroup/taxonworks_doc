import{_ as a,c as r,a as t,d as o,e as d,f as n,b as c,r as s,o as l}from"./app-DLXyRjP4.js";const h={};function m(u,e){const i=s("RouteLink");return l(),r("div",null,[e[3]||(e[3]=t("h1",{id:"matrices",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#matrices"},[t("span",null,"Matrices")])],-1)),e[4]||(e[4]=t("p",null,[t("em",null,"Build sophisticated matrices in TW. Use them to create keys, score images and observations, manage projects, and streamline creation of custom outputs and sharing of descriptors.")],-1)),e[5]||(e[5]=t("h2",{id:"nomenclature-quick-start",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nomenclature-quick-start"},[t("span",null,"Nomenclature Quick Start")])],-1)),t("p",null,[e[1]||(e[1]=o("TW provides a suite of common tasks help you to manage your matrices, descriptors, observations and related data. This section assumes you have some familiarity with the ")),d(i,{to:"/guide/Manual/conventions.html"},{default:n(()=>e[0]||(e[0]=[o("TW user interface conventions")])),_:1}),e[2]||(e[2]=o(" and introduces new user interface features where needed. Next, please familiarize yourself with the kinds of tasks TW offers related to Matrices."))]),e[6]||(e[6]=c('<h2 id="understanding-the-data-model" tabindex="-1"><a class="header-anchor" href="#understanding-the-data-model"><span>Understanding the data model</span></a></h2><p>Extensive information exists about the <a href="https://docs.taxonworks.org/develop/Data/models.html" target="_blank" rel="noopener noreferrer">TaxonWorks data model</a>. Information is presented in text and searchable graphic formats. Few comments:</p><ul><li>Each matrix consistas of defined <code>Rows</code> and <code>Columns</code>.</li><li><code>Rows</code> are <code>OTUs</code>, <code>Collection Objects</code> and other objects in the database which could be added to a matrix. The same OTU or any other object could be added to as many matrices as needed.</li><li><code>Columns</code> are <code>Descriptors</code> (characters) which could be added to a matrix. The same descriptor could be added to sevaral matrices.</li><li>TaxonWorks does not store the entire matrix, instead we store individual observations for each cell in the table. In practice this means, that if you have two matrices which include the same OTU and the same descriptor, the observations in the cell will be identical in both matrices, regardless in which matrix the original observation was made. This allow for the user to clone and combine matrices as needed, the observations will be replicated for each matrix and the combination of the Row object and Column object.</li></ul><h2 id="curating-data" tabindex="-1"><a class="header-anchor" href="#curating-data"><span>Curating data</span></a></h2><h3 id="basic-information" tabindex="-1"><a class="header-anchor" href="#basic-information"><span>Basic information</span></a></h3><ul><li>In most cases, the work with matrices starts in <code>Observation Matrix Hub</code> task.</li><li>Click <code>New</code> button to create a new matrix. Once the matrix is created, you are automatically in the <code>Edit</code> matrix mode.</li><li>Alternatively, in the <code>Observation Matrix Hub</code>, find an existing matrix from the list and click <code>Edit</code> button.</li><li>Also, in the <code>Hub</code> you can pin a matrix, so that it could be used as a default matrix in various interfaces.</li><li>Once in <code>Edit</code> mode, rows and columns needs to be defined.</li></ul><h3 id="adding-a-descriptor-to-the-matrix" tabindex="-1"><a class="header-anchor" href="#adding-a-descriptor-to-the-matrix"><span>Adding a Descriptor to the Matrix</span></a></h3><ul><li>Switch the <code>Row/Column switch</code> to <code>Column</code> position; <code>Dynamic/Fixed</code> switch to <code>Fixed</code> position. After that we can add a new <code>Descriptor</code> to the matrix</li><li>To add a new <code>Descriptor</code>, click the <code>New Descriptor</code> link at the top off the interface. Select the descriptor <code>Type</code>. The available types are: <ul><li><code>Qualitative</code> - traditional phylogenetic descriptor with multiple character states</li><li><code>Presence/absence</code> - similar to the previous one, but only two predefined states are possible</li><li><code>Quantitative</code> - a single measurement character (a default measurement unit could be defined)</li><li><code>Sample</code> - a numeric character, for which a min/max range could be scored (a default measurement unit could be defined)</li><li><code>Gene</code> - ???</li><li><code>Free text</code></li><li><code>Media</code> - a specialized descriptor designed for attachment of <code>Depictions</code>, which will serve as a visual observation in the image matrix</li></ul></li><li>Show more mode allows to add some additional details about the descriptor: <code>Short name</code>, <code>Description name</code> - which will be used for autogenerated description, <code>Key name</code> - which will be used in an interactive key, <code>Weight</code> - which will bring the descriptor close to the top in an interactive key.</li><li>If the qualitative &#39;Descriptor&#39; is selected, two or more character states need to be defined. Each <code>Character state</code> has two fields: <code>Label</code> - &#39;0&#39;, &#39;1&#39;, &#39;2&#39;, and the <code>Name</code>, some additional information could also be provided when <code>Show more</code> is selector. <ul><li>An example of a Qualitative descriptor: &#39;Body color&#39; with two states: &#39;0&#39; - red, &#39;1&#39; - black.</li></ul></li><li>Once the information on the descriptor entered you can click one of the <code>Create</code> buttons. In all cases, newly created descriptor is added to the matrix as a <code>Column</code>. <ul><li><code>Create</code> will save the record, but you can continue editing the descriptor</li><li><code>Create and return to matrix</code>, will return you back to the Edit matrix interface</li><li><code>Create and new</code> could be used if multiple descriptors need to be defined.</li></ul></li><li>Alternatively, if descriptors do already exists in the database, they could be just added to an existing matrix in the <code>Edit observation matrix</code> interface by using the search interface on the low left side. Change the <code>Row\\Column</code> switch to the <code>Column</code>, and use <code>Search</code> option. Alternatively, multiple descriptors could be copies from another matrix using <code>From Another Matrix</code> option.</li></ul><h3 id="adding-an-otu-or-collection-object-to-the-matrix" tabindex="-1"><a class="header-anchor" href="#adding-an-otu-or-collection-object-to-the-matrix"><span>Adding an OTU or Collection Object to the Matrix</span></a></h3><ul><li>To add <code>Rows</code> to the matrix, change <code>Row/Column</code> switch to <code>Row</code>; <code>Dynamic/Fixed</code> switch to <code>Fixed</code> position. <code>OTU</code>, <code>Collection Object</code>, or <code>Extract</code> could be added to a matrix as a <code>Row</code>. Assuming that those objects already exist in the database, they could be added to the matrix using <code>Search</code> or <code>From Another Matrix</code> options, it will work very simillar to adding an existing <code>Descriptor</code> to the matrix.</li><li>There is also an option to add a new <code>Row</code> to the matrix directly from the <code>Browse OTU</code> or <code>Browse Nomenclature</code> tasks. In either of tasks, select <code>OTU radial</code> button, in the <code>Observation matrices</code> sector, you can select a matrix to automatically add this OTU to it, and proceed directly to scoring mode.</li><li>Addvanced option to add multiple OTUs to the matrix is using <code>Dynamic</code> option. This option allow to select either all OTUs marked with a specific <code>Tag</code> or select a parent taxon, for example a genus, to add all children taxa, for example species, if new species are added to a genus in the future, those should automatically be added to the matrix.</li></ul><h3 id="reordering-and-editing-rows-and-collumns-in-the-matrix" tabindex="-1"><a class="header-anchor" href="#reordering-and-editing-rows-and-collumns-in-the-matrix"><span>Reordering And Editing Rows and Collumns in the Matrix</span></a></h3><ul><li>Select <code>Sortable columns/rows</code> checkbox on the top, after that the columns and rowns could be resorted by drugging each up and down the list.</li><li>OTUs could also be sorted by their nomenclature, using <code>Sort by nomenclature</code> button.</li><li>To delete a <code>Row</code> or <code>Column</code> from the matrix, use the Trash can button. Keep in mind, deleting each of those does not delete the corresponding object from the database, it only delete its association with a particular Matrix. Deleting Rows and Columns also do not affect the observations associated with those.</li><li>To edit Row or column, for example to add a new character state to the descriptor, use <code>Edit</code> button next to this descriptor.</li></ul><h3 id="adding-scores-to-a-row" tabindex="-1"><a class="header-anchor" href="#adding-scores-to-a-row"><span>Adding scores to a Row</span></a></h3><ul><li>In the <code>Edit Matrix</code> interface, select a &#39;Score&#39; button second after an OTU or Collection object name in the list</li><li>You will see the list of descriptors and all possible states, you can check applicable states or add values for numeric descriptors. All changes are saved automatically.</li><li>Scores could also be cloned from an another object in the matrix using <code>Clone and copy</code> button. After cloning, only few changes may be required to separate one OTU or a Collection Object from another. It is recommended to select the most similar object for clonning.</li><li><code>Destroy</code> button could be use to clear all scores from a particular OTU or a Collection object.</li><li>The <code>Matrix Row Coder</code> interface could also be accessed from the <code>Browse OTU</code> or <code>Browse Nomenclature</code> tasks. In either of tasks, select <code>OTU radial</code> button, in the <code>Observation matrices</code> sector, you can select a matrix to automatically add this OTU to it (if not added previously), and proceed directly to scoring mode.</li></ul><h3 id="adding-scores-to-a-collumn" tabindex="-1"><a class="header-anchor" href="#adding-scores-to-a-collumn"><span>Adding scores to a Collumn</span></a></h3><ul><li>In the <code>Edit Matrix</code> interface, select a &#39;Score&#39; button second after a Descriptor in the list</li><li>You will see the list of OTUs and Collection object associated with this particular Descriptor. You can check applicable states or add values for numeric descriptors. All changes are saved automatically.</li><li>On the top of the form, there are options to <code>Destroy all observations</code>, <code>Populate column</code> with one particular character state,</li></ul><h3 id="using-a-matrix" tabindex="-1"><a class="header-anchor" href="#using-a-matrix"><span>Using a Matrix</span></a></h3><ul><li>From the <code>Observation Matrix Hub</code> task, you can click <code>View</code> button next to the name of the matrix. In the view mode, you can preview entire matrix, download the matrix in <code>TNT</code>, <code>nexus</code>, <code>NeXML</code>, <code>CSV</code> formats, to be used, for example in phylogenetic recontstuction or be uploaded into a Lucid builder.</li><li>Once the matrix is completed, it could be used for species determination as an <code>Interactive Key</code>, which is accessible from the <code>Observation Matrix Hub</code>.</li><li>Before using the matrix for identification, it is recommended to validate the matrix. A matrix could be validated in the <code>Edit</code> mode by selecting the checkbox <code>Validation</code>. Each row of the matrix will be evaluated if it has enough resolution to separate this particular row from all other rows in the same matrix. If a row does not pass validation, the matrix could still be used for interactive identification, but adding some additional descriptors may improve the resolution.</li></ul><h2 id="interactive-key-interface" tabindex="-1"><a class="header-anchor" href="#interactive-key-interface"><span>Interactive key interface</span></a></h2><ul><li>The <code>Interactive key</code> interface is divided into 4 frames: the top one with the title and options; the middle one with the list of descriptors; the lower two frames include the list of rows which could be identifier, and eliminated rows which will be populated once the identification is started.</li><li>The descriptors are sorted by their weight and separating power. The order of the descriptors could be changed in the preferences on the top.</li><li>To start the identification, select one character state from any descriptor. It is possible to select more than one state in a case of uncertanty, to do this, click on the descriptor name, and make multiple selection.</li><li>By default the rows which do not have scores for selected descriptor are not eliminated from the list, it is assumed that any character state is possible, but this behavior could be changed in the settings on the top of the page, if it is needed, for example, for the matrix evaluation.</li><li>If a particular row in the matrix does not have a score matching selected character state, this taxon or collection object is moved to the list of Eliminated rows. The behavior could be slightly changed by adding error tolerance. The tolerance equal &#39;1&#39; means that a single error in identification is permitted, the row will be eliminated only when 2 or more errors exists.</li><li>To clear the interactive key, and start the identification from the beginning, use <code>Reset</code> button.</li><li>If the matrix is large, it could be more convenient not to eliminate the row after selection of each descriptor, since the wait time could be several seconds, before you can select a next descriptor. It is possible to use <code>Refresh only taxa</code> option. The list of descriptors will not be updated before the <code>Refresh</code> button is clicked.</li><li>After the refresh, the taxa not matching the search criteria are moved to the right, and the list of descriptors also updated to bring more useful once closer to the top of the list.</li><li>Continue determination before only one or few rows still present in the list of Remaining.</li><li>It is also possible to use <code>Select</code> button, to reduce the list of rows to be identified from the very beginning. If the list of entities is reduced, the list of descriptors will also be optimized to identify the remaining entries.</li><li>To make the interactive key more functional, you can add depictions to each character state of each descriptor. To do this, go back to the <code>Edit Matrix</code> interface, select one of the descriptors, click edit button next to it. In the <code>Edit</code> mode, you can use the radial annotator next to each character state to add a depiction.</li></ul><h2 id="image-matrices" tabindex="-1"><a class="header-anchor" href="#image-matrices"><span>Image matrices</span></a></h2><p><em>Image matrix is a specialized matrix which has defined descriptors and row, but does not have any scores. Instead of scores, images are added as a depiction to each cell of the table. The image matrix could also be used as a pictorial key for taxon identification, the images from the matrix are also viewed in the Browse OTU page. So instead of adding images directly to each OTU, they could be added to the image matrix instead to get additional functionality.</em></p><ul><li>To work with an image matrix, create a new matrix as described above.</li><li>Add rows to the matrix, OTUs for example.</li><li>Add new descriptors to the matrix, all of them should be <code>Media</code> type descriptors. Usually this matrix has fewer descriptors than typical morphological matrix, and each descriptor will represent a standard view of the organism or a particular structure useful to determination of taxa. For example, &#39;dorsal view&#39;, &#39;lateral view&#39;, &#39;head&#39;, &#39;wing venation&#39;.</li><li>Once the rows and columns are defined, the most convenient way to work with the image matrix would be to use the <code>Observation Matrix Dashbord</code> task.</li><li>In the <code>Observation Matrix Dashbord</code> task, select a parent taxon and rank of the children taxa which you would like to see, for example, select a genus name, and select species rank to see all the species-level taxa from this particular genus. Once selected, click the <code>Search</code> button.</li><li>You will see the table of OTUs with some summary, how many observations has each, and how many depictions are added to a particular OTU in an image matrix.</li><li>Use <code>Open in a matrix</code> button next to one of the OTUs to add OTU to a matrix. Select the image matrix from the list. Once the matrix is selected, you get redirected to an editing interface, which looks like a table, where the descriptors are the headers of each column.</li><li>To add an image to a particular cell of the table, simly drug and drop it from a folder on your computer to that cell. The images could also be moved from one cell to another.</li><li>Once the image added, you can provide some metadata. Click on the image to add caption. Click the <code>Radial Annotator</code> button, to add citation and/or attribution.</li><li>Adding images to multiple OTUs: in the &#39;Observation matrices dashboard&#39;, once you filtered the list of OTUs, select few of tham and click the <code>Edit image matrix</code> buttom. The table for editing multiple OTUs will be opened. WARNING: do not select all OTUs for editing, since ALL of tham will be added to a matrix as separate Rows.</li><li>Use the previous step to add multiple OTUs to any given matrix, not only to Image matrix, that could be another fast way to add multiple rows, for example adding rows for a future ineractive key.</li><li>Image matrix for any given OTU could also be accessed with the <code>OTU Radial</code> button, in the <code>Browse OTU</code>, or <code>Browse Nomenclature</code> tasks.</li></ul><h3 id="viewing-images-in-the-image-matrix" tabindex="-1"><a class="header-anchor" href="#viewing-images-in-the-image-matrix"><span>Viewing images in the Image Matrix</span></a></h3><ul><li>In the <code>Observation Matrix Dashbord</code> task, select a parent taxon and rank of the children taxa which you would like to see, for example, select a genus name, and select species rank to see all the species-level taxa from this particular genus. Once selected, click the <code>Search</code> button.</li><li>In the filtered results, <code>Select All</code> or few OTUs using checkboxes before the names, and click the <code>View image matrix</code> button. A table will be open to display all illustrations, so that OTUs could be compared to each other.</li><li>In the View mode, you can hide some rows but clicking a checkbox before each row, or you can quickly switch to the Edit mode.</li></ul>',25))])}const f=a(h,[["render",m],["__file","matrices.html.vue"]]),b=JSON.parse('{"path":"/guide/Manual/matrices.html","title":"Matrices","lang":"en-US","frontmatter":{"sidebarPosition":300},"headers":[{"level":2,"title":"Nomenclature Quick Start","slug":"nomenclature-quick-start","link":"#nomenclature-quick-start","children":[]},{"level":2,"title":"Understanding the data model","slug":"understanding-the-data-model","link":"#understanding-the-data-model","children":[]},{"level":2,"title":"Curating data","slug":"curating-data","link":"#curating-data","children":[{"level":3,"title":"Basic information","slug":"basic-information","link":"#basic-information","children":[]},{"level":3,"title":"Adding a Descriptor to the Matrix","slug":"adding-a-descriptor-to-the-matrix","link":"#adding-a-descriptor-to-the-matrix","children":[]},{"level":3,"title":"Adding an OTU or Collection Object to the Matrix","slug":"adding-an-otu-or-collection-object-to-the-matrix","link":"#adding-an-otu-or-collection-object-to-the-matrix","children":[]},{"level":3,"title":"Reordering And Editing Rows and Collumns in the Matrix","slug":"reordering-and-editing-rows-and-collumns-in-the-matrix","link":"#reordering-and-editing-rows-and-collumns-in-the-matrix","children":[]},{"level":3,"title":"Adding scores to a Row","slug":"adding-scores-to-a-row","link":"#adding-scores-to-a-row","children":[]},{"level":3,"title":"Adding scores to a Collumn","slug":"adding-scores-to-a-collumn","link":"#adding-scores-to-a-collumn","children":[]},{"level":3,"title":"Using a Matrix","slug":"using-a-matrix","link":"#using-a-matrix","children":[]}]},{"level":2,"title":"Interactive key interface","slug":"interactive-key-interface","link":"#interactive-key-interface","children":[]},{"level":2,"title":"Image matrices","slug":"image-matrices","link":"#image-matrices","children":[{"level":3,"title":"Viewing images in the Image Matrix","slug":"viewing-images-in-the-image-matrix","link":"#viewing-images-in-the-image-matrix","children":[]}]}],"git":{"updatedTime":1695167580000,"contributors":[{"name":"Deborah Paul","email":"dlpaul@illinois.edu","commits":1,"url":"https://github.com/Deborah Paul"},{"name":"Dmitry Dmitriev","email":"arboridia@gmail.com","commits":1,"url":"https://github.com/Dmitry Dmitriev"},{"name":"José Luis Pereira","email":"pepelui@outlook.com","commits":2,"url":"https://github.com/José Luis Pereira"},{"name":"Debbie Paul","email":"dlpaul@illinois.edu","commits":2,"url":"https://github.com/Debbie Paul"}]},"filePathRelative":"guide/Manual/matrices.md"}');export{f as comp,b as data};
