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