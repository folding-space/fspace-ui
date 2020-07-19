import { PropTypes } from "../utils/vue-types";

const carouselProps = {
  /**
   * 是否是否自动切换
   */
  autoplay: PropTypes.bool,

  /**
   * 是否显示面板指示点
   */
  dots: PropTypes.bool,

  /**
   * 是否允许跳转
   */
  allowJump: PropTypes.bool,

  /**
   * 面板指示点位置，可选 top bottom left right
   */
  dotPosition: PropTypes.string,
  /**
   * 宽度
   */
  carouselWidth: PropTypes.string,
  /**
   * 高度
   */
  carouselHeight: PropTypes.string,

  /**
   * 面板指示点类名
   */
  dotsClass: PropTypes.string,

  /**
   * 动画效果
   */
  easing: PropTypes.string,

  /**
   * 动画效果函数，可取 scrollx, fade
   */
  effect: PropTypes.string,

  
  /**
   * dots的风格，可取 spot, line
   */
  spotOrLine: PropTypes.string,


  /**
   * 切换面板后的回调
   * @param current
   */
  afterChange: PropTypes.any,

  /**
   * 切换面板前的回调
   * @param current
   */
  beforeChange: PropTypes.any,
};

export { carouselProps };
