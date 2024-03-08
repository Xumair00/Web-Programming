document.addEventListener('DOMContentLoaded', function () {
    var data = [];
    var addButton = document.createElement('button');
    addButton.textContent = 'Submit Application';
    addButton.style.margin  = "10px";
    addButton.addEventListener('click', function () {
        if(validateForm() && areRequiredFieldsFilled()){
            collectAndDisplayData();
            alert("Application has been submitted");
        }
        else{
            console.log("Incorrect Values entered");
            if(!areRequiredFieldsFilled()){
                alert("Please fill in all required fields.");
            }
        }
        
    });

    var toggleButton = document.createElement('button');
    toggleButton.textContent = 'View Applications as Table';
    toggleButton.style.margin  = "10px";
    toggleButton.addEventListener('click', function () {
        toggleTableVisibility();
    });

    document.body.appendChild(addButton);
    document.body.appendChild(toggleButton);

    function collectAndDisplayData() {
        var firstName= document.getElementById('firstName').value;
        var lastName= document.getElementById('lastName').value;
        var emailAddress= document.getElementById('emailAddress').value;
        var phoneNumber= document.getElementById('phoneNumber').value;
        var street= document.getElementById('street').value;
        var city= document.getElementById('city').value;
        var state= document.getElementById('state').value;
        var zipCode= document.getElementById('zipCode').value;
        var graduationYear= document.getElementById('graduationYear').value;
        var resume = document.getElementById('resume').value;
        var coverLetter = document.getElementById('coverLetter').value;
        var educationLevel = document.getElementById('educationLevel').value;
        var schoolName = document.getElementById('schoolName').value;
        var major = document.getElementById('major').value;
        var jobTitles = document.getElementById('jobTitles').value;
        var companyNames = document.getElementById('companyNames').value;
        var employmentDates = document.getElementById('employmentDates').value;
        var jobResponsibilities = document.getElementById('jobResponsibilities').value;
        var relevantSkills = document.getElementById('relevantSkills').value;
        var certifications = document.getElementById('certifications').value;
        var startDate = document.getElementById('startDate').value;
        var workSchedule = document.getElementById('workSchedule').value;
        var relocate = document.getElementById('relocate').value;
        var referenceName = document.getElementById('referenceName').value;
        var referenceContact = document.getElementById('referenceContact').value;
        var relationship = document.getElementById('relationship').value;
        var whyWorkHere = document.getElementById('whyWorkHere').value;

        var dataTable = document.getElementById('userDataTable');

        // If the table doesn't exist, create it
        if (!dataTable) {
            dataTable = createTable();
        }

        var newRow = dataTable.tBodies[0].insertRow(-1);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7= newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        var cell9 = newRow.insertCell(8);
        var cell10 = newRow.insertCell(9);
        var cell11= newRow.insertCell(10);
        var cell12 = newRow.insertCell(11);
        var cell13 = newRow.insertCell(12);
        var cell14 = newRow.insertCell(13);
        var cell15 = newRow.insertCell(14);
        var cell16 = newRow.insertCell(15);
        var cell17 = newRow.insertCell(16);
        var cell18 = newRow.insertCell(17);
        var cell19 = newRow.insertCell(18);
        var cell20 = newRow.insertCell(19);
        var cell21 = newRow.insertCell(20);
        var cell22 = newRow.insertCell(21);
        var cell23 = newRow.insertCell(22);
        var cell24 = newRow.insertCell(23);
        var cell25 = newRow.insertCell(24);
        var cell26 = newRow.insertCell(25);
        var cell27 = newRow.insertCell(26);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = emailAddress;
        cell4.innerHTML = phoneNumber;
        cell5.innerHTML = street;
        cell6.innerHTML = city;
        cell7.innerHTML = state;
        cell8.innerHTML = zipCode;
        cell9.innerHTML = graduationYear;
        cell10.innerHTML = employmentDates;
        cell11.innerHTML = resume;
        cell12.innerHTML = coverLetter;
        cell13.innerHTML = educationLevel;
        cell14.innerHTML = schoolName;
        cell15.innerHTML = major;
        cell16.innerHTML = jobTitles;
        cell17.innerHTML = companyNames;
        cell18.innerHTML = jobResponsibilities;
        cell19.innerHTML = relevantSkills;
        cell20.innerHTML = certifications;
        cell21.innerHTML = startDate;
        cell22.innerHTML = workSchedule;
        cell23.innerHTML = relocate;
        cell24.innerHTML = referenceName;
        cell25.innerHTML = referenceContact;
        cell26.innerHTML = relationship;
        cell27.innerHTML = whyWorkHere; 

        data.push({
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            graduationYear: graduationYear,
            employmentDates: employmentDates,
            resume: resume,
            coverLetter: coverLetter,
            educationLevel: educationLevel,
            schoolName: schoolName,
            major: major,
            jobTitles: jobTitles,
            companyNames: companyNames,
            jobResponsibilities: jobResponsibilities,
            relevantSkills: relevantSkills,
            certifications: certifications,
            startDate: startDate,
            workSchedule: workSchedule,
            relocate: relocate,
            referenceName: referenceName,
            referenceContact: referenceContact,
            relationship: relationship,
            whyWorkHere: whyWorkHere
            // Add more data as needed
        });
    }

    function createTable() {
        var table = document.createElement('table');
        table.id = 'userDataTable';
        table.style.display = 'none';
        var tableHeadingRow = table.createTHead().insertRow(0);
        var variableNames = [
            'firstName', 'lastName', 'emailAddress', 'phoneNumber', 'street',
            'city', 'state', 'zipCode', 'graduationYear', 'employmentDates',
            'resume', 'coverLetter', 'educationLevel', 'schoolName', 'major',
            'jobTitles', 'companyNames', 'jobResponsibilities',
            'relevantSkills', 'certifications', 'startDate', 'workSchedule', 'relocate',
            'referenceName', 'referenceContact', 'relationship', 'whyWorkHere'
        ];

        variableNames.forEach(function (variableName) {
            var th = document.createElement('th');
            th.textContent = variableName;
            tableHeadingRow.appendChild(th);
        });

        var tbody = document.createElement('tbody');
        table.appendChild(tbody);
        document.body.appendChild(table);
        return table;
    }

    function toggleTableVisibility() {
        var dataTable = document.getElementById('userDataTable');
        dataTable.style.display =  'table';
    }


    function validateForm() {
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var phoneNumber = document.getElementById("phoneNumber").value.trim();
        var emailAddress = document.getElementById("emailAddress").value.trim();

        var nameRegex = /^[A-Za-z]+$/;
        var phoneRegex = /^\d{11}$/; // Assuming a 10-digit phone number
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(firstName)) {
            alert("Invalid first name format. Please use only letters.");
            return false;
        }

        if (!nameRegex.test(lastName)) {
            alert("Invalid last name format. Please use only letters.");
            return false;
        }

        if (!phoneRegex.test(phoneNumber)) {
            alert("Invalid phone number format. Please enter a 10-digit number.");
            return false;
        }

        if (!emailRegex.test(emailAddress)) {
            alert("Invalid email address format. Please enter a valid email.");
            return false;
        }
        return true;
    }


    function areRequiredFieldsFilled() {
        var form = document.getElementById("myForm");
        var requiredFields = form.querySelectorAll('[required]');

        for (var i = 0; i < requiredFields.length; i++) {
            if (!requiredFields[i].value.trim()) {
                return false;
            }
        }
        return true;
    }
});