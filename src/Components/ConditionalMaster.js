import React from "react"
import ConditionalChild from './ConditionalChild'


class ConditionalMaster extends React.Component {
    constructor() {
        // goes to parent class (super class and get 'goodies');
        super();
        this.state = {
            isLoading: true,

        }
    }



    componentDidMount() {
        // faking an API call
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2500)


    }

    render() {
        // when state method changes, it will re-render conditionalChild component
        return (
            <div>

                <ConditionalChild isLoading={this.state.isLoading} />
            </div>
        );
    }

}

export default ConditionalMaster
