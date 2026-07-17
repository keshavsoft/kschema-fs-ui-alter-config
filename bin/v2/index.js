import getConfig from "./getConfig.js";
import getAllJsons from "./getAllJsons.js";

const startFunc = ({ toPath, configPath, inTargetPath, showLog = true,
    inPort, inAction
}) => {
    //toPath and inTargetPath are both needed as they will replace one another for end point generation
    switch (inAction) {
        case "Crud":

            const columnsConfig = getConfig({ configPath });


            // Usage
            const jsonPaths = getJsonFiles(toPath);
            console.log(jsonPaths);

            break;

        default:

            break;
    };

    return true;
};

export default startFunc;