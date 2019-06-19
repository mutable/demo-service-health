Demo Health Check microservice
===

This is a service meant to display the Health status of the services in your current stack.

## Overview

This service is built using `Express`.
Health status visaulization is done via `D3.js` and `C3js`

---
Clone this repository in the stack, navigate into it and run the `npm install` command.

In order to see the Health Check results you must navigate to the service's webpage by clicking the port number under "View Site" column of the stack list 

![Screenshot from 2019-05-31 13-41-08](https://user-images.githubusercontent.com/20372024/58697308-6a250200-83aa-11e9-8c62-db6043b514f3.png)

The result should look like this:   

![Screenshot from 2019-05-31 13-52-17](https://user-images.githubusercontent.com/20372024/58697966-634abf00-83ab-11e9-9c94-8a02a5c025d5.png)

Statuses are constantly updating.

## Notes
Please note that all the services must be running for the Health Check service to display their status.


APIs
---

### GET: /api/healthChecks
### GET: /api/healthChecks/services

## Exteral Links

- [**Express**](https://expressjs.com/)
- [**C3**](https://c3js.org/)
- [**D3**](https://d3js.org/)
