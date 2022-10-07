# Password-Generator

A simple password generator application. It provides a recommended random passwords based upon a user requirements for the password. The original version is a C#, .NET Framework based Windows Form Application, this can be found in the C#-version branch.

Currently a user will be provided with a completely random password made up of a series of numbers, letters (including capitals) and symbols. The resultant password can be copied to clipboard using the button located in the output text field. New passwords can also be requested with the generate new password button that will run the `generatePassword(length)` function, updating state and reloading the output component.

The production version of this application can be seen here: https://matthewnobes.github.io/Password-Generator/

## Plan

The current plan for this project is to create an app that generates a complex password of 12 characters, made up of numbers, letters (capitals and lowercase) and symbols. In future, the user will be allowed to customise elements of their password, such as choosing what types of characters can be selected, the password length and characters to avoid.

## Development

To get started with this application, you will first need to download all the necessary dependencies for the project using the following command:

```
npm i
```

Once downloaded, you can then launch the application using the start command:

```
npm start
```

### Testing

This application has been setup with Jest testing to ensure that code can be quickly checked for defects against its functionality when new content is added. The test suite can be launched using the following npm command:

```
npm test
```

## Deploying

A production version of this application is hosted using GitHub Pages. To do this the gh-pages npm package has been implemented and setup to run with the following script:

```
npm run deploy
```

There is also a predeploy option, which will create a build but not publish it. This is done using:

```
npm run predeploy
```

### Docker

This app has been setup with Docker. An image of this app can be created using the docker build command as seen below. (insert-name marks where you can set the Docker image name, the -t flag allows this name tag to be allocated)

```
docker build . -t insert-name
```

This script can also be executed using a built in npm command for this repo:

```
npm run docker
```

To load this Docker image into a container, the docker run command is used as follows with the name selected for the image in the previous step in place for insert-name.

```
docker run -p 3000:3000 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 4444. The app can be run on another port by replacing the first 4444 in the command above with your own choice of port.

### Development guidance

The following should be taken into account when making changes to this repo:

- Major features such as the password generation form are stored in the Features directory
- Smaller components such as the Header are stored within the components directory.
- Test scripts are located in the same directory as the functions and components they test
- Styling is done within the same directory as where it is used, using css modules. Any major project styling is done from a central CSS file stored in the theme directory
- Material Ui should handle most styling and general changes should be done using the theme object, located in the theme directory
- All Redux slices and stores should be kept in the Store directory
- The Utils directory is for common functions and elements that might be needed in multiple areas in the future, such as the copy to clipboard function. This makes them easier to find and use for other projects in the future.

## Old version (C#)

Navigating to the old version (C# version) can be done by using the git command:

```
git checkout C#-version
```
