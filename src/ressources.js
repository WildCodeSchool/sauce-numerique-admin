import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput,Filter, Pagination } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

const UsersPagination = (props) => (
    <Pagination
    rowsPerPageOptions= {
        [
            5, 10, 25, 50, 100
        ]
    }{...props}
    />
)

const RessourcesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);
export const RessourcesList = (props) => (
    <List filters={<RessourcesFilter />} {...props} pagination={<UsersPagination />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="theme" />
            <TextField source="description" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
            <EditButton basePath="/ressources" />
        </Datagrid>
    </List>
);

const RessourcesTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const RessourcesEdit = (props) => (
    <Edit title={<RessourcesTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="theme" />
            <TextInput source="description" options={{ multiLine: true }}/>
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const RessourcesCreate = (props) => (
    <Create title="Create a ressource" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="theme" />
            <TextInput source="description" options={{ multiLine: true }}/>
            <TextInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
        </SimpleForm>
    </Create>
);