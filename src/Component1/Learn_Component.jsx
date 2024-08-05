import { PropsUser } from "./PropsUser";

// This Object used for props

// object 1
const userDetails = {
    username: "Barani",
    age: "21",
    qualification: "BCA",
    POY: "2023",
};
// object 2
const placeDetails = {
    place: "Mayiladuthurai",
    pincode: "609305",
};
function LearnComponent() {
    return <h1>Component</h1>;
}

function LearnComponents() {
    return (
        <>
            <h1>We can Export More then one Javascript Function </h1>
            <PropsUser users={{ userDetails, placeDetails }} />
        </>
    );
}

export { LearnComponent, LearnComponents };

// Notes

// We can Export More than one javaScript functions like this " export {LearnComponent, LearnComponents} ;"

// we can import as same as export

// <></>  => It's Call Fragments

// font

// Consolas, 'Courier New', monospace

// we can send more than one data like " line 25 : <PropsUser users={{ userDetails, placeDetails }} />"
