import { useContext } from "react";
import StyleContext from "../StyleContext";

export default function GrandChild1 () {
    const styleText = useContext(StyleContext);

    return (
        <div style={styleText} className="GrandChild1">
            <h2>GrandChild1</h2>
        </div>
    );
}