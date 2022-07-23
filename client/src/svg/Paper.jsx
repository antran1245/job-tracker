export default function Paper(props) {
    const {size = 200} = props
    let width = size
    let height = size
    return(
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
            <filter id="shadow" colorInterpolation={"sRGB"}>
                <feDropShadow dx={-4} dy={4} stdDeviation={6} floodOpacity={0.5}/>
                
            </filter>
            <ellipse cx={width*.5} cy={height*.85} ry={height*.15} rx={width*.45}
                style={{fill:"gray", opacity:"0.2"}}/>
            <g filter="url(#shadow)">
                <rect x={width*0.05} y={height*0.2} width={width*.5} height={height*.75}
                style={{
                    fill:"white",
                    stroke:"black",
                    strokeWidth:".3",
                    transform: "rotate(-15deg)"}}/>
                <rect x={width*.1} y={height*.225} width={width*.5} height={height*.75}
                style={{
                    fill:"white",
                    stroke:"black",
                    strokeWidth:".3",
                    transform: "rotate(-15deg)"}}/>
                <rect x={width*.15} y={height*.25} width={width*.5} height={height*.75}
                style={{
                    fill:"white",
                    stroke:"black",
                    strokeWidth:".3",
                    transform: "rotate(-15deg)"}}/>
            </g>
            <text x={width*0.2} y={height*.4}
            style={{
                fill:"black",
                fontSize: width*.1+"px",
                transform: "rotate(-15deg)",
                fontFamily: "cursive"}}>Job App
                <tspan x={width*.21} y={height*.55} fontSize={width*.06+"px"}>
                    Name: Hello
                </tspan>
                <tspan x={width*.21} y={height*.7} fontSize={width*.06+"px"}>
                    Email: World
                </tspan>
                <tspan x={width*.21} y={height*.85} fontSize={width*.06+"px"}>
                    Experience: 
                </tspan>
            </text>
        </svg>
    );
}    
// return(
//     <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
//         <filter id="shadow" colorInterpolation={"sRGB"}>
//             <feDropShadow dx={-4} dy={4} stdDeviation={6} floodOpacity={0.5}/>
            
//         </filter>
//         <ellipse cx={width*.5} cy={height*.85} ry="30" rx="90" 
//             style={{fill:"gray", opacity:"0.2"}}/>
//         <g filter="url(#shadow)">
//             <rect x="10" y="40" width="100" height="150"
//             style={{
//                 fill:"white",
//                 stroke:"black",
//                 strokeWidth:".3",
//                 transform: "rotate(-15deg)"}}/>
//             <rect x="20" y="45" width="100" height="150"
//             style={{
//                 fill:"white",
//                 stroke:"black",
//                 strokeWidth:".3",
//                 transform: "rotate(-15deg)"}}/>
//             <rect x="30" y="50" width="100" height="150"
//             style={{
//                 fill:"white",
//                 stroke:"black",
//                 strokeWidth:".3",
//                 transform: "rotate(-15deg)"}}/>
//         </g>
//         <text x="40" y="80"
//         style={{
//             fill:"black",
//             fontSize:"20px",
//             transform: "rotate(-15deg)",
//             fontFamily: "cursive"}}>Job App
//             <tspan x="42" y="110" fontSize={"12px"}>
//                 Name: Hello
//             </tspan>
//             <tspan x="42" y="140" fontSize={"12px"}>
//                 Email: World
//             </tspan>
//             <tspan x="42" y="170" fontSize={"12px"}>
//                 Experience: 
//             </tspan>
//         </text>
//     </svg>
// );
// }