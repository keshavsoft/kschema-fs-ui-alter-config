import getConfig from "./getConfig.js";
import { getJsonFilesNeeded } from "./getAllJsons.js";
import alterConfig from "./alterConfig.js";

const startFunc = ({ toPath, configPath, inAction
}) => {
    switch (inAction) {
        case "Crud":
            const columnsConfig = getConfig({ configPath });

            const jsonPaths = getJsonFilesNeeded(toPath);

            alterConfig({ inColumnsConfig: columnsConfig, inFilePaths: jsonPaths });

            break;

        default:

            break;
    };

    return true;
};

export default startFunc;