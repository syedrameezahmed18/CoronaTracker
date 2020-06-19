import React, { Component } from 'react';
import {GiCrossMark} from "react-icons/gi";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import {TiTick} from "react-icons/ti";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import a11 from "../images/a11.jpg";
import a22 from "../images/a22.jpg";
import a33 from "../images/a33.png";
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
                <LightSpeed right>
                  <div className="symptoms">
                    <p className="symp">Symptoms</p>
                    {/*to be cont*/}
                    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><p className="timetxt">Fever</p></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><p className="timetxt1">Shortness of breath</p></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="green" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><p className="timetxt2">Coughing</p></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent><p className="timetxt3">Sore throat</p></TimelineContent>
      </TimelineItem>
    </Timeline>
                </div></LightSpeed>
                <Fade left>
                <div className="description">
                  <p className="desc">
                    Description
                  </p>
                  <div className="complement">
                    <div className="leftcar">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={a11} class="d-block w-100" alt="..." height="400px"/>
    </div>
    <div class="carousel-item">
      <img src={a22} class="d-block w-100" alt="..." height="400px"/>
    </div>
    <div class="carousel-item">
      <img src={a33} class="d-block w-100" alt="..." height="400px"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Covid-19</h1>
    <p class="lead">Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans, these viruses cause respiratory tract infections that can range from mild to lethal. Mild illnesses include some cases of the common cold (which is also caused by other viruses,
     predominantly rhinoviruses), while more lethal varieties can cause SARS, MERS, and COVID-19.</p>
     <p class="lead">Coronaviruses vary significantly in risk factor. Some can kill more than 30% of those infected, such as MERS-CoV, and some are relatively harmless, such as the common cold. Coronaviruses can cause colds with major symptoms, such as fever,
        and a sore throat from swollen adenoids. Coronaviruses can cause pneumonia (either direct viral pneumonia or secondary bacterial pneumonia) and bronchitis (either direct viral bronchitis or secondary bacterial bronchitis).</p>
  </div>
</div>
          
                    </div>
                  </div>
                </div>
                </Fade>
                
                  
                
                
               <Fade right> <div className="faq">
                    <p className="desc">FAQS</p>
                <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="gg btn btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
        <button class="gg btn btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Can you predict how long the pandemic may last?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        There can be no legitimate prediction that how long this will last, Currently there is no cure for the covid19
        but medical facilities are trying there level best for a care until then the only way to fight back the virus to prevention its transmission
        many countries have already contaminated the virus.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class=" gg btn btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Does regular surgical masks or paper mask prevent corona virus?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        No it may not completly prevent the virus but can reduce the transmission rate to some extent
      </div>
    </div>
  </div>
</div>
                </div></Fade>
            </div>
         );
    }
}
 
export default About;