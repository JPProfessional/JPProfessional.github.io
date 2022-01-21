//Create Footer Text
var footer = document.querySelector('footer');
var footerP = document.createElement('p');
footerP.textContent = 'Copyright © ' + new Date().getFullYear() + ' John Perrin P.Eng.';
footer.appendChild(footerP);


const resumeData = {
    // "meta": {
    //   "theme": "Elegant"
    // },
    "basics": {
      "name": "John Perrin",
      "label": "Excellence from the future, TODAY.",
      "image": "https://user-images.githubusercontent.com/93789056/150057011-5d0e512a-02dd-476c-b40a-7f98e489499c.JPG",
      "summary": "Adaptable, savvy and professional. I overcome challenges around the world through strategic judgement, clear communication, ensuring stakeholder engagement and perfect execution.",
      "email": "perrin.john@gmail.com",
      "location": {
        "address": "Bearspaw",
        "city": "Calgary",
        "countryCode": "Canada"
      },
      "profiles": [
        {
          "url": "https://www.linkedin.com/in/johnperrinpeng/",
          "username": "JohnPerrinPEng",
          "network": "LinkedIn"
        },
        {
          "url": "https://github.com/JPProfessional",
          "username": "JPProfessional",
          "network": "github"
        }
      ]
    },
    "education": [
      {
        "endDate": "1997-05-01",
        "startDate": "1993-09-01",
        "area": "Mechanical Engineering",
        "studyType": "Bachelors of Science (BSc)",
        "institution": "University of Alberta",
        "url": "www.ualberta.ca"
      },
      {
        "endDate": "1993-05-01",
        "startDate": "1991-09-01",
        "area": "Engineering",
        "studyType": "Certificate of Applied Science (CAS)",
        "institution": "Acadia University",
        "url": "www.acadiau.ca"
      }
    ],
    "references": [],
    "skills": [
      {
        "name": "Leadership",
        "keywords": ["Strategic Thinking", "Empower Team Members", "Effective Communication"]
      },
      {
        "name": "Business Devlopment",
        "keywords": ["Closing Profitable Deals", "Market Assessment", "Stakeholder Engagement"]
      },
       {
        "name": "Continuous Improvement",
        "keywords": ["Goalsetting", "Change Management", "Ongoing Assessment"]
      },
       {
        "name": "Engineering",
        "keywords": ["Industrial Automation", "Petroleum Reservoir Assessment", "Machine Design"]
      }
    ],
    "awards": [
      {
        "title": "Pathfinder Award",
        "awarder": "Scouts Canada and Governor General of Canada"
      },
      {
        "title": "Man of The Year",
        "awarder": "Canadian Progress Club - Calgary Downtown"
      }
    ],
    "work": [
        {
          "name": "Atomic Energy Canada Limited",
          "website": "www.aecl.ca",
          "position": "Reactor Services Engineer",
          "Summary": "After a successful internship at Chalk River National Laboratories I joined Reactor Services to research, build, inspect and repair CANDU Nuclear Fuel Channel Components.",
          "location": "Canada, Mississauga",
          "startDate": "1997-05-28",
          "endDate": "2000-07-09",},
        {"name": "Atomic Energy Canada Limited", "website": "www.aecl.ca", "position": "Supervisor, A-Side Fuel Channel Installation", "Summary": "", "location": "Romania, Cernavoda", "startDate": "1998-06-15", "endDate": "1998-08-30", "highlights": [ ]},
        {"name": "Atomic Energy Canada Limited", "website": "www.aecl.ca", "position": "Supervisor, Sub-Assembly and Components", "Summary": "", "location": "Romania, Cernavoda", "startDate": "1999-02-01", "endDate": "1999-07-31", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "Field Engineer Trainee", "Summary": "Joined Schlumberger as a Wireline Field Engineer Trainee and progressed through the ranks to General Field Engineer in Charge over 4 years in Saudi Arabia, Kuwait and United Arab Emirates. Subsequently transferred to Calgary in Wireline Sales and finally promoted to Canada Recruiter for one year.", "location": "USA, LA, Shreveport", "startDate": "2000-07-09", "endDate": "2000-10-15", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "Field Engineer", "Summary": "", "location": "Saudi Arabia, Al Khobar", "startDate": "2000-10-16", "endDate": "2002-01-01", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "Field Engineer", "Summary": "", "location": "Kuwait, Ahmadi", "startDate": "2002-01-01", "endDate": "2002-09-15", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "Senior Field Engineer", "Summary": "", "location": "United Arab Emirates, Abu Dhabi", "startDate": "2002-09-15", "endDate": "2003-02-01", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "Wireline Engineer in Charge for TOTAL Abu Al Bukhoosh", "Summary": "", "location": "United Arab Emirates, Abu Dhabi", "startDate": "2003-02-01", "endDate": "2004-10-01", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "General Field Engineer", "Summary": "", "location": "United Arab Emirates, Abu Dhabi", "startDate": "2003-12-01", "endDate": "2004-10-01", "highlights": [ ]},{"name": "Schlumberger", "website": "www.slb.com", "position": "Technical Sales Engineer – Wireline", "Summary": "", "location": "Canada, Calgary", "startDate": "2004-10-01", "endDate": "2006-04-01"},
        {"name": "Schlumberger", "website": "www.slb.com", "position": "OFS Field Engineer Recruiter", "Summary": "", "location": "Canada, Calgary", "startDate": "2006-04-01", "endDate": "2006-12-12", "highlights": []},
        {"name": "ConocoPhillips", "website": "www.conocophillips.com", "position": "Petrophysicist", "Summary": "Recruited by former clients in the Technical Excellence department to perform regional petrophysical studies as part of a multidisciplinary team.", "location": "Canada, Calgary", "startDate": "2007-05-01", "endDate": "2008-04-20", "highlights": []},
        {"name": "Tendeka", "website": "www.tendeka.com", "position": "Vice President North and South America for Sensornet", "Summary": "Recruited as Vice President North and South America for Sensornet Limited then promoted to Strategic Relationships Manager and Regional Manager Canada after Tendeka consolidation within Kenda Capital aka Shell Technology Ventures Fund group of companies.", "location": "Canada, Calgary", "startDate": "2008-05-01", "endDate": "2009-09-01", "highlights": []},
        {"name": "Tendeka", "website": "www.tendeka.com", "position": "Regional Manager Canada and Strategic Relationship Manager", "Summary": "", "location": "Canada, Calgary", "startDate": "2009-09-01", "endDate": "2010-12-13", "highlights": []},
        {"name": "Calmena (now defunct)", "website": "", "position": "Business Development Manager", "Summary": "Joined a hungry oil field services start up and grew our share of the Microseismic Fracture Monitoring and Horizontal Completion Technology market in Canada.", "location": "Canada, Calgary", "startDate": "2010-12-13", "endDate": "2012-12-18", "highlights": []},
        {"name": "Enerplus Corporation", "website": "www.enerplus.com", "position": "Staff Petrophysical Engineer", "Summary": "Recruited by the Chief Geoscientist to expand the rigorous use of Petrophysics across Enerplus. Established a foundation of Petrophysical knowledge throughout the organization by performing advanced analysis and delivering formal and informal training to geoscientists, engineers and managers.", "location": "Canada, Calgary", "startDate": "2012-12-18", "endDate": "2015-06-02", "highlights": []},
        {"name": "NXT Energy Solutions", "website": "www.nxtenergy.com", "position": "Business Devlopment Manager", "Summary": "", "location": "Canada, Calgary", "startDate": "2016-12-01", "endDate": "2017-02-22", "highlights": []},
        {"name": "Weatherford (now Stratum Reservoir)", "website": "www.stratumreservoir.com", "position": "Product Line Manager - Reservoir Services (Laboratories and Sub-Surface Consulting)", "Summary": "Recruited to lead a technically strong but unprofitable Geoscience, Fluid PVT (Pressure Volume Temperature) and SCAL (Special Core Analysis) laboratory. Implemented a cultural change and renewed focus on oilfield service fundamentals.", "location": "Canada, Calgary", "startDate": "2017-04-01", "endDate": "2018-06-21", "highlights": []},
        {"name": "DIKUW Incorporated", "website": "www.dikuw.ca", "position": "Founder", "Summary": "DIKUW specializes in enabling YOUR TEAM to overcome barriers to success. DIKUW collaborates with a focus on fundamental principles to assess, suggest and implement the optimal solution — all to provide exceptional advice that will transform your business and provide value for years to come.", "location": "Canada, Calgary", "startDate": "2019-03-01", "endDate": "2022-01-19", "highlights": [ ]},
        {"name": "DIKUW Incorporated", "website": "www.ceda.com", "position": "Consulting Engagement to CEDA, Technical Center of Excellence", "Summary": "Coached CEDA’s newly founded “Technical Center of Exellence” using DIKUW’s proprietary  “Comprehensive Framework for Field Operations Project Management” and general knowledge of how to deploy technical resources for successful commercial outcomes.’", "location": "Canada, Calgary", "startDate": "2019-03-01", "endDate": "2019-09-15", "highlights": [ ]},
        {"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Team Lead, Customer Solutions Engineering, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "", "location": "Canada, Calgary", "startDate": "2019-05-01", "endDate": "2019-08-01", "highlights": [ ]},
        {"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Manager, Automation Engineering, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "", "location": "Canada, Calgary", "startDate": "2019-08-01", "endDate": "2020-02-01", "highlights": [ ]},
        {"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Director, Automation Engineering, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "Achieved an across the board KPI improvement of Automation Engineering Sales, Implementation and and Support", "location": "Canada, Calgary", "startDate": "2020-02-01", "endDate": "2020-10-01", "highlights": []},
        {"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Director, International Business Development, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "Induce Digital Transformation journeys in potential customers employing our SaaS product in diverse industries including Hydrogen Systems, Renewable Energy, Bulk Product Distribution and Oil & Gas.", "location": "Canada, Calgary", "startDate": "2020-10-01", "endDate": "2021-09-30", "highlights": []}
    ],
    "interests": [
      {
        "name": "Golf"
      },
      {
        "name": "Sailing"
      },
      {
        "name": "Comedy"
      },
      {
        "name": "Volunteering"
      }
    ]
    // "work": [
    //   {"name": "Atomic Energy Canada Limited", "website": "www.aecl.ca", "position": "Reactor Services Engineer", "Summary": "After a successful internship at Chalk River National Laboratories I joined Reactor Services to research, build, inspect and repair CANDU Nuclear Fuel Channel Components.", "location": "Canada, Mississauga", "startDate": "1997-05-28", "endDate": "2000-07-09},\n{"name": "Atomic Energy Canada Limited", "website": "www.aecl.ca", "position": "Supervisor, A-Side Fuel Channel Installation", "Summary": "", "location": "Romania, Cernavoda", "startDate": "1998-06-15", "endDate": "1998-08-30},\n{"name": "Atomic Energy Canada Limited", "website": "www.aecl.ca", "position": "Supervisor, Sub-Assembly and Components", "Summary": "", "location": "Romania, Cernavoda", "startDate": "1999-02-01", "endDate": "1999-07-31},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "Field Engineer Trainee", "Summary": "Joined Schlumberger as a Wireline Field Engineer Trainee and progressed through the ranks to General Field Engineer in Charge over 4 years in Saudi Arabia, Kuwait and United Arab Emirates. Subsequently transferred to Calgary in Wireline Sales and finally promoted to Canada Recruiter for one year.", "location": "USA, LA, Shreveport", "startDate": "2000-07-09", "endDate": "2000-10-15},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "Field Engineer", "Summary": "", "location": "Saudi Arabia, Al Khobar", "startDate": "2000-10-16", "endDate": "2002-01-01},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "Field Engineer", "Summary": "", "location": "Kuwait, Ahmadi", "startDate": "2002-01-01", "endDate": "2002-09-15},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "Senior Field Engineer", "Summary": "", "location": "United Arab Emirates, Abu Dhabi", "startDate": "2002-09-15", "endDate": "2003-02-01},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "Wireline Engineer in Charge for TOTAL Abu Al Bukhoosh", "Summary": "", "location": "United Arab Emirates, Abu Dhabi", "startDate": "2003-02-01", "endDate": "2004-10-01},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "General Field Engineer", "Summary": "", "location": "United Arab Emirates, Abu Dhabi", "startDate": "2003-12-01", "endDate": "2004-10-01},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "Technical Sales Engineer – Wireline", "Summary": "", "location": "Canada, Calgary", "startDate": "2004-10-01", "endDate": "2006-04-01},\n{"name": "Schlumberger", "website": "www.slb.com", "position": "OFS Field Engineer Recruiter", "Summary": "", "location": "Canada, Calgary", "startDate": "2006-04-01", "endDate": "2006-12-12},\n{"name": "ConocoPhillips", "website": "www.conocophillips.com", "position": "Petrophysicist", "Summary": "Recruited by former clients in the Technical Excellence department to perform regional petrophysical studies as part of a multidisciplinary team.", "location": "Canada, Calgary", "startDate": "2007-05-01", "endDate": "2008-04-20},\n{"name": "Sensornet (now Tendeka)", "website": "www.tendeka.com", "position": "Vice President North and South America", "Summary": "Recruited as Vice President North and South America for Sensornet Limited then promoted to Strategic Relationships Manager and Regional Manager Canada after Tendeka consolidation within Kenda Capital aka Shell Technology Ventures Fund group of companies.", "location": "Canada, Calgary", "startDate": "2008-05-01", "endDate": "2009-09-01},\n{"name": "Tendeka", "website": "www.tendeka.com", "position": "Regional Manager Canada and Strategic Relationship Manager", "Summary": "", "location": "Canada, Calgary", "startDate": "2009-09-01", "endDate": "2010-12-13},\n{"name": "Calmena (now defunct)", "website": "", "position": "Business Development Manager", "Summary": "Joined a hungry oil field services start up and grew our share of the Microseismic Fracture Monitoring and Horizontal Completion Technology market in Canada.", "location": "Canada, Calgary", "startDate": "2010-12-13", "endDate": "2012-12-18},\n{"name": "Enerplus Corporation", "website": "www.enerplus.com", "position": "Staff Petrophysical Engineer", "Summary": "Recruited by the Chief Geoscientist to expand the rigorous use of Petrophysics across Enerplus. Established a foundation of Petrophysical knowledge throughout the organization by performing advanced analysis and delivering formal and informal training to geoscientists, engineers and managers.", "location": "Canada, Calgary", "startDate": "2012-12-18", "endDate": "2015-06-02},\n{"name": "NXT Energy Solutions", "website": "www.nxtenergy.com", "position": "Business Devlopment Manager", "Summary": "", "location": "Canada, Calgary", "startDate": "2016-12-01", "endDate": "2017-02-22},\n{"name": "Weatherford (now Stratum Reservoir)", "website": "www.stratumreservoir.com", "position": "Product Line Manager - Reservoir Services (Laboratories and Sub-Surface Consulting)", "Summary": "Recruited to lead a technically strong but unprofitable Geoscience, Fluid PVT (Pressure Volume Temperature) and SCAL (Special Core Analysis) laboratory. Implemented a cultural change and renewed focus on oilfield service fundamentals.", "location": "Canada, Calgary", "startDate": "2017-04-01", "endDate": "2018-06-21},\n{"name": "DIKUW Incorporated", "website": "www.dikuw.ca", "position": "Founder", "Summary": "DIKUW specializes in enabling YOUR TEAM to overcome barriers to success. DIKUW collaborates with a focus on fundamental principles to assess, suggest and implement the optimal solution — all to provide exceptional advice that will transform your business and provide value for years to come.", "location": "Canada, Calgary", "startDate": "2019-03-01", "endDate": "2022-01-20},\n{"name": "DIKUW Incorporated", "website": "www.ceda.com", "position": "Consulting Engagement to CEDA, Technical Center of Excellence", "Summary": "Coached CEDA’s newly founded “Technical Center of Exellence” using DIKUW’s proprietary  “Comprehensive Framework for Field Operations Project Management” and general knowledge of how to deploy technical resources for successful commercial outcomes.’", "location": "Canada, Calgary", "startDate": "2019-03-01", "endDate": "2019-09-15},\n{"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Team Lead, Customer Solutions Engineering, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "", "location": "Canada, Calgary", "startDate": "2019-05-01", "endDate": "2019-08-01},\n{"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Manager, Automation Engineering, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "", "location": "Canada, Calgary", "startDate": "2019-08-01", "endDate": "2020-02-01},\n{"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Director, Automation Engineering, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "Achieved an across the board KPI improvement of Automation Engineering Sales, Implementation and and Support", "location": "Canada, Calgary", "startDate": "2020-02-01", "endDate": "2020-10-01},\n{"name": "Emerson Automation Solutions", "website": "www.zedisolutions.com", "position": "Director, International Business Development, Zedi Cloud SCADA (IoT SaaS Platform)", "Summary": "Induce Digital Transformation journeys in potential customers employing our SaaS product in diverse industries including Hydrogen Systems, Renewable Energy, Bulk Product Distribution and Oil & Gas.", "location": "Canada, Calgary", "startDate": "2020-10-01", "endDate": "2021-09-30}
    // ],
}


//Parse resume object with stringify to overcome common error LMGTFY 
const work = JSON.stringify(resumeData.work);
const workParsed = JSON.parse(work);
//Add numeric date field to our objects
workParsed.forEach(job => job.startDateNumber = Date.parse(job.startDate));
workParsed.forEach(job => job.endDateNumber = Date.parse(job.endDate));

// Create an object of unique companies worked and populate with summary data
const workSummaryList = [...new Set(workParsed.map( item => item.name))];
var workSummary = [];
// const total = Object.values(add).reduce((t, {value}) => t + value, 0)
var startDateSort
workSummaryList.forEach( (company, index) => {
  const regex = RegExp(company);
  const nameSet = workParsed.filter(({name}) => name.match(regex));
  //Create company Meta Data if company has 1 entry
  if ( !nameSet[1] ) {
    var record = {
      "name": workParsed.filter(({name}) => name.match(regex)).name,
      "startDate": workParsed.filter(({name}) => name.match(regex)).StartDate,
      "endDate": workParsed.filter(({name}) => name.match(regex)).endDate,
      "website":workParsed.filter(({name}) => name.match(regex)).website
    }
  // Create company Meta Data and summarize start and end if more than 1 entry
  } else {
    const nameStartDate = nameSet.map(a => a.startDate).reduce(function(min, cur) {
      return cur < min ? cur : min;
    },"210000");
    const nameEndDate = nameSet.map(a => a.endDate).reduce(function(max, cur) {
      return cur > max ? cur : max;
    },"0");
    var record = {
      "name": company,
      "startDate":nameStartDate,
      "endDate":nameEndDate,
      "website":nameSet[0].website
    }
  }
  
  console.log({record});
  if (index == 0) {
    // workSummary[index] = Object.create(record);
    workSummary[index] = record;
  } else {
    workSummary[index] = record;
  };
  

  // regex = new RegExp(company)
  // const subSet = workParsed.filter(({name}) => name.match(regex));
  //  // 5. Sort the inventors by years lived
  // // const 
  // startDateSort = subSet.sort(function(a, b) {
  //   const lastStart = a.startDateNumber;
  //   const nextStart = b.startDateNumber;
  //   return lastStart > nextStart ? -1 : 1;
  // });
  // console.log({startDateSort});


  // var startDateNumberArray = [];
  // subSet.forEach( item => startDateNumberArray.push(item.startDateNumber));
  // var companyStartDate = 
  // console.log(startDateNumberArray);
  // const company startDateNumber
  // const endDateArray = [...new Set(workParsed.map( function (item) {
  //   if (item.name == company) {
  //     return item.endDateNumber;
  //   }
  // }))];
  // console.log(...subSet.startDateNumber);
  // workSummary.push(["name": company]) ,
  // workSummary[workIndex] = [company, Math.min(...startDateArray), Math.max(...endDateArray)],
  // [workIndex]["name"] = company;
  // workSummary[workIndex]["startDateNumber"] = Math.min(startDateArray);
  // workSummary[workIndex]["endDateNumber"] = Math.max(endDateArray);
  // console.log({workSummary});

});
console.Table({workSummary});

// workParsed.forEach(function (job,index) {
//   delete job.summary;
//   delete job.highlights;
//   delete job.position;
//   var SubSet = workWorking.filter(company => {
//     const regex = new RegExp(job.name);
//     console.log({regex});
//     // return workWorking.name.match(regex)
//   })
//   // for ( i = index; i < index ; i++ ) {
//   //     var const endDateMin = 
//   // };
//   // console.log(Math.min(work.filter(job.name)));
// });

//Create an array of work history entries
// var work = [];
// work = resumeData.work;
// var workKeys = Object.keys(work);
// workKeys.forEach(key => {
//   if (key != 'name') {
//     console.log({key});
//     delete work[key]
//   } 
// });

// workKeys.forEach(key => {
//   console.log({key});
//   if (work.hasOwnProperty(key)) {
//     if (work[key] === null) {
//       delete work[key];
//     }
//   }
// }

//Create Set of Unique company names
// var companies = [];
// work.forEach(element => companies['name'].push(element.name));

// var companiesSummary = [...new Map(companies.map(item => [item['name'], item])).values();

// work.forEach( function (record) {
//   console.log({record});
//   if (!uniqueCompanies.name.(/A/)) {
//     uniqueCompanies.name.push(record);
//     console.log(uniqueCompanies);
//   };
//   return uniqueCompanies.add(record.name) ;
//   } );

// companies = Object.fromEntries(work.name);
// console.log({uniqueCompanies});

//Parse work history entries as dates
// work.forEach(record => {
//   record.startDateNumber = Date.parse(record.startDate);
//   record.endDateNumber = Date.parse(record.endDate)
//   }
// );


// summarizeWorkByName(work);

// function summarizeWorkByName(work) {
//   for (i = 0; i < uniqueCompanies.length-1; i++) {
//     // const fifteenShort = inventors.filter(inventor => (inventor.year >= 1500 & inventor.year <= 1599));
//     var companySubset = work.filter(workRecord => workRecord.name === companies[i].name);
//     console.log({companySubset})
   
//     var start = [];
//     start = Object.entries(companySubset.startDateNumber);
//     uniqueCompanies[i].Start = Math.min(...start);
//     uniqueCompanies[i].StartYear = uniqueCompanies[i].Start.getFullYear;
//     uniqueCompanies[i].StartMonth = uniqueCompanies[i].Start.getMonth;
//     // console.log(companyStartMonth);
//     var end = companySubset.endDateNumber;
//     uniqueCompanies[i].End = Math.max(...end);
//     uniqueCompanies[i].EndYear = uniqueCompanies[i].getFullYear;
//     uniqueCompanies[i].EndMonth = uniqueCompanies[i].End.getMonth;
//     // var companyDuration = (companyEnd - companyStart)
//   }
// }

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function workSummaryWrite( array ) {
  if (array.length == 1) {

  };
  if (index == 0) {
    // workSummary[index] = Object.create(record);
    workSummary[index] = record;
  } else {
    workSummary[index] = record;
  };
}

function objectSort(array, property) {
  array.sort(function(a, b) {
    const lastStart = a.property;
    const nextStart = b.property;
    return lastStart > nextStart ? -1 : 1;
  });
}