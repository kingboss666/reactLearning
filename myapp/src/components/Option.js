import React from "react"
// 单个选项
const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.option}</p>
            <button onClick={() => {
                props.handleRemoveOption(props.option)
            }} className="button button--link">remove</button>
        </div>
    )
}
export default Option