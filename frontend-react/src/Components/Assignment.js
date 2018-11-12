import React, { Component } from 'react';

export class Assignment extends Component {
  render() {
    return (
      <div>
        <h1>Assignments</h1>
        <ul>
          <li>Before starting an assignment, estimate how long it will take you to complete it</li>
          <li>Create one (or more) commits with the ticket number prefix (ITENIUM-X) and a descriptive message</li>
          <li>After completing an assignment, write down how long it actually took you</li>
        </ul>

        <hr />

        <h3>ITENIUM-1: User registration</h3>
        <div>
          Users should be able to create an account with login and password and then later login with these credentials.
          An in memory store in the backend is sufficient for this exercise. It is ok if the newly created users are not
          permanently saved.
          <br />
          <b>Tip:</b> The layout can be pretty much the same as the already existing Login.js. Make sure this is DRY!
        </div>

        <hr />

        <h3>ITENIUM-2: Multiple environments and sensitive data</h3>
        <div>
          <ul>
            <li>In the frontend, the backend url is hardcoded (http://localhost:5000)</li>
            <li>In the backend, the port is hardcoded (5000)</li>
          </ul>

          Change the application so that this information is committed with default values for the Development environment
          but can easily be changed for TEST, ACC and PROD without actually changing the code.
          <br />

          <b>Extra:</b>
          <ul>
            <li>In case really sensitive data (API key, connection string, ...) is committed in the git repository, how can it be removed?</li>
          </ul>
        </div>

        <hr />

        <h3>ITENIUM-3: Dutch translations</h3>
        <div>
          The application is a huge succes and we want to offer it in multiple languages.
          For this exercise, translating a single page (ex: Login.js) is sufficient.
          `Header.js` already contains UI for changing the language with a dropdown.
        </div>

        <hr />

        <h3>ITENIUM-4: More image sources</h3>
        <div>
          At this point there are two sources of images: "Random Cats" and "XKCD".
          DelayedKilo being so succesful, it has been decided to add more sources.
          (See README.md for some options)

          <br />
          <b>Tip:</b> Make sure this is solved in an Open/Closed way.
        </div>
      </div>
    );
  }
}
