# chota-url

A simple URL shortener built with Express, MongoDB, and React.

## Build order

Checklist for class. Tick each one as you finish it.

**7 of 12 done**

### Backend

- [x] Create the `backend` folder, run `npm init -y`, and install `express mongoose cors dotenv` (plus `nodemon` as a dev dependency)
- [x] Connect to MongoDB in `config/db.js` and start the server
- [x] Write the model
- [x] Write `generateCode`
- [x] Controller and route: create, then test in Postman
- [x] Controller and route: get all, then test in Postman
- [x] Controller and route: redirect, then test in the browser
- [ ] Controller and route: delete, then test in Postman

### Frontend

- [ ] Create the Vite React app and set up the axios instance in `api/urls.js`
- [ ] Build the form and show the result card
- [ ] Build the list, then add Copy and Delete

### Final test

- [ ] Shorten a link, open it in a new tab, come back, and watch the click count go up