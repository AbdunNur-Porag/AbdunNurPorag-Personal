// app.js
function HomeActivity() {
  return (
    <div>
      <AppBar>
        <AppBarBody></AppBarBody>
      </AppBar>
      <h2>This is Home Activity</h2>
      <button onClick={() => routeTo('main')}>Go Main</button>
    </div>
  );
}

function MainActivity() {
  return (
    <div>
      <h2>This is Main Activity</h2>
      <button onClick={() => routeTo('home')}>Go Home</button>
      <button onClick={() => routeTo('settings')}>Go Settings</button>
    </div>
  );
}

function SettingsActivity() {
  return (
    <div>
      <h2>This is Settings Activity</h2>
      <button onClick={() => routeTo('main')}>Go Main</button>
    </div>
  );
}

// Configure router
router.config({
  home: <HomeActivity />,
  main: <MainActivity />,
  settings: <SettingsActivity />,
  default: <MainActivity />
});
