export const SortAndFilterButtons = ({handleSort})=>{
    return (
        <div>
                <select style={{
                    backgroundColor: "white",
                    border: "1px solid indianred",
                    width: "70px",
                    height: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "indianred"
                }} name="" id=""
                onClick={() => handleSort("country", 1)}>
                    <option value="">Select</option>
                    <option value="owner">Owner</option>
                    <option value="tenant">Tenant</option>
                </select>


                <button style={{
                    marginLeft: "20px",
                    backgroundColor: "white",
                    border: "1px solid indianred",
                    width: "120px",
                    height: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "indianred"
                }} 
                onClick={() => handleSort("flatNo", 1)}>Asc Flat No</button>
                <button style={{
                    marginLeft: "20px",
                    backgroundColor: "white",
                    border: "1px solid indianred",
                    width: "120px",
                    height: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "indianred"
                }}
                onClick={() => handleSort("flatNo", -1)}>Des Flat No</button>
            </div>
    )
}