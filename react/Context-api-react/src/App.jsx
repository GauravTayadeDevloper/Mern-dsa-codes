import "./App.css";
import LanguageProvider from "./Context/LanguageProvider";
import Greetting from "./Components/Greeting";
import NotificationBar from "./Components/NotificationBar";
import NotificationControls from "./Components/NotificationControls";
import NotificationProvider from "./Context/NotificationProvider";
import SortProvider from "./Context/SortProvider";
import ViewProvider from "./Context/ViewProvider";
import FilterPanel from "./Components/FilterPanel";
function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <LanguageProvider>
          <Greetting />
        </LanguageProvider>
        <NotificationProvider>
          <NotificationBar/>
          <NotificationControls/>
        </NotificationProvider>

            <SortProvider>
      <ViewProvider>
        <FilterPanel />
      </ViewProvider>
    </SortProvider>
      </div>
    </div>
  )
}

export default App;