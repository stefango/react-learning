# 相关资料

见 REF.md

# 7面向组件编程基础

组件的创建

- 函数组件/无状态组件：自定义标签（函数名）
- 类组件
- vscode 插件：[skyran.js-jsx-snippets](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets)

# 8面向组件编程props基础

props可以从组件的外部向内部传递数据，所有组件不能修改自身的props

demo：8.html

ref：

- [组件 & Props](https://react.docschina.org/docs/components-and-props.html)
- [React Props](https://www.runoob.com/react/react-props.html)

# 9 props 验证与默认值

defaultProps

验证（上线模式取消props）

- 引用 prop-types 库
- vscode 插件 dsznajder.es7-react-js-snippets 生成代码片段：`rccp`

ref：

- [使用 PropTypes 进行类型检查](https://react.docschina.org/docs/typechecking-with-proptypes.html)
- [react组件中的constructor和super小知识](https://www.cnblogs.com/faith3/p/9219446.html)
  - 可以不写constructor，一旦写了constructor，就必须在此函数中写 `super(props)` （[16.3 弃用super](https://zh-hans.reactjs.org/docs/legacy-context.html)）
  - super中的props是否接收，只能影响constructor生命周期能否使用this.props，其他的生命周期已默认存在this.props
- [Class 的继承 - 子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用`super`方法，子类就得不到`this`对象。](https://es6.ruanyifeng.com/#docs/class-extends)

# 10 渲染外部数据与联系

demo：10.html

# 11 state 基础

state：

- 一种可以在组件创建后更改的数据，私有的
- 不能使用函数（即无状态组件）
- 状态/数据改变后，react自动改变数据绑定的内容

props：接收外部传来的值的集合，不可改变（通过父组件修改）

demo：11.html

ref：

- [[译] 深入理解 Props 和 State - 郑丰彧的文章](https://zhuanlan.zhihu.com/p/44784850)

  - demo：public\react-house-with-cat\index.html
  
    ```javascript
    //无状态组件：解构，不需要写props
    let Door = ({ isOpen, onClick }) => (
        <img src={isOpen ? IMAGES.door_open : IMAGES.door_closed} className='door' onClick={onClick} />
    )
    
    //类组件：this.props.xxx
    class Door extends React.Component {
        render() {
            return <img src={this.props.isOpen ? IMAGES.door_open : IMAGES.door_closed} className='door' onClick={this.props.onClick} />;
        }
    }
    ```
  
    
  
  - state 提升：将相同的数据表示为父组件的 state，并将数据作为 props 传递给子组件

# 12 state 进阶

组件api之[setState(updater, [callback])](https://react.docschina.org/docs/react-component.html#setstate)

demo：12.html

# 13 ref 转发

使用 ref 的三种方法：

- 字符串的方式
- 回调函数（推荐）
- React.createRef() （React16.3新提供的方式）

ref：

- [勿过度使用 Refs](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs)

# 14 事件与 this

React 绑定事件使用小驼峰命名，不加 `()` （否则函数会立即执行）

修改 this 指向的方法：

- 组件上 bind 方式绑定
- 定义为箭头函数方式绑定（属性初始化器）
- 构造器里提前绑定
- 事件调用时使用箭头函数

demo：14.html

ref:

1. https://www.runoob.com/react/react-event-handle.html

> 如果你没有使用属性初始化器语法，你可以在回调函数中使用 箭头函数：
>
> class LoggingButton extends React.Component {  handleClick() {    console.log('this is:', this);  }   render() {    //  这个语法确保了 `this` 绑定在  handleClick 中    return (      <button onClick={(e) => this.handleClick(e)}>        Click me      </button>    );  } }
>
> 使用这个语法有个问题就是每次 LoggingButton 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。

# 15 条件渲染

demo：15.html

# 20 组件传值

父传子

子传父

同级传值

- `yarn add pubsub-js` (注意不是 pubsub)
- 发送方：publish
- 接收方：subscribe

demo: SimpleChildBro.js

# 21 