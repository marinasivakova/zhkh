import { observer } from "mobx-react-lite";
import Table from "./components/Table/Table";
import { store } from "./main";
import { Title } from "./styles/styles";
import LoadingPage from "./components/LoadingPage/LoadingPage";

const App = observer(() => {
  return (
    <div>
      <div className="App">
        {store.isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Title>Список счетчиков</Title>
            <Table trackers={store.trackerStore.Trackers} />
          </>
        )}
      </div>
    </div>
  );
});

export default App;