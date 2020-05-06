import React,{Component} from "react"
// 添加选项
class AddOption extends Component {
    constructor(props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.state = {
            error: ""
        }
    }
    handleFormSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({
            error
        }))
        if (!error) {
            e.target.elements.option.value = ""
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit} className="add-option">
                    <input type="text" name="option" className="add-option__input" />
                    <button className="button">添加选项</button>
                </form>
            </div>
        )
    }
}
export default AddOption