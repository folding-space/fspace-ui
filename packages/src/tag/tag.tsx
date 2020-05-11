import { Component, Vue, Prop } from 'vue-property-decorator';
import './tag.scss'


@Component
export default class FsTag extends Vue {

    @Prop({ type: String, required: false, default: 'defaulte' })//选择类型,
    private readonly type!: string;
    @Prop({ type: Boolean, required: false, default: true })//小叉图标是否显示
    private readonly closable!: boolean;
    @Prop({ type: Boolean, required: false, default: true })//关闭tag标签时是否需要过渡动画
    private readonly transition!: boolean;
    @Prop({ type: Boolean, required: false, default: true })//是否需要边框
    private readonly hit!: boolean;
    // @Prop({ type: String, required: false, default: 'light' })//改变背景颜色
    // private readonly effect!: string;
    @Prop({ type: String, required: false, default: 'da' })//改变大小
    private readonly size!: string;

  
    private showMouse = false;
    private transitions=true;//判断过渡动画
    private mouseOver () {
        this.showMouse = true
    }
    private mouseLeave () {
        this.showMouse = false
    }
    private onClickTag(e:Event) { 
        if(this.transition==true){
        this.transitions=false
       
         }else{
            this.transitions=true
         }
         setTimeout(() => {
            this.$emit('close', e);
        }, 100); 
    }
    private render(){
        const { $slots } = this;
       
        const tag =(
            <div class={`fs-tag fs-tag_${this.size} fs-tag_${this.type} fs-tag_${this.hit}`} >
            <span class='fs-tag_word'>{ $slots.default }</span>
           { this.closable ?
               <span
                onclick={this.onClickTag}
                onmousemove={this.mouseOver}
                onmouseout={this.mouseLeave}
                class={this.showMouse==false?'fs-tag_fork icon iconfont icon-icon-test44':'fs-tag_fork icon iconfont icon-icon-test42' } />:''
           }             
           </div>
        )
        return this.transitions? tag : <transition name='transition-name'> { tag } </transition>
    }
} 