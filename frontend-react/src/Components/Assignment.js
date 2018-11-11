import React, { Component } from 'react';

export class Assignment extends Component {
  render() {
    return (
      <div>
        <h1>Assignments</h1>
        <ul>
          <li>Before starting an assignment, estimate how long it will take you to complete it</li>
          <li>Create one (or more) commits with the ticket number prefix and a descriptive message</li>
          <li>After completing an assignment, write down how long it actually took you</li>
        </ul>

        <h2>ITENIUM-1: User registration</h2>
        <div>
          Users should be able to create an account with login and password and then later login with these credentials.
          <br />
          <b>Tip:</b> The layout can be pretty much the same as the already existing Login.js. Make sure this is DRY!
        </div>



        <h2>ITENIUM-2: Multiple environments and sensitive data</h2>
        <div>
          Sensitive data moet uit de source code (mongodb connectie, backend url)
          Dikwijls wordt er gewerkt met een ".env" bestandje waar default json configuratie voor "development" in zit. Dit bestand zit dan in de soure code. Er is daarnaast dan een env.production dat NIET in de source code zit. Maar eender welke oplossing is goed.
          Denk eens na over volgende dingen
          De mongodb connection die nu in de source zit, hoe kan deze verwijderd worden uit de historiek?
          Hoe kan je het opzetten dat je makkelijk een development omgeving kan opzetten zonder db credentials mee in te checken?
          <br />
          <b>Tip:</b>
        </div>



        <h2>ITENIUM-3: Dutch translations</h2>
        <div>

          <br />
          <b>Tip:</b>
        </div>




        <h2>ITENIUM-4: </h2>
        <div>
          Meer types van oefeningen (nu Power & Cardio). Verzin zelf 1 of meer nieuwe types van oefeningen.
          Bedoeling is dat dit Open/Closed is.
          <br />
          <b>Tip:</b>
        </div>
      </div>
    );
  }
}
