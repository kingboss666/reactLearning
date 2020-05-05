import React from "react"
import Option from "./Option"
// 选项集合
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>全部删除</button>
            {props.options.length === 0 && <p>请添加一个选项</p>}
            {props.options.map((item, index) => {
                return <Option
                    option={item}
                    key={`option_${index}`}
                    handleRemoveOption={props.handleRemoveOption} />
            })}
        </div>
    )
}
export default Options