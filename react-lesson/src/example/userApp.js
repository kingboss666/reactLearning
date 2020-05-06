let user = {
  name: "金瑞",
  age: 22,
  location: "杭州"
}
const templateTwo = (
  <div>
      <h1>{user.name}</h1>
      <p>age: {user.age}</p>
      <p>location: {user.location}</p>
  </div>
)
const root = document.getElementById("app");
ReactDOM.render(templateTwo, root)