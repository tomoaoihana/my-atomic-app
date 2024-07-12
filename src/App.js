// import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { UserProvider } from "./providers/UserProvider";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
