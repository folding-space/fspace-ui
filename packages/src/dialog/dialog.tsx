import {Component, Vue, Prop} from 'vue-property-decorator';
import './dialog.scss'
import {VNode} from 'vue/types/umd';

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
     * 是否为全屏 Dialog
     */
    @Prop({type: Boolean, required: false, default: false})
    private readonly fullscreen!: boolean;

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
    @Prop({type: Boolean, required: false, default: ''})
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
    private beforeClose(done: any) {
    }


    /**
     * Dialog 打开的回调
     */
    private openClick() {
        this.$emit('open')
    }

    /**
     * Dialog 打开动画结束时的回调
     */
    private openedClick() {
        this.$emit('opened')
    }

    /**
     * Dialog 关闭的回调
     */
    private closeClick() {
        this.$emit('close')
    }

    /**
     * Dialog 关闭动画结束时的回调
     */
    private closedClick() {
        this.$emit('closed')
    }

    /**
     *
     */
    private handleClose() {
        this.$emit("update:visible", false)
    }

    private rDialog(): VNode {
        return (
            <transition class='dialog-fade'>
                {this.visible ? <div class='hm-dialog__wrapper' onclick={this.handleClose}>
                    <div class={`hm-dialog propsStyle(${this.width},${this.top})`} >
                        <div class="hm-dialog__header"></div>
                    </div>
                </div> : null}
            </transition>
        );
    }


}

