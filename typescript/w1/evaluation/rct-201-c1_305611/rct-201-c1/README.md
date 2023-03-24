## RCT201-B23-C1

Create the following application in TypeScript

**NOTE**: Using TypeScript logic is mandatory and without it, your submission will not be accepted, to be valid.

#### Boilerplate code: <course-platform>

#### Explanation video: <course-platform>

### Getting Started:

1. Unzip the boilerplate code, and go inside the RCT-201-C1 folder
2. `npm install`
3. `npm start`
4. `npm run server`

### Functionalities:

- The user should be able to authenticate (using the reqres.in login API) by taking the email, and password.
- The user should be able to render the default country list from the db.json file
- The user should be able to add, country data in db.json file and the data should be shown in the UI as well.

### Component Structure

- App.tsx

  - LoginForm.tsx
  - Countries.tsx
    - CountryInput.tsx
    - CountryList.tsx

- api.ts

1. ```JavaScript
    <LoginForm handleSubmit={handleSubmit}/>
   ```

   it should expect email and password, both of type string as parameters

2. ```JavaScript
    <CountryInput addCountryDetails={addCountryDetails} />
   ```
   it should accept an object, that has the structure of a single country in the db.json file, containing, id, name, and capital
3. ```JavaScript
    <CountryList data={countriesData}>
   ```
   where countriesData should be an array of countries.

More details on how to render the Pages are given in the boiler plate code as comments.

**IMPORTANT**:

- Make sure that the types are added at the places, necessary, for example, function input and output declarations, component props, etc. as the majority of the evaluation marks will be considered based on these factors.
- CSS will not carry any weightage.
