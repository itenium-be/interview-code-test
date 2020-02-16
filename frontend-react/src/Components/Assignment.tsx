import React from 'react';

export const Assignment = () => {
  return (
    <div>
      <h1>Assignments</h1>
      <ul>
        <li>Before starting an assignment, estimate how long it will take you to complete it</li>
        <li>Create one (or more) commits with the story prefix (ITENIUM-X) and a descriptive message</li>
        <li>After completing an assignment, write down how long it actually took you</li>
        <li>Take the Tips into account!</li>
        <li>The Extra's are some questions we may ask when going through your solutions</li>
        <li>Send the final code zipped to <a href="mailto:exercise@itenium.be">exercise@itenium.be</a> including the `.git` folder (do not zip gitignored things like `node_modules`)</li>
      </ul>

      <hr />

      <h3>Story ITENIUM-1: User registration</h3>
      <div>
        Users should be able to create an account with login and password and then later login with these credentials.
        An in memory store in the backend is sufficient for this exercise. It is ok if the newly created users are not
        permanently saved.
        <br />
        <b>Tip:</b> The layout can be pretty much the same as the already existing Login.js. Make sure this is DRY!
        <br />
        <b>Extra:</b>:
        <ul>
          <li>How would you store the user credentials after they logged in?</li>
          <li>How would you secure calls to the backend?</li>
          <li>How would you differentiate between "Admins" and "Users"?</li>
        </ul>
      </div>

      <hr />

      <h3>Story ITENIUM-2: Multiple environments and sensitive data</h3>
      <div>
        <ul>
          <li>In the frontend, the backend url is hardcoded (http://localhost:5000)</li>
          <li>In the backend, the port is hardcoded (5000)</li>
        </ul>

        Change the application so that this information is committed with default values for the Development environment
        but can easily be changed for TEST, ACC and PROD without actually changing the code. Choose to do this for either
        the backend or the frontend.
        <br />

        <b>Extra:</b>
        <ul>
          <li>In case really sensitive data (API key, connection string, ...) is committed in the git repository, how can it be removed?</li>
          <li>Or how can it be safely committed to the repository?</li>
          <li>Or if it is not committed into the repository, how would automatic deploys with the correct API keys, connection strings, ... be implemented?</li>
        </ul>
      </div>

      <hr />

      <h3>Story ITENIUM-3: Dutch translations</h3>
      <div>
        The application is a huge succes and we want to offer it in multiple languages.
        For this exercise, translating a single page (ex: Login.js) is sufficient.
        `Header.js` already contains UI for changing the language with a dropdown.
      </div>

      <br />
      <ul>
        <li>How would you determine the default language?</li>
        <li>How would you save the language when the user changes his default language?</li>
        <li>How would you tackle translatable texts that are stored in the database?</li>
      </ul>

      <hr />

      <h3>Story ITENIUM-4: More image sources</h3>
      <div>
        At this point there are two sources of images: "Unsplash" and "XKCD".
        DelayedKilo being so successful, it has been decided to add more sources.
        (See README.md for some options - or come up with your own)

        <br />
        We quickly realize that there are some differences between the different sources
        <ul>
          <li>Some return only a random image url, some include some meta data and some immediately return the image itself</li>
          <li>If additional meta data is returned for a certain source, this should be displayed in the `ImageCard.js` but for that specific source only (ex: now this is only the case for the source XKCD which displays an extra "Posted on")</li>
        </ul>
        <b>Tip:</b> Make sure this is solved in an Open/Closed way.
      </div>
    </div>
  );
}
