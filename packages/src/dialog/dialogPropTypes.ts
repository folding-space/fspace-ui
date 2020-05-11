import { PropTypes } from '../utils/vue-types';

const dialogProps = {
  /**
   * 是否显示dialog，支持.sync修饰符
   */
  visible: PropTypes.bool,
  /**
   * 是否为全屏 Dialog
   */
  fullscreen: PropTypes.bool,

  /**
   * 是否需要遮罩层
   */
  modal: PropTypes.bool,

  /**
   * 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
   */
  modalAppendToBody: PropTypes.bool,

  /**
   * Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
   */
  appendToBody: PropTypes.bool,

  /**
   * 是否在 Dialog 出现时将 body 滚动锁定
   */
  lockScroll: PropTypes.bool,

  /**
   * 是否可以通过点击 modal 关闭 Dialog
   */
  closeOnClickModal: PropTypes.bool,

  /**
   * 是否可以通过按escape键关闭 Dialog
   */
  closeOnPressEscape:PropTypes.bool,

  /**
   * 是否显示关闭按钮
   */
  showClose: PropTypes.bool,

  /**
   * 是否对头部和底部采用居中布局
   */
  center: PropTypes.bool,

  /**
   * 关闭时销毁 Dialog 中的元素
   */
  destroyOnClose: PropTypes.bool,

  /**
   * Dialog 的标题
   */
  title: PropTypes.string,

  /**
   * Dialog 的宽度
   */
  width: PropTypes.string,

  /**
   * Dialog CSS 中的 margin-top 值
   */
  top: PropTypes.string,

  /**
   * Dialog 的自定义类名
   */
  customClass: PropTypes.string,

  /**
   * Dialog 关闭的按钮图标
   */
  closeIcon: PropTypes.string,

  /**
   * dialog是否需要圆角
   */
  borderRadius:PropTypes.bool,

  /**
   * 关闭前的回调，会暂停 Dialog 的关闭
   * @param done 用于关闭 Dialog
   */
  beforeClose: PropTypes.any,
};

export {
  dialogProps
}