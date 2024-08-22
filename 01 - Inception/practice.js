

const momNdad = 
                React.createElement("div",{id: "Dad"},
                     React.createElement("div",{id: "Mom"}, 
                          [React.createElement("h1",{id: "Shubh"}, "My first name is Shubh"),
                          React.createElement("h1",{id: "Biswas"}, "My last name is Shalakha")]
     )
);

const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(momNdad)
