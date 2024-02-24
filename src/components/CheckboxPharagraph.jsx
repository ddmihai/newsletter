import { RiCheckboxCircleFill } from "react-icons/ri";

{/* <RiCheckboxCircleFill /> */}


const CheckboxPharagraph = ({ content }) => {
    return (
        <p className="flex">
            <RiCheckboxCircleFill size={24} className="text-tomato mr-4" />
            <span>
                { content }
            </span>
        </p>
    )
}

export default CheckboxPharagraph
