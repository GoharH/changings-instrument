import React from "react";
import './style.css';

class Calculator extends React.Component {

    state = {
        newNumber: 1,
        addingNumber: 0,
        chengingNumber: 0,
    }

    // lowNumber = () => {
    //     this.setState({ newNumber: --this.state.newNumber })
    // }
    // moreNumber = () => {
    //     this.setState({ newNumber: ++this.state.newNumber })
    // }

    lowNumber = () => {
        if (+this.state.addingNumber) {
            this.setState({ newNumber: this.state.newNumber - +this.state.addingNumber })
        } else {
            this.setState({ newNumber: --this.state.newNumber })
        }
    }
    moreNumber = () => {
        console.log(this.state.addingNumber);
        if (+this.state.addingNumber) {
            this.setState({ newNumber: this.state.newNumber + +this.state.addingNumber })
        } else {
            this.setState({ newNumber: ++this.state.newNumber })
        }
    }

    handleChange = (e) => {
        this.setState({ addingNumber: e.target.value })
    }
    render() {
        return <section className="contain">
            <div className="calc-box">
                <div className="flex">
                    <div className="low-number" onClick={this.lowNumber}>
                        -
                    </div>
                    <span className="my-number">{this.state.newNumber}</span>
                    <div className="more-number" onClick={this.moreNumber}>
                        +
                    </div>
                </div>
                <input type="text" className="my-number" value={this.state.addingNumber} onChange={this.handleChange} />
            </div>

        </section>
    }
}
export default Calculator