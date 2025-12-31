import React from "react";

const Assignment1 = React.memo(({onSave,onExport,onPrint})=>
{
    return(
        <div>
            <button onClick={onSave}>Save</button>
            <button onClick={onExport}>Export</button>
            <button onClick={onPrint}>Print</button>
            
        </div>
    )
}
)
export default Assignment1;