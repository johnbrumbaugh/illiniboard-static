# illiniboard-static
A collection of all the static files needed for the IlliniBoard Front-End Application.  This includes all of the SASS and JavaScript code that will be compiled into something that ends up sitting in the /static folder of the illiniboard-frontend application and all other front-ends.

## Node Modules Used / Required
In order to use the command line utilities to compile the SASS code, the following npm modules must be installed within each environment.
* **foundation-sites:** The base Foundation SASS code
* **motion-ui:** The Motion UI sub-module required for some different elements like Orbit slider that are a part of the Foundation Framework.
* **grunt:** Grunt, which is used to compile the SASS code and then perform deployments and other things necessary.
* **grunt-contrib-copy:** Allows the copying of files from one directory to another
* **grunt-contrib-sass:** Allows the compilation of SCSS code files into a single CSS file
* **grunt-contrib-watch:** Alllows the ability to consistently watch a directory for changes and perform the compilation steps as necessary.
* **load-grunt-tasks:** Allows the ability to load new tasks into Grunt.

### Node Module Installation Command
```npm install {package_name} --save-dev```