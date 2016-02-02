#Lab Tasks

After you have cloned the project and set it up as specified in the Readme, complete the following tasks, answering any
questions by editing this file. 

## Part #1: exploring the project.

- Try adding new pets on the index page through the form. Try deleting entries. Observe the results. 

> Protip: You'll need to start up the server before you can play with the website.

- Click links on the navigation bar. See what happens. Note that when you move away from the page with pets, your changes to the list of pets are lost. This is because we are not storing the array in a database (this will be a part of the next lab). 
- Observe the HTML element's formatting (it's done via bootstrap). As you are working on the questions below, experiment with the project to get a better sense for what each element is. 

##### List all the files at the top level of your project (i.e. not in public) and briefly state the purpose of each one, as you understand it. You might want to postpone describing some files until you work with the project a bit more. 
.gitignore: Specifies what to not commit to git.
.travis.yml: Travis settings for automated build stuff or whatever.
app.js: Handles Node.JS stuff for redirecting traffic things.
bower.json: Bower configuration for angular.
gruntfile.js: Configuration settings for running grunt/karma/automated tests.
karma.conf.js: More settings for Karma/automated tests.
LABTASTKS.md: You're reading it right now, you probably know what it is.
package.json: More karma and grunt configurations settings! Hooray!
README.md: Describes the lab setup and such and contains the TRAVIS build status icon thingy.

##### List the folders in the public folder and describe the purpose for each.
assets: Has images and stuff.
css: Holds css files.
javascript: Holds javascript files for scripty things.
views: Holds the HTML files available for public view.

##### What are the names of the Angular controllers in this web application? What does each of them do?
mainCtrl (mainControl) which controls... main stuff?
navbarCtrl (navbar) which displays the overhead navigation bar.

##### Open the index.html view. What controller(s) is it using?
Both controllers, the main controller and the navbar controller.

##### Where is the navigation bar included in the source code for index.html?
In a div indicated by angular as being "included" or automaticaly loaded whenever index.html is.

##### app.js within public/javascript is where your Angular modules are located at. What modules does the project currently have?
Standard controllers (whatever that is) and mainApp which requires standardControllers.

##### Notice, the code controlling the Node.js server is in a file also called app.js. There is no particular reason for this other than a generator we will use later on follows the same convention. Explain the difference between the purpose of the files (think client vs server).
The client receives one to use when loading webpages - the one nested in public, hence... public. The one in the main directory is used server side to handle redirect request stuff.

##### Add a pet to the array, data (in the appropriate controller). See the change on the web page (you need to reload, but not restart).
##### How are new items added and deleted through the web page? (i.e. - What functions from the main controller are used in index.html, and what Angular directives allow them to interact with the view?)
They're added to an array, and Angular loops through the array to determine what to display. Uses the 'addData' and 'removeData' to add and remove data.

##### Open navbar.html view. What is its purpose? How would you go about adding links to the navigation bar?
The purpose of this is a predefined header with a navigation bar to display at the top of webpages. To add a link to the navbar, add a entry to navbar.controller.js's list of entries.

##### Find two instances of use of bootstrap (see above) in either navbar view or index view or both; explain what is formatted.
Nav-pills in navbar (makes nice looking navigation buttons) and list-group in index.html (for list elements for the pets).

>Protip: Bootstrap is awesome. Start using it. Seriously. This allows you to do fancy things with styling (CSS) with very little effort. Think back to lab 1. http://getbootstrap.com/components/ <- Regular Bootstrap. https://angular-ui.github.io/bootstrap/ <- Angular Bootstrap. These offer separate functionality and both can be used simultaneously.

##### Stop the server by pressing Ctrl-C in the terminal, type "grunt test" to run tests. Where are the tests located?
The public/javascript/*.spec.js files.

## Part #2: modifying the project.

- Set up Travis CI and add the build status icon to your project's README.
  - This should have been done as part of the setup.

- Currently clicking on "kittens" returns the "page under construction" message. Using the view about.html as a sample, add a page that has a navigation bar. Add an image of your choice to the page (be aware of copyright rules) and a div that describes the image. 
- Explore bootstrap by changing formatting of the page (for instance, position of the image and text). It doesn't have to look "nice", just different from what it currently is. 

## Part #3: components, controllers, and modules, oh my!

>Protip: You can blame Jacob for the cheesy part name.

- Your first task here is to create a new Angular module that acts as a container for Angular component controllers. To do this, look at javascript/app.js. Similar to `stdControllers`, create a module named `stdComponents`, and inject that into the `mainApp` module.
- Now that we have an Angular module for containing Angular controllers of components, we want to add the controller for our Angular component to the new module. As such, go to `navbar.controller.js` and change the module it is a part of to the new `stdComponents` module.
- Boom! You're done making your own module. To make sure Angular is still working, serve the application (using Grunt), and make sure you can still use the navbar on the index.html and about.html pages.

- Now, we are going to go a bit more in depth into this. Using navbar as an example, we want you to make another component. This component will be a `footer` that you will add to your index.html and about.html pages.
- To do this, you need to create: `footer.controller.js`, `footer.html`.

>Protip: Make sure these are added to Git before you commit!

- You need to modify: `index.html`, `about.html`.
- Some general advice:
  - Add the footer controller to the newly created `stdComponents` Angular module.
  - Make sure to include the javascript for the Angular controller in the web pages the components will be a part of. DO NOT put the script tag to include this into `footer.html`.
  - Put the footer at the bottom of the pages. Please.
  - If you get confused, look at the respective files that navbar uses. You should be able to mirror this _very_ closely after those files.
  - We don't really care what the content of your footer is. It should definitely consist of a footer element.

>Protip: From w3schools... A footer element typically contains: authorship information, copyright information, contact information, sitemap, back to top links, related documents.


## Part #4: adding the GPA calculator, redux.
- Your goal is to add a page with a form that allows a student to add their courses (course name, number of credits, and letter grade) and displays their GPA. The GPA changes as courses are added or removed. As before, letter grades are A, B, C, D, and F only. 
- The controller for the GPA needs to be added to main.controller.js. Think of what needs to be in its scope. 
- Add the necessary view, include the navbar into it, and then add the GPA calculator. Add one feature at a time, make sure everything is working as it should. 
- As before, use TDD for all the helper functions (you may reuse the tests from the previous lab). Now they will all be located in public (client-side). No need to modify karma files since it's already testing client-side javascript. 
- Use different color for displaying the GPA, depending on whether it is below 2.0, between 2.0 and 3.0, and 3.0 and above. Use your own CSS or bootstrap. 
- Perform simple data validation (add the corresponding function to the controller) so that invalid entries (invalid grades or wrong number of credits) are not added to the model. An error message needs to be displayed to the user). 

##### When you're done with the lab, take a look at your test coverage report and make a note here about what pieces of code are covered well, what isn't, and why this is the case.


