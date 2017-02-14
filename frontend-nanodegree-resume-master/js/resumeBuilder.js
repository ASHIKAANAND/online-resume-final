  var bio = {
      "name": "Ashika Anand",
      "role": "web developer",
      "contacts": {
          "mobile": "342 678 &#9742;",
          "email": "ashikaanand7@yahoo.com &#9733;",
          "github": "AshikaAnand &#9762;",
          "location": "Thrissur &#9873;",
          "twitter": "ashika@3 &#128516;"
      },
      "biopic": "images/fry.jpg",
      "welcomeMessage": "here's my resume!&#128526;",
      "skills": ["testing", "coding", "developer"]
  };

  var work = {
      "jobs": [{
          "employer": "Infosys",
          "title": "system Engineer",
          "dates": "Dates not assigned",
          "location": "Mysore",
          "description": "fresher to the field."
      }]
  };


  var projects = {
      "projects": [{
          "title": "online-resume",
          "dates": "12 december",
          "description": "Based on javascript.Introduces students to the basics of java script",
          "images": ["images/Project.jpg"]
      }, {
          "title": "mock-up article",
          "dates": "11th nov",
          "description": "introduction to css.Gives a wide description of the css class",
          "images": ["images/Project.jpg"]
      }]

  };


  var education = {
      "schools": [{
          "schoolname": "kendriya vidyalaya",
          "location": "thrissur",
          "degree": "12th standard",
          "majors": ["12th"],
          "dates": "may-12-2012",
          "url": "www.kvthrissur.com"

      }, {
          "schoolname": "scms",
          "location": "ernakulamr",
          "degree": "btech",
          "majors": ["electronics and communication"],
          "dates": "may/12/2012",
          "url": "www.scms.com"

      }],


      "onlineCourses": [{
          "title": "udacity front-end nanodegree",
          "school": "udacity",
          "dates": " 0ct1-2017",
          "url": "www.udacityfront-end.com"
      }, {
          "title": "udacity responsive-images",
          "school": "udacity",
          "dates": "nov12,2017",
          "url": "www.udacityresponsive"
      }]
  };
  bio.display = function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

      $("#header").append(formattedName);
      $("#header").append(formattedRole);
      $("#header").append(formattedPic);
      $("#header").append(formattedWelcome);
      $("#header").append(formattedMobile);
      $("#header").append(formattedEmail);
      $("#header").append(formattedGithub);
      $("#header").append(formattedTwitter);
      $("#header").append(formattedLocation);


      $("#footerContacts").append(formattedMobile);
      $("#footerContacts").append(formattedEmail);
      $("#footerContacts").append(formattedGithub);
      $("#footerContacts").append(formattedTwitter);
      $("#footerContacts").append(formattedLocation);


      function displayskills() {
          $("#header").append(HTMLskillsStart);
          for (var skill = 0; skill < bio.skills.length; skill++) {


              var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
              $("#skills").append(formattedSkill);
          }
      }
      displayskills();
  };
  bio.display();




  projects.display = function() {
      for (var project = 0; project < projects.projects.length; project++) {
          $("#projects").append(HTMLprojectStart);
          var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
          $(".project-entry:last").append(formattedTitle);
          var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
          $(".project-entry:last").append(formattedDates);
          var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
          $(".project-entry:last").append(formattedDescription);
          if (projects.projects[project].images.length > 0) {
              for (image = 0; image < projects.projects[project].images.length; image++) {
                  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                  $(".project-entry:last").append(formattedImage);
              }
          }
      }

  };
  projects.display();
  // $("#main").append(projects.display);

  education.display = function() {
      for (var school = 0; school < education.schools.length; school++) {
          $("#education").append(HTMLschoolStart);
          var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].schoolname);
          $(".education-entry:last").append(formattedschoolname);
          var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
          $(".education-entry:last").append(formattedschoollocation);
          var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
          $(".education-entry:last").append(formattedschooldegree);
          if (education.schools[school].majors.length > 0) {
              for (i = 0; i < education.schools[school].majors.length; i++) {
                  var formattedmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
                  $(".education-entry:last").append(formattedmajors);
              }
          }
          var formatteddates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
          $(".education-entry:last").append(formatteddates);
          var formattedurl = HTMLschoolURL.replace("%data%", education.schools[school].url);
          $(".education-entry:last").append(formattedurl);
      }
      $(".education-entry:last").append(HTMLonlineClasses);
      for (var course = 0; course < education.onlineCourses.length; course++) {
          var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
          $(".education-entry:last").append(formattedonlineTitle);
          var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
          $(".education-entry:last").append(formattedonlineSchool);
          var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
          $(".education-entry:last").append(formattedonlineDates);
          var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
          $(".education-entry:last").append(formattedonlineURL);
      }



  };
  education.display();




  work.display = function() {
      for (var job = 0; job < work.jobs.length; job++) {
          $("#workExperience").append(HTMLworkStart);
          var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
          $(".work-entry:last").append(formattedEmployer);
          var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
          $(".work-entry:last").append(formattedTitle);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;
          $(".work-entry:last").append(formattedEmployerTitle);
          var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
          $(".work-entry:last").append(formattedDates);
          var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
          $(".work-entry:last").append(formattedLocation);
          var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
          $(".work-entry:last").append(formattedDescription);
      }
  };
  $("#main").append(work.display);

  function inName(name) {
      name = name.trim().split(" ");
      console.log(name);
      name[1] = name[1].toUpperCase();
      name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
      return name[0] + " " + name[1];
  }
  $("#main").append(internationalizeButton);
  $("#mapDiv").append(googleMap);