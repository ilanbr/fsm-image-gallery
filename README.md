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





