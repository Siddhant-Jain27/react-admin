import React from 'react'
import {Edit, SimpleForm, DateInput, TextInput} from 'react-admin'

const PostEdit = (props) => {
    return(
        <Edit title='Edit Post' {...props}>
            <SimpleForm> 
                <TextInput disabled source='id' />
                <TextInput source='title'/>
                <TextInput multiline source='body'/>
                <DateInput label='Publish Date' source='publishAt' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit