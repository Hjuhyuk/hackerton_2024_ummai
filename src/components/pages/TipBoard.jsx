import React from "react";
import '../styles/TipBoard.css';
import { useNavigate } from "react-router-dom";

function TipBoard() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleWritingClick = () => {
        navigate("/writing"); // '/writing' 경로로 이동
    }

    return(
        
        <div className="container">
            <div className="topBar">
                Tip Boarder
            </div>

            <div className="tipBox">
                <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="tipBox">
            <p>first tip</p>
                <p>asljdfl;kasdjkl;dfjalksjfdljaskfdj;lasjdf;klja
                    s;lkjf;kasngv;oinawrio;fg;anskdnk;asnfd;kjasl;kfjl;j</p>
            </div>

            <div className="writingBox" onClick={handleWritingClick}>
                Writing
            </div>
        </div>
    )   
}

export default TipBoard;