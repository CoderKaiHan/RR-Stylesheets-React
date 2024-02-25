import GrandChild1 from "./GrandChild1";

export default function Child1 () {
    const styleText = {
        color:'lightblue',
        font: '20px'
    }

    return (
        <div className="Child1">
            <h1 style={styleText}>Child1</h1>
            <GrandChild1/>
        </div>
    );
}