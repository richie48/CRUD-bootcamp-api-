# CRUD-bootcamp-api-

This  api is structured to provide

1)The ability to get all bootcamps from the database.

2)The ability to get asingle bootcamp from the database.

3)Create bootcamps in the database.

4)Update bootcamps from the database.

5)Delete bootcamps from the database.

I made use of mongoose to connect to my database and followed the architecture of seperating my routes from my controllers to male the code more readable(combining them can get messywhen lot of app logic is populated).

I also refactored to use async handlers rather than normal try catch blocks for better readablity.
