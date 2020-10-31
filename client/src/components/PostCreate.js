import React from 'react'
import {Create, SimpleForm, DateInput, TextInput} from 'react-admin'

const PostCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm> 
                <TextInput source='title'/>
                <TextInput multiline source='body'/>
                <DateInput label='Publish Date' source='publishAt' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate