module.exports = ({ name, profile_info, Educational_level,
    edu_extra_info,edu_duration,extra_body_title, extra_body_details,extra_body_duration,
    extra_body_title2,extra_body_details2,extra_body_duration2,
    project_title, project_summary, project_link,project_duration, project_title2,
    project_summary2, project_link2, project_duration2, ref_email, ref_email2, ref_name,
    ref_name2, ref_phone, ref_phone2, address, address2, email, email2, phone,phone2,nationality,
    nationality2, nationality3, dob, skill,skill2, skill3,skill4,skill5,skill6,
    twitter,linkedin,facebook,codersrank,github, hobbies }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Curriculum Vitae</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        
        
        <main id="doc">
            <section id="main">
                <div id="header-row">
                    <img width="150" height="150" 
                     src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2Ferdjqzlmlv111.png&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2Flinuxmemes%2Fcomments%2F8ocxfc%2Fnew_github_octocat%2F&tbnid=r1ZmAAfzlyRYgM&vet=12ahUKEwjpud2-zfLtAhUJQRoKHa6eBXsQMygMegUIARDmAQ..i&docid=Kn2dmHPa9fgwxM&w=800&h=665&q=octocat%20images&ved=2ahUKEwjpud2-zfLtAhUJQRoKHa6eBXsQMygMegUIARDmAQ"
                     alt="image">
                    <h1>${name}</h1>
                </div>
    
                <div id="profile-row">
                    <h2>Profile</h2>
                    <p id="profile-info">
                        ${profile_info}
                    </p>
                </div>
    
                <div id="education-row">
                    <h2>Education</h2>
                    <p id="degree-info">
                        <strong>${Educational_level}</strong>
                    </p>
    
                    <p id="edu-extra-info">
                        ${edu_extra_info}
                    </p>
    
                    <p id="edu-duration-info">
                        <em>${edu_duration}</em>
                    </p>
    
                </div>
    
                <div id="extracurricular-acts">
                    <h2>Extra-curricular Activities</h2>
                    <div class="extra-body">
                        <p class="extra-body-title">
                            <strong>${extra_body_title}</strong>
                        </p>
                        <p class="extra-body-details">
                            ${extra_body_details}
                        </p>
                        <p class="extra-body-duration">
                            <em>${extra_body_duration}</em>
                        </p>
                    </div>

                    <hr>
    
                    <div class="extra-body">
                        <p class="extra-body-title">
                            <strong>${extra_body_title2}</strong>
                        </p>
                        <p class="extra-body-details">
                            ${extra_body_details2}
                        </p>
                        <p class="extra-body-duration">
                            <em>${extra_body_duration2}</em>
                        </p>
                    </div>
                </div>
    
                <div id="projects">
                    <h2>Projects</h2>
                    <div id="project-row">
                        <p class="project-title">
                            <strong>${project_title}</strong>
                        </p>
                        <p class="project-link">
                            <a href="#">${project_link}</a>
                        </p>
                        <p class="project-summary">
                            ${project_summary}
                        </p>
                        <p class="project-duration">
                            <em>${project_duration}</em>
                        </p>
                    </div>
                    <hr>
    
                    <div id="project-row">
                        <p class="project-title">
                            <strong>${project_title2}</strong>
                        </p>
                        <p class="project-link">
                            <a href="#">${project_link2}</a>
                        </p>
                        <p class="project-summary">
                            ${project_summary2}
                        </p>
                        <p class="project-duration">
                            <em>${project_duration2}</em>
                        </p>
                    </div>
                </div>
    
                <div id="reference">
                    <h2>Referees</h2>
                    <div class="ref-info">
                        <p class="ref-name">
                            <strong>${ref_name}</strong>
                        </p>
                        <p class="ref-phone">${ref_phone}</p>
                        <p class="ref-email">
                            <em>${ref_email}</em>
                        </p>
                    </div>
                    <hr>
                    <div class="ref-info">
                        <p class="ref-name">
                            <strong>${ref_name2}</strong>
                        </p>
                        <p class="ref-phone">${ref_phone2}</p>
                        <p class="ref-email">
                            <em>${ref_email2}</em>
                        </p>
                    </div>
                </div>
            </section>
    
            <section id="side-bar">
                <div id="detail-sect">
                    <h3>Details</h3>
                    <div id="user-addresses">
                        <h4>Addresses</h4>
                        <p class="address">${address}</p>
                        <p class="address">${address2}</p>
                    </div>
                    <div id="user-emails">
                        <h4>Emails</h4>
                        <p class="email">${email}</p>
                        <p class="email">${email2}</p>
                    </div>
                    <div id="user-phones">
                        <h4>Phones</h4>
                        <p class="phone">${phone}</p>
                        <p class="phone">${phone2}</p>
                    </div>
                    <div id="user-nationalities">
                        <h4>Nationality</h4>
                        <p class="nationality">${nationality}</p>
                        <p class="nationality">${nationality2}</p>
                        <p class="nationality">${nationality3}</p>
                    </div>
                    <div id="user-dob">
                        <h4>DOB</h4>
                        <p id="dob">1<sup>st</sup> ${dob}</p>
                    </div>
    
    
                    <h2>Skills</h2>
                    <div id="user-skills">
                        <div class="user-skill" style="text-transform: uppercase; ">
                            <p class="skill-name" >${skill}</p>
                            <p class="skill-name">${skill2}</p>
                            <p class="skill-name">${skill3}</p>
                            <p class="skill-name">${skill4}</p>
                            <p class="skill-name">${skill5}</p>
                            <p class="skill-name">${skill6}</p>
                        </div>

                    </div>
    
    
                    <h2>Links</h2>
                    <p class="user-links">
                        <a href="${twitter}">Twitter</a>
                    </p>
                    <p class="user-links">
                        <a href="${github}" target="_blank">Github</a>
                    </p>
                    <p class="user-links">
                        <a href="${linkedin}" target="_blank">Linkedin</a>
                    </p>
                    <p class="user-links">
                        <a href="${codersrank}">Codersrank</a>
                    </p>
                    <p class="user-links">
                        <a href="${facebook}">Facebook</a>
                    </p>
    
    
    
                    <h2>Hobbies</h2>
                    <p id="user-hobbies">
                        ${hobbies}
                    </p>
                </div>
            </section>
        </main>
    </body>
    </html>
    `;
};