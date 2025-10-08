const InputFieldDisabled = ({ label, placeholder, required, logo, value, onChange, onBlur, error, errorMsg, max, disabled }) => {
    if (!disabled) disabled = false;
    return (
        <>
            <div className='inputField-disabled'>
                <div className="label-disabled">{label}</div>
                <div className="input_field_wrapper-disabled">
                    <input placeholder={placeholder} required={required} value={value} onChange={(e) => {
                        onChange(e.target.value);
                        onBlur(e.target.value);
                    }} maxLength={max} disabled={disabled}>
                    </input>
                    <img src={logo} alt="" />
                </div>
            </div>
            {error && <div className='error_msg_signup_field'>{errorMsg}</div>}</>
    )
}

export default InputFieldDisabled;