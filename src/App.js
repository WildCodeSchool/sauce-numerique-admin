import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { API_URL } from './api-config';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import BookIcon from '@material-ui/icons/Book';
import { PartnersList, PartnersEdit, PartnersCreate } from './partners';
import { RessourcesList, RessourcesEdit, RessourcesCreate } from './ressources';

const App = () => (
  <div className="App">
    <Admin  authProvider={authProvider} dataProvider={jsonServerProvider(API_URL)}>
        <Resource name="partners" list={PartnersList} edit={PartnersEdit} create={PartnersCreate} icon={GroupWorkIcon}/>
        <Resource name="ressources" list={RessourcesList} edit={RessourcesEdit} create={RessourcesCreate} icon={BookIcon}/>
    </Admin>
  </div>
);
// http://localhost:5000
// https://sauce-num-back.herokuapp.com

export default App;
