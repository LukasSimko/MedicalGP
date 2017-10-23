Lukas Simko
2006 20 36

GP Medical Schedule

This application should be use for patients as well as for new patients for schedule appoitment with doctors online. In this section 
I develop back-end server with some functionality (ADD, DELETE, UPDATE, SEARCH) with implement MongoDB for 2 persist models (Doctors, Patients) as well as each step is commit in git repository.

Persist in this project are 2 models patients and doctors informations that are save in mongo databse which is connect with server. 



Functionality which i impement in are as follow:
1.Get All - this function return all object saved in database 
2.Get By - this function get specific patient by ID, search for it in database and return specific object that match with one we were looking for or if we looking for doctor is find by (name) letter that doctor name have included in.
3.Add - This method adding new object in database medicalgp
4.Delete - In both cases patients and doctors this method delete specific object form database base on ID. 
5.Update:a, Patients :This function is updating visit by 1 for each visit that patient have wih doctor.
	 b, Doctors: This function change cost per doctor visit and replace cost with new cost in request body. default for visit is 50.


Lunch mongo server from command prompt (mongod)
Show dbs
use "database name"
show collections
db.doctors.find() 
db.patients.find()

MongoDB - This database was create for save information send to server and it include 2 other collections (Doctors and Patients) which we can see by entering code as follow : show collections

Git - By entering code as follow : git log, we can see git repoitory and all work and information that were done. 



Note:
As i have problem with verfication email from GitHub so i cant share information from this source as i cant start even project there.   