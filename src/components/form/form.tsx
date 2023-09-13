import { NvButton, NvHeading } from '@eliagroup-innersource/nova-components-react';
import './form.css'


function UserForm() {

    return (
        <>
            <div className='main'>
                <NvHeading className="mt-4" size="sm">
                    Customer Detail
                </NvHeading>
                <NvButton color="primary">Register</NvButton>
            </div>

        </>
    )
}


export default UserForm;

