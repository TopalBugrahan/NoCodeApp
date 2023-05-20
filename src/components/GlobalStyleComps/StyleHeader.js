import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import StyleSelect from './StyleSelect';
import { addGlobalStyle } from '../../redux/Screen/ScreenSlice';
import { useNavigate, useParams } from 'react-router-dom';

function StyleHeader() {
    const [select, setSelect] = useState('Button');
    const [styleName, setStyleName] = useState();
    const dispatch = useDispatch();
    const buttonPopUp = () => {
        return <button className="style_header_button">Add Style</button>;
    };

    const navigate = useNavigate();
    const {projectId} = useParams();

    return (
        <div className="style_header">
            <button
                className="page_button me-auto"
                onClick={() => navigate(`/design_page/${projectId}`)}
            >
                {'<- Tasarım'}
            </button>
            <Popup trigger={buttonPopUp} modal nested>
                {(close) => (
                    <div className="modal">
                        <button
                            className="close"
                            onClick={() => {
                                setSelect('Button');
                                close();
                            }}
                        >
                            &times;
                        </button>
                        <div className="popup_header">Create A New Style</div>
                        <div className="popup_content">
                            <div className="popup_row">
                                <div className="popup_title">Style Name</div>
                                <input
                                    onChange={(e) => {
                                        setStyleName(e.target.value);
                                    }}
                                    className="popup_input"
                                    type="text"
                                />
                            </div>
                            <div className="popup_row">
                                <div className="popup_title">Style Name</div>
                                <div style={{ width: '160px' }}>
                                    <StyleSelect setSelect={setSelect} />
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <button
                                className="popup_button"
                                onClick={() => {
                                    setSelect('Button');
                                    dispatch(
                                        addGlobalStyle({ select, styleName })
                                    );
                                    close();
                                }}
                            >
                                Add Style
                            </button>
                            <button
                                className="popup_button"
                                onClick={() => {
                                    setSelect('Button');
                                    close();
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default StyleHeader;
