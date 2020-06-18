import React, { Component } from 'react';
import {GiCrossMark} from "react-icons/gi";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import {TiTick} from "react-icons/ti";
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="aboutpage">
                <LightSpeed right><div className="precaution">
                    <Fade top><p className="prec">Precautions</p></Fade>
                    <div className="listed">
                    <Fade left><div className="dual">
                        <div className="manage"> 
                        <GiCrossMark className="lo"/>
                        <h2>Don’t Touch Your Face or Nose</h2>
                        </div>
                        
                        <p>Avoid animals (alive or dead), animal markets, 
                        and products that come from animals (such as uncooked meat).</p>

                        </div>
                        </Fade>
                       <Fade left> <div className="dual">
                            <div className="manage">
                            <GiCrossMark className="lo"/>
                        <h2>Avoid Contact with Sick People</h2>
                        </div>
                        <p>Avoid close contact with anyone showing symptoms of respiratory illness.</p>
                        </div>
                        </Fade>
                        <Fade left><div className="dual">
                            <div className="manage">
                            <GiCrossMark className="lo"/>
                        <h2>Avoid Crowded Places (Social Distancing)</h2>
                        </div>
                        <p>As an individual, you can lower your risk of infection by 
                            reducing your rate of contact with other people.</p>
                        </div>
                        </Fade>
                    </div>
                </div></LightSpeed>
                <LightSpeed left><div className="prevention">
                    <Fade top><p className="prev">Prevention</p></Fade>
                    <div className="listed">
                    <Fade right><div className="dual">
                    <div className="manage">
                        <TiTick className="lo" />
                        <h2>Wear a Mask</h2>
                        </div>
                        <p>You should continue to use the surgical mask in all public places until you are advised.</p>
                        </div>
                        </Fade>
                        <Fade right><div className="dual">
                        <div className="manage">
                        <TiTick className="lo" />
                        <h2>Cover Nose When Sneezing</h2>
                        </div>
                        <p>Cover your mouth and nose with a tissue or your sleeve (not your hands) when coughing or sneezing.</p>
                        </div>
                        </Fade>
                        <Fade right><div className="dual">
                        <div className="manage">
                        <TiTick className="lo" />
                        <h2>Wash Your Hands</h2>
                        </div>
                        <p>Wash hands often with soap and water for at least 20 seconds.</p>
                        </div>
                        </Fade>
                    </div>
                </div>
                </LightSpeed>
                <div className="symptoms">
                    <p className="symp">Symptoms</p>
                    {/*to be cont*/}
                </div>
                <div className="faq">
                    <p>FAQS</p>
                <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Does the virus transmits through animals?
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        No in most cases it does not transmits through animals however some infected creatures may carry this virus, thankyou the ratio of spreading through them are zero to none.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
         );
    }
}
 
export default About;