import React from "react"
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
export default Option