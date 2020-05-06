import React from "react"
import Option from "./Option"
// 选项集合
const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">你的选项</h3>
                <button onClick={props.handleRemoveAll} className="button button--link">全部删除</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">请添加一个选项</p>}
            {props.options.map((item, index) => {
                return <Option
                    option={item}
                    count={index + 1}
                    key={`option_${index}`}
                    handleRemoveOption={props.handleRemoveOption} />
            })}
        </div>
    )
}
export default Options