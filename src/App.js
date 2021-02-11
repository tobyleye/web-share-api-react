import ShareButton from "./ShareButton";
import ShareModal from "./ShareModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ShareButton
        title="Follow me on twitter"
        text="Hey there, follow me on twitter"
        url="https://twitter.com/o__toby"
        fallback={({ title, url, isOpen, close }) => (
          <ShareModal title={title} url={url} isOpen={isOpen} onClose={close} />
        )}
      />
    </div>
  );
}

export default App;
