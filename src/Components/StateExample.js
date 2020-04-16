import React from "react"
import randomColor from "randomcolor"


class StateExample extends React.Component {
    constructor() {
        // goes to parent class (super class and get 'goodies');
        super();
        this.state = {
            status: 'free',
            ocupation: 'engineer',
            specialization: 'software',
            clickCount: 0,
            color: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('Handling Click');

        this.setState({ status: "Occupied :(" });
        this.setState(prevState => {
            return {
                clickCount: prevState.clickCount + 1
                // be careful when modifying (prev state vs "global or original stat")
            }
        })
    }

    componentDidMount() {
        // get data needed to correctly display
        console.log("It did mount");

    }

    // -----------------------------------------
    // important
    // common error: 
    // Uncaught Invariant Violation: Maximum update depth exceeded. 
    //  This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. 
    //  React limits the number of nested updates to prevent infinite loops.

    componentDidUpdate(prevProps, prevState) {
        if (prevState.clickCount !== this.state.clickCount) {
            console.log("It did update");
            //const color = new randomcolor();
            const newColor = randomColor();
            console.log(newColor);
            // could cause a "infinite loop since did updates runs when the component renders, but then, the color change re-updates"
            // solution: use conditionals to run event
            this.setState({ color: newColor })
        }
    }



    render() {
        console.log("It did render");
        return (
            <div>
                <div style={{ marginTop: "3vh", margin: "30px", }}>
                    <h3 style={{ textAlign: "center", color: this.state.color }}>Class component with State - StateExample</h3>
                    <h4> My State: {this.state.status}</h4>
                    <h5> My Occupation: {this.state.ocupation}</h5>
                    <h5> My Specialization: {this.state.specialization}</h5>
                    <h4>Click Count: {this.state.clickCount}</h4>
                    <h4>click count squared: {this.state.clickCount ** 2}</h4>
                </div>
                <div style={{ backgroundColor: "lightgreen", textAlign: "center" }}>
                    <p style={{ padding: 10 }}>
                        Since my occupation is {this.state.ocupation}  and my specialization is {this.state.specialization} <br></br>
                        I'm a {this.state.status} {this.state.specialization} {this.state.ocupation}
                    </p>
                </div>
                <div>
                    <button style={{ margin: 10 }} onClick={this.handleClick}>
                        Change Occupation
                    </button>
                </div>
            </div>
        );
    }

}

export default StateExample