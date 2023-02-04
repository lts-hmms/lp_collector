import { useSelector, useDispatch } from "react-redux";
import { removeLp } from "../store";

function LpList(){
    const dispatch = useDispatch();
    const lps = useSelector(({ lps: { items, searchTerm } }) => {
        return items.filter((lp) => lp.name.toLowerCase().includes(searchTerm.toLowerCase()))
    });

    const handleLpDelete = (lp) => {
        dispatch(removeLp(lp.id))
    }

    const rederedLps = lps.map((lp) => {
        return (
            <div key={lp.id} className="panel">
                <p>
                    {lp.name} - ${lp.cost}
                </p>
                <button className="button is-danger"
                onClick={() => handleLpDelete(lp)}
                >
                    Delete
                </button>
            </div>
        )
    })
    return <div className="lp-list">{rederedLps}</div>
    
}

export default LpList;