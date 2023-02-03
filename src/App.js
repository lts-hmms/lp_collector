import LpForm from "./components/Lp_Form";
import LpList from "./components/Lp_List";
import LpSearch from "./components/Lp_Search";
import LpValue from "./components/Lp_Value";

function App() {
return (
        <div className="container is-fluid">
            <LpForm />
            <LpSearch />
            <LpList />
            <LpValue />
        </div>
    )
}
export default App;
