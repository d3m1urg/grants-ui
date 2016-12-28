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