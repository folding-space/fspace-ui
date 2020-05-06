import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
import './dialog.scss'


interface keyEvent {
    keyCode: number
    key: string
}

@Component
export default class FsDialog extends Vue {

    /**
     * 是否显示dialog，支持.sync 修饰符
     */
    @Prop({type: Boolean, required: false, default: false})
    private readonly visible!: boolean;

    /**
     * Dialog 的标题
     */
    @Prop({type: String, required: false, default: ''})
    private readonly title!: string;
    /**
     * Dialog 的宽度
     */
    @Prop({type: String, required: false, default: '50%'})
    private width!: string;

    /**
     * 是否为全屏Dialog
     */
    @Prop({type: Boolean, required: false, default: false})
    private readonly fullscreen!: false;

    /**
     * Dialog CSS 中的 margin-top 值
     */
    @Prop({type: String, required: false, default: '15vh'})
    private top!: string;

    /**
     * 是否需要遮罩层
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly modal!: boolean;

    /**
     * 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly modalAppendToBody!: boolean;

    /**
     * Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
     */
    @Prop({type: Boolean, required: false, default: false})
    private readonly appendToBody!: boolean;

    /**
     * 是否在 Dialog 出现时将 body 滚动锁定
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly lockScroll!: boolean;

    /**
     * Dialog 的自定义类名
     */
    @Prop({type: String, required: false, default: ''})
    private readonly customClass!: string;

    /**
     * 是否可以通过点击 modal 关闭 Dialog
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly closeOnClickModal!: boolean;

    /**
     * 是否可以通过按下 ESC 关闭 Dialog
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly closeOnPressEscape!: boolean;

    /**
     * 是否显示关闭按钮
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly showClose!: boolean;

    /**
     * 是否对头部和底部采用居中布局
     */
    @Prop({type: Boolean, required: false, default: false})
    private readonly center!: boolean;

    /**
     * 关闭时销毁 Dialog 中的元素
     */
    @Prop({type: Boolean, required: false, default: true})
    private readonly destroyOnClose!: boolean;

    /**
     * 关闭前的回调，会暂停 Dialog 的关闭
     * @param done 用于关闭 Dialog
     */
    @Prop({type: Function, required: false})
    private readonly beforeClose!: () => {};


    /**
     * 设定弹出框的宽度
     */
    private getDialogWidth() {
        return this.fullscreen ? "100%" : this.width
    }


    /**
     * Dialog 关闭的按钮图标
     */
    @Prop({type: String, required: false, default: ''})
    private readonly closeIcon!: string;


    /**
     * Dialog 打开的回调
     */
    private openClick(e:any) {
        console.log(this.fullscreen)
        console.log(this.getDialogWidth())
        //添加键盘监听事件
        if (this.closeOnPressEscape) {
            window.addEventListener('keydown', this.onKeydown)
        }
        this.$emit('open',e)
    }

    /**
     * Dialog 打开动画结束时的回调
     */
    private openedClick(e:any) {
        this.$emit('opened',e)
    }

    /**
     * Dialog 关闭的回调
     */
    private closeClick(e:any) {
        this.$emit('close',e)
    }

    /**
     * Dialog 关闭动画结束时的回调
     */
    private closedClick(e:any) {
        //移除键盘监听事件
        window.removeEventListener('keydown', this.onKeydown)
        this.$emit('closed',e)
    }

    /**
     *  Dialog是否显示
     */
    private handleClose() {
        this.$emit("update:visible", false)
    }

    /**
     * 监听键盘，在按住esc时关闭dialog
     */
    private onKeydown(e: keyEvent) {
        console.log(e)
        if (e.keyCode === 27 || e.key === 'Escape') {
            this.handleClose()
        }
    }


    private render() {
        return (
            <transition name='dialog-fade' onBeforeEnter={this.openClick} onEnter={this.openedClick}
                        onBeforeLeave={this.closeClick} onLeave={this.closedClick}>
                {this.visible ? (<div class={'fs-dialog__wrapper'} onClick={this.handleClose}>
                    <div class='fs-dialog' style={`width:${this.getDialogWidth()};margin-top:${this.top};`}
                         onClick={(e: Event) => e.stopPropagation()}>
                        <div class='fs-dialog__header'>
                            <span class='fs-dialog__title'>{this.$slots.title ? this.$slots.title : this.title}</span>
                            {(this.closeIcon && this.showClose) ? (
                                <button class='fs-dialog__headerbtn' onclick={this.handleClose}>
                                    <i class={this.closeIcon}></i>
                                </button>) : null}
                        </div>
                        <div class='fs-dialog__body'>{this.$slots.default}</div>
                        <div class='fs-dialog__footer'>{this.$slots.footer}</div>
                    </div>
                </div>) : null}
            </transition>
        );
    }
}

