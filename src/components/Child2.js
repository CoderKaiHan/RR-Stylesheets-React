import GrandChild2 from "./GrandChild2";

export default function Child2 (props) {
    const styleText = {
        color:'yellow',
        font: '20px'
    }

    const grandChild2Style = props.style;

    return (
        <div className="Child2">
            <h1 style={styleText}>Child2</h1>
            <GrandChild2 style={grandChild2Style}/>
        </div>
    );
}