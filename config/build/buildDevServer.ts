import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        // автоматически открывает станицу с нашим приложением
        open: true,
        // Позволяет прокси-запросы через указанную страницу индекса 
        //(по умолчанию 'index.html'), полезная для одностраничных приложений,
        // которые используют API истории HTML5.
        historyApiFallback: true,
    }
}