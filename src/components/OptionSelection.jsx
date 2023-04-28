import React from "react";

export default function OptionSelection({arrayItems, selectOption}){
    return (
        <>
            <div class="title"><h1>ChatHead</h1></div>
            <div className="grid-main">
                {arrayItems.map((item)=>{
                    return (
                        <div className="grid-child" onClick={() => selectOption(item.option)}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}