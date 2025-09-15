
import './Card.css';

import React from 'react';

const Card = () => {
    return (
        <div className="body">
             <div className="card-row">
            <div class="card">
                <div class="imgBx">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80" />
                </div>
                <div class="content">
                    <div class="details">
                        <h2> Alina Smith <br /> <span>Senior UX/UI Designer</span></h2>
                        <div class="data">
                            <h3>342 <br /><span>Posts</span></h3>
                            <h3>120k<br /><span>Followers</span></h3>
                            <h3>285<br /><span>Following</span></h3>
                        </div>
                        <div class="actionBtn">
                            <button>Follow</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div class="card">
                <div class="imgBx">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" />
                </div>
                <div class="content">
                    <div class="details">
                        <h2> Mina Bharadiya <br /> <span> UX/UI Designer</span></h2>
                        <div class="data">
                            <h3>342 <br /><span>Posts</span></h3>
                            <h3>120k<br /><span>Followers</span></h3>
                            <h3>285<br /><span>Following</span></h3>
                        </div>
                        <div class="actionBtn">
                            <button>Follow</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div class="card">
                <div class="imgBx">
                    <img src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" />
                </div>
                <div class="content">
                    <div class="details">
                        <h2> Asha Bharadiya <br /> <span>FullStack-Developer</span></h2>
                        <div class="data">
                            <h3>342 <br /><span>Posts</span></h3>
                            <h3>120k<br /><span>Followers</span></h3>
                            <h3>285<br /><span>Following</span></h3>
                        </div>
                        <div class="actionBtn">
                            <button>Follow</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;
