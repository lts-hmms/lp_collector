import { useSelector } from "react-redux";

function LpValue(){
    const totalCost = useSelector(({ lps: { items, searchTerm }}) => 
        items
            .filter((lp) =>
                lp.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, lp) => acc + lp.cost, 0)
    );

    return (
    <div className="lps-value">
        Total cost: ${totalCost}
    </div>
    )
}

export default LpValue;