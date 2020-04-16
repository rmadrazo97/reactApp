import React from 'react';

// important examples for lifeCycles:
// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
// https://scrimba.com/g/greacthooks


class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // lifecycle method
    // this should be a method called to get the information to display within our component.
    componentDidMount() {
        // get data needed to correctly display
        console.log("It did mount");

    }

    // important
    componentDidUpdate() {
        console.log("It did update");
    }

    // runs every time a component receives props
    // runs every time a parent component hands in props (checks if incomming props changed from parent's changes)
    // will be depricated in new version of React <<<<
    //componentWillReceiveProps(nextProps) {

    //if (nextProps.name != this.nextProps.name) {
    //  do something if name prop changed
    //    }
    //}

    // depricated
    // componentWillUpdate() {

    // }

    // depricated
    // componentWillMount() {

    // }

    // re-render component based on changes and rules.
    // gives a chance to optimize which components to update and based on which logic. 
    shouldComponentUpdate(nextProps, nextState) {
        // decide whether update component or not.
        // optimizes "rendering" just update when needed

        // return >true< if we want to update
        // return >false< if we do not want to
    }

    // remove certain components (clean up)
    componentWillUnmount() {
        // end / dissapear component from screen
        // cleanup of components.


    }

    // new lifecycle methods
    // static methods
    static getDerivedStateFromProps(props, state) {
        // read: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // rarely used
        // return the new, updated state based upon the props
    }


    getSnapshotBeforeUpdate() {
        // allows us to create a backup of current state
        // object and data inside of it. 'snapshot'
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }




    render() {
        return (
            <div>
                <h1>
                    hello world
                </h1>
            </div>
        )
    }
}

export default LifeCycle;
