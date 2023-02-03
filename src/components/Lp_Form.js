import { useDispatch, useSelector } from "react-redux";
import { changeName,changeCost } from "../store";

function LpForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.creation.name,
            cost: state.creation.cost 
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    };
    const handleCostChange = (event) => {
        const lpCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(lpCost)); 
    }

    return (
    <div className="lp-form panel">
        <h4 className="subtitle is-3">Add LP</h4>
        <form>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded"
                    value={name}
                    onChange={handleNameChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded"
                    value={cost || ''}
                    onChange={handleCostChange}
                    type="number"
                    />
                </div>
                

            </div>
        </form>
    </div>
    );
}

export default LpForm;