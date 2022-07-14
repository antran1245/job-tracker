export default function Paper() {
    return(
        <svg width={400} height={200}>
            <rect x="20" y="40" width="100" height="150"
            style={{
                fill:"white",
                stroke:"black",
                strokeWidth:"1",
                transform: "rotate(-15deg)"}}/>
            <rect x="30" y="45" width="100" height="150"
            style={{
                fill:"white",
                stroke:"black",
                strokeWidth:"1",
                transform: "rotate(-15deg)"}}/>
            <rect x="40" y="50" width="100" height="150"
            style={{
                fill:"white",
                stroke:"black",
                strokeWidth:"1",
                transform: "rotate(-15deg)"}}/>
        </svg>
    );
}