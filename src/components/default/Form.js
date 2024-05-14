export default function Form({label, ...otherProp}){
    return(
        <div className="form-fields">
            <label>{label}</label>
            <input {...otherProp} />
        </div>
    )
}