import React from "react"
// 随机选项
const Action = (props) => {
    return (
        <div>
            <button
                className="big-button"
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}>
                随机输出一个选项
        </button>
        </div>
    )
}
export default Action