import React, { useState } from 'react'
import './keyphrase.css'
import { useNavigate } from 'react-router-dom'
import selectors from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { updateAccount, updateConnectedWithMnemonic } from '../../redux/slices';

const Mnemonic = () => {
    const [contractField, setContractField] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reach = useSelector(selectors.selectReach);

    const handleChange = (event) => {
        setContractField(event.target.value);
        setDisplayError(false)
    }

    const onSubmit = async () => {
        try {
            const account = await reach.newAccountFromMnemonic(contractField.trim());
            
            dispatch(updateAccount(account));
            dispatch(updateConnectedWithMnemonic(true))

            navigate('/information');
        }
        catch(error) {
            setDisplayError(true);
        }

    }

    return (
        <>
            <div className='accDisplay text-warning'>
                <h3 className=''>Enter your Mnemonic Key Phrase</h3>
            </div>
            <div className='area-view text-warning'>
                <div className="w-30">
                
                    <label for="">Mnemonic Phrase</label>
                    <textarea 
                        onChange={handleChange} 
                        className="form-control" 
                        id="" 
                        rows="3"
                        value={contractField}
                    ></textarea>
                    {
                        displayError?
                            <p style={{color: 'red'}}><small>*Invalid key phrase.</small></p>
                            :
                            null
                    }
                    

                    <button className='btn btn-warning mt-3 grow' onClick={onSubmit}>Submit</button>
                </div>

            </div>
        </>
    )
}

export default Mnemonic;