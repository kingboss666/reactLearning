console.log("js运行了111");
console.log(React);
console.log(ReactDOM);

let obj = {
    title: "帮你决定",
    subtitle: "我是副标题",
    options: []
}
const showOptions = (options) => {
    if (options && options.length > 0) {
        return <p>这是一个options</p>
    } else {
        return <p>没有东西</p>
    }
}
// 添加选项
const fromSubmit = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value
    if (option) {
        obj.options.push(option)
        e.target.elements.option.value = ""
        render()
    }
}

// 清除所有
const removeAll = () => {
    obj.options = []
    render()
}
// 随机选择一项
const makeDecision = () => {
    let index = Math.floor(Math.random() * obj.options.length)
    const option = obj.options[index]
    alert(option)
}
// 渲染
const render = () => {
    const template = (
        <div>
            <h1>{obj.title}</h1>
            <p>{obj.subtitle}</p>
            {showOptions(obj.options)}
            <p>{obj.options.length}</p>
            <button onClick={makeDecision} disabled={obj.options.length <= 0}>随机选择一项</button>
            <button onClick={removeAll}>删除所有</button>
            <ol>
                {
                    obj.options.map((item,index) => {
                        return <li key={`item${index}`}>{item}</li>
                    })
                }
            </ol>
            <form onSubmit={fromSubmit}>
                <input type="text" name="option" />
                <button>添加选项</button>
            </form>
        </div>
    )

    const root = document.getElementById("app");
    ReactDOM.render(template, root)
}
render()