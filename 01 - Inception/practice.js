

const momNdad = 
                React.createElement("div",{id: "Dad"},
                     React.createElement("div",{id: "Mom"}, 
                          [React.createElement("h1",{id: "Shubh"}, "My name is Shubh"),
                          React.createElement("h1",{id: "Shalakha"}, "My name is Shalakha")]
     )
);

const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(momNdad)
