var resume = {
    'Personal Details':[
    {
        "Name": "Sandhya Chandrasekaran",
        'Phone Number':9080615224,
        'Email':'sandychan9@gmail.com',
        'Address':{
            'Street':'96 Olvia Street,',
            'Area':'Alwarpet',
            'City':'Chennai',
            'Post Code':600018
        },
        'Languages Known':'English, Tamil, French, Hindi'
    },],
    'Work Experience':{
        'Company':'Indian Beauty House',
        'Position':'Receptionist',
        'Period':'March 2018 to March 2019',
        'Description':'Welcomed customers, generated reports, resolved or escalated issues, Tracked important information in Excel.'

    },
    'Education':{
        'Name':'Dr MGR University ',
        'Place':'Chennai',
        'Degree':'BSc Computer Science',
        'Batch':'2024'
    },
    'Highschool': 
      { 
        'Name': 'Pendle Hill High School',
        'Place': 'Sydney',
        'Batch': 2018 
    },

    'Skills':{
        'Soft Skills': 'Fluent Communication, Creativity, Teamwork, Organisational Skills',
        'Technical Skills':'Javascript, HTML'
    },
}
for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(`${key}:`, resume[key]);
    }
}


console.log(resume)


//FOR LOOP ITERATION
for (let key in resume){
    console.log(resume)
}

//FOR OF LOOP ITERATION
for (let [key, value] of Object.entries(resume)) {
    console.log(`${key}:`, value);
}

//FOR EACH LOOP ITERATION
Object.entries(resume).forEach(
    function([key, value]) {
    console.log(`${key}:`, value)
})

//FOR IN LOOP ITERATION
for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(`${key}:`, resume[key])
    }
}