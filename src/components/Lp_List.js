import { useSelector, useDispatch } from "react-redux";
import { removeLp } from "../store";

function LpList(){
    const dispatch = useDispatch();
    // a good place for derived state is in useSelector functions
    const { lps, name } = useSelector(({ creation, lps: { items, searchTerm } }) => {
        const filteredLps = items.filter((lp) => lp.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {
            lps: filteredLps,
            name: creation.name
        }
    });

    const handleLpDelete = (lp) => {
        dispatch(removeLp(lp.id))
    }

    const rederedLps = lps.map((lp) => {
        const bold = name && lp.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={lp.id} className={`panel ${bold && 'bold'}`}>
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