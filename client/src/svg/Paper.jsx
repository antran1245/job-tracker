export default function Paper() {
    return(
        <svg width={200} height={200}>
            <filter id="shadow" colorInterpolation={"sRGB"}>
                <feDropShadow dx={-4} dy={4} stdDeviation={6} floodOpacity={0.5}/>
                
            </filter>
            <ellipse cx={105} cy={170} ry="30" rx="90" 
                style={{fill:"gray", opacity:"0.2"}}/>
            <g filter="url(#shadow)">
                <rect x="10" y="40" width="100" height="150"
                style={{
                    fill:"white",
                    stroke:"black",
                    strokeWidth:".3",
                    transform: "rotate(-15deg)"}}/>
                <rect x="20" y="45" width="100" height="150"
                style={{
                    fill:"white",
                    stroke:"black",
                    strokeWidth:".3",
                    transform: "rotate(-15deg)"}}/>
                <rect x="30" y="50" width="100" height="150"
                style={{
                    fill:"white",
                    stroke:"black",
                    strokeWidth:".3",
                    transform: "rotate(-15deg)"}}/>
            </g>
            <text x="40" y="80"
            style={{
                fill:"black",
                fontSize:"20px",
                transform: "rotate(-15deg)",
                fontFamily: "cursive"}}>Job App
                <tspan x="42" y="110" fontSize={"12px"}>
                    Name: Hello
                </tspan>
                <tspan x="42" y="140" fontSize={"12px"}>
                    Email: World
                </tspan>
                <tspan x="42" y="170" fontSize={"12px"}>
                    Experience: 
                </tspan>
            </text>
        </svg>
    );
}