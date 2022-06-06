# Hospital-API

An API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

**Setup the Project**
1. Clone or Download the Repo.
2. goto the Repo using Terminal.
3. Run npm start to ignite the project.
4. Use Postman to test the api.


**Routes**
#### Url start with:- https://hospital003.herokuapp.com/
1. Register a Doctor: [POST]-  /doctors/register -> with username and password
2. Login for Doctor: [POST]-  /doctors/login -> returns the JWT to be used
3. Register a patient:  [POST]-  /patients/register -> with name and phone_no
4. Create Patient report: [POST]-  /patients/:id/create_report -> with status
5. Fetch All Reports of a Patient [GET]-   /patients/:id/all_reports -> List all the reports of a patient oldest to latest
6. Fetch All Reports Based on a Status: [GET]-   /reports/:status -> List all the reports of all the patients filtered by a specific status
