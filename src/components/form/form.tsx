import { NvButton, NvCol, NvFieldSelect, NvFieldText, NvFieldTextArea, NvHeading, NvOption, NvRow, NvTable, NvTableCell, NvTableRow, NvText } from '@eliagroup-innersource/nova-components-react';
import './form.css'

import emptyAlt from '../../assets/empty_alt.png'


function UserForm() {

    return (
        <>
            <div className='main'>
                <NvHeading className="mt-4" size="sm">
                    CUSTOMER DETAILS:
                </NvHeading>
                <NvText medium>Full Name</NvText>
                <NvRow>
                    <NvCol size='6'>
                        <NvFieldText message="First Name" />
                    </NvCol>
                    <NvCol size='6'>
                        <NvFieldText message="Last Name" />
                    </NvCol>
                </NvRow>
                <NvText medium>Address</NvText>
                <NvRow>
                    <NvCol size='12' className='row_gaps'>
                        <NvFieldText message="Street Address" />
                    </NvCol>
                    <NvCol size='12' className='row_gaps'>
                        <NvFieldText message="Street Address Line 2" />
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='6'>
                        <NvFieldText message="City" />
                    </NvCol>
                    <NvCol size='6'>
                        <NvFieldText message="State / Province" />
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12' className='row_gaps'>
                        <NvFieldText message="Postal / Zip Code" />
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12' className='row_gaps image'>
                        <img width='90px' height='40px' src={emptyAlt} alt='Empty_alt' />
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='6'>
                        <NvFieldText label="Phone Number" placeholder='(000) 000-0000' />
                    </NvCol>
                    <NvCol size='6'>
                        <NvFieldText label="E-mail" placeholder='ex: email@yahoo.com' message="example@example.com" />
                    </NvCol>
                </NvRow>
                <hr></hr>
                <NvRow>
                    <NvCol size='6'>
                        <NvFieldSelect label="How did you hear about us?" name="labelSample" placeholder='Please Select'>
                            <NvOption value="value-1"> label 1 </NvOption>
                            <NvOption value="value-2"> label 2 </NvOption>
                            <NvOption value="value-3"> label 3 </NvOption>
                        </NvFieldSelect>
                    </NvCol>
                    <NvCol size='6'>
                        <NvFieldText label="Please Specify" />
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12'>
                        <NvFieldTextArea name="feedback" label="Feedback about us:"></NvFieldTextArea>
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12'>
                        <NvFieldTextArea name="suggestion" label="Suggestions if any for further improvement:"></NvFieldTextArea>
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12'>
                        <NvText medium>Will you be willing to recommend us?</NvText>
                        <input type="radio" id="html" name="fav_language" value="HTML" />&nbsp;&nbsp;
                        <label>Yes</label><br></br>
                        <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                        <label >No</label><br></br>
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />&nbsp;&nbsp;
                        <label >Maybe</label>
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12'>
                        <NvText medium>Please give reference of any people whom you feel:</NvText>

                        <NvTable responsive>
                            <NvTableRow slot="header">
                                <NvTableCell grid-cols="2"></NvTableCell>
                                <NvTableCell grid-cols="6"> Full Name </NvTableCell>
                                <NvTableCell grid-cols="6"> Address </NvTableCell>
                                <NvTableCell grid-cols="10"> Contact Number </NvTableCell>
                            </NvTableRow>
                            <NvTableRow>
                                <NvTableCell grid-cols="2"> 1 </NvTableCell>
                                <NvTableCell grid-cols="6"></NvTableCell>
                                <NvTableCell grid-cols="6"> </NvTableCell>
                                <NvTableCell grid-cols="6">  </NvTableCell>
                            </NvTableRow>
                            <NvTableRow>
                                <NvTableCell grid-cols="2"> 2 </NvTableCell>
                                <NvTableCell grid-cols="6"> </NvTableCell>
                                <NvTableCell grid-cols="6"> </NvTableCell>
                                <NvTableCell grid-cols="6">  </NvTableCell>
                            </NvTableRow>
                        </NvTable>
                    </NvCol>
                </NvRow>
                <NvRow>
                    <NvCol size='12' className='btnSubmit'>
                        <NvButton color="primary"  size="md">Submit</NvButton>
                    </NvCol>
                </NvRow>
            </div>

        </>
    )
}


export default UserForm;

