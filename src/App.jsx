import { useState } from 'react';
import './App.scss';

function App() {
  const [screen, setScreen] = useState('usedWebsites');
  const changeScreen = (screenName) => {
    setScreen(screenName);
  };

  return (
    <div className='App'>
      <div className='view_time_wrapper'>

        <div className='button_container'>
          <input type='radio' name='view' id='view_today' className='no_display' />
          <label className='button_click' htmlFor='view_today'>Today</label>
        </div>


        <div className='button_container'>
          <input type='radio' name='view' id='view_30_days' className='no_display' />
          <label className='button_click' htmlFor='view_30_days'>Last 30 days</label>
        </div>

      </div>
      <div className='screen_container'>
        <div className='screen_empty'></div>
        <div className='screen'>
          {screen === 'usedWebsites' &&
            <>
              <div className='page_title'>
                <h1>Most Used Websites</h1>
                <div className='page_next'>

                  <span className='websites_arrow_left' />
                  <span className='websites_arrow_right' onClick={() => changeScreen('socialMedia')}></span>
                </div>
              </div>
              <div className='screen_content_container'>
                <ul className='screen_content'>
                  <li className='website_list'>

                    <span className='website_icon' ></span>
                    <span className='website_name'>gmail.com</span>
                    <span className='time_spent'>1h 32m</span>
                  </li>
                  <li className='website_list'>
                    <span className='website_icon' ></span>
                    <span className='website_name'>youtube.com</span>
                    <span className='time_spent'>44m</span>
                  </li>
                  <li className='website_list'>
                    <span className='website_icon' ></span>
                    <span className='website_name'>bbc.com</span>
                    <span className='time_spent'>56m</span>
                  </li>
                  <li className='website_list'>
                    <span className='website_icon' ></span>
                    <span className='website_name'>youtube.com</span>
                    <span className='time_spent'>44m</span>
                  </li>
                  <li className='website_list'>
                    <span className='website_icon' ></span>
                    <span className='website_name'>bbc.com</span>
                    <span className='time_spent'>56m</span>
                  </li>
                </ul>
              </div>
            </>
          }
          {
            screen === 'socialMedia' &&
            <>
              <div className='page_title'>
                <h1>Most Used Social Apps</h1>
                <div className='page_next'>

                  <span className='social_arrow_left' onClick={() => changeScreen('usedWebsites')}></span>
                  <span className='social_arrow_right' />
                </div>
              </div>
              <div className='screen_content_container'>
                <ul className='screen_content'>
                  <li className='website_list'>
                    <div className='app_logo'>f</div>
                    <span className='website_name'>Facebook</span>
                    <span className='time_spent'>1h 32m</span>
                  </li>
                  <li className='website_list'>
                    <div className='app_logo'>t</div>
                    <span className='website_name'>Twitter</span>
                    <span className='time_spent'>45m</span>
                  </li>
                  <li className='website_list'>
                    <div className='app_logo'>s</div>
                    <span className='website_name'>Snapchat</span>
                    <span className='time_spent'>56m</span>
                  </li>
                  <li className='website_list'>
                    <div className='app_logo'>t</div>
                    <span className='website_name'>Tik Tok</span>
                    <span className='time_spent'>2h 32m</span>
                  </li>
                  <li className='website_list'>
                    <div className='app_logo'>i</div>
                    <span className='website_name'>Instagram</span>
                    <span className='time_spent'>34m</span>
                  </li>
                </ul>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;