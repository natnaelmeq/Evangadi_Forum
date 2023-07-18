import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<App />
	</UserProvider>
);

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider } from "./context/UserContext.jsx";
// import App from "./App";

// const Root = () => {
//   return (
//     <Router>
//       <UserProvider>
//         <Routes>
//           <Route path="/" element={<App />} />
//         </Routes>
//       </UserProvider>
//     </Router>
//   );
// };

// export default Root;
