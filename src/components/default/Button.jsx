import './button.scss';

const button_type ={
    primary: "primary",
    google:"google",
    invert: "invert"
}

export default function Button({children,className,  ...otherprop}){
    return(
        <button className={`button-style  ${button_type[className]}`} {...otherprop}>{children}</button>
    )
}