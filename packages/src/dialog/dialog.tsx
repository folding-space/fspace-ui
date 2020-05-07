import { defineComponent, toRefs,onMounted,ref} from '@vue/composition-api';
import { PropTypes } from '../utils/vue-types';
import { VNode } from 'vue/types/umd';
import classNames from 'classnames';
import './dialog.scss'


interface keyEvent {
    keyCode: number
    key: string
}

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
     * 关闭前的回调，会暂停 Dialog 的关闭
     * @param done 用于关闭 Dialog
     */
    beforeClose: PropTypes.any,
    /**
     * dialog是否需要圆角
     */
    borderRadius:PropTypes.bool
};


export default defineComponent({
    name: 'FsDialog',
    props: {
        ...dialogProps
    },
    setup(props, context) {
        const emit = context.emit
        const slots = context.slots
           
        /**
         * Dialog 打开的回调
         */
        const openClick = (e: any) => {
            //添加键盘监听事件
            if (props.closeOnPressEscape) {
                window.addEventListener('keydown', onKeydown)
            }
            emit('open', e)
        }
        /**
     * Dialog 打开动画结束时的回调
     */
        const openedClick = (e: any) => {
            emit('opened', e)
        }

        /**
         * Dialog 关闭的回调
         */
        const closeClick = (e: any) => {
            emit('close', e)
        }

        /**
         * Dialog 关闭动画结束时的回调
         */
        const closedClick = (e: any) => {
            //移除键盘监听事件
            window.removeEventListener('keydown', onKeydown)
            emit('closed', e)
        }

        /**
         *  Dialog是否显示
         */
        const handleClose = () => {
            emit("update:visible", false)
        }

        /**
         * 监听键盘，在按住esc时关闭dialog
         */
        const onKeydown = (e: keyEvent) => {
            if (e.keyCode === 27 || e.key === 'Escape') {
                handleClose()
            }
        }

        /**
         * 设定弹出框的宽度
         */
        const getDialogWidth = () => {
            return props.fullscreen || props.appendToBody ? "100%" : props.width
        }
        /**
         * 
         */
        const getClassName = (cName:string ,isClass: boolean) => {
            return classNames({
                [`fs-dialog__${cName}`]:isClass
            })  
        }

        const dialogArea = ():VNode=>{
            return <div class={`fs-dialog ${getClassName('radius',props.borderRadius)}`}
                      style={`width:${getDialogWidth()};margin-top:${props.appendToBody?"1px":props.top};`}
                      onClick={(e: Event) => e.stopPropagation()}>
                      <div class='fs-dialog__header'>
                        <span class='fs-dialog__title'>{slots.title ? slots.title() : props.title}</span>
                        {(props.closeIcon && props.showClose) ? (
                          <button class='fs-dialog__headerbtn' onclick={handleClose}>
                            <i class={props.closeIcon}></i>
                          </button>) : null}
                      </div>
                      <div class='fs-dialog__body'>{slots.default()}</div>
                   <  div class='fs-dialog__footer'>{slots.footer()}</div>
                   </div>

        }
     
        return () => {
            if(props.appendToBody){
                return dialogArea()
            }else{
                return <transition
                         name='dialog-fade'
                         onBeforeEnter={openClick}
                         onEnter={openedClick}
                         onBeforeLeave={closeClick}
                         onLeave={closedClick}>
                         {props.visible ? <div
                             class={getClassName('wrapper',props.modal)}
                             onClick={handleClose}>
                             {dialogArea()}
                         </div> : null}
                       </transition>
            }
        }
    }
})
