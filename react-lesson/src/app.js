// 总组件
class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Heaber />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Heaber extends React.Component {
    render() {
        return (
            <div>
                <h1>帮你做决定</h1>
                <p>把你的命运交给电脑把</p>
            </div>
        )
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button>随机输出一个选项</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
                <Option />
                <Option />
                <Option />
            </div>
        )
    }
}
class Option extends React.Component {
    render(){
        return (
            <div>
                我是li
            </div>
        )
    }
}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                我是AddOption组件
            </div>
        )
    }
}

const app = document.getElementById("app")
ReactDOM.render(<MyApp />, app)