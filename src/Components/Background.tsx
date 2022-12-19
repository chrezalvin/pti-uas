interface IProps{
    url: string
}

export default function background(props: IProps){
    return (
        <img 
            src={props.url} 
            className="vh-100 vw-100 background position-absolute top-0" 
            style={{backgroundRepeat: "no-repeat", opacity: .7, zIndex:-999}}
        />
    )
}