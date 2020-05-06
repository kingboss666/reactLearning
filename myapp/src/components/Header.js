import React from "react"
// 标题
const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subTitle && <h2 className="header__subTitle">{props.subTitle}</h2>}
            </div>
        </div>
    )
}
Header.defaultProps = {
    title: "帮你做决定"
}
export default Header