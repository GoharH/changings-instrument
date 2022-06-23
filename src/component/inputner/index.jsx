import React from "react";
import './style.css'



class InputsBySize extends React.Component {
    state = {
        inputTitle: '',
        inputNumber: '',
        inputDescription: '',
        inputColor: '',
        inputSize: '',
        inputDescriptColor: '',
        backColorInstrument: '',
        backColorVizuality: '',
        radiusSize: '',
        border: ''

    }

    inputTitle = (e) => {
        this.setState({ inputTitle: e.target.value })
    }
    changeDiscription = (e) => {
        this.setState({ inputDescription: e.target.value })
    }
    changeNumber = (e) => {
        this.setState({ inputNumber: e.target.value })

    }
    changeSize = (e) => {
        this.setState({ inputSize: e.target.value })
    }
    changeColor = (e) => {
        this.setState({ inputColor: e.target.value })
    }
    changeDescriptColor = (e) => {
        this.setState({ inputDescriptColor: e.target.value })
    }
    changeBackInstrument = (e) => {
        this.setState({ backColorInstrument: e.target.value })
    }
    changeBackViuality = (e) => {
        this.setState({ backColorVizuality: e.target.value })
    }
    changeRadius = (e) => {
        this.setState({ radiusSize: e.target.value })
    }

    render() {
        return <div className="input-machine">
            <div className="instruments" style={{ backgroundColor: this.state.backColorInstrument }}>
                <div>
                    <label htmlFor="#" >Title instruments</label>
                    <input type="text" onChange={this.inputTitle} value={this.state.inputTitle} />
                    <label htmlFor=""></label>
                    <input type="number" className="title-number-change" onChange={this.changeNumber} value={this.state.inputNumber} />
                    <input type="color" className="color-change" onChange={this.changeColor} value={this.state.inputColor} />
                </div>
                <div>
                    <label htmlFor="#">Description instruments</label>
                    <input type="text" value={this.state.inputDescription} onChange={this.changeDiscription} />
                    <input type="range" onChange={this.changeSize} />
                    <input type="color" className="color-change" value={this.state.inputDescriptColor} onChange={this.changeDescriptColor} />
                </div>
                <div>
                    <label htmlFor="#">Background color</label>
                    <input type="color" className="color-change" value={this.state.backColorInstrument} onChange={this.changeBackInstrument} />
                    <input type="color" className="color-change" value={this.state.backColorVizuality} onChange={this.changeBackViuality} />
                </div>
                <label htmlFor="#">Border radius</label>
                <input type="range" onChange={this.changeRadius} value={this.state.radiusSize} />
            </div>
            <div className="vizuality" >
                <div className="machine-efect" style={{ backgroundColor: this.state.backColorVizuality, borderRadius: this.state.radiusSize + 'px' }}>
                    <h1 style={{ fontSize: this.state.inputNumber + 'px', color: this.state.inputColor }}>{this.state.inputTitle}</h1>
                    <p style={{ fontSize: this.state.inputSize + 'px', color: this.state.inputDescriptColor }}>{this.state.inputDescription}</p>
                </div>
            </div>
        </div>
    }
}
export default InputsBySize