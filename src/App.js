import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { API_URL } from './api-config';
import { PartnersList, PartnersEdit, PartnersCreate,PostIcon } from './partners';
import { RessourcesList, RessourcesEdit, RessourcesCreate } from './ressources';

const App = () => (
  <div className="App">
    <Admin  authProvider={authProvider} dataProvider={jsonServerProvider(API_URL)}>
        <Resource name="partners" list={PartnersList} edit={PartnersEdit} create={PartnersCreate} icon={PostIcon}/>
        <Resource name="ressources" list={RessourcesList} edit={RessourcesEdit} create={RessourcesCreate} icon={PostIcon}/>
    </Admin>
  </div>
);
// http://localhost:5000
// https://sauce-num-back.herokuapp.com

export default App;
