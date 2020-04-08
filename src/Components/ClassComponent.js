import React from "react"

class ClassComponent extends React.Component {
    myMethod() {
        if (2 > 3) {
            return (<h3>Hola mundo</h3>);
        } else {
            return (<h3>Adios universo</h3>);
        }

    }
    render() {

        const myMethod = this.myMethod();
        const date = new Date()
        return (
            <div>
                <h1>
                    This is a Class Component
                </h1>
                <h2>
                    Today's date: {date.getDate()}
                </h2>
                {myMethod}
                <hr></hr>
                <div>
                    <h4>{this.props.txtparam}</h4>
                </div>
            </div>
        );
    }
}

export default ClassComponent