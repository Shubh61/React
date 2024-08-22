/**
 * 
 * <div id="parent">
 *    <div id="child">
 *          <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 * 
 * React element is an object that becomes an HTML tag that the browser understands
 */

const parent = 
            React.createElement("div",{id: "parent"},
                  React.createElement("div", {id: "child"}), 
                        React.createElement("h1", {},"I'm h1 tag")
  );
  
  console.log(parent)  // Returns an object 
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(parent)