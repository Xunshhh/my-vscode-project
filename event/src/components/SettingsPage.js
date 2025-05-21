import React, { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notificationsEnabled: true,
    privacyEnabled: false,
    darkMode: false,
  });

  const [saveStatus, setSaveStatus] = useState('');

  // Handle toggling a setting
  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault();
    // Simulate system configuration sync
    setSaveStatus('Syncing settings to firmware...');
    setTimeout(() => {
      setSaveStatus('Settings successfully saved to local device memory.');
      console.log('CPESS Log: Settings Written =>', settings);
    }, 1000);
  };

  return (
    <div className="container mt-4 p-4 border rounded shadow-sm bg-light">
      <h2 className="mb-4">System Control Panel</h2>

      <form onSubmit={handleSave}>
        {/* Notifications */}
        <div className="mb-3">
          <label className="form-label fw-bold">🛎️ Notifications Module</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={settings.notificationsEnabled}
              onChange={() => handleToggle('notificationsEnabled')}
              id="notificationsToggle"
            />
            <label className="form-check-label" htmlFor="notificationsToggle">
              Enable Real-Time Alerts
            </label>
          </div>
          <small className="form-text text-muted">Toggle system-wide notification interrupts.</small>
        </div>

        {/* Privacy */}
        <div className="mb-3">
          <label className="form-label fw-bold">🔐 Privacy Protocol</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={settings.privacyEnabled}
              onChange={() => handleToggle('privacyEnabled')}
              id="privacyToggle"
            />
            <label className="form-check-label" htmlFor="privacyToggle">
              Activate Profile Obfuscation
            </label>
          </div>
          <small className="form-text text-muted">Hide user metadata from external modules.</small>
        </div>

        {/* Dark Mode */}
        <div className="mb-3">
          <label className="form-label fw-bold">🖥️ UI Appearance</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
              id="darkModeToggle"
            />
            <label className="form-check-label" htmlFor="darkModeToggle">
              Enable Terminal (Dark) Mode
            </label>
          </div>
          <small className="form-text text-muted">Optimize for low-power LCD displays.</small>
        </div>

        {/* Save Button */}
        <button type="submit" className="btn btn-primary mt-3">Write Config to Memory</button>

        {/* Save Status */}
        {saveStatus && <p className="mt-3 text-success fw-semibold">{saveStatus}</p>}
      </form>
    </div>
  );
};

export default SettingsPage;
