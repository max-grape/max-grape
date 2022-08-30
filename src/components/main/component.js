import React from "react";
import './styles.scss';

class Main extends React.Component {

    yandexMetrika = (d, w, c) => {
        (w[c] = w[c] || []).push(function () {
            try {
                w.yaCounter19763221 = new Ya.Metrika({
                    id: 19763221,
                    webvisor: true,
                    clickmap: true,
                    accurateTrackBounce: true
                });
            } catch (e) {
            }
        });
        var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
            n.parentNode.insertBefore(s, n);
        };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    }

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
                <script type="text/javascript">{this.yandexMetrika(document, window, "yandex_metrika_callbacks")}</script>
                <noscript>
                    <div><img src="//mc.yandex.ru/watch/19763221" style="position:absolute; left:-9999px;" alt="" /></div>
                </noscript>
            </div>
        )
    }
}

export default Main;
