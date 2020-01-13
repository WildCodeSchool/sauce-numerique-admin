import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PartnersList, PartnersEdit, PartnersCreate,PostIcon } from './partners';
import { RessourcesList, RessourcesEdit, RessourcesCreate } from './ressources';

const App = () => (
  <div className="App">
    <Admin dataProvider={jsonServerProvider('https://sauce-num-back.herokuapp.com/api/v1')}>
        <Resource name="partners" list={PartnersList} edit={PartnersEdit} create={PartnersCreate} icon={PostIcon}/>
        <Resource name="ressources" list={RessourcesList} edit={RessourcesEdit} create={RessourcesCreate} icon={PostIcon}/>
    </Admin>
  </div>
);
// http://localhost:5000

export default App;
