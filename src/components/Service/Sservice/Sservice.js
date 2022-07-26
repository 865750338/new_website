import React, { Component } from 'react'
import Stserviceitems from './StserviceItem'
import Reveal from 'react-reveal/Reveal'
class Sservice extends Component {
  render() {
    return (
      <section className="agency_service_area bg_color">
        <div className="container">
          <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">
            You SaasLand wherever your
            <br /> business agency
          </h2>
          <div className="row mb_30">
            <div className="col-lg-4 col-sm-6">
              <Reveal effect="fadeInUp" duration={1100}>
                <Stserviceitems
                  iShap="icon_shape1.png"
                  Sicon="ti-panel"
                  text="Export Presets"
                  description="为什么我要说那个老家伙，他是个大笨蛋，布拉格，请原谅我，他是个笨手笨脚的牛津泡泡和吱吱作响的发条，他是个满脸通红的蒙蒂小子。！"
                  btn="Read More"
                  bicon="arrow_right"
                />
              </Reveal>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Reveal effect="fadeInUp" duration={1400}>
                <Stserviceitems
                  iShap="icon_shape2.png"
                  Sicon="ti-layout-grid2"
                  text="Grid and Guides"
                  description="为什么我要说那个老家伙，他是个大笨蛋，布拉格，请原谅我，他是个笨手笨脚的牛津泡泡和吱吱作响的发条，他是个满脸通红的蒙蒂小子。！"
                  btn="Read More"
                  bicon="arrow_right"
                />
              </Reveal>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Reveal effect="fadeInUp" duration={1700}>
                <Stserviceitems
                  iShap="icon_shape3.png"
                  Sicon="ti-gallery"
                  text="Prototyping"
                  description="为什么我要说那个老家伙，他是个大笨蛋，布拉格，请原谅我，他是个笨手笨脚的牛津泡泡和吱吱作响的发条，他是个满脸通红的蒙蒂小子。！"
                  btn="Read More"
                  bicon="arrow_right"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Sservice
