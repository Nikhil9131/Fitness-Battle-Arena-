const hospital = {
    name: "City Hospital",
    location: "Korba",
    contact: "9876543210"
};

function createPatientId() {
    let id = 0;

    return function () {
        id++;
        return id;
    };
}

const generateId = createPatientId();

let patients = [];
let doctors = [];

function addPatient(name, disease, schedule) {
    let patient = {
        id: generateId(),
        name: name,
        disease: disease,
        schedule: schedule
    };

    patients.push(patient);
}

function addDoctor(name, specialization) {
    let doctor = {
        name: name,
        specialization: specialization
    };

    doctors.push(doctor);
}

function operation(callback) {
    callback();
}

operation(() => addDoctor("Dr.Nikhil Rathore", "Cardiologist"));
operation(() => addDoctor("Dr. Sharma", "Neurologist"));
operation(() => addDoctor("Dr. Mayank Verma", "Pediatrician"));
operation(() => addDoctor("Dr. Rohan Sharma", "Orthopedic"));
operation(() => addDoctor("Dr. sumit Patel", "Dermatologist"));

operation(() => addPatient("Akash", "Fever", "10:00 AM"));
operation(() => addPatient("Vishal", "Cold", "11:00 AM"));
operation(() => addPatient("Aman", "Cough", "12:00 PM"));
operation(() => addPatient("Rahul", "Headache", "01:00 PM"));
operation(() => addPatient("Rohit", "Back Pain", "02:00 PM"));
operation(() => addPatient("Yash", "Stomach Ache", "03:00 PM"));
operation(() => addPatient("Aryan", "Allergy", "04:00 PM"));
operation(() => addPatient("Priyanshu", "Flu", "05:00 PM"));
operation(() => addPatient("Satyarth", "Diabetes", "06:00 PM"));
operation(() => addPatient("Aditya", "Hypertension", "07:00 PM"));
operation(() => addPatient("Aniket", "Asthma", "08:00 PM"));

console.log("HOSPITAL DETAILS");
console.log("Name:", hospital.name);
console.log("Location:", hospital.location);
console.log("Contact:", hospital.contact);

console.log("\nDOCTOR LIST");

doctors.map(doctor => {
    console.log(
        doctor.name + " - " + doctor.specialization
    );
});

console.log("\nPATIENT LIST");

patients.map(patient => {
    console.log(
        "ID:", patient.id,
        "| Name:", patient.name,
        "| Disease:", patient.disease
    );
});

console.log("\nPATIENT SCHEDULE");

patients.map(patient => {
    console.log(
        patient.name + " - Appointment Time: " + patient.schedule
    );
});