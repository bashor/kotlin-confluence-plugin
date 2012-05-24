# Kotlin confluence plugin

Rendering Kotlin code in Atlassian Confluence Wiki.

### Using plugin

After installing

### Building

To build jar file with plugin, you need to run this maven tasks:

* compliler:compile
* confluence:jar

which will create a jar file at "target" directory under your project root.
Then you can install it using Confluence Admin / Plugins Page.

### Testing

To run Unit tests for Kotlin Confluence plugin use:

* compliler:testCompile
* confluence:unit-tests

NB! If you write your own test, class name must contain a "test" word.

### Running Locally

To run confluence on your computer use a maven task:

* confluence:run

Then install the plugin on your local confluence using:

* confluence:install

### Updating Lexer

To update the lexer, first time you try to update you need to download source files of the following projects to any place on your local file system:

* [Intellij Idea Community Edition] (https://github.com/JetBrains/intellij-community)
* [Kotlin] (https://github.com/JetBrains/kotlin)

After that create a file named build.lexer.properties under your project root.
In this file write the paths to source roots downloaded in the previous step.
For example:

    idea.sources.dir=c:\\Development\\intellij-community\\
    kotlin.sources.dir=c:\\Development\\kotlin\\

At the end run ant task named confluenceLexer in buildConfluenceLexer.xml.

    ant -f buildConfluenceLexer.xml

