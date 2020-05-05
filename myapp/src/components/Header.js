import React from "react"
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
export default Header