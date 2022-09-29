import React from "react";
import './styles.scss';

class Main extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className="logo" title="Max Grape"></div>
                </header>
                <div className="elements">
                    <div className="element">
                        <a href="http://vk.com/keyboardgame" target="_blank">
                            <div className="image keyboard" title="Keyboardgame"></div>
                        </a>
                        <div>Игра "Собери Клаву" для ВКонтакте</div>
                    </div>
                    <div className="element">
                        <a href="http://vk.com/15game" target="_blank">
                            <div className="image barleybreak" title="15game"></div>
                        </a>
                        <div>Игра "Пятнашки Классические" для ВКонтакте</div>
                    </div>
                </div>
                <footer>
                    <div>mg &copy; 2007 &ndash; <span id="year">{new Date().getFullYear()}</span></div>
                </footer>
            </div>
        )
    }
}

export default Main;
