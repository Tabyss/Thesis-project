import React from "react";
import iconimg from "../../img/domain-icon.svg"
import "./fitur.scss";

function Fitur() {
    return (
        <div className="fitur">
            <div className="container">
                <div className="fitur-header">
                    <h1 className="title">FITUR</h1>
                    <h1 className="title">KARTUNIKAH</h1>
                </div>
                <div className="fitur-list">
                    <div className="fitur-card">
                        <div className="fitur-card-img">
                            <img src={iconimg} alt="" className="fitur-icon" />
                        </div>
                        <div className="fitur-name">Custom Domain</div>
                    </div>
                    <div className="fitur-card">
                        <div className="fitur-card-img">
                            <img src={iconimg} alt="" className="fitur-icon" />
                        </div>
                        <div className="fitur-name">Custom Domain</div>
                    </div>
                    <div className="fitur-card">
                        <div className="fitur-card-img">
                            <img src={iconimg} alt="" className="fitur-icon" />
                        </div>
                        <div className="fitur-name">Custom Domain</div>
                    </div>
                    <div className="fitur-card">
                        <div className="fitur-card-img">
                            <img src={iconimg} alt="" className="fitur-icon" />
                        </div>
                        <div className="fitur-name">Custom Domain</div>
                    </div>
                    <div className="fitur-card">
                        <div className="fitur-card-img">
                            <img src={iconimg} alt="" className="fitur-icon" />
                        </div>
                        <div className="fitur-name">Custom Domain</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fitur;