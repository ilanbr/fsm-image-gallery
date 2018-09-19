# fsm-image-gallery
Demonstrate Finite State Machine with ReactJS

## What is the Finite State Machine?
A state machine is a useful way of modelling behaviour in an application. When we develop an app we don't always cover all the cases, especially when we are working with states. in React we use states a lot to pass data between components.

The Finite State Machine holds these parts: States, Actions, Initial State and Transition.

They also have some constraints:
- There are finite number of possible states.
- There are finite number of possible actions.
- The applications can be in one of these states at a time.
- Given a `currentState` and an `action`, the transition function must always return the same `nextState`.

A finite state machine can be represented as a mapping from a `state` to its "transitions",  where each transition is an `action` and the `nextState` that follows that action. This mapping is just a plain JavaScript object.

## The project
I have built a React JS app that demonstrates the use of the Finite State Machine. The app has a search input that you can use to search for images. my app's subject is Fitness. you can search for a fitness activity and the results are images in this activity. for example, you can search for "Run" or "Weights". when you click on an Image it will resize on your screen like a popup. another click on the image will close the popup image.

Here is a working DEMO: http://ilanberko.com/fsm-gallery/

### The finite Idea
At the bottom of the screen in the app, you can see a label that shows the current state of the app. the idea is to show the states while you are working with the app. 

#### The states:
- start: initial search.
- loading: search results fetch.
- error: the search failed.
- gallery: successful search results.
- photo: A single photo.

#### The actions:
- 'SEARCH': "search" button click
- 'SEARCH_SUCCESS':  search succeeded with the queried photos.
- 'SEARCH_FAILURE': search failed due to an error.
- 'CANCEL_SEARCH':  "cancel search" button click.
- 'SELECT_PHOTO': user clicks a photo in the gallery.
- 'EXIT_PHOTO': user clicks to exit the photo.

## Run the project
The project repo contains 2 main folders:
fsm-image-gallery ( the root folder which you need to clone )
-- gallery-fake-data ( a mock JSON server I built )
-- image-gallery ( the project folder )

### Steps:
1. Install NodeJS (https://nodejs.org/en/) if it isn't installed yet. 
2. Clone the root folder with `git clone https://github.com/ilanbr/fsm-image-gallery.git` command.
2. Run the Mock server: Open the "gallery-fake-data" folder with terminal ( I use GIT-BASH) and run `npm run json:server` command. it will open 'http://localhost:3004'.
3.  Run the project: open the "image-gallery" folder with terminal ( I use GIT-BASH) and run `npm install`. it will open 'http://localhost:3000'.
