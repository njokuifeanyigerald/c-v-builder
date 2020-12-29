import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
import octocat from './octocat.png'
import {saveAs} from 'file-saver';

class App extends Component {

  // name, profile_info, Educational_level,
  // edu_extra_info,edu_duration,extra_body_title, extra_body_details,extra_body_duration,
  // extra_body_title2,extra_body_details2,extra_body_duration2,
  // project_title, project_summary, project_link,project_duration, project_title2,
  // project_summary2, project_link2, project_duration2, ref_email, ref_email2, ref_name,
  // ref_name2, ref_phone, ref_phone2, address, address2, email, email2, phone,phone2,nationality,
  // nationality2, nationality3, dob, skill,skill2, skill3,skill4,skill5,skill6,
  // twitter,linkedin,facebook,codersrank,github, hobbies 
  state = {
    name: '',profile_info: '', Educational_level: '', edu_extra_info:'',edu_duration: '', extra_body_title: '',
    extra_body_details: '', extra_body_duration:'', extra_body_title2:'', extra_body_details2:'', 
    extra_body_duration2: '',project_title:'', project_summary:'', project_link:'', project_duration:'', 
    project_title2: '', project_summary2:'', project_link2:'', project_duration2:'', ref_email: '', ref_email2:'',
    ref_name: '', ref_name2: '', ref_phone: '', address:'', address2:'', email:'', email2:'', phone:'', phone2: '',
    nationality: '', nationality2: '', nationality3: '',dob: '', skill: '', skill2: '', skill3: '', skill4:'',
    skill5:'', skill6: '', twitter: '', linkedin: '', facebook: '', codersrank: '', github: '', hobbies: ''
  }

  handleChange = ({target: {value, name}}) => this.setState({[name]: value}) 
  createAndDownloadPDF = () => {
    axios.post('/create-pdf', this.state)
// blob are immutable objects for raw data rep, reping data that isn't necessary a jaavscript object
      .then(() => axios.get('fetch-pdf', {responseType: 'blob'}))
      .then((res) =>{
        const pdfBlob = new Blob([res.data], {type: 'application/pdf'})

        saveAs(pdfBlob, 'cv.pdf')
      })
  }
  render(){
  return (
    <div className="App">
      <h1 class="text-center text-capitalize">C.V BUILDER</h1>
      <p className="text-center text-capitalize lead text-info ">By</p>
      <p className="text-center text-capitalize lead text-muted"> NJOKU GERALD CHINEDUM </p>
      <p className="text-center text-capitalize lead">AND</p>
      <p className="text-center text-capitalize lead text-muted"> ELEZUA VICTOR CHIJIOKE</p>
      <main id="doc">
            <section id="main">
                <div id="header-row">
                  <img width="150" height="150"  src={octocat} alt="profile" />
                  
                  <input type="text"  className="form-control" placeholder="name" 
                    onChange={this.handleChange} name="name"/>
                </div>
    
                <div id="profile-row">
                  <h2>Profile</h2>
                  <p id="profile-info">
                      {/* ${profile_info} */}
                      <input type="text" className="form-control" placeholder="profile info" 
                        onChange={this.handleChange} name="profile_info"/>
                  </p>
                </div>
    
                <div id="education-row">
                    <h2>Education</h2>
                    <p id="degree-info">
                        {/* <strong>${Educational_level}</strong> */}
                        <input type="text"  className="form-control" placeholder="Educational Level" 
                          onChange={this.handleChange}
                          name="Educational_Level"/>
                    </p>
    
                    <p id="edu-extra-info">
                        {/* ${edu_extra_info} */}
                        <textarea  className="form-control" placeholder="edu extra info"
                          onChange={this.handleChange}
                          name="edu_extra_info"/>
                    </p>
    
                    <p id="edu-duration-info">
                        {/* <em>${edu_duration}</em> */}
                        <input type="text"  className="form-control" placeholder="edu duration"
                          onChange={this.handleChange}
                          name="edu_duration"/>
                    </p>
    
                </div>
    
                <div id="extracurricular-acts">
                    <h2>Extra-curricular Activities</h2>
                    <div class="extra-body">
                        <p class="extra-body-title">
                            {/* <strong>${extra_body_title}</strong> */}
                            <input type="text"  className="form-control" placeholder="extra body title" 
                              onChange={this.handleChange}
                              name="extra_body_title"/>
                        </p>
                        <p class="extra-body-details">
                            {/* ${extra_body_details} */}
                            <textarea  className="form-control" placeholder="extra body details" 
                              onChange={this.handleChange}
                              name="extra_body_details"/>
                        </p>
                        <p class="extra-body-duration">
                            {/* <em>${extra_body_duration}</em> */}
                            <input type="text"  className="form-control" placeholder="extra body duration" 
                              onChange={this.handleChange}
                              name="extra_body_duration"/>
                            
                        </p>
                    </div>
                    <hr className="my-4" />
                    <div class="extra-body">
                        <p class="extra-body-title">
                            {/* <strong>${extra_body_title2}</strong> */}
                            <input type="text"  className="form-control" placeholder="extra body title" 
                              onChange={this.handleChange}
                              name="extra_body_title2"/>

                        </p>
                        <p class="extra-body-details">
                            {/* ${extra_body_details2} */}
                            <textarea   className="form-control" placeholder="extra body details" 
                              onChange={this.handleChange}
                              name="extra_body_details2"/>
                            
                            
                        </p>
                        <p class="extra-body-duration">
                            {/* <em>${extra_body_duration2}</em> */}
                            <input type="text"  className="form-control" placeholder="extra body duration" 
                              onChange={this.handleChange}
                              name="extra_body_duration2"/>
                        </p>
                    </div>
                </div>
    
                <div id="projects">
                    <h2>Projects</h2>
                    <div id="project-row">
                        <p class="project-title">
                            {/* <strong>${project_title}</strong> */}
                            <input type="text"  className="form-control" placeholder="project title" 
                              onChange={this.handleChange}
                              name="project_title"/>

                        </p>
                        <p class="project-link">
                            {/* <a href="#">${project_link}</a> */}
                            <input type="url"  className="form-control" placeholder="project link" 
                              onChange={this.handleChange}
                              name="project_link"/>
                        </p>
                        <p class="project-summary">
                            {/* ${project_summary} */}
                            <textarea  className="form-control" placeholder="project summary" 
                              onChange={this.handleChange}
                              name="project_summary"/>
                        </p>
                        <p class="project-duration">
                            {/* <em>${project_duration}</em> */}
                            <input type="text"  className="form-control" placeholder="project duration" 
                              onChange={this.handleChange}
                              name="project_duration"/>
                        </p>
                    </div>
                    <hr className="my-4" />
                    <div id="project-row">
                        <p class="project-title">
                            {/* <strong>${project_title2}</strong> */}
                            <input type="text"  className="form-control" placeholder="project title" 
                              onChange={this.handleChange}
                              name="project_title2"/>
                        </p>
                        <p class="project-link">
                            {/* <a href="#">${project_link2}</a> */}
                            <input type="text"  className="form-control" placeholder="project link" 
                              onChange={this.handleChange}
                              name="project_link2"/>
                            
                        </p>
                        <p class="project-summary">
                            {/* ${project_summary2} */}
                            <textarea  className="form-control" placeholder="project summary" 
                              onChange={this.handleChange}
                              name="project_summary2"/>
                        </p>
                        <p class="project-duration">
                            {/* <em>${project_duration2}</em> */}
                            <input type="text"  className="form-control" placeholder="project duration" 
                              onChange={this.handleChange}
                              name="project_duration2"/>
                            
                        </p>
                    </div>
                </div>
    
                <div id="reference">
                    <h2>Referees</h2>
                    <div class="ref-info">
                        <p class="ref-name">
                            {/* <strong>${ref_name}</strong> */}
                            <input type="text"  className="form-control" placeholder="ref name" 
                              onChange={this.handleChange}
                              name="ref_name"/>
                        </p>
                        {/* <p class="ref-phone">${ref_phone}</p> */}
                        <input type="tel" className="form-control" placeholder="ref phone" 
                              onChange={this.handleChange}
                              name="ref_phone"/>
                        <p class="ref-email">
                            {/* <em>${ref_email}</em> */}
                            <input type="email"  className="form-control" placeholder="ref email" 
                              onChange={this.handleChange}
                              name="ref_email"/>
                        </p>
                    </div>
                    <hr className="my-4"/>
                    <div class="ref-info">
                        <p class="ref-name">
                            {/* <strong>${ref_name2}</strong> */}
                            <input type="text"  className="form-control" placeholder="ref name" 
                              onChange={this.handleChange}
                              name="ref_name2"/>

                        </p>
                        {/* <p class="ref-phone">${ref_phone2}</p> */}
                        <input type="tel" className="form-control" placeholder="ref phone" 
                              onChange={this.handleChange}
                              name="ref_phone2"/>
                        <p class="ref-email">
                            {/* <em>${ref_email2}</em> */}
                            <input type="email" className="form-control" placeholder="ref email" 
                              onChange={this.handleChange}
                              name="ref_email2"/>
                            
                        </p>
                    </div>
                </div>
            </section>
    
            <section id="side-bar">
                <div id="detail-sect">
                    <h4>Details</h4>
                    <div id="user-addresses">
                        <h4>Addresses</h4>
                        {/* <p class="address">${address}</p> */}
                        <input type="text" className="form-control" placeholder="address" 
                              onChange={this.handleChange}
                              name="address"/>
                        {/* <p class="address">${address2}</p> */}
                    </div>
                    <div id="user-emails">
                        <h4>Emails</h4>
                        
                        {/* <p class="email">${email}</p> */}
                        <input type="email" className="form-control" placeholder="email" 
                              onChange={this.handleChange}
                              name="email"/>
                        {/* <p class="email">${email2}</p> */}
                        <input type="email" className="form-control" placeholder="email2" 
                              onChange={this.handleChange}
                              name="email2"/>
                    </div>
                    <div id="user-phones">
                        <h4>Phones</h4>
                        {/* <p class="phone">${phone}</p> */}
                        <input type="tel" className="form-control" placeholder="phone" 
                              onChange={this.handleChange}
                              name="phone"/>
                        {/* <p class="phone">${phone2}</p> */}
                        <input type="tel" className="form-control" placeholder="phone 2" 
                              onChange={this.handleChange}
                              name="phone2"/>
                    </div>
                    <div id="user-nationalities">
                        <h4>Nationality</h4>
                        {/* <p class="nationality">${nationality}</p> */}
                        <input type="text" className="form-control" placeholder="nationality" 
                              onChange={this.handleChange}
                              name="nationality"/>
                              <hr/>
                        {/* <p class="nationality">${nationality2}</p> */}
                        <input type="text" className="form-control" placeholder="nationality2" 
                              onChange={this.handleChange}
                              name="nationality2"/>
                              <hr/>
                        {/* <p class="nationality">${nationality3}</p> */}
                        <input type="text" className="form-control" placeholder="nationality3" 
                              onChange={this.handleChange}
                              name="nationality3"/>
                    </div>
                    <div id="user-dob">
                        <h4>DOB</h4>
                        {/* <p id="dob">1<sup>st</sup> ${dob}</p> */}
                        <input type="date" className="form-control" placeholder="dob" 
                              onChange={this.handleChange}
                              name="dob"/>
                    </div>
    
    
                    <h2>Skills</h2>
                    <div id="user-skills">
                        <div class="user-skill" >
                          {/* <p class="skill-name" >${skill}</p> */}
                          <input type="text" className="form-control" placeholder="skill" 
                            onChange={this.handleChange}
                            name="skill"/>
                            <hr/>
                          <input type="text" className="form-control" placeholder="skill 2" 
                          onChange={this.handleChange}
                          name="skill2"/>
                          <hr/>
                          <input type="text" className="form-control" placeholder="skill 3" 
                          onChange={this.handleChange}
                          name="skill3"/>
                          <hr/>
                          <input type="text" className="form-control" placeholder="skill 4" 
                          onChange={this.handleChange}
                          name="skill4"/>
                          <hr/>
                          <input type="text" className="form-control" placeholder="skill 5" 
                          onChange={this.handleChange}
                          name="skill5"/>
                          <hr/>
                          <input type="text" className="form-control" placeholder="skill 6" 
                            onChange={this.handleChange}
                            name="skill6"/> 
                        </div>

                    </div>
    
    
                    <h2>Links</h2>
                    <p class="user-links">
                        <p>Twitter</p>
                        <input type="url" className="form-control" placeholder="Twitter Link" 
                            onChange={this.handleChange}
                            name="twitter"/> 
                    </p>
                    <p class="user-links">
                        <p >Github</p>
                        <input type="url" className="form-control" placeholder="Github Link" 
                            onChange={this.handleChange}
                            name="github"/> 
                    </p>
                    <p class="user-links">
                        <p >Linkedin</p>
                        <input type="url" className="form-control" placeholder="Linkedin Link" 
                            onChange={this.handleChange}
                            name="linkedin"/> 
                    </p>
                    <p class="user-links">
                        <p>Codersrank</p>
                        <input type="url" className="form-control" placeholder="Codersrank Link" 
                            onChange={this.handleChange}
                            name="codersrank"/> 
                    </p>
                    <p class="user-links">
                      <p>Facebook</p>
                      <input type="url" className="form-control" placeholder="Facebook Link" 
                          onChange={this.handleChange}
                          name="facebook"/> 
                    </p>
    
    
    
                    <h2>Hobbies</h2>
                    <p id="user-hobbies">
                        {/* ${hobbies} */}
                        <textarea className="form-control" placeholder="Hoobies" 
                          onChange={this.handleChange}
                          name="hobbies"/> 
                    </p>
                    <button className="btn mt-3 btn-outline-primary" onClick={this.createAndDownloadPDF}>Download PDF</button>
                </div>
            </section>
           
        </main>

    </div>
  );
  }
}

export default App;
