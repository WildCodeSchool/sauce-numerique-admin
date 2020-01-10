
import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PartnersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="logo" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
            <EditButton basePath="/partners" />
        </Datagrid>
    </List>
);

const PartnersTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PartnersEdit = (props) => (
    <Edit title={<PartnersTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" options={{ multiLine: true }} />
            <TextInput source="logo" />
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const PartnersCreate = (props) => (
    <Create title="Create a partner" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="logo" />
            <TextInput source="teaser" options={{ multiLine: true }} />
            <TextInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
        </SimpleForm>
    </Create>
);