import React from "react"
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"
import Modal from "./Modal"
// 总组件
class MyApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePickOption = this.handlePickOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.handleClearSelectionOption = this.handleClearSelectionOption.bind(this)
        this.state = {
            options: props.options,
            selectionOption: undefined
        }
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    handlePickOption() {
        const index = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[index]
        this.setState(() => ({
            selectionOption: option
        }))
    }
    handleClearSelectionOption() {
        this.setState(() => ({
            selectionOption: undefined
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return "选项不能为空"
        } else if (this.state.options.includes(option)) {
            return "不要输入重复的选项"
        } else {
            this.setState(prevState => ({ options: prevState.options.concat(option) }))
        }
    }
    handleRemoveOption(option) {
        this.setState(prevState => ({
            options: prevState.options.filter(item => {
                return item !== option
            })
        }))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({
                    options
                }))
            }
        } catch (e) {
            //什么都不做
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }
    }
    render() {
        const subTitle = "把你的命运交给电脑吧"
        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <Modal
                    selectionOption={this.state.selectionOption}
                    handleClearSelectionOption={this.handleClearSelectionOption}
                />
            </div>
        )
    }
}
MyApp.defaultProps = {
    options: []
}

export default MyApp