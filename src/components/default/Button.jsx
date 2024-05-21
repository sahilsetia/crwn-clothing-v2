import './button.scss';

const button_type ={
    primary: "primary",
    google:"google",
    invert: "invert"
}

export default function Button({children, typeOf, className,  ...otherprop}){
    return(
        <button className={`button-style  ${button_type[typeOf]} ${className !== undefined ? className : '' }`} {...otherprop}>{children}</button>
    )
}