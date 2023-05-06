import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/ActionComps/Button';
import Title from '../../components/ActionComps/Title';
import TextInput from '../../components/ActionComps/TextInput';
import Contain from '../../components/ActionComps/Contain';
import Image from '../../components/ActionComps/Image';
import Loading from '../../components/ActionComps/Loading';
import Switch from '../../components/ActionComps/Switch';
function ActionPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const screenIndex = searchParams.get('screenIndex');
    const index = searchParams.get('index');
    const contain_index = searchParams.get('contain_index');
    const { myScreens } = useSelector((state) => state.screen);
    let data = myScreens[screenIndex].lastDroppedItem[index];
    if (contain_index !== 'undefined') {
        data =
            myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
    }
    const { priviteName, name, actions } = data;

    return (
        <div>
            <button
                className="page_button mt-3 ms-3"
                onClick={() => navigate('/')}
            >
                {'<- Tasarım'}
            </button>
            <p className="action_page_title">
                Hello, you chose{' '}
                <span className="action_page_priviteName">{priviteName}</span>
            </p>
            <div className="action_page_body">
                {name === 'Button' ? (
                    <Button
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : name === 'Title' ? (
                    <Title
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : name === 'Text Input' ? (
                    <TextInput
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : name === 'Image' ? (
                    <Image
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : name === 'Contain' ? (
                    <Contain
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : name === 'Loading' ? (
                    <Loading
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : name === 'Switch' ? (
                    <Switch
                        actions={actions}
                        screenIndex={screenIndex}
                        index={index}
                        contain_index={contain_index}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default ActionPage;
