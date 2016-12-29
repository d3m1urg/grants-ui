# State definition for grants-ui

Whole state is held in Immutable.js global object and operated over using Redux toolkit.

{
    ui: {
        root: {
            sideMenuOpen: false
        }
    },
    data: {

    }
}

State is propagated to stateful components which represent different app entities; all other components are controlled by stateful components.

Create intelligent root reducer instead of built-in combineReducers, which:
- is too dumb, calls all the reducers it gets
- can not handle Immutable.js structures correctly
Existing composeReducers implementation uses object hash as state separation basis and passes state parts to each associated reducer according to provided keys.
My implementation define that the whole state is passed to every reducer which itself knows what part fo data to update.

As a side-effect of making reducers compose the initial state is that initial state is decomposed by defualt between them and is therefore easily updateable through reducers update.

Action types may me used as aliases to state tree nodes.
