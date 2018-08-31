import React from 'react';
import { button, input, Form, label } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';

import './App.css';



// const ContainerFluid  = (
//   <Grid fluid={true}>

//   </Grid>
// );



class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          "TaskId": 1,
          "UttId": 11,
          "Path": "/run10/batch2/5707-jw3r",
          "Cue": "this",
          "SpeakerIdHash": "hash1",
          "SpeakerGender": "Male",
          "SpeakerAge": "30",
          "LabelerLastComments": [
              "comment1",
              "comment2"
          ]
      }
  }



  render() {
    return (
      < div className="App">
        <Grid>
          <div className="containerr contentContainer">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-info ">
                        <div className="panel-heading topPanel">Запис 
                        <b> {this.state.UttId} </b> 
                          користувача 
                        <b> {this.state.SpeakerIdHash}</b> 
                        ({this.state.SpeakerGender}, 
                        {this.state.SpeakerAge})
                        </div>
                        <div className="panel-body col-lg-12">
                            <Form id="labelling-form" className="form-horizontal" action="./post" method="POST">
                                <input type="hidden" name="UttId" value="{{this.state.UttId}}" />

                                <div className="form-group">
                                    <div className="text-center">
                                        <audio className="audio" id="utterance" src="https://www.robus.io/admin/uploads/utterances-mp3{{.utt.file_path}}.mp3" type="audio/mpeg" autoPlay controls>
                                            audio didn't work
                                        </audio>
                                    </div>
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="left col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <label className="labelTitle ">Якість запису</label>
                                    </div>
                                    <div className="right col-sm-9 col-md-9 col-lg-9 col-xl-9  text-right-lg">
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body" >
                                            <p className="hoverTitle">Взагалі нічого не розібрати</p>
                                            <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio1" value="1" /> 1
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover2">Треба дуже вслуховуватись</p>
                                            <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio2" value="2" /> 2
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover3">Треба вслуховуватись</p>
                                            <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio3" value="3" /> 3
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover4">Незначні шуми</p>
                                            <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio4" value="4" /> 4
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover5">Взгалі без шумів</p>
                                            <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio5" value="5" /> 5
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className=" true left col-lg-3 text-left-lg">
                                        <label>Правильність вимови <span className="badge">
                                        {this.state.Cue}
                                        </span></label>
                                    </div>
                                    <div className="right col-lg-9 text-right-lg">
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body" >
                                            <p className="hoverTitle hover1">Дуже погана</p>
                                            <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio1" value="1" /> 1
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover2">Погана</p>
                                            <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio2" value="2" /> 2
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover3">Добра</p>
                                            <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio3" value="3" /> 3
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover4">Дуже хороша</p>
                                            <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio4" value="4" /> 4
                                        </label>
                                        <label className="radio-inline" data-toggle="tooltip" data-container="body">
                                            <p className="hoverTitle hover5">Ідеальна</p>
                                            <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio5" value="5" /> 5
                                        </label>
                                        <div className="notTrue checkbox">
                                            <label className="radio-inline">
                                                <input type="radio" name="PronunciationQuality" id="PronunciationQuality_RadioNA" value="-1" /> неможливо оцінити
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="left col-lg-3 text-right-lg">
                                        <label>Якась типова помилка вимови?</label>
                                    </div>
                                    <div className=" right col-lg-9">
                                        <div>
                                            <div className="typeError checkbox my-checkbox-inline">
                                                <label>
                                                    <input type="checkbox" name="Mistakes" value="z_instead_of_theta" />
                                                    /z/ замість /θ/
                                                </label>
                                            </div>
                                            <div className="typeError checkbox my-checkbox-inline">
                                                <label>
                                                    <input type="checkbox" name="Mistakes" value="s_instead_of_theta" />
                                                    /s/ замість /θ/
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="typeError checkbox my-checkbox-inline">
                                                <label>
                                                    <input type="checkbox" name="Mistakes" value="z_instead_of_eth" />
                                                    /z/ замість /ð/
                                                </label>
                                            </div>
                                            <div className=" typeError checkbox my-checkbox-inline">
                                                <label>
                                                    <input type="checkbox" name="Mistakes" value="s_instead_of_eth" />
                                                    /s/ замість /ð/
                                                </label>
                                            </div>
                                        </div>
                                        <div className="checkbox typeError">
                                            <label>
                                                <input type="checkbox" name="Mistakes" value="other_not_in_th" />
                                                Помилка не в ⟨th⟩ (/θ/ або /ð/ звучать ок)
                                            </label>
                                        </div>
                                        <div className="checkbox typeError">
                                            <label>
                                                <input type="checkbox" name="Mistakes" value="other" />
                                                Типова, але жодна з перелічених раніше
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    {/* <div className="left col-lg-3 text-right-lg">
                                        <label htmlFor="comment">Коментар</label>
                                    </div>
                                    <div className="col-lg-9">
                                        <input id="utt_comment" className="form-control" type="text" name="Comment" placeholder="Необов'язковий комментар" data-toggle="dropdown" />
                                        <ul id="utt_past_comments" className="dropdown-menu" role="menu" aria-labelledby="utt_comment">
                                            {this.state.LabelerLastComments}
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#"></a></li>
                                            {end}

                                                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">HTML</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">CSS</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">JavaScript</a></li>
                                        </ul>

                                    </div> */}
                                        <div className="left col-xs-3 text-right">
                                          <label htmlFor="comment">Коментар</label>
                                        </div>
                                        <div className="right col-xs-9">
                                          <input className="rightInput form-control" type="text" name="Comment" placeholder="Необов'язковий комментар" />
                                        </div> 
                                </div>

                                <div className="form-group toRight">
                                    <div className="col-lg-9 col-lg-offset-3">
                                        <label className="right colorLastCheck">
                                            <input type="checkbox" name="IsBookmarked" value="1" />
                                            Помітити запис, щоб його легше було знайти пізніше
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group text-center no-gutter">
                                    <button id="Button_submit" type="submit" className="submitButton btn btn-primary">Відправити</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
          </div>
      </Grid>  
    </div>
    );
  }
}

export default App;
