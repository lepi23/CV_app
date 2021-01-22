
const GenerateListObject = ({stringList}) => {
    const listStyle = {
        display:"listItem",
        paddingInlineStart: '1em',
    }
    return(
        <ul>
            {stringList.map(listItem => (
                <li style = {listStyle}>{listItem}</li>
            ))}
        </ul>
    )
}
export default GenerateListObject