console.log("js运行了");
console.log(React);
console.log(ReactDOM);

let obj = {
    title: "这是APP",
    subtitle: "我是副标题",
    options: [1]
}
const showOptions = (options) => {
    if (options && options.length > 0) {
        return <p>这是一个options</p>
    } else {
        return <p>没有东西</p>
    }
}
const template = (
    <div>
        <h1>{obj.title}</h1>
        <p>{obj.subtitle}</p>
        {(obj.options && obj.options.length) > 0 && <p>这是一个options</p>}
        {showOptions(obj.options)}
        <p>{(obj.options && obj.options.length > 0) ? "这是一个options" : "没有东西"}</p>
        <ol>
            <li>物品1</li>
            <li>物品1</li>
        </ol>
    </div>
)

const templateTwo = (
    <div>
        <h1>金瑞</h1>
        <p>age: 22</p>
        <p>location: 杭州</p>
    </div>
)

let count = 0
const countAdd = () => {
    count += 1
    renderCountApp();
}
const countRemove = () => {
    count -= 1
    renderCountApp();
}
const countReset = () => {
    count = 0
    renderCountApp();
}
const renderCountApp = () => {
    const templateThree = (
        <div>
            <p>{count}</p>
            <button className="button" onClick={countAdd}>+1</button>
            <button className="button" onClick={countRemove}>-1</button>
            <button className="button" onClick={countReset}>重置</button>
        </div>
    )
    const root = document.getElementById("app");
    ReactDOM.render(templateThree, root)
}
renderCountApp()