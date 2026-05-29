import React from 'react';
import './SocialLoginButtons.scss';

const SocialLoginButtons = () => {
  const handleGoogleLogin = () => {
    alert("Google OAuth flow initiated");
  };

  const handleGithubLogin = () => {
    alert("GitHub OAuth flow initiated");
  };

  return (
    <div className="social-login">
      <div className="divider">
        <span>Or continue with</span>
      </div>
      <div className="social-buttons">
        <button type="button" className="btn-social btn-google" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" height="20" />
          <span>Google</span>
        </button>
        <button type="button" className="btn-social btn-github" onClick={handleGithubLogin}>
          <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" width="20" height="20" />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;
