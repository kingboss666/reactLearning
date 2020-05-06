// 总组件
class MyApp extends React.Component {constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePickOption = this.handlePickOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.state = {
            options: props.options
        }
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    handlePickOption() {
        const index = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[index]
        alert(option)
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
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}
MyApp.defaultProps = {
    options: []
}
// 标题
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: "帮你做决定"
}
// 随机选项
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}>
                随机输出一个选项
            </button>
        </div>
    )
}
// 选项集合
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>全部删除</button>
            {props.options.length === 0 && <p>请添加一个选项</p>}
            {props.options.map((item, index) => {
                return <Option
                    option={item}
                    key={`option_${index}`}
                    handleRemoveOption={props.handleRemoveOption} />
            })}
        </div>
    )
}
// 单个选项
const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={() => {
                props.handleRemoveOption(props.option)
            }}>删除</button>
        </div>
    )
}
// 添加选项
class AddOption extends React.Component {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option" />
                    <button>添加选项</button>
                </form>
            </div>
        )
    }
}

const app = document.getElementById("app")
ReactDOM.render(<MyApp />, app)